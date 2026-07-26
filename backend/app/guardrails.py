"""Guardrails do Agente OAZ.

Camadas:
  1. system prompt restritivo (definido aqui, usado no main).
  2. detecção de tema de saúde -> anexa disclaimer obrigatório.
  3. detecção de baixa confiança do RAG -> encaminha para canais humanos.
  4. (opcional) moderação de entrada/saída via LLM Guard.

Como é uma marca farmacêutica (Eurofarma), o agente NUNCA dá conselho médico,
dosagem terapêutica, diagnóstico, nem faz alegações de cura.
"""
from __future__ import annotations

import re
from typing import List

from .config import settings

SYSTEM_PROMPT = """Você é o Assistente Virtual da OAZ, marca de higiene e cuidado \
pessoal da Eurofarma. Responda em português do Brasil, de forma curta, cordial e \
objetiva.

REGRAS OBRIGATÓRIAS:
1. Responda SOMENTE com base no CONTEXTO fornecido abaixo. Se a resposta não estiver \
no contexto, diga que não tem essa informação e oriente procurar os canais de \
atendimento. NUNCA invente preços, prazos, composições ou promoções.
2. Assuntos fora do universo OAZ/e-commerce (produtos, compra, frete, pagamento, \
trocas, entrega, conta): recuse educadamente e redirecione.
3. NUNCA forneça diagnóstico, dosagem terapêutica, indicação médica ou alegação de \
cura. Você não substitui médico, farmacêutico ou dermatologista.
4. Não colete dados sensíveis (CPF, dados de saúde, senhas). Se o usuário precisar de \
suporte com pedido/conta, direcione para o atendimento oficial.
5. Seja transparente: você é um assistente automatizado.

Ao final, se citar um produto/serviço, seja preciso quanto ao que está no contexto."""

# termos que disparam o disclaimer de saúde
_HEALTH = [
    "grávida", "gravida", "gestante", "gestação", "amamenta", "bebê", "bebe",
    "criança", "crianca", "alergi", "reação", "reacao", "efeito colateral",
    "contraindica", "remédio", "remedio", "medicament", "doença", "doenca",
    "dermatite", "posso usar", "faz mal", "é seguro", "e seguro",
]

_HEALTH_DISCLAIMER = (
    "\n\nℹ️ Importante: sou um assistente virtual e não substituo a orientação de um "
    "médico, farmacêutico ou dermatologista. Para uso em situações específicas "
    "(gravidez, crianças, alergias, reações ou uso com medicamentos), consulte um "
    "profissional de saúde ou nosso atendimento."
)


def is_health_topic(text: str) -> bool:
    t = text.lower()
    return any(term in t for term in _HEALTH)


def low_confidence(artigos: List[dict]) -> bool:
    if not artigos:
        return True
    top = max((a.get("score", 0.0) for a in artigos), default=0.0)
    return top < settings.min_similarity


def fallback_message() -> str:
    return (
        "Não encontrei essa informação com segurança. Para não te passar algo errado, "
        f"o ideal é falar com nosso atendimento: {settings.channels_url} 💬"
    )


def apply_output_guardrails(reply: str, user_msg: str) -> str:
    """Pós-processa a resposta do LLM antes de devolver ao usuário."""
    out = reply.strip()
    if is_health_topic(user_msg) and "profissional de saúde" not in out.lower():
        out += _HEALTH_DISCLAIMER
    return out


# --------------------------------------------------------------------------- #
# Moderação simples de entrada (bloqueio de conteúdo claramente indevido).
# Em produção, plugar Llama Guard (Groq) ou Gemini Safety Settings.
# --------------------------------------------------------------------------- #
_BLOCK = re.compile(
    r"\b(senha|cart[aã]o de cr[eé]dito n[uú]mero|cvv|nude|suic[ií]dio)\b", re.I
)


def input_blocked(text: str) -> bool:
    return bool(_BLOCK.search(text))
