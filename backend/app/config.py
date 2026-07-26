"""Configuração central do backend do Agente OAZ (lida do ambiente / .env)."""
from __future__ import annotations

import os
from dataclasses import dataclass, field
from typing import List

from dotenv import load_dotenv

load_dotenv()


def _split(csv: str) -> List[str]:
    return [x.strip() for x in csv.split(",") if x.strip()]


@dataclass
class Settings:
    llm_primary: str = os.getenv("LLM_PRIMARY", "gemini")
    llm_fallback: str = os.getenv("LLM_FALLBACK", "groq")

    gemini_api_key: str = os.getenv("GEMINI_API_KEY", "")
    gemini_model: str = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
    gemini_embed_model: str = os.getenv("GEMINI_EMBED_MODEL", "text-embedding-004")

    groq_api_key: str = os.getenv("GROQ_API_KEY", "")
    groq_model: str = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
    groq_whisper_model: str = os.getenv("GROQ_WHISPER_MODEL", "whisper-large-v3-turbo")

    vector_backend: str = os.getenv("VECTOR_BACKEND", "local")
    supabase_url: str = os.getenv("SUPABASE_URL", "")
    supabase_key: str = os.getenv("SUPABASE_KEY", "")

    channels_url: str = os.getenv("CHANNELS_URL", "https://www.oaz.vc")
    retrieve_top_k: int = int(os.getenv("RETRIEVE_TOP_K", "4"))
    min_similarity: float = float(os.getenv("MIN_SIMILARITY", "0.25"))
    enable_moderation: bool = os.getenv("ENABLE_MODERATION", "true").lower() == "true"

    allowed_origins: List[str] = field(
        default_factory=lambda: _split(
            os.getenv("ALLOWED_ORIGINS", "http://localhost:8777")
        )
    )
    port: int = int(os.getenv("PORT", "8000"))


settings = Settings()
