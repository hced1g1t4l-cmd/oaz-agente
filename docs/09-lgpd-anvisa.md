# 09 · LGPD e conformidade (saúde/ANVISA)

> Este documento é um guia técnico, **não é aconselhamento jurídico**. Valide
> com o jurídico/compliance e o DPO da Eurofarma antes de ir para produção.

## Por que isso importa aqui

A OAZ é da **Eurofarma**. O agente conversa com consumidores, pode receber
áudio e texto, e fala de produtos de cuidado pessoal/OTC. Logo, entram **LGPD**
(dados pessoais) e as regras de **publicidade/ANVISA** (alegações de produto).

## LGPD — princípios práticos

- **Minimização**: não peça CPF, dados de saúde ou senhas. O agente é
  informativo; suporte a pedidos/conta vai para os canais oficiais.
- **Transparência**: deixe claro que é um **assistente automatizado** (já está
  no rodapé do widget e no system prompt).
- **Base legal e consentimento**: alinhe o uso do chat/áudio à Política de
  Privacidade da Eurofarma (https://www.oaz.vc/institucional/politica-de-privacidade).
- **Retenção**: áudio deve ser usado só para transcrever e então descartado.
  Evite guardar transcrições com dados pessoais; se guardar logs, anonimize.
- **Compartilhamento**: os provedores de LLM/transcrição processam o texto/áudio.
  Verifique os termos (residência de dados, uso para treino). O Gemini/Groq via
  API paga normalmente não usam dados para treino — confirme o contrato/termos.
- **Direitos do titular**: tenha caminho para acesso/exclusão dos dados tratados.

## Diretrizes de saúde / ANVISA (nos guardrails)

- **Nunca** diagnóstico, prescrição, dosagem terapêutica ou promessa de cura.
- **Sem alegações** que o rótulo/registro do produto não sustente.
- Para dúvidas de uso em situações específicas (gravidez, crianças, alergias,
  medicamentos), **encaminhar a profissional de saúde** — já automatizado no
  disclaimer (doc 04).
- Mantenha a base de conhecimento fiel ao que é oficialmente comunicado do
  produto (ingestão do site + revisão do time).

## Checklist antes de produção

- [ ] Texto de transparência revisado pelo jurídico.
- [ ] Áudio não é armazenado além do necessário.
- [ ] Logs anonimizados / sem dados sensíveis.
- [ ] Termos dos provedores (LLM/transcrição) aprovados pelo DPO.
- [ ] System prompt e disclaimers validados por compliance/regulatório.
- [ ] Canais de atendimento oficiais corretos no `CHANNELS_URL`.
