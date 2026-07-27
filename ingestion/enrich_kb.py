#!/usr/bin/env python3
"""Enriquecimento da KB da OAZ: descrição COMPLETA + composição por produto.

Lê a KB atual (ingestion/knowledge_base.json), e para cada artigo de produto
(id "prod-<productId>") re-consulta a API pública da VTEX para obter a descrição
completa (sem truncagem), os benefícios, o modo de uso e — quando houver marcador
claro — a composição/ingredientes. Reescreve:

  * ingestion/knowledge_base.json
  * widget/oaz-kb.js   (mantém o cabeçalho + window.OAZ_CATS; troca window.OAZ_KB)

NÃO inventa dados: só grava o que a API retornar. Composição só é preenchida
quando extraída de forma inequívoca do texto oficial da descrição.

Uso:
    python enrich_kb.py --account oaz
"""
from __future__ import annotations

import argparse
import json
import os
import re
import time
import urllib.parse
import urllib.request
from typing import Optional

SEARCH_URL = "https://{account}.vtexcommercestable.com.br/api/catalog_system/pub/products/search"

HERE = os.path.dirname(os.path.abspath(__file__))
KB_JSON = os.path.join(HERE, "knowledge_base.json")
KB_JS = os.path.join(HERE, "..", "widget", "oaz-kb.js")


def html_to_text(html: str) -> str:
    """Converte a descrição HTML da VTEX em texto limpo e legível."""
    if not html:
        return ""
    t = html
    # títulos viram frases separadas
    t = re.sub(r"<h[1-6][^>]*>(.*?)</h[1-6]>", r"\n\1: ", t, flags=re.I | re.S)
    # itens de lista viram "• item"
    t = re.sub(r"<li[^>]*>(.*?)</li>", r"\n• \1", t, flags=re.I | re.S)
    t = re.sub(r"</?(ul|ol|p|div|br)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)  # remove tags restantes
    t = t.replace("&nbsp;", " ").replace("&amp;", "&")
    t = re.sub(r"[ \t]+", " ", t)
    t = re.sub(r"\s*\n\s*", "\n", t)
    t = re.sub(r"\n{2,}", "\n", t)
    return t.strip()


def extract_composition(desc_text: str, specs: dict) -> str:
    """Extrai composição/ingredientes só quando o marcador é inequívoco."""
    # 1) specification dedicada (quando a loja expõe)
    for key in ("Composição", "Composicao", "Ingredientes", "Composição/INCI"):
        if key in specs and specs[key]:
            val = specs[key]
            return ", ".join(val) if isinstance(val, list) else str(val)
    # 2) padrão "Com <Ingredientes>, é dermatologicamente ..." (creme facial etc.)
    m = re.search(
        r"\bCom ([A-Z][^.\n]*?)(?:,\s*(?:é|e)\s+dermatolog)", desc_text
    )
    if m:
        cand = m.group(1).strip(" ,")
        # heurística: parece lista de ativos (tem vírgula ou " e ")
        if ("," in cand or " e " in cand) and len(cand) < 160:
            return cand
    # 3) marcador explícito "Composição: ..."
    m = re.search(r"[Cc]omposi[çc][ãa]o[:\-]\s*([^\n.]+)", desc_text)
    if m:
        return m.group(1).strip(" ,.")
    return ""


def fetch_product(account: str, pid: str) -> Optional[dict]:
    url = SEARCH_URL.format(account=account) + "?" + urllib.parse.urlencode(
        {"fq": f"productId:{pid}"}
    )
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except Exception as e:  # noqa: BLE001
        print(f"  ! {pid}: {e}")
        return None
    return data[0] if data else None


def collect_specs(p: dict) -> dict:
    specs = {}
    for name in p.get("allSpecifications") or []:
        if name in p:
            specs[name] = p[name]
    return specs


def price_of(p: dict) -> str:
    try:
        offer = p["items"][0]["sellers"][0]["commertialOffer"]
        price = offer.get("Price") or offer.get("ListPrice") or 0
        if price:
            return f"R$ {price:.2f}".replace(".", ",")
    except (KeyError, IndexError, TypeError):
        pass
    return ""


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--account", default="oaz")
    ap.add_argument("--sleep", type=float, default=0.15)
    args = ap.parse_args()

    with open(KB_JSON, "r", encoding="utf-8") as f:
        kb = json.load(f)
    artigos = kb["artigos"]

    prods = [a for a in artigos if str(a.get("id", "")).startswith("prod-")]
    print(f"{len(prods)} produtos na KB. Enriquecendo via VTEX (account={args.account})…")

    ok = comp = 0
    if True:
        for a in prods:
            pid = a["id"].replace("prod-", "")
            p = fetch_product(args.account, pid)
            time.sleep(args.sleep)
            if not p:
                print(f"  ! {pid}: não retornou")
                continue
            desc = html_to_text(p.get("description", ""))
            if not desc:
                desc = html_to_text(p.get("metaTagDescription", ""))
            specs = collect_specs(p)
            comp_txt = extract_composition(desc, specs)
            preco = price_of(p) or a.get("preco", "")

            a["descricao"] = desc
            if comp_txt:
                a["composicao"] = comp_txt
                comp += 1
            elif "composicao" in a:
                del a["composicao"]
            if preco:
                a["preco"] = preco

            partes = [a.get("titulo", p.get("productName", ""))]
            if preco:
                partes.append(f"Preço: {preco}")
            if desc:
                partes.append(desc.replace("\n", " "))
            if comp_txt:
                partes.append(f"Composição: {comp_txt}")
            a["conteudo"] = ". ".join(x.strip(". ") for x in partes if x).strip() + "."
            ok += 1
            print(f"  ✓ {pid} {a.get('titulo','')[:40]} | comp={'sim' if comp_txt else '-'}")

    # grava knowledge_base.json
    with open(KB_JSON, "w", encoding="utf-8") as f:
        json.dump(kb, f, ensure_ascii=False, indent=2)

    # regenera oaz-kb.js preservando cabeçalho + window.OAZ_CATS
    with open(KB_JS, "r", encoding="utf-8") as f:
        js = f.read()
    head = js.split("window.OAZ_KB", 1)[0]
    new_js = head + "window.OAZ_KB = " + json.dumps(artigos, ensure_ascii=False, indent=2) + ";\n"
    with open(KB_JS, "w", encoding="utf-8") as f:
        f.write(new_js)

    print(f"\nEnriquecidos {ok}/{len(prods)} produtos (composição em {comp}).")
    print(f"Gravado: {KB_JSON}\nGravado: {os.path.normpath(KB_JS)}")


if __name__ == "__main__":
    main()
