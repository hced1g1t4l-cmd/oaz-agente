# 02 · LLM e volume (aguentar muitas conversas ao mesmo tempo)

## A pergunta central

> "Dá para ter um modelo de LLM que aguente bastante volume de conversas, de
> graça e fácil de usar?"

**Sim.** O segredo não é um modelo gigante — é **arquitetura**. Um modelo
rápido e barato + as técnicas abaixo aguentam muito volume começando no free
tier.

## Modelos recomendados

| Provedor / modelo | Grátis | Velocidade | Áudio nativo | Observação |
|---|---|---|---|---|
| **Gemini 2.5 Flash / Flash-Lite** | Free tier generoso | Muito rápida | Sim | **Recomendado como principal.** Multimodal, barato ao escalar |
| **Groq — Llama 3.3 70B** | Free tier | A mais rápida | Não (usa Whisper) | Ótimo **fallback** e para latência mínima |
| Cerebras / OpenRouter (free) | Sim | Alta | Não | Fallback extra opcional |

Configuração no `.env`: `LLM_PRIMARY=gemini`, `LLM_FALLBACK=groq`.

## As 4 técnicas que seguram volume

### 1. Cache semântico (o mais importante)
Perguntas de e-commerce se repetem muito ("qual o frete grátis?"). O
`app/cache.py` guarda a resposta e a reaproveita para perguntas **parecidas**
(similaridade ≥ 0,92), **sem chamar o LLM**. Isso costuma cortar 60–80% das
chamadas. Em produção, use **Redis/Upstash** para o cache ser compartilhado
entre instâncias.

### 2. Backend stateless + auto-scaling
Sem estado em memória → várias instâncias em paralelo. Cloudflare Workers /
Render / Fly.io escalam por número de requisições.

### 3. Fallback entre provedores
`providers.chat()` tenta o primary e, se der rate-limit/erro, cai no fallback.
Assim você **soma os free tiers** de Gemini e Groq.

### 4. Streaming e respostas curtas
`maxOutputTokens` baixo + respostas objetivas = menos custo e mais throughput.
O widget já "digita" a resposta para dar sensação de rapidez.

## Estimativa de capacidade (ordem de grandeza)

- Free tier do Gemini Flash: dezenas de requisições por minuto.
- Com cache pegando ~70%, a capacidade efetiva multiplica.
- Somando Groq como fallback, você dobra o teto.
- **Conclusão:** o MVP e um volume moderado (uma loja de e-commerce média)
  cabem no grátis. Só migra para o tier pago (frações de centavo por conversa)
  quando o tráfego crescer — sem trocar de arquitetura.

## Quando pensar em pagar

- Rate limit sendo atingido no horário de pico mesmo com cache.
- SLA de latência mais rígido.
- Nesse ponto, ative billing no Gemini (continua barato) e/ou Groq pago.
