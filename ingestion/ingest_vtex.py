#!/usr/bin/env python3
"""Ingestão de conteúdo da OAZ (loja VTEX) -> knowledge_base.json.

Puxa o catálogo de produtos pela API pública de busca da VTEX e (opcionalmente)
páginas institucionais, normalizando tudo no formato de "artigos" que o RAG usa.

Uso:
    python ingest_vtex.py --account oaz --out knowledge_base.json

Observações:
  * `--account` é o nome da conta VTEX (ex.: para oaz.vc descubra em
    Network do navegador o host `*.vtexcommercestable.com.br`).
  * Este script NÃO inventa dados: só grava o que a API retornar.
  * Revise o JSON gerado antes de usar em produção.
"""
from __future__ import annotations

import argparse
import json
import re
from typing import List

import httpx

SEARCH_URL = "https://{account}.vtexcommercestable.com.br/api/catalog_system/pub/products/search"


def strip_html(html: str) -> str:
    return re.sub(r"<[^>]+>", " ", html or "").replace("&nbsp;", " ").strip()


def fetch_products(account: str, page_size: int = 50, max_pages: int = 20) -> List[dict]:
    artigos: List[dict] = []
    with httpx.Client(timeout=30.0) as c:
        for page in range(max_pages):
            frm = page * page_size
            to = frm + page_size - 1
            r = c.get(
                SEARCH_URL.format(account=account),
                params={"_from": frm, "_to": to},
                headers={"Accept": "application/json"},
            )
            if r.status_code == 206 or r.status_code == 200:
                items = r.json()
            else:
                break
            if not items:
                break
            for p in items:
                nome = p.get("productName", "")
                desc = strip_html(p.get("description", ""))
                link = p.get("link", "")
                preco = ""
                try:
                    offer = p["items"][0]["sellers"][0]["commertialOffer"]
                    preco = f"R$ {offer.get('Price', 0):.2f}".replace(".", ",")
                except (KeyError, IndexError):
                    pass
                conteudo = nome
                if preco:
                    conteudo += f". Preço: {preco}"
                if desc:
                    conteudo += f". {desc}"
                artigos.append(
                    {
                        "id": "prod-" + str(p.get("productId", "")),
                        "categoria": "produtos",
                        "titulo": nome,
                        "tags": [t.lower() for t in nome.split()][:8],
                        "url": link,
                        "conteudo": conteudo,
                    }
                )
            if len(items) < page_size:
                break
    return artigos


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--account", required=True, help="nome da conta VTEX")
    ap.add_argument("--out", default="knowledge_base.json")
    args = ap.parse_args()

    print(f"Buscando catálogo VTEX da conta '{args.account}'…")
    produtos = fetch_products(args.account)
    print(f"  {len(produtos)} produtos encontrados.")

    # preserva artigos institucionais já existentes (curados à mão)
    try:
        with open(args.out, "r", encoding="utf-8") as f:
            base = json.load(f)
        institucionais = [
            a for a in base.get("artigos", []) if a.get("categoria") != "produtos"
        ]
    except FileNotFoundError:
        institucionais = []

    out = {
        "_meta": {
            "descricao": "Base gerada por ingest_vtex.py + artigos institucionais curados.",
            "fonte": f"VTEX account={args.account}",
            "versao": "auto",
        },
        "artigos": institucionais + produtos,
    }
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print(f"Gravado em {args.out} ({len(out['artigos'])} artigos).")


if __name__ == "__main__":
    main()
