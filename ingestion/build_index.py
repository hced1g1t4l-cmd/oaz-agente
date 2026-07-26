#!/usr/bin/env python3
"""Gera embeddings do knowledge_base.json e faz upsert no Supabase (pgvector).

Uso:
    export GEMINI_API_KEY=...
    export SUPABASE_URL=...  SUPABASE_KEY=...   # service role
    python build_index.py --in knowledge_base.json

Pré-requisito: rodar o SQL de supabase_schema.sql uma vez no seu projeto.
Para desenvolvimento sem banco, o backend já usa o JSON diretamente
(VECTOR_BACKEND=local) — este script só é necessário em produção.
"""
from __future__ import annotations

import argparse
import json
import os

import httpx

GEMINI_EMBED = (
    "https://generativelanguage.googleapis.com/v1beta/models/"
    "text-embedding-004:embedContent"
)


def embed(text: str, key: str) -> list:
    r = httpx.post(
        GEMINI_EMBED,
        params={"key": key},
        json={"content": {"parts": [{"text": text}]}},
        timeout=30.0,
    )
    r.raise_for_status()
    return r.json()["embedding"]["values"]


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--in", dest="inp", default="knowledge_base.json")
    args = ap.parse_args()

    gkey = os.environ["GEMINI_API_KEY"]
    from supabase import create_client  # type: ignore

    sb = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_KEY"])

    with open(args.inp, encoding="utf-8") as f:
        artigos = json.load(f)["artigos"]

    rows = []
    for a in artigos:
        text = f"{a['titulo']} {' '.join(a.get('tags', []))} {a['conteudo']}"
        rows.append(
            {
                "external_id": a["id"],
                "titulo": a["titulo"],
                "categoria": a.get("categoria", ""),
                "url": a.get("url", ""),
                "conteudo": a["conteudo"],
                "embedding": embed(text, gkey),
            }
        )
        print("  embed:", a["id"])

    sb.table("artigos").upsert(rows, on_conflict="external_id").execute()
    print(f"Upsert de {len(rows)} artigos no Supabase concluído.")


if __name__ == "__main__":
    main()
