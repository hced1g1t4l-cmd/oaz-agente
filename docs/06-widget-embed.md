# 06 · Widget: como embutir no site (VTEX)

O widget é **JS puro**, sem dependências. Ele cria sozinho o logo, o balão
"Posso te ajudar?" e o painel de chat lateral.

## Arquivos

| Arquivo | Papel |
|---|---|
| `widget/oaz-agent.js` | lógica do widget (UI, chat, áudio, modos demo/api) |
| `widget/oaz-agent.css` | estilos (escopados em `.oaz-agent-*`) |
| `widget/oaz-kb.js` | base de conhecimento **só do modo demo** |

## Instalação (produção, modo API)

Hospede `oaz-agent.js` e `oaz-agent.css` (CDN, Cloudflare Pages, ou o próprio
servidor). Adicione antes de `</body>`:

```html
<script>
  window.OAZ_AGENT_CONFIG = {
    mode: "api",
    backendUrl: "https://SEU-BACKEND/chat",
    channelsUrl: "https://www.oaz.vc",
    primaryColor: "#324595"
  };
</script>
<link rel="stylesheet" href="https://SEU-CDN/oaz-agent.css">
<script defer src="https://SEU-CDN/oaz-agent.js"></script>
```

No **modo API** não precisa do `oaz-kb.js` (quem responde é o backend).

## Instalação no tema VTEX

Opções:
- **App/Site Editor**: inserir o bloco `<script>`/`<link>` no rodapé do tema
  (por exemplo via `store-theme` ou um app de "custom scripts"/GTM).
- **Google Tag Manager**: criar uma tag HTML personalizada com o mesmo bloco —
  é a forma mais simples de instalar sem mexer no código do tema.

## Configurações (`OAZ_AGENT_CONFIG`)

| Chave | Default | Para quê |
|---|---|---|
| `mode` | `"demo"` | `"demo"` (navegador) ou `"api"` (backend) |
| `backendUrl` | `""` | endpoint `/chat` do backend (modo api) |
| `channelsUrl` | oaz.vc | link de fallback para atendimento |
| `primaryColor` | azul OAZ `#324595` | cor da marca do widget |
| `greeting` | texto | mensagem de boas-vindas |
| `suggestions` | 3 perguntas | chips de sugestão iniciais |

## Comportamento da UI (conforme especificado)

- **Logo** fixo no canto inferior direito, sem nome, clicável.
- **Hover** no logo → balão **"Posso te ajudar?"**.
- **Clique** → abre o painel **do lado direito** (estilo picture-in-picture).
- Dentro: texto + microfone (áudio) + resposta com "digitação" (streaming) e a
  **fonte** citada.

## Personalização visual

Cores via `primaryColor` ou sobrescrevendo as variáveis CSS
`--oaz-*` em `.oaz-agent-root`. Para trocar o ícone do logo, edite o SVG em
`ICONS.chat` dentro de `oaz-agent.js`.
