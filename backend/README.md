# Backend do Agente OAZ (FastAPI)

API que faz **RAG + guardrails + cache semântico** e chama o LLM (Gemini/Groq)
com fallback automático. Também transcreve áudio (Whisper/Gemini).

## Rodar localmente

```bash
cd "22. OAZ Web Agent/backend"
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # preencha GEMINI_API_KEY e/ou GROQ_API_KEY
uvicorn app.main:app --reload --port 8000
```

> Sem chaves de API o servidor **ainda sobe** e o RAG funciona em modo local
> (embeddings por hash, só para não quebrar em dev), mas as respostas do LLM
> exigem pelo menos uma chave. Pegue grátis:
> - Gemini: https://aistudio.google.com/apikey
> - Groq: https://console.groq.com/keys

## Testar

```bash
curl -s localhost:8000/health

curl -s localhost:8000/chat -H 'Content-Type: application/json' \
  -d '{"message":"Qual o valor do frete grátis?","history":[]}' | jq

# áudio -> transcreve e responde
curl -s localhost:8000/voice -F audio=@pergunta.webm | jq
```

## Estrutura

| Arquivo | Papel |
|---|---|
| `app/config.py` | lê `.env` (chaves, limites, CORS) |
| `app/providers.py` | Gemini + Groq (chat, embeddings, transcrição) com fallback |
| `app/rag.py` | busca na base (`local` JSON ou `supabase` pgvector) |
| `app/guardrails.py` | system prompt, saúde/ANVISA, fallback humano, moderação |
| `app/cache.py` | cache semântico (segura volume) |
| `app/main.py` | endpoints FastAPI (`/chat`, `/transcribe`, `/voice`) |

## Apontar o widget para este backend

No site, troque a config do widget:

```html
<script>
  window.OAZ_AGENT_CONFIG = {
    mode: "api",
    backendUrl: "https://SEU-BACKEND/chat",
    channelsUrl: "https://www.oaz.vc"
  };
</script>
```

Deploy e limites de volume: veja `../docs/07-deploy-backend.md` e
`../docs/02-llm-e-volume.md`.
