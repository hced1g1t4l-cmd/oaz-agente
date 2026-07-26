# Agente OAZ — Assistente Virtual do site

Assistente virtual para o site da **OAZ** (marca de higiene e cuidado pessoal da
Eurofarma, loja VTEX em [oaz.vc](https://www.oaz.vc)). Um **logo no canto
inferior direito**: ao passar o mouse mostra *"Posso te ajudar?"*, ao clicar
abre um **painel de chat lateral**. O usuário pode **escrever ou falar por
áudio**; o agente responde **em texto**, com base no conteúdo do site, e
**encaminha para o atendimento humano** o que não souber — sempre com
**guardrails** (importante por ser marca farmacêutica).

> ## ▶️ Demo ao vivo (site fake para testar)
> **https://hced1g1t4l-cmd.github.io/oaz-agente/**
>
> É uma **réplica fake da OAZ** criada só para você testar o widget. Ele roda em
> **modo demo** (responde no próprio navegador, sem backend nem chave de API).
> Clique no botão verde no canto inferior direito e experimente.

> ⚠️ **Aviso:** todo o conteúdo da base de conhecimento é **ilustrativo**,
> montado a partir de informações públicas do site. O time da OAZ deve
> **revisar, corrigir e completar** antes de usar em produção.

---

## Índice

1. [O que este projeto entrega](#o-que-este-projeto-entrega)
2. [Estrutura do repositório](#estrutura-do-repositório)
3. [Testar agora (modo demo)](#testar-agora-modo-demo)
4. [Colocar em produção (visão rápida)](#colocar-em-produção-visão-rápida)
5. [A pergunta do volume: dá para aguentar muita conversa de graça?](#a-pergunta-do-volume)
6. [Documentação completa](#documentação-completa)
7. [Stack e por que foi escolhida](#stack-e-por-que-foi-escolhida)
8. [Checklist para o time da OAZ](#checklist-para-o-time-da-oaz)

---

## O que este projeto entrega

- ✅ **Widget** embutível (JS puro) com logo, tooltip, painel lateral, texto e áudio.
- ✅ **Site fake** da OAZ para testar o widget de ponta a ponta (a demo acima).
- ✅ **Backend** FastAPI de produção: RAG + guardrails + cache semântico + LLM
  (Gemini/Groq com fallback) + transcrição de áudio.
- ✅ **Ingestão** do catálogo VTEX e schema pgvector para o RAG.
- ✅ **Documentação** completa em `/docs` (arquitetura, volume, RAG, guardrails,
  áudio, deploy, custos, LGPD/ANVISA).

## Estrutura do repositório

```
oaz-agente/
├── index.html / site.css / site.js   # SITE FAKE (testbed + demo do GitHub Pages)
├── widget/
│   ├── oaz-agent.js                   # widget embutível (a "solução")
│   ├── oaz-agent.css
│   └── oaz-kb.js                      # base de conhecimento do MODO DEMO
├── backend/                           # API de produção (FastAPI)
│   ├── app/{main,rag,guardrails,cache,providers,config}.py
│   ├── requirements.txt · .env.example · README.md
├── ingestion/                         # coleta de conteúdo p/ o RAG
│   ├── ingest_vtex.py · build_index.py
│   ├── supabase_schema.sql · knowledge_base.json
└── docs/                              # documentação (01 a 09)
```

## Testar agora (modo demo)

**Mais fácil:** abra a [demo ao vivo](https://hced1g1t4l-cmd.github.io/oaz-agente/).

**Local:**

```bash
git clone https://github.com/hced1g1t4l-cmd/oaz-agente.git
cd oaz-agente
python3 -m http.server 8777
# abra http://localhost:8777  e clique no botão verde
```

Perguntas para testar: *"Qual o valor do frete grátis?"*, *"Tem cupom de
desconto?"*, *"Quais protetores solares vocês têm?"*, *"Posso usar o repelente
em grávida?"* (veja o guardrail de saúde disparar).

## Colocar em produção (visão rápida)

1. **Ingerir conteúdo**: `ingestion/ingest_vtex.py` puxa o catálogo (doc 03).
2. **Subir o backend** com uma chave grátis do Gemini e/ou Groq (doc 07).
3. **Embutir o widget** no tema VTEX em modo `api`, apontando para o backend
   (doc 06):

```html
<script>
  window.OAZ_AGENT_CONFIG = { mode: "api", backendUrl: "https://SEU-BACKEND/chat" };
</script>
<link rel="stylesheet" href="/widget/oaz-agent.css">
<script defer src="/widget/oaz-agent.js"></script>
```

## A pergunta do volume

**Sim, dá para aguentar bastante conversa começando de graça.** O segredo é
arquitetura, não um modelo gigante:

- **Cache semântico** responde perguntas repetidas sem chamar o LLM (corta
  60–80% das chamadas).
- **Backend stateless** escala horizontalmente.
- **Fallback Gemini↔Groq** soma os free tiers.

Detalhes e estimativas em [`docs/02-llm-e-volume.md`](docs/02-llm-e-volume.md).

## Documentação completa

| # | Documento | Assunto |
|---|---|---|
| 01 | [Arquitetura](docs/01-arquitetura.md) | como as peças se encaixam |
| 02 | [LLM e volume](docs/02-llm-e-volume.md) | modelos, concorrência, free tier |
| 03 | [RAG e ingestão](docs/03-rag-ingestao.md) | base de conhecimento + VTEX + pgvector |
| 04 | [Guardrails](docs/04-guardrails.md) | escopo, saúde, fallback humano |
| 05 | [Áudio](docs/05-audio.md) | falar → transcrever → responder |
| 06 | [Widget / embed](docs/06-widget-embed.md) | instalar no site/VTEX |
| 07 | [Deploy do backend](docs/07-deploy-backend.md) | Render/Fly/Docker |
| 08 | [Custos e limites](docs/08-custos-limites.md) | o que é grátis e quando paga |
| 09 | [LGPD e ANVISA](docs/09-lgpd-anvisa.md) | conformidade (marca farmacêutica) |

## Stack e por que foi escolhida

| Camada | Escolha | Motivo |
|---|---|---|
| Widget | Vanilla JS | zero dependência, cola em qualquer site/VTEX |
| LLM | Gemini 2.5 Flash + Groq | grátis, rápido, multimodal (áudio) |
| Áudio | Whisper (Groq) / Gemini | transcrição grátis e rápida |
| RAG | JSON local (dev) / Supabase pgvector (prod) | atualiza sem retreinar |
| Backend | FastAPI | stateless, escala fácil |
| Hospedagem | Render/Cloudflare/Supabase | free tiers |

## Checklist para o time da OAZ

- [ ] Revisar e corrigir `ingestion/knowledge_base.json` (conteúdo ilustrativo).
- [ ] Rodar a ingestão do catálogo VTEX real (doc 03).
- [ ] Definir os canais de atendimento oficiais (`CHANNELS_URL`).
- [ ] Validar system prompt e disclaimers com regulatório/compliance (doc 09).
- [ ] Criar chaves Gemini/Groq e subir o backend (doc 07).
- [ ] Ajustar cor/ícone do widget à identidade OAZ (doc 06).
- [ ] Restringir CORS ao domínio oficial e ativar rate limit.

---

*Projeto de referência para acelerar o time. Não é o site oficial da OAZ.*
