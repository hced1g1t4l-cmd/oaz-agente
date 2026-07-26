# 07 · Deploy do backend

O backend é FastAPI (ASGI). Qualquer host de container/Python serve. Abaixo, as
opções **gratuitas** mais simples.

## Opção A — Render (grátis, mais simples)

1. Suba `/backend` para um repositório.
2. New → Web Service → aponte para o repo.
3. Build: `pip install -r requirements.txt`
4. Start: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
5. Configure as variáveis de ambiente (do `.env.example`).

## Opção B — Fly.io / Railway

Mesma ideia; ambos têm free tier e detectam Python automaticamente. Use o mesmo
comando `uvicorn`.

## Opção C — Docker (qualquer lugar)

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app ./app
COPY ../ingestion/knowledge_base.json ./ingestion/knowledge_base.json
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Variáveis obrigatórias em produção

- `GEMINI_API_KEY` e/ou `GROQ_API_KEY`
- `ALLOWED_ORIGINS=https://www.oaz.vc` (CORS — restrinja ao domínio da loja!)
- `VECTOR_BACKEND=supabase` + `SUPABASE_URL`/`SUPABASE_KEY` (produção)
- `CHANNELS_URL` (link do atendimento)

## Checklist de produção

- [ ] CORS restrito ao domínio oficial.
- [ ] Cache semântico apontando para Redis/Upstash (não memória).
- [ ] Base vetorial no Supabase, reingestão agendada (cron).
- [ ] Rate limit por IP (ex.: via Cloudflare) para evitar abuso.
- [ ] Logs sem dados pessoais (ver doc 09 — LGPD).
- [ ] Monitoramento de erros e de rate-limit dos provedores.

## Hospedar o widget

`oaz-agent.js/.css` são estáticos: sirva via Cloudflare Pages, Vercel, ou junto
do backend. Aponte o `OAZ_AGENT_CONFIG.backendUrl` para a URL pública do
serviço.
