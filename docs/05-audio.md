# 05 · Áudio (falar → transcrever → responder em texto)

O usuário toca no microfone, fala, e o agente **responde em texto**.

## Em produção (recomendado): transcrição no servidor

1. O widget grava com a **MediaRecorder API** (nativa do navegador).
2. Envia o arquivo para o backend:
   - `POST /transcribe` → só o texto, ou
   - `POST /voice` → transcreve **e** já responde.
3. A transcrição usa, por ordem de disponibilidade:
   - **Groq Whisper** (`whisper-large-v3-turbo`) — rápido e grátis no free tier.
   - **Gemini** com áudio inline — alternativa multimodal.
4. O texto transcrito entra no mesmo pipeline (RAG + guardrails) e volta em
   texto.

Código: `app/providers.py` → `transcribe()`; endpoints em `app/main.py`.

## No modo demo (site de teste)

Para funcionar **sem backend**, o widget usa a **Web Speech API**
(`webkitSpeechRecognition`) do próprio navegador, em `pt-BR`. Limitações:
- Só funciona em navegadores compatíveis (Chrome/Edge; Safari é limitado).
- É só para testar a UX. A produção usa o servidor (mais preciso e universal).

## Enviar áudio do widget para o backend (produção)

Trecho de referência para o time (substitui a Web Speech API no modo `api`):

```js
const rec = new MediaRecorder(stream);
const chunks = [];
rec.ondataavailable = e => chunks.push(e.data);
rec.onstop = async () => {
  const blob = new Blob(chunks, { type: "audio/webm" });
  const fd = new FormData();
  fd.append("audio", blob, "pergunta.webm");
  const r = await fetch(BACKEND + "/voice", { method: "POST", body: fd });
  const data = await r.json(); // {reply, source}
};
```

## Privacidade

Áudio é dado pessoal. Trate conforme a LGPD (ver doc 09): não armazene o áudio
além do necessário para transcrever, e informe o usuário.
