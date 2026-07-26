# 03 · RAG e ingestão de conteúdo

O agente responde **com base no conteúdo do site** (não inventa). Isso é feito
com RAG (Retrieval-Augmented Generation): busca os trechos relevantes e entrega
ao LLM com a instrução de responder só a partir deles.

## Base de conhecimento

Formato único (`ingestion/knowledge_base.json`), lista de **artigos**:

```json
{
  "id": "frete-gratis",
  "categoria": "compras",
  "titulo": "Frete grátis",
  "tags": ["frete", "entrega", "valor minimo"],
  "url": "https://www.oaz.vc",
  "conteudo": "O frete é grátis para todo o Brasil em compras acima de R$ 129,90..."
}
```

- **Produtos** vêm automaticamente do catálogo VTEX (`ingest_vtex.py`).
- **Institucionais** (frete, cupom, trocas, LGPD, atendimento, saúde) são
  **curados à mão** e preservados a cada reingestão.

## Passo 1 — Ingerir o catálogo VTEX

```bash
cd ingestion
python ingest_vtex.py --account <conta-vtex-da-oaz> --out knowledge_base.json
```

> Como descobrir a conta VTEX: abra o site, DevTools → Network, procure
> chamadas para `*.vtexcommercestable.com.br`. O subdomínio é a conta.

O script puxa nome, preço e descrição de cada produto e **mantém** os artigos
institucionais existentes.

## Passo 2 — Escolher o backend vetorial

### Dev / volume pequeno: `local`
`VECTOR_BACKEND=local` no `.env`. O backend lê o JSON e calcula similaridade em
memória. Zero infraestrutura.

### Produção: `supabase` (pgvector)
1. Crie um projeto grátis no Supabase.
2. Rode `ingestion/supabase_schema.sql` no SQL editor (cria tabela `artigos`,
   índice e a função `match_artigos`).
3. Gere os embeddings e faça upsert:

```bash
export GEMINI_API_KEY=...  SUPABASE_URL=...  SUPABASE_KEY=...
python build_index.py --in knowledge_base.json
```

4. No `.env` do backend: `VECTOR_BACKEND=supabase` + `SUPABASE_URL/KEY`.

## Passo 3 — Manter atualizado

Preços e produtos mudam. Agende a reingestão (cron diário/semanal):

```bash
python ingest_vtex.py --account <conta> && python build_index.py
```

## Como o RAG é usado no backend

`app/rag.py` → `retrieve(query)` devolve os top-K artigos com `score`.
`build_context()` monta o bloco que entra no prompt. Se o melhor score for
menor que `MIN_SIMILARITY`, o guardrail encaminha para atendimento humano
(ver doc 04).
