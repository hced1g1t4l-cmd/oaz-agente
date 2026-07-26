# 04 · Guardrails

Como a OAZ é uma marca **farmacêutica (Eurofarma)**, os guardrails não são
opcionais. O objetivo: responder bem sobre o site, **nunca** dar conselho
médico, e encaminhar para humano quando não souber.

## Camadas (em `app/guardrails.py`)

### 1. System prompt restritivo
Define o papel e as regras invioláveis:
- Responder **só com base no contexto** do RAG; nunca inventar preço/prazo/
  composição/promoção.
- Recusar assuntos fora do universo OAZ/e-commerce.
- **Nunca** diagnóstico, dosagem terapêutica, indicação médica ou alegação de
  cura.
- Não coletar dados sensíveis (CPF, dados de saúde, senhas).
- Assumir-se como assistente automatizado.

### 2. Detecção de tema de saúde → disclaimer obrigatório
Se a pergunta contém termos como *grávida, criança, alergia, reação, medicamento,
"posso usar"*, a resposta recebe automaticamente o aviso de que o agente **não
substitui um profissional de saúde**.

### 3. Baixa confiança → fallback humano
Se o melhor resultado do RAG fica abaixo de `MIN_SIMILARITY`, o agente não
"chuta": responde que não tem a informação com segurança e indica os **canais
de atendimento** (`CHANNELS_URL`).

### 4. Moderação de entrada
Bloqueio de padrões claramente indevidos (senha, número de cartão, conteúdo
impróprio). Em produção, plugar **Llama Guard** (Groq) ou **Gemini Safety
Settings** para moderação robusta de entrada e saída.

## O que ajustar

| Quero… | Onde |
|---|---|
| Mudar o tom / regras | `SYSTEM_PROMPT` em `guardrails.py` |
| Adicionar termos de saúde | lista `_HEALTH` |
| Trocar o texto do disclaimer | `_HEALTH_DISCLAIMER` |
| Mudar limiar de "não sei" | `MIN_SIMILARITY` no `.env` |
| Endereço do atendimento | `CHANNELS_URL` no `.env` |
| Moderação forte | ativar Llama Guard / Gemini Safety |

## No modo demo (widget)

O widget replica as regras principais no navegador (`oaz-agent.js`): detecção de
saúde, fallback por baixo score e disclaimer. É uma versão simplificada só para
**testar a experiência** — a verdade de produção é o backend.
