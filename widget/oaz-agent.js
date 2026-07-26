/* ============================================================================
 * Agente OAZ — widget embutível (vanilla JS, sem dependências)
 * ----------------------------------------------------------------------------
 * Como usar no site (ex.: tema VTEX), adicionar antes de </body>:
 *
 *   <script>
 *     window.OAZ_AGENT_CONFIG = {
 *       mode: "api",                         // "demo" (sem backend) ou "api"
 *       backendUrl: "https://SEU-BACKEND/chat",
 *       channelsUrl: "https://www.oaz.vc/atendimento",
 *       primaryColor: "#dbaac9"
 *     };
 *   </script>
 *   <link rel="stylesheet" href="/widget/oaz-agent.css">
 *   <script defer src="/widget/oaz-kb.js"></script>   <!-- só no modo demo -->
 *   <script defer src="/widget/oaz-agent.js"></script>
 *
 * MODO DEMO: responde no navegador usando window.OAZ_KB (para testar sem custo).
 * MODO API : envia a pergunta ao backend (RAG + LLM + guardrails). Ver /docs.
 * ==========================================================================*/
(function () {
  "use strict";

  var CFG = Object.assign(
    {
      mode: "demo", // "demo" | "api"
      backendUrl: "", // endpoint POST no modo api
      launcherImage: null, // imagem do botão flutuante (logo). null = ícone padrão
      channelsUrl: "https://www.oaz.vc", // fallback quando não sabe responder
      contactEmail: "ecommerce@eurofarma.com", // canal REAL de atendimento
      contactHours:
        "seg a qui, 9h–18h; sex, 9h–12h (exceto feriados)", // horário real
      primaryColor: null, // sobrescreve a cor da marca (opcional)
      greeting:
        "Oi! 👋 Sou o assistente virtual da OAZ. Posso te ajudar com produtos, frete, pagamento, trocas e dúvidas do site. Como posso ajudar?",
      suggestions: [
        "Protetores solares",
        "Repelentes",
        "Qual o valor do frete grátis?",
        "Tem cupom de desconto?",
      ],
      minScore: 1.5, // limiar de confiança do modo demo
      typeSpeedMs: 12, // velocidade do "streaming" de texto
    },
    window.OAZ_AGENT_CONFIG || {}
  );

  // ---- ícones (inline svg) ------------------------------------------------
  var ICONS = {
    chat:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.9 8.4 8.5 8.5 0 0 1-3.8-.9L3 20l1.3-3.9A8.38 8.38 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 9 8.5z"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    spark:
      '<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z"/></svg>',
    mic:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    send:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  };

  // ---- estado -------------------------------------------------------------
  var root, panel, messagesEl, textarea, sendBtn, micBtn, tooltipEl;
  var history = []; // [{role:'user'|'assistant', content}]
  var recognizing = false;
  var recognition = null;
  var busy = false;

  // ---- utilidades ---------------------------------------------------------
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function normalize(s) {
    return (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  var STOPWORDS = new Set(
    ("de da do das dos a o e que qual quais quanto quanta como onde para por " +
      "com um uma tem ter voces vcs me eu ai la no na nos nas em se sao e o os as " +
      // interrogativos / auxiliares / dêiticos — não carregam intenção de domínio
      "quem vai vao vou vamos ser sera foi era quero queria gostaria preciso " +
      "sobre isso esse essa este esta isto aqui agora entao pra pro ao aos " +
      "meu minha seu sua nao sim ok obg obrigado obrigada")
      .split(" ")
  );

  function tokens(s) {
    return normalize(s)
      .split(" ")
      .filter(function (w) {
        return w.length > 2 && !STOPWORDS.has(w);
      });
  }

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  // transforma URLs em links clicáveis (após escapar o texto)
  function linkify(safeText) {
    return safeText.replace(/(https?:\/\/[^\s<]+)/g, function (u) {
      return '<a href="' + u + '" target="_blank" rel="noopener">' + u + "</a>";
    });
  }

  // ---- construção da UI ---------------------------------------------------
  function build() {
    root = el("div", "oaz-agent-root");
    if (CFG.primaryColor) {
      root.style.setProperty("--oaz-primary", CFG.primaryColor);
    }

    // launcher + tooltip
    var launcher = el("button", "oaz-agent-launcher");
    launcher.setAttribute("aria-label", "Abrir assistente virtual da OAZ");
    var chatIcon = CFG.launcherImage
      ? '<img class="oaz-agent-launcher-img" src="' +
        CFG.launcherImage +
        '" alt="" aria-hidden="true" />'
      : ICONS.chat;
    if (CFG.launcherImage) launcher.classList.add("oaz-has-img");
    launcher.innerHTML =
      '<span class="oaz-agent-chat-icon">' +
      chatIcon +
      "</span>" +
      '<span class="oaz-agent-close-icon">' +
      ICONS.close +
      "</span>";
    launcher.addEventListener("click", toggle);

    tooltipEl = el("div", "oaz-agent-tooltip", "Posso te ajudar?");

    // painel
    panel = el("div", "oaz-agent-panel");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Assistente virtual da OAZ");

    var header = el("div", "oaz-agent-header");
    header.innerHTML =
      '<div class="oaz-agent-avatar">' +
      ICONS.spark +
      "</div>" +
      '<div class="oaz-agent-header-txt">' +
      '<div class="oaz-agent-header-title">Assistente OAZ</div>' +
      '<div class="oaz-agent-header-sub"><span class="oaz-agent-status-dot"></span>Online agora</div>' +
      "</div>";
    var hClose = el("button", "oaz-agent-header-close", ICONS.close);
    hClose.setAttribute("aria-label", "Fechar");
    hClose.addEventListener("click", close);
    header.appendChild(hClose);

    messagesEl = el("div", "oaz-agent-messages");

    // input
    var inputWrap = el("div", "oaz-agent-input-wrap");
    var row = el("div", "oaz-agent-input-row");
    textarea = el("textarea", "oaz-agent-textarea");
    textarea.rows = 1;
    textarea.placeholder = "Escreva sua mensagem…";
    textarea.setAttribute("aria-label", "Mensagem");
    textarea.addEventListener("input", autoGrow);
    textarea.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSend();
      }
    });

    micBtn = el("button", "oaz-agent-btn-icon oaz-agent-btn-mic", ICONS.mic);
    micBtn.setAttribute("aria-label", "Falar (enviar áudio)");
    micBtn.addEventListener("click", toggleMic);

    sendBtn = el("button", "oaz-agent-btn-icon oaz-agent-btn-send", ICONS.send);
    sendBtn.setAttribute("aria-label", "Enviar");
    sendBtn.addEventListener("click", onSend);

    row.appendChild(textarea);
    row.appendChild(micBtn);
    row.appendChild(sendBtn);

    var recHint = el(
      "div",
      "oaz-agent-rec-hint",
      "🎙️ Ouvindo… fale e toque no microfone para parar"
    );
    var foot = el(
      "div",
      "oaz-agent-footnote",
      "Assistente virtual · pode conter imprecisões · não substitui orientação médica"
    );

    inputWrap.appendChild(row);
    inputWrap.appendChild(recHint);
    inputWrap.appendChild(foot);

    panel.appendChild(header);
    panel.appendChild(messagesEl);
    panel.appendChild(inputWrap);

    root.appendChild(launcher);
    root.appendChild(tooltipEl);
    root.appendChild(panel);
    document.body.appendChild(root);

    setupSpeech();
  }

  function autoGrow() {
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 96) + "px";
  }

  // ---- abrir/fechar -------------------------------------------------------
  function toggle() {
    root.classList.contains("oaz-open") ? close() : open();
  }
  function open() {
    root.classList.add("oaz-open");
    if (!history.length) {
      addBot(CFG.greeting, CFG.suggestions);
    }
    setTimeout(function () {
      textarea.focus();
    }, 220);
  }
  function close() {
    root.classList.remove("oaz-open");
    if (recognizing) stopMic();
  }

  // ---- mensagens ----------------------------------------------------------
  function addUser(text) {
    var wrap = el("div", "oaz-agent-msg oaz-user");
    wrap.appendChild(el("div", "oaz-agent-bubble", escapeHtml(text)));
    messagesEl.appendChild(wrap);
    scrollDown();
  }

  function typingIndicator() {
    var wrap = el("div", "oaz-agent-msg oaz-bot");
    wrap.appendChild(
      el(
        "div",
        "oaz-agent-bubble oaz-agent-typing",
        "<span></span><span></span><span></span>"
      )
    );
    messagesEl.appendChild(wrap);
    scrollDown();
    return wrap;
  }

  // adiciona resposta do bot com efeito de digitação (streaming)
  function addBot(text, suggestions) {
    var wrap = el("div", "oaz-agent-msg oaz-bot");
    var bubble = el("div", "oaz-agent-bubble");
    wrap.appendChild(bubble);
    messagesEl.appendChild(wrap);

    var safe = linkify(escapeHtml(text));
    // digita em incrementos para dar sensação de rapidez/dinamismo.
    // (velocidade adaptativa: respostas longas digitam mais rápido)
    var plain = text;
    var stepChars = plain.length > 240 ? 5 : 2;
    var i = 0;
    (function typeChar() {
      if (i <= plain.length) {
        bubble.innerHTML = linkify(escapeHtml(plain.slice(0, i)));
        i += stepChars;
        scrollDown();
        setTimeout(typeChar, CFG.typeSpeedMs);
      } else {
        bubble.innerHTML = safe;
        if (suggestions && suggestions.length) renderChips(suggestions);
        scrollDown();
      }
    })();
  }

  function renderChips(list) {
    var chips = el("div", "oaz-agent-chips");
    list.forEach(function (q) {
      var c = el("button", "oaz-agent-chip", escapeHtml(q));
      c.addEventListener("click", function () {
        chips.remove();
        submitChip(q);
      });
      chips.appendChild(c);
    });
    messagesEl.appendChild(chips);
    scrollDown();
  }

  function scrollDown() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  // ---- envio --------------------------------------------------------------
  function onSend() {
    var text = textarea.value.trim();
    if (!text) return;
    textarea.value = "";
    autoGrow();
    submit(text);
  }

  function submit(text) {
    if (busy) return;
    busy = true;
    sendBtn.disabled = true;
    addUser(text);
    history.push({ role: "user", content: text });

    var typing = typingIndicator();

    var answer =
      CFG.mode === "api" ? answerViaApi(text) : answerViaDemo(text);

    answer
      .then(function (res) {
        typing.remove();
        addBot(res.reply, res.suggestions || null);
        history.push({ role: "assistant", content: res.reply });
      })
      .catch(function () {
        typing.remove();
        addBot(
          "Tive um probleminha para responder agora. Você pode tentar de novo ou falar com nosso atendimento: " +
            CFG.channelsUrl
        );
      })
      .finally(function () {
        busy = false;
        sendBtn.disabled = false;
      });
  }

  // ---- MODO API: chama o backend -----------------------------------------
  function answerViaApi(text) {
    return fetch(CFG.backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: text,
        history: history.slice(-10),
      }),
    })
      .then(function (r) {
        if (!r.ok) throw new Error("http " + r.status);
        return r.json();
      })
      .then(function (data) {
        return {
          reply: data.reply || data.answer || "",
          suggestions: data.suggestions || null,
        };
      });
  }

  // ---- MODO DEMO: RAG-lite no navegador + guardrails ----------------------
  var HEALTH_TERMS = [
    "gravida",
    "gravidez",
    "amams-",
    "amamentando",
    "bebe",
    "crianca",
    "alergia",
    "alergico",
    "reacao",
    "efeito colateral",
    "posso usar",
    "contraindicacao",
    "remedio",
    "medicamento",
    "doenca",
    "dermatite",
    "gestante",
  ];

  function isHealthQuery(q) {
    var n = normalize(q);
    return HEALTH_TERMS.some(function (t) {
      return n.indexOf(normalize(t)) !== -1;
    });
  }

  function retrieve(query) {
    var kb = window.OAZ_KB || [];
    var qTokens = tokens(query);
    if (!qTokens.length) return { best: null, score: 0 };
    var scored = kb.map(function (art) {
      var hay = normalize(
        art.titulo + " " + (art.tags || []).join(" ") + " " + art.conteudo
      );
      var tagText = normalize((art.tags || []).join(" "));
      var score = 0;
      qTokens.forEach(function (t) {
        if (tagText.indexOf(t) !== -1) score += 2; // tag vale mais
        else if (hay.indexOf(t) !== -1) score += 1;
      });
      return { art: art, score: score };
    });
    scored.sort(function (a, b) {
      return b.score - a.score;
    });
    return { best: scored[0].art, score: scored[0].score, all: scored };
  }

  // --- detecção de categoria (protetor solar, repelente, etc.) -------------
  var CAT_SYNONYMS = {
    "protetor-solar": ["protetor solar", "protetores solares", "protetores", "protetor", "fps", "solar", "protecao solar", "filtro solar"],
    repelente: ["repelente", "repelentes", "mosquito", "dengue", "inseto", "pernilongo"],
    hidratante: ["hidratante", "hidratantes", "creme", "pele seca", "hidratacao", "ureia", "castanha"],
    "pos-sol": ["pos sol", "pos-sol", "depois do sol", "pos solar", "apos o sol"],
    "higiene-bucal": ["higiene bucal", "enxaguante", "bucal", "boca", "dente", "escova", "fio dental", "oral"],
    sabonete: ["sabonete", "sabonetes", "intimo"],
  };

  // casa a expressão como PALAVRA inteira (evita "dente" dentro de "presidente",
  // "solar" dentro de "eleitoral", etc.) sobre o texto já normalizado.
  function hasWord(normalizedText, phrase) {
    var p = normalize(phrase).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!p) return false;
    return new RegExp("(^|\\s)" + p + "($|\\s)").test(normalizedText);
  }

  function detectCategory(query) {
    var n = normalize(query);
    var cats = window.OAZ_CATS || {};
    for (var key in CAT_SYNONYMS) {
      if (!CAT_SYNONYMS.hasOwnProperty(key)) continue;
      var syns = CAT_SYNONYMS[key];
      for (var i = 0; i < syns.length; i++) {
        if (hasWord(n, syns[i])) {
          return { key: key, meta: cats[key] || { label: key, url: "https://www.oaz.vc" } };
        }
      }
    }
    return null;
  }

  function productsInCategory(key, query) {
    var n = normalize(query);
    var wantInfantil = /(infantil|crianca|bebe|kids)/.test(n);
    var wantFps = (n.match(/\bfps\s?(\d{2})\b/) || n.match(/\b(\d{2})\s?fps\b/) || [])[1];
    var list = (window.OAZ_KB || []).filter(function (a) {
      return a.subcategoria === key;
    });
    if (wantInfantil) {
      var inf = list.filter(function (a) { return a.publico === "infantil"; });
      if (inf.length) list = inf;
    }
    if (wantFps) {
      var f = list.filter(function (a) { return String(a.fps) === String(wantFps); });
      if (f.length) list = f;
    }
    return list;
  }

  function composeCategoryAnswer(cat, query) {
    var prods = productsInCategory(cat.key, query);
    var label = cat.meta.label;
    if (!prods.length) {
      return (
        "No momento não localizei itens de " + label + " na base. " +
        "Você pode ver a categoria completa aqui: " + cat.meta.url
      );
    }
    var LIMIT = 8;
    var shown = prods.slice(0, LIMIT);
    var linhas = shown.map(function (p) {
      var preco = p.preco ? " — " + p.preco : "";
      return "• " + p.titulo + preco + ": " + p.url;
    });
    var intro =
      "A OAZ tem " + prods.length + " opções de " + label +
      (prods.length > LIMIT ? " (mostrando " + LIMIT + "):" : ":");
    var extra =
      prods.length > LIMIT
        ? "\n\nVer todos os " + prods.length + " itens: " + cat.meta.url
        : "\n\nVer a categoria: " + cat.meta.url;
    return intro + "\n\n" + linhas.join("\n") + extra;
  }

  function fallbackMsg() {
    var canal = CFG.contactEmail
      ? "pelo e-mail " + CFG.contactEmail +
        (CFG.contactHours ? " (" + CFG.contactHours + ")" : "")
      : "pelos canais oficiais no site " + CFG.channelsUrl;
    return (
      "Sobre isso eu não tenho informação. Sou o assistente virtual da OAZ e " +
      "ajudo com assuntos da loja: produtos, frete, pagamento, trocas, " +
      "rastreamento e dúvidas do site. Se precisar, fale com o atendimento da " +
      "OAZ " + canal + " 💬"
    );
  }

  // resposta pronta sobre o canal de atendimento (fonte da verdade = KB)
  function supportAnswer() {
    var art = (window.OAZ_KB || []).filter(function (a) {
      return a.id === "canais-atendimento";
    })[0];
    if (art && art.conteudo) return art.conteudo;
    // fallback se a KB não tiver o artigo
    if (CFG.contactEmail) {
      return (
        "O atendimento da OAZ é feito por e-mail: " + CFG.contactEmail +
        (CFG.contactHours ? " (" + CFG.contactHours + ")." : ".")
      );
    }
    return (
      "Não há um canal de atendimento divulgado que eu possa confirmar. " +
      "Consulte o site oficial: " + CFG.channelsUrl
    );
  }

  var SUPPORT_TERMS = [
    "atendimento", "atend", "canais", "canal", "fale conosco", "falar com",
    "contato", "suporte", "sac", "reclama", "email de contato", "e-mail de contato",
    "telefone", "whatsapp", "como falo", "como entrar em contato", "atendente",
    "ouvidoria", "central de atend",
  ];

  function isSupportQuery(q) {
    var n = normalize(q);
    return SUPPORT_TERMS.some(function (t) {
      return n.indexOf(normalize(t)) !== -1;
    });
  }

  function healthDisclaimer() {
    return (
      "\n\nℹ️ Importante: sou um assistente virtual e não substituo a orientação " +
      "de um médico, farmacêutico ou dermatologista. Para uso em situações " +
      "específicas (gravidez, crianças, alergias, reações ou uso com " +
      "medicamentos), consulte um profissional de saúde ou nosso atendimento."
    );
  }

  // sugestões padrão de categorias (chips)
  function categorySuggestions(exceptKey) {
    var cats = window.OAZ_CATS || {};
    var out = [];
    ["protetor-solar", "repelente", "hidratante", "pos-sol", "higiene-bucal", "sabonete"].forEach(
      function (k) {
        if (k !== exceptKey && cats[k]) out.push(cats[k].label);
      }
    );
    return out.slice(0, 3);
  }

  function answerViaDemo(text) {
    return new Promise(function (resolve) {
      // latência simulada para parecer natural
      setTimeout(function () {
        var health = isHealthQuery(text);
        var cat = detectCategory(text);

        // 1) intenção de categoria -> lista SÓ daquela categoria, com links
        if (cat) {
          var reply = composeCategoryAnswer(cat, text);
          if (health) reply += healthDisclaimer();
          resolve({
            reply: reply,
            suggestions: categorySuggestions(cat.key),
          });
          return;
        }

        // 2) intenção de atendimento -> canal REAL (nunca inventar)
        if (isSupportQuery(text)) {
          var sup = supportAnswer();
          if (health) sup += healthDisclaimer();
          resolve({ reply: sup, suggestions: categorySuggestions() });
          return;
        }

        // 3) senão, busca o melhor artigo (institucional ou produto específico)
        var r = retrieve(text);
        if (!r.best || r.score < CFG.minScore) {
          var msg = fallbackMsg();
          if (health) msg += healthDisclaimer();
          resolve({ reply: msg, suggestions: categorySuggestions() });
          return;
        }

        var out = r.best.conteudo;
        if (r.best.categoria === "produtos" && r.best.url) {
          out += "\n\nVeja o produto: " + r.best.url;
        }
        if (health) out += healthDisclaimer();
        resolve({ reply: out, suggestions: categorySuggestions() });
      }, 320);
    });
  }

  function submitChip(text) {
    submit(text);
  }

  // ---- áudio (Web Speech API no modo demo) --------------------------------
  function setupSpeech() {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      micBtn.title =
        "Seu navegador não suporta captura de voz aqui. Em produção, o áudio é transcrito no servidor (Whisper/Gemini).";
      return;
    }
    recognition = new SR();
    recognition.lang = "pt-BR";
    recognition.interimResults = true;
    recognition.continuous = false;

    var finalText = "";
    recognition.addEventListener("result", function (e) {
      var interim = "";
      finalText = "";
      for (var i = 0; i < e.results.length; i++) {
        var t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalText += t;
        else interim += t;
      }
      textarea.value = (finalText || interim).trim();
      autoGrow();
    });
    recognition.addEventListener("end", function () {
      stopMic();
      var t = textarea.value.trim();
      if (t) {
        textarea.value = "";
        autoGrow();
        submit(t); // transcreveu → responde em TEXTO
      }
    });
    recognition.addEventListener("error", function () {
      stopMic();
    });
  }

  function toggleMic() {
    if (!recognition) {
      addBot(
        "A captura de voz não está disponível neste navegador no modo demo. " +
          "Na versão de produção, o áudio é enviado ao servidor e transcrito " +
          "automaticamente (Whisper/Gemini) — e a resposta volta em texto."
      );
      return;
    }
    recognizing ? stopMic() : startMic();
  }
  function startMic() {
    try {
      recognition.start();
      recognizing = true;
      micBtn.classList.add("oaz-recording");
      root.classList.add("oaz-rec");
    } catch (e) {}
  }
  function stopMic() {
    try {
      recognition.stop();
    } catch (e) {}
    recognizing = false;
    micBtn.classList.remove("oaz-recording");
    root.classList.remove("oaz-rec");
  }

  // ---- init ---------------------------------------------------------------
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
