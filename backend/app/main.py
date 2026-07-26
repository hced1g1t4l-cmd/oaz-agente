"""API do Agente OAZ (FastAPI).

Endpoints:
  GET  /health        -> status
  POST /chat          -> {message, history[]} -> {reply, source, provider}
  POST /transcribe    -> multipart file 'audio' -> {text}
  POST /voice         -> multipart file 'audio' -> transcreve E responde

Rodar em dev:
  uvicorn app.main:app --reload --port 8000
"""
from __future__ import annotations

from typing import List, Optional

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from . import cache, guardrails, providers, rag
from .config import settings

app = FastAPI(title="Agente OAZ", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: List[ChatMessage] = []


class ChatResponse(BaseModel):
    reply: str
    source: Optional[dict] = None
    provider: Optional[str] = None
    cached: bool = False


@app.get("/health")
async def health():
    return {"ok": True, "primary": settings.llm_primary, "vector": settings.vector_backend}


async def answer(message: str, history: List[dict]) -> ChatResponse:
    # 1) guardrail de entrada
    if guardrails.input_blocked(message):
        return ChatResponse(
            reply="Não consigo ajudar com esse assunto. "
            f"Se precisar de suporte, fale com nosso atendimento: {settings.channels_url}"
        )

    # 1b) Política 4 — sigilo interno: nunca revelar configuração/lógica interna
    if guardrails.is_config_probe(message):
        return ChatResponse(reply=guardrails.CONFIG_PROBE_REPLY)

    # 2) cache semântico (segura volume)
    hit = await cache.get(message)
    if hit:
        reply, source = hit
        return ChatResponse(reply=reply, source=source, cached=True)

    # 3) RAG
    artigos = await rag.retrieve(message)

    # 4) baixa confiança -> encaminha para humano (+ disclaimer se for saúde)
    if guardrails.low_confidence(artigos):
        reply = guardrails.fallback_message()
        reply = guardrails.apply_output_guardrails(reply, message)
        return ChatResponse(reply=reply)

    # 5) monta prompt e chama o LLM (com fallback de provedor)
    context = rag.build_context(artigos)
    system = guardrails.SYSTEM_PROMPT + "\n\n=== CONTEXTO ===\n" + context
    msgs = [{"role": m["role"], "content": m["content"]} for m in history]
    msgs.append({"role": "user", "content": message})

    reply, provider = await providers.chat(system, msgs)
    reply = guardrails.apply_output_guardrails(reply, message)

    source = {"titulo": artigos[0]["titulo"], "url": artigos[0].get("url", "")}
    await cache.put(message, reply, source)
    return ChatResponse(reply=reply, source=source, provider=provider)


@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    return await answer(req.message, [m.model_dump() for m in req.history])


@app.post("/transcribe")
async def transcribe_endpoint(audio: UploadFile = File(...)):
    data = await audio.read()
    text = await providers.transcribe(data, audio.filename or "audio.webm")
    return {"text": text}


@app.post("/voice", response_model=ChatResponse)
async def voice_endpoint(audio: UploadFile = File(...)):
    data = await audio.read()
    text = await providers.transcribe(data, audio.filename or "audio.webm")
    return await answer(text, [])
