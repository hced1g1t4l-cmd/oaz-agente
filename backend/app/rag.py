"""RAG — recupera trechos relevantes da base de conhecimento da OAZ.

Dois backends:
  * "local"    -> lê ingestion/knowledge_base.json e faz busca por similaridade
                  em memória (ótimo para dev e volumes pequenos).
  * "supabase" -> consulta pgvector (produção). Ver docs/03-rag-ingestao.md.
"""
from __future__ import annotations

import json
import os
from typing import List, Optional

import numpy as np

from .config import settings
from . import providers

_KB_PATH = os.path.join(
    os.path.dirname(__file__), "..", "..", "ingestion", "knowledge_base.json"
)

_kb_cache: Optional[List[dict]] = None
_kb_vectors: Optional[np.ndarray] = None


def _load_kb() -> List[dict]:
    global _kb_cache
    if _kb_cache is None:
        with open(_KB_PATH, "r", encoding="utf-8") as f:
            _kb_cache = json.load(f).get("artigos", [])
    return _kb_cache


async def _ensure_local_index() -> None:
    """Gera embeddings dos artigos uma vez (cacheados em memória)."""
    global _kb_vectors
    if _kb_vectors is not None:
        return
    kb = _load_kb()
    vecs = []
    for art in kb:
        text = f"{art['titulo']} {' '.join(art.get('tags', []))} {art['conteudo']}"
        vecs.append(await providers.embed(text))
    _kb_vectors = np.array(vecs, dtype=np.float32)


def _cosine(a: np.ndarray, b: np.ndarray) -> np.ndarray:
    a = a / (np.linalg.norm(a) or 1.0)
    b = b / (np.linalg.norm(b, axis=1, keepdims=True) + 1e-9)
    return b @ a


async def retrieve(query: str) -> List[dict]:
    """Retorna os top-K artigos relevantes com score de similaridade."""
    if settings.vector_backend == "supabase":
        return await _retrieve_supabase(query)
    return await _retrieve_local(query)


async def _retrieve_local(query: str) -> List[dict]:
    await _ensure_local_index()
    kb = _load_kb()
    qv = np.array(await providers.embed(query), dtype=np.float32)
    sims = _cosine(qv, _kb_vectors)
    order = np.argsort(-sims)[: settings.retrieve_top_k]
    out = []
    for i in order:
        out.append({**kb[int(i)], "score": float(sims[int(i)])})
    return out


async def _retrieve_supabase(query: str) -> List[dict]:
    """Consulta pgvector via RPC 'match_artigos'. Ver docs/03-rag-ingestao.md."""
    try:
        from supabase import create_client  # type: ignore
    except ImportError as e:  # pragma: no cover
        raise RuntimeError("pacote supabase não instalado") from e

    client = create_client(settings.supabase_url, settings.supabase_key)
    qv = await providers.embed(query)
    res = client.rpc(
        "match_artigos",
        {
            "query_embedding": qv,
            "match_count": settings.retrieve_top_k,
            "min_similarity": settings.min_similarity,
        },
    ).execute()
    return res.data or []


def build_context(artigos: List[dict]) -> str:
    """Monta o bloco de contexto que vai no prompt do LLM."""
    blocos = []
    for a in artigos:
        blocos.append(
            f"[{a['titulo']}] (fonte: {a.get('url', '')})\n{a['conteudo']}"
        )
    return "\n\n".join(blocos)
