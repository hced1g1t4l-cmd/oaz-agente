# 08 · Custos e limites

## Resumo: começa 100% grátis

| Componente | Serviço | Free tier | Quando paga |
|---|---|---|---|
| LLM (texto) | Gemini Flash / Groq | Sim, generoso | volume alto sustentado |
| Áudio (transcrição) | Groq Whisper / Gemini | Sim | idem |
| Base vetorial | Supabase (pgvector) | Sim | acima de ~500MB/limites |
| Backend | Render / Fly / Railway | Sim | mais instâncias/uptime |
| Widget/estáticos | Cloudflare Pages / Vercel | Sim | praticamente nunca |
| Cache | memória (dev) / Upstash | Sim | volume muito alto |

## O que consome cota

- **Cada chamada ao LLM** conta no free tier do provedor (req/min e req/dia).
- **Embeddings** (RAG e cache) também contam, mas são baratíssimos.
- **Transcrição** conta por minuto de áudio.

## Como ficar no grátis por mais tempo

1. **Cache semântico** (doc 02) — maior economia.
2. **Respostas curtas** (`maxOutputTokens` baixo).
3. **Fallback Gemini↔Groq** — soma os free tiers.
4. **RAG enxuto** — top-K pequeno (`RETRIEVE_TOP_K=4`) = prompts menores.

## Ordem de grandeza de custo pago

Quando/if migrar para billing, modelos Flash custam **frações de centavo de
real por conversa**. Uma loja de e-commerce média fica em custo muito baixo
mesmo pagando. Reavalie os preços vigentes dos provedores antes de projetar.

## Sinais de que é hora de pagar

- Erros de rate-limit recorrentes no pico mesmo com cache.
- Fila/latência subindo no horário de maior tráfego.
- Necessidade de SLA/uptime garantido (sair do free do host).
