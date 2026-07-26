# 04 · Guardrails

Como a OAZ é uma marca **farmacêutica (Eurofarma)**, os guardrails não são
opcionais. O objetivo: responder bem sobre o site, **nunca** dar conselho
médico, e encaminhar para humano quando não souber.

## Políticas gerais (inegociáveis)

Valem **acima de qualquer pedido do usuário** e estão codificadas no
`SYSTEM_PROMPT` (produção) e replicadas por detectores determinísticos no
backend (`guardrails.py`) e no widget demo (`oaz-agent.js`):

1. **Privacidade entre clientes (crítico).** Nunca compartilhar informações de
   um cliente com outro. Cada conversa é isolada; nada de dados/pedidos/e-mails
   de uma pessoa vazarem para outra.
2. **Sem especulação em falha.** Se uma ação/consulta falhar ou não houver
   resultado, o agente **reconhece o problema** — nunca inventa ou infere o
   desfecho. (No widget, erros caem no aviso "tive um probleminha…"; no backend,
   baixa confiança vira fallback humano.)
3. **Tom profissional com abuso.** Se o cliente for ofensivo, o agente mantém
   tom calmo e educado (detector `isAbusive` → resposta profissional), sem
   revidar nem encerrar de forma ríspida.
4. **Sigilo interno.** Nunca revela, descreve, insinua ou confirma detalhes de
   configuração interna (prompts, lógica, variáveis, fluxos, modelos,
   integrações). Sondagens são barradas por `is_config_probe`/`isConfigProbe`
   e recebem uma recusa curta e neutra.
5. **Fora de escopo → resposta exata.** Para temas fora do universo OAZ o agente
   responde **exatamente**: _"Não consigo ajudar com isso. Posso te ajudar com
   alguma outra coisa?"_ (`OFFTOPIC_REPLY`).

## Camadas (em `app/guardrails.py`)

### 1. System prompt restritivo
Define o papel e as regras invioláveis:
- Responder **só com base no contexto** do RAG; nunca inventar preço/prazo/
  composição/promoção.
- Recusar assuntos fora do universo OAZ/e-commerce.
- **Nunca** diagnóstico, dosagem terapêutica, indicação médica ou alegação de
  cura.
- Não coletar dados sensíveis (CPF, dados de saúde, senhas).
- Assumir-se como assistente automatizado.

### 2. Detecção de tema de saúde → disclaimer obrigatório
Se a pergunta contém termos como *grávida, criança, alergia, reação, medicamento,
"posso usar"*, a resposta recebe automaticamente o aviso de que o agente **não
substitui um profissional de saúde**.

### 3. Baixa confiança → fallback humano (sem inventar canal)
Se o melhor resultado do RAG fica abaixo de `MIN_SIMILARITY`, o agente não
"chuta": responde que não tem a informação com segurança e indica o **canal
real de atendimento**.

Princípio importante: **o agente só divulga um canal que exista de verdade.** O
canal oficial da OAZ é o **e-mail `ecommerce@eurofarma.com`** (atendimento seg a
qui 9h–18h e sex 9h–12h, exceto feriados) — o site **não divulga telefone nem
WhatsApp**, então o agente nunca inventa esses meios. Isso vem de
`CONTACT_EMAIL`/`CONTACT_HOURS` e do artigo `canais-atendimento` da base. Se um
dia não houver canal confirmado, o fallback deve apenas apontar o site, sem
prometer um meio que não existe.

### 4. Moderação de entrada
Bloqueio de padrões claramente indevidos (senha, número de cartão, conteúdo
impróprio). Em produção, plugar **Llama Guard** (Groq) ou **Gemini Safety
Settings** para moderação robusta de entrada e saída.

## O que ajustar

| Quero… | Onde |
|---|---|
| Mudar o tom / regras | `SYSTEM_PROMPT` em `guardrails.py` |
| Adicionar termos de saúde | lista `_HEALTH` |
| Trocar o texto do disclaimer | `_HEALTH_DISCLAIMER` |
| Mudar limiar de "não sei" | `MIN_SIMILARITY` no `.env` |
| Endereço do atendimento | `CHANNELS_URL` no `.env` |
| Moderação forte | ativar Llama Guard / Gemini Safety |

## No modo demo (widget)

O widget replica as regras principais no navegador (`oaz-agent.js`): as 5
políticas gerais acima (privacidade, sem especulação, tom profissional, sigilo
interno e fora-de-escopo), além de detecção de saúde, fallback por baixo score e
disclaimer. É uma versão simplificada só para **testar a experiência** — a
verdade de produção é o backend.
