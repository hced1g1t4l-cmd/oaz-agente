"""Integração com provedores de LLM (Gemini / Groq).

Cada função tenta o provedor PRIMARY e, em caso de erro/rate-limit, cai
automaticamente no FALLBACK. Assim o teto do free tier de um provedor é
somado ao do outro — essencial para aguentar volume sem pagar no início.
"""
from __future__ import annotations

import base64
from typing import List, Optional, Tuple

import httpx

from .config import settings

GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta"
GROQ_BASE = "https://api.groq.com/openai/v1"
TIMEOUT = httpx.Timeout(30.0, connect=10.0)


# --------------------------------------------------------------------------- #
# Chat completion
# --------------------------------------------------------------------------- #
async def _gemini_chat(system: str, messages: List[dict]) -> str:
    if not settings.gemini_api_key:
        raise RuntimeError("GEMINI_API_KEY ausente")
    contents = []
    for m in messages:
        role = "user" if m["role"] == "user" else "model"
        contents.append({"role": role, "parts": [{"text": m["content"]}]})
    payload = {
        "systemInstruction": {"parts": [{"text": system}]},
        "contents": contents,
        "generationConfig": {"temperature": 0.2, "maxOutputTokens": 700},
    }
    url = f"{GEMINI_BASE}/models/{settings.gemini_model}:generateContent"
    async with httpx.AsyncClient(timeout=TIMEOUT) as c:
        r = await c.post(url, params={"key": settings.gemini_api_key}, json=payload)
        r.raise_for_status()
        data = r.json()
    return data["candidates"][0]["content"]["parts"][0]["text"].strip()


async def _groq_chat(system: str, messages: List[dict]) -> str:
    if not settings.groq_api_key:
        raise RuntimeError("GROQ_API_KEY ausente")
    msgs = [{"role": "system", "content": system}] + messages
    payload = {
        "model": settings.groq_model,
        "messages": msgs,
        "temperature": 0.2,
        "max_tokens": 700,
    }
    headers = {"Authorization": f"Bearer {settings.groq_api_key}"}
    async with httpx.AsyncClient(timeout=TIMEOUT) as c:
        r = await c.post(f"{GROQ_BASE}/chat/completions", json=payload, headers=headers)
        r.raise_for_status()
        data = r.json()
    return data["choices"][0]["message"]["content"].strip()


_CHAT = {"gemini": _gemini_chat, "groq": _groq_chat}


async def chat(system: str, messages: List[dict]) -> Tuple[str, str]:
    """Retorna (resposta, provedor_usado) com fallback automático."""
    order = [settings.llm_primary, settings.llm_fallback]
    last_err: Optional[Exception] = None
    for name in order:
        fn = _CHAT.get(name)
        if not fn:
            continue
        try:
            return await fn(system, messages), name
        except Exception as e:  # rate limit, chave ausente, timeout...
            last_err = e
            continue
    raise RuntimeError(f"Todos os provedores falharam: {last_err}")


# --------------------------------------------------------------------------- #
# Embeddings (para RAG). Usa Gemini; degrada para hash local se sem chave.
# --------------------------------------------------------------------------- #
async def embed(text: str) -> List[float]:
    if settings.gemini_api_key:
        url = f"{GEMINI_BASE}/models/{settings.gemini_embed_model}:embedContent"
        payload = {"content": {"parts": [{"text": text}]}}
        async with httpx.AsyncClient(timeout=TIMEOUT) as c:
            r = await c.post(url, params={"key": settings.gemini_api_key}, json=payload)
            r.raise_for_status()
            return r.json()["embedding"]["values"]
    # Sem chave: embedding "de brincadeira" só para dev local não quebrar.
    return _hash_embed(text)


def _hash_embed(text: str, dim: int = 256) -> List[float]:
    import hashlib
    import math

    vec = [0.0] * dim
    for tok in text.lower().split():
        h = int(hashlib.md5(tok.encode()).hexdigest(), 16)
        vec[h % dim] += 1.0
    norm = math.sqrt(sum(v * v for v in vec)) or 1.0
    return [v / norm for v in vec]


# --------------------------------------------------------------------------- #
# Transcrição de áudio (Groq Whisper). Gemini também aceita áudio nativo.
# --------------------------------------------------------------------------- #
async def transcribe(audio_bytes: bytes, filename: str = "audio.webm") -> str:
    if settings.groq_api_key:
        headers = {"Authorization": f"Bearer {settings.groq_api_key}"}
        files = {"file": (filename, audio_bytes, "application/octet-stream")}
        data = {"model": settings.groq_whisper_model, "language": "pt"}
        async with httpx.AsyncClient(timeout=httpx.Timeout(60.0)) as c:
            r = await c.post(
                f"{GROQ_BASE}/audio/transcriptions",
                headers=headers,
                data=data,
                files=files,
            )
            r.raise_for_status()
            return r.json().get("text", "").strip()

    # fallback: Gemini com áudio inline
    if settings.gemini_api_key:
        b64 = base64.b64encode(audio_bytes).decode()
        url = f"{GEMINI_BASE}/models/{settings.gemini_model}:generateContent"
        payload = {
            "contents": [
                {
                    "parts": [
                        {"text": "Transcreva este áudio em português, sem comentários."},
                        {"inline_data": {"mime_type": "audio/webm", "data": b64}},
                    ]
                }
            ]
        }
        async with httpx.AsyncClient(timeout=httpx.Timeout(60.0)) as c:
            r = await c.post(url, params={"key": settings.gemini_api_key}, json=payload)
            r.raise_for_status()
            data = r.json()
        return data["candidates"][0]["content"]["parts"][0]["text"].strip()

    raise RuntimeError("Nenhum provedor de transcrição configurado")
