/**
 * Base de conhecimento do MODO DEMO do Agente OAZ.
 *
 * Roda 100% no navegador (sem backend, sem chave de API) só para você TESTAR a
 * experiência. Em produção, quem responde é o backend com RAG + LLM (ver /docs).
 *
 * Conteúdo ILUSTRATIVO montado a partir de informações públicas do site oaz.vc.
 * O time da OAZ deve revisar, corrigir e completar antes de usar em produção.
 *
 * Espelha ingestion/knowledge_base.json.
 */
window.OAZ_KB = [
  {
    id: "sobre-oaz",
    categoria: "institucional",
    titulo: "Sobre a OAZ",
    tags: ["oaz", "eurofarma", "marca", "quem somos", "empresa", "sobre"],
    url: "https://www.oaz.vc/somos-oaz",
    conteudo:
      "A OAZ é a marca de higiene e cuidado pessoal da Eurofarma. Oferece uma linha completa de produtos para pele, boca e para o dia a dia, com a qualidade e a tecnologia Eurofarma. Os produtos são dermatologicamente testados e não são testados em animais.",
  },
  {
    id: "frete-gratis",
    categoria: "compras",
    titulo: "Frete grátis",
    tags: ["frete", "entrega", "frete gratis", "valor minimo", "envio", "cep"],
    url: "https://www.oaz.vc",
    conteudo:
      "O frete é grátis para todo o Brasil em compras acima de R$ 129,90. Abaixo desse valor, o frete é calculado no carrinho de acordo com o CEP informado.",
  },
  {
    id: "cupom-bemvindo",
    categoria: "promocoes",
    titulo: "Cupom de primeira compra (BEMVINDO)",
    tags: ["cupom", "desconto", "primeira compra", "bemvindo", "promocao", "codigo"],
    url: "https://www.oaz.vc",
    conteudo:
      "Use o cupom BEMVINDO e ganhe 10% de desconto na primeira compra. Basta inserir o código no carrinho antes de finalizar o pedido.",
  },
  {
    id: "pagamento",
    categoria: "compras",
    titulo: "Formas de pagamento",
    tags: ["pagamento", "pix", "cartao", "parcelamento", "desconto pix", "pagar", "parcelar"],
    url: "https://www.oaz.vc",
    conteudo:
      "Aceitamos pagamento via PIX, com 5% de desconto adicional, e cartão de crédito com parcelamento em até 3x sem juros (conforme o valor do produto).",
  },
  {
    id: "prod-repelente",
    categoria: "produtos",
    titulo: "Repelente 10h de proteção 200ml",
    tags: ["repelente", "mosquito", "dengue", "protecao", "10 horas", "pernilongo", "inseto"],
    url: "https://www.oaz.vc",
    conteudo:
      "O Repelente OAZ oferece até 10 horas de proteção contra mosquitos. Frasco de 200ml. Preço: R$ 31,99 (5% de desconto no PIX ou em até 3x de R$ 10,66).",
  },
  {
    id: "prod-pos-picada",
    categoria: "produtos",
    titulo: "Pós Picada Gel 15ml",
    tags: ["pos picada", "gel", "alivio", "coceira", "picada"],
    url: "https://www.oaz.vc",
    conteudo:
      "Gel Pós Picada OAZ de 15ml, para alívio da sensação de coceira e desconforto após picadas de insetos. Preço: R$ 16,99 (em até 3x de R$ 5,66).",
  },
  {
    id: "prod-protetor-solar-facial",
    categoria: "produtos",
    titulo: "Protetor Solar Facial FPS 70 40g",
    tags: ["protetor solar", "facial", "fps 70", "rosto", "sol", "fps"],
    url: "https://www.oaz.vc",
    conteudo:
      "Protetor Solar Facial OAZ FPS 70, 40g, com alta proteção contra os raios UVA/UVB. Preço: R$ 48,99 (em até 3x de R$ 16,33).",
  },
  {
    id: "prod-protetor-capilar",
    categoria: "produtos",
    titulo: "Protetor Capilar Spray Sol&Calor Leave-In 120ml",
    tags: ["protetor capilar", "cabelo", "leave-in", "spray", "sol", "calor"],
    url: "https://www.oaz.vc",
    conteudo:
      "Protetor Capilar OAZ em spray, linha Sol&Calor, leave-in de 120ml, para proteger os cabelos da ação do sol e do calor. Preço: R$ 36,00 (em até 3x de R$ 12,00).",
  },
  {
    id: "prod-solar-stick",
    categoria: "produtos",
    titulo: "Protetor Solar Stick Facial FPS 70",
    tags: ["stick", "bastao", "protetor solar", "facial", "fps 70", "cores", "provador"],
    url: "https://www.oaz.vc",
    conteudo:
      "O Protetor Solar Stick Facial OAZ FPS 70 está disponível em 4 cores e oferece proteção prática em formato bastão. É possível experimentar as cores virtualmente pelo provador online da OAZ.",
  },
  {
    id: "linha-higiene-bucal",
    categoria: "produtos",
    titulo: "Linha de Higiene Bucal",
    tags: ["higiene bucal", "enxaguante", "boca", "oral", "bucal", "dente"],
    url: "https://www.oaz.vc",
    conteudo:
      "A OAZ possui uma linha de higiene bucal, incluindo enxaguante bucal, para o cuidado diário da boca.",
  },
  {
    id: "linha-skincare",
    categoria: "produtos",
    titulo: "Linha Dia a Dia / Skincare",
    tags: ["hidratante", "sabonete", "pele", "skincare", "corpo", "dia a dia"],
    url: "https://www.oaz.vc",
    conteudo:
      "A linha Dia a Dia da OAZ inclui hidratantes e sabonetes para o cuidado da pele no cotidiano.",
  },
  {
    id: "trocas-devolucoes",
    categoria: "pos-venda",
    titulo: "Trocas e devoluções",
    tags: ["troca", "devolucao", "arrependimento", "reembolso", "direito", "trocar", "devolver"],
    url: "https://www.oaz.vc/institucional/politica-de-privacidade",
    conteudo:
      "Conforme o Código de Defesa do Consumidor, você pode solicitar a devolução por arrependimento em até 7 dias corridos após o recebimento. Para trocas por defeito ou dúvidas sobre um pedido específico, fale com o atendimento OAZ.",
  },
  {
    id: "rastreamento",
    categoria: "pos-venda",
    titulo: "Rastreamento e status do pedido",
    tags: ["pedido", "rastreamento", "entrega", "status", "onde esta", "codigo", "chegou"],
    url: "https://www.oaz.vc",
    conteudo:
      "Após a confirmação do pagamento e o envio, o código de rastreamento é enviado por e-mail. Para consultar um pedido específico, tenha em mãos o número do pedido e use os canais de atendimento.",
  },
  {
    id: "canais-atendimento",
    categoria: "atendimento",
    titulo: "Canais de atendimento",
    tags: ["atendimento", "contato", "sac", "falar com humano", "ajuda", "suporte", "reclamacao"],
    url: "https://www.oaz.vc",
    conteudo:
      "Para falar com uma pessoa do time de atendimento da OAZ — pedidos, pagamentos, trocas ou reclamações — utilize os canais oficiais de atendimento ao consumidor da OAZ/Eurofarma disponíveis no site.",
  },
  {
    id: "privacidade-lgpd",
    categoria: "institucional",
    titulo: "Privacidade e proteção de dados (LGPD)",
    tags: ["privacidade", "lgpd", "dados", "protecao de dados", "cadastro"],
    url: "https://www.oaz.vc/institucional/politica-de-privacidade",
    conteudo:
      "A OAZ/Eurofarma trata dados pessoais em conformidade com a LGPD. Detalhes sobre quais dados são coletados e como são utilizados estão na Política de Privacidade do site.",
  },
];
