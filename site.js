/* Renderiza categorias e vitrine de produtos a partir da MESMA base do agente
   (window.OAZ_KB / window.OAZ_CATS) — assim o site fake e o assistente ficam
   coerentes. Imagens e preços vêm do scrape real do catálogo OAZ (VTEX). */
(function () {
  var CAT_ICON = {
    "protetor-solar": "☀️",
    repelente: "🦟",
    hidratante: "🧴",
    "pos-sol": "🌤️",
    "higiene-bucal": "😁",
    sabonete: "🧼",
  };
  var CAT_ORDER = ["protetor-solar", "repelente", "hidratante", "pos-sol", "higiene-bucal", "sabonete"];

  function renderCats() {
    var host = document.getElementById("cats");
    var cats = window.OAZ_CATS || {};
    if (!host) return;
    CAT_ORDER.forEach(function (k) {
      if (!cats[k]) return;
      var a = document.createElement("a");
      a.className = "cat";
      a.href = "#produtos";
      a.innerHTML =
        '<span class="cat-ico">' + (CAT_ICON[k] || "🧴") + "</span>" +
        '<span class="cat-name">' + cats[k].label + "</span>";
      host.appendChild(a);
    });
  }

  function pickVitrine(prods) {
    // pega um mix: até 2 de cada categoria, priorizando os que têm imagem e preço
    var byCat = {};
    prods.forEach(function (p) {
      if (!p.imagem) return;
      (byCat[p.subcategoria] = byCat[p.subcategoria] || []).push(p);
    });
    var out = [];
    CAT_ORDER.forEach(function (k) {
      (byCat[k] || []).slice(0, 2).forEach(function (p) { out.push(p); });
    });
    // completa até 12 com quaisquer outros com imagem
    prods.forEach(function (p) {
      if (out.length >= 12) return;
      if (p.imagem && out.indexOf(p) === -1) out.push(p);
    });
    return out.slice(0, 12);
  }

  function renderProducts() {
    var grid = document.getElementById("product-grid");
    var cats = window.OAZ_CATS || {};
    if (!grid || !window.OAZ_KB) return;
    var prods = window.OAZ_KB.filter(function (a) { return a.categoria === "produtos"; });
    pickVitrine(prods).forEach(function (p) {
      var label = (cats[p.subcategoria] && cats[p.subcategoria].label) || "OAZ";
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML =
        '<div class="card-media"><img loading="lazy" src="' + p.imagem + '" alt="' + p.titulo + '"></div>' +
        '<div class="card-body">' +
        '<span class="card-cat">' + label + "</span>" +
        '<div class="card-name">' + p.titulo + "</div>" +
        '<div class="card-price">' + (p.preco || "Ver preço") +
        '<span class="pix">+5% OFF no PIX</span></div>' +
        '<a class="card-buy" href="' + p.url + '" target="_blank" rel="noopener">Comprar</a>' +
        "</div>";
      grid.appendChild(card);
    });
  }

  function build() { renderCats(); renderProducts(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
