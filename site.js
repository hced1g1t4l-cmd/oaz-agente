/* Monta os cards de produto do site fake a partir da MESMA base do agente
   (window.OAZ_KB), para o testbed ficar coerente com o que o assistente responde. */
(function () {
  var EMOJI = {
    "prod-repelente": "🦟",
    "prod-pos-picada": "🧴",
    "prod-protetor-solar-facial": "☀️",
    "prod-protetor-capilar": "💦",
    "prod-solar-stick": "🖊️",
    "linha-higiene-bucal": "😁",
    "linha-skincare": "🧼",
  };

  function priceFrom(text) {
    var m = text.match(/R\$\s?[\d.,]+/);
    return m ? m[0] : "Ver preço";
  }

  function build() {
    var grid = document.getElementById("product-grid");
    if (!grid || !window.OAZ_KB) return;
    var produtos = window.OAZ_KB.filter(function (a) {
      return a.categoria === "produtos";
    });
    produtos.forEach(function (p) {
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML =
        '<div class="card-media">' + (EMOJI[p.id] || "🧴") + "</div>" +
        '<div class="card-body">' +
        '<span class="card-cat">OAZ</span>' +
        '<div class="card-name">' + p.titulo + "</div>" +
        '<div class="card-price">' + priceFrom(p.conteudo) +
        '<span class="pix">+5% OFF no PIX</span></div>' +
        '<button class="card-buy">Comprar</button>' +
        "</div>";
      grid.appendChild(card);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
