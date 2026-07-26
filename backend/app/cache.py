"""Cache semântico — o que segura VOLUME de graça.

Perguntas parecidas ("qual o frete grátis?" ≈ "a partir de quanto o frete é
grátis?") reaproveitam a mesma resposta, sem chamar o LLM. Reduz custo e
latência drasticamente em picos.

Implementação em memória (dev). Em produção, troque por Redis/Upstash para
compartilhar o cache entre instâncias. Ver docs/02-llm-e-volume.md.
"""
from __future__ import annotations

import time
from typing import List, Optional, Tuple

import numpy as np

from . import providers

_TTL_SECONDS = 60 * 60 * 6  # 6h
_THRESHOLD = 0.92  # similaridade mínima para considerar "mesma pergunta"
_MAX = 500

# cada item: (embedding, resposta, fonte, timestamp)
_store: List[Tuple[np.ndarray, str, Optional[dict], float]] = []


def _now() -> float:
    return time.time()


async def get(query: str) -> Optional[Tuple[str, Optional[dict]]]:
    if not _store:
        return None
    qv = np.array(await providers.embed(query), dtype=np.float32)
    qv = qv / (np.linalg.norm(qv) or 1.0)
    best_sim, best = 0.0, None
    now = _now()
    for emb, reply, source, ts in _store:
        if now - ts > _TTL_SECONDS:
            continue
        sim = float(emb @ qv)
        if sim > best_sim:
            best_sim, best = sim, (reply, source)
    if best_sim >= _THRESHOLD:
        return best
    return None


async def put(query: str, reply: str, source: Optional[dict]) -> None:
    qv = np.array(await providers.embed(query), dtype=np.float32)
    qv = qv / (np.linalg.norm(qv) or 1.0)
    _store.append((qv, reply, source, _now()))
    if len(_store) > _MAX:
        del _store[0 : len(_store) - _MAX]
