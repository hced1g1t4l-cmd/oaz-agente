/**
 * Base de conhecimento do MODO DEMO do Agente OAZ.
 * Gerada a partir do scrape real de oaz.vc (catálogo VTEX) + artigos institucionais.
 * Roda 100% no navegador (sem backend) só para TESTE. Espelha ingestion/knowledge_base.json.
 */
window.OAZ_CATS = {
  "protetor-solar": {
    "label": "Protetores Solares",
    "url": "https://www.oaz.vc/protetor-solar"
  },
  "repelente": {
    "label": "Repelentes",
    "url": "https://www.oaz.vc/repelentes"
  },
  "hidratante": {
    "label": "Hidratantes",
    "url": "https://www.oaz.vc/hidratantes"
  },
  "pos-sol": {
    "label": "Pós-Sol",
    "url": "https://www.oaz.vc/pos-sol"
  },
  "higiene-bucal": {
    "label": "Higiene Bucal",
    "url": "https://www.oaz.vc/higiene-bucal"
  },
  "sabonete": {
    "label": "Sabonetes",
    "url": "https://www.oaz.vc/sabonetes"
  },
  "cuidados": {
    "label": "Cuidados pessoais",
    "url": "https://www.oaz.vc"
  }
};
window.OAZ_KB = [
  {
    "id": "o-que-e-fps",
    "categoria": "glossario",
    "titulo": "O que é FPS",
    "tags": [
      "fps",
      "o que e fps",
      "fator de protecao solar",
      "spf",
      "protecao solar",
      "significa",
      "protecao uvb"
    ],
    "url": "https://www.oaz.vc/protetor-solar",
    "conteudo": "FPS quer dizer Fator de Proteção Solar. Ele indica o nível de proteção do protetor contra os raios UVB — os principais responsáveis pelas queimaduras solares. Quanto maior o FPS, maior a barreira: FPS 30 filtra cerca de 97% dos raios UVB e FPS 50, cerca de 98%. Nenhum protetor bloqueia 100%. No dia a dia, o ideal é usar FPS 30 ou mais e reaplicar a cada 2 horas (ou depois de suar ou entrar na água). Dica: além do FPS (que mede UVB), procure também proteção UVA no rótulo (indicada pelo PPD), que ajuda contra o envelhecimento e as manchas. Os protetores da OAZ vão de FPS 30 a 70 — se quiser, posso te ajudar a escolher o ideal pra você."
  },
  {
    "id": "uva-uvb",
    "categoria": "glossario",
    "titulo": "UVA e UVB (e PPD)",
    "tags": [
      "uva",
      "uvb",
      "ppd",
      "raios solares",
      "amplo espectro",
      "o que e uva",
      "diferenca uva uvb"
    ],
    "url": "https://www.oaz.vc/protetor-solar",
    "conteudo": "UVA e UVB são tipos de raios ultravioleta do sol. O UVB atinge a camada mais superficial da pele e causa as queimaduras — é o que o FPS mede. O UVA penetra mais fundo e está ligado ao envelhecimento precoce e às manchas — a proteção contra ele é indicada pelo PPD no rótulo. Um bom protetor é de amplo espectro, ou seja, protege dos dois. Por isso, olhe tanto o FPS quanto o PPD ao escolher."
  },
  {
    "id": "o-que-e-pos-sol",
    "categoria": "glossario",
    "titulo": "O que é pós-sol",
    "tags": [
      "pos sol",
      "pos-sol",
      "o que e pos sol",
      "depois do sol",
      "hidratacao pos sol",
      "prolongar bronzeado"
    ],
    "url": "https://www.oaz.vc/pos-sol",
    "conteudo": "Pós-sol é o cuidado com a pele depois da exposição ao sol. São produtos que hidratam, refrescam e ajudam a acalmar a pele, reduzindo o ressecamento e ajudando a prolongar o bronzeado. A OAZ tem uma linha Pós-Sol pra isso — quer que eu te mostre as opções?"
  },
  {
    "id": "sobre-oaz",
    "categoria": "institucional",
    "titulo": "Sobre a OAZ",
    "tags": [
      "oaz",
      "eurofarma",
      "marca",
      "quem somos",
      "empresa",
      "sobre"
    ],
    "url": "https://www.oaz.vc/somos-oaz",
    "conteudo": "A OAZ é a marca de higiene e cuidado pessoal da Eurofarma. Oferece uma linha completa de produtos para pele, boca e para o dia a dia — protetor solar, repelente, pós-sol, higiene bucal, hidratantes e sabonetes — com a qualidade e a tecnologia Eurofarma. Os produtos são dermatologicamente testados e não são testados em animais."
  },
  {
    "id": "frete-gratis",
    "categoria": "compras",
    "titulo": "Frete grátis",
    "tags": [
      "frete",
      "entrega",
      "frete gratis",
      "valor minimo",
      "envio",
      "cep",
      "prazo"
    ],
    "url": "https://www.oaz.vc",
    "conteudo": "O frete é grátis para todo o Brasil em compras acima de R$ 129,90. Abaixo desse valor, o frete é calculado no carrinho conforme o CEP."
  },
  {
    "id": "cupom-bemvindo",
    "categoria": "promocoes",
    "titulo": "Cupom de primeira compra (BEMVINDO)",
    "tags": [
      "cupom",
      "desconto",
      "primeira compra",
      "bemvindo",
      "promocao",
      "codigo"
    ],
    "url": "https://www.oaz.vc",
    "conteudo": "Use o cupom BEMVINDO e ganhe 10% de desconto na primeira compra. Insira o código no carrinho antes de finalizar o pedido."
  },
  {
    "id": "pagamento",
    "categoria": "compras",
    "titulo": "Formas de pagamento",
    "tags": [
      "pagamento",
      "pix",
      "cartao",
      "parcelamento",
      "desconto pix",
      "pagar",
      "parcelar"
    ],
    "url": "https://www.oaz.vc",
    "conteudo": "Aceitamos PIX (com desconto adicional) e cartão de crédito com parcelamento. As condições exatas aparecem no carrinho e na página de cada produto."
  },
  {
    "id": "trocas-devolucoes",
    "categoria": "pos-venda",
    "titulo": "Trocas e devoluções",
    "tags": [
      "troca",
      "devolucao",
      "arrependimento",
      "reembolso",
      "direito",
      "trocar",
      "devolver"
    ],
    "url": "https://www.oaz.vc/institucional/politica-de-privacidade",
    "conteudo": "Pelo Código de Defesa do Consumidor, você pode desistir da compra em até 7 dias corridos após o recebimento. Para trocas por defeito ou dúvidas de um pedido específico, escreva para o atendimento OAZ pelo e-mail ecommerce@eurofarma.com."
  },
  {
    "id": "rastreamento",
    "categoria": "pos-venda",
    "titulo": "Rastreamento e status do pedido",
    "tags": [
      "pedido",
      "rastreamento",
      "entrega",
      "status",
      "onde esta",
      "codigo",
      "chegou",
      "acompanhar"
    ],
    "url": "https://www.oaz.vc",
    "conteudo": "Após a confirmação do pagamento e o envio, o código de rastreamento é enviado por e-mail. Para consultar um pedido específico, tenha o número do pedido em mãos e escreva para ecommerce@eurofarma.com (atendimento seg–qui 9h–18h, sex 9h–12h)."
  },
  {
    "id": "canais-atendimento",
    "categoria": "atendimento",
    "titulo": "Canais de atendimento",
    "tags": [
      "canais",
      "canal",
      "atendimento",
      "contato",
      "sac",
      "falar com humano",
      "ajuda",
      "suporte",
      "reclamacao",
      "email",
      "e-mail",
      "telefone",
      "whatsapp",
      "horario",
      "fale conosco",
      "atendente",
      "como falar",
      "entrar em contato"
    ],
    "url": "https://www.oaz.vc",
    "conteudo": "O atendimento ao cliente da OAZ é feito por e-mail: ecommerce@eurofarma.com. O horário de atendimento é de segunda a quinta-feira, das 9h às 18h, e às sextas-feiras, das 9h às 12h (exceto feriados nacionais). O Serviço de Atendimento ao Cliente é prestado pela Eurofarma e pela Drogaria X Farmácia S.A. Não há telefone ou WhatsApp divulgado no site para atendimento; o canal oficial é o e-mail.",
    "email": "ecommerce@eurofarma.com",
    "horario": "Segunda a quinta-feira das 9h às 18h; sexta-feira das 9h às 12h (exceto feriados nacionais)."
  },
  {
    "id": "privacidade-lgpd",
    "categoria": "institucional",
    "titulo": "Privacidade e proteção de dados (LGPD)",
    "tags": [
      "privacidade",
      "lgpd",
      "dados",
      "protecao de dados",
      "cadastro"
    ],
    "url": "https://www.oaz.vc/institucional/politica-de-privacidade",
    "conteudo": "A OAZ/Eurofarma trata dados pessoais conforme a LGPD. Os detalhes de quais dados são coletados e como são usados estão na Política de Privacidade do site."
  },
  {
    "id": "prod-26481",
    "categoria": "produtos",
    "subcategoria": "repelente",
    "sublabel": "Repelente",
    "titulo": "Pos Picada Gel 15ML",
    "preco": "R$ 16,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156647/01.png?v=639153088181270000",
    "url": "https://www.oaz.vc/oaz-pos-picada-gel-15ml/p",
    "tags": [
      "15ml",
      "gel",
      "picada",
      "pos",
      "repelente"
    ],
    "conteudo": "Pos Picada Gel 15ML. Preço: R$ 16,99. OAZ Gel Pós-Picada de Insetos alivia a coceira e o desconforto causados por picadas. Sua fórmula calmante e hidratante é rapidamente absorvida, sem causar ardência. Hipoalergênico e dermatologicamente testado."
  },
  {
    "id": "prod-25830",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar Facial FPS 50 40G",
    "preco": "R$ 37,99",
    "fps": "50",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155955/OAZ-Protetor-Solar-50-Bisnaga-Incolor--1-.png?v=638955480710100000",
    "url": "https://www.oaz.vc/oaz-prot-sol-facial-50-fps-40g/p",
    "tags": [
      "40g",
      "50",
      "facial",
      "fps",
      "fps 50",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar Facial FPS 50 40G. Preço: R$ 37,99. Protetor solar facial FPS 50 com ação hidratante, antioxidante e anti-idade. Oferece toque seco, firmeza e viço à pele, além de ser resistente à água e ao suor. Com Niacinamida, Vitamina E, Ácido Hialurônico e Biossacarídeos, é dermatologicamente testado e ideal para uso diário."
  },
  {
    "id": "prod-37456",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Capilar Spray Sol&Calor Leave-In OAZ 120ml",
    "preco": "R$ 36,00",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156594/01.png?v=639143614112930000",
    "url": "https://www.oaz.vc/protetor-capilar--spray-sol-calor/p",
    "tags": [
      "120ml",
      "calor",
      "capilar",
      "leave-in",
      "oaz",
      "protetor",
      "protetor-solar",
      "sol",
      "spray"
    ],
    "conteudo": "Protetor Capilar Spray Sol&Calor Leave-In OAZ 120ml. Preço: R$ 36,00. O Protetor Capilar Spray Sol & Calor Leave-In OAZ foi desenvolvido para ser um grande aliado na sua rotina de autocuidado. Com a qualidade da Eurofarma, ele ajuda a proteger os cabelos contra os danos causados pela exposição ao sol, mar, piscina e ao calor de equipamentos mecânicos (secador e chapin"
  },
  {
    "id": "prod-37475",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR SOLAR STICK COR 4",
    "preco": "R$ 96,00",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156640/01.png?v=639148721583170000",
    "url": "https://www.oaz.vc/protetor-facial--solar-stick-cor4/p",
    "tags": [
      "cor",
      "oaz",
      "protetor",
      "protetor-solar",
      "solar",
      "stick"
    ],
    "conteudo": "OAZ PROTETOR SOLAR STICK COR 4. Preço: R$ 96,00. OAZ Protetor Solar Stick Facial - Proteção muito alta UVA/UVB em um formato que acompanha o dia a dia. Precisão na aplicação e praticidade na rotina. Com Vitamina E, disponível na versão incolor e em 4 tonalidades. Principais benefícios Muito alta proteção UVA/UVB, com FPS 70 Uniformização da pele P"
  },
  {
    "id": "prod-37474",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR SOLAR STICK COR 3",
    "preco": "R$ 96,00",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156633/01.png?v=639148721293670000",
    "url": "https://www.oaz.vc/protetor-facial--solar-stick-cor3/p",
    "tags": [
      "cor",
      "oaz",
      "protetor",
      "protetor-solar",
      "solar",
      "stick"
    ],
    "conteudo": "OAZ PROTETOR SOLAR STICK COR 3. Preço: R$ 96,00. OAZ Protetor Solar Stick Facial - Proteção muito alta UVA/UVB em um formato que acompanha o dia a dia. Precisão na aplicação e praticidade na rotina. Com Vitamina E, disponível na versão incolor e em 4 tonalidades. Principais benefícios Muito alta proteção UVA/UVB, com FPS 70 Uniformização da pele P"
  },
  {
    "id": "prod-37473",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR SOLAR STICK COR 2",
    "preco": "R$ 96,00",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156626/01.png?v=639148720544230000",
    "url": "https://www.oaz.vc/protetor-facial--solar-stick-1/p",
    "tags": [
      "cor",
      "oaz",
      "protetor",
      "protetor-solar",
      "solar",
      "stick"
    ],
    "conteudo": "OAZ PROTETOR SOLAR STICK COR 2. Preço: R$ 96,00. OAZ Protetor Solar Stick Facial - Proteção muito alta UVA/UVB em um formato que acompanha o dia a dia. Precisão na aplicação e praticidade na rotina. Com Vitamina E, disponível na versão incolor e em 4 tonalidades. Principais benefícios Muito alta proteção UVA/UVB, com FPS 70 Uniformização da pele P"
  },
  {
    "id": "prod-37472",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR SOLAR STICK COR 1",
    "preco": "R$ 96,00",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156619/01.png?v=639148720191300000",
    "url": "https://www.oaz.vc/protetor-facial--solar-stick--cor1/p",
    "tags": [
      "cor",
      "oaz",
      "protetor",
      "protetor-solar",
      "solar",
      "stick"
    ],
    "conteudo": "OAZ PROTETOR SOLAR STICK COR 1. Preço: R$ 96,00. OAZ Protetor Solar Stick Facial - Proteção muito alta UVA/UVB em um formato que acompanha o dia a dia. Precisão na aplicação e praticidade na rotina. Com Vitamina E, disponível na versão incolor e em 4 tonalidades. Principais benefícios Muito alta proteção UVA/UVB, com FPS 70 Uniformização da pele P"
  },
  {
    "id": "prod-37471",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR SOLAR STICK INCOLOR",
    "preco": "R$ 90,00",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156605/01.png?v=639148718924200000",
    "url": "https://www.oaz.vc/protetor-facial--solar-stick/p",
    "tags": [
      "incolor",
      "oaz",
      "protetor",
      "protetor-solar",
      "solar",
      "stick"
    ],
    "conteudo": "OAZ PROTETOR SOLAR STICK INCOLOR. Preço: R$ 90,00. OAZ Protetor Solar Stick Facial - Proteção muito alta UVA/UVB em um formato que acompanha o dia a dia. Precisão na aplicação e praticidade na rotina. Com Vitamina E, disponível na versão incolor e em 4 tonalidades. Principais benefícios Muito alta proteção UVA/UVB, com FPS 70 Uniformização da pele P"
  },
  {
    "id": "prod-37468",
    "categoria": "produtos",
    "subcategoria": "cuidados",
    "sublabel": "Cuidados pessoais",
    "titulo": "Necessaire OAZ \"A felicidade esta no (a)mar - Brinde exclusivo",
    "preco": "R$ 0,01",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156547/3.png?v=639084378399400000",
    "url": "https://www.oaz.vc/necessaire-oaz-a-felicidade-esta-no-amar/p",
    "tags": [
      "(a)mar",
      "brinde",
      "cuidados",
      "esta",
      "exclusivo",
      "felicidade",
      "necessaire",
      "oaz"
    ],
    "conteudo": "Necessaire OAZ \"A felicidade esta no (a)mar - Brinde exclusivo. Preço: R$ 0,01. Brinde exclusivo mês do consumidor: Necessaire OAZ \"A felicidade esta no (a)mar\""
  },
  {
    "id": "prod-37467",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR FACIAL FPS70 COR 4",
    "preco": "R$ 57,43",
    "fps": "70",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156543/_OAZ%20Facial%20Bisnaga%20e%20cartucho%20COR%204.png?v=639077311738570000",
    "url": "https://www.oaz.vc/oaz-kit-prot-solar-70fps-cor4-1/p",
    "tags": [
      "70",
      "cor",
      "facial",
      "fps 70",
      "fps70",
      "oaz",
      "protetor",
      "protetor-solar"
    ],
    "conteudo": "OAZ PROTETOR FACIAL FPS70 COR 4. Preço: R$ 57,43. O OAZ Protetor Facial FPS 70 Cor 4 oferece alta proteção diária contra os raios UVA e UVB, ajudando a prevenir queimaduras solares, manchas e o envelhecimento precoce da pele. Com textura leve e toque seco, é ideal para uso diário, inclusive antes da maquiagem. A versão Cor 4 proporciona cobertura u"
  },
  {
    "id": "prod-37466",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR FACIAL FPS70 COR 3",
    "preco": "R$ 57,43",
    "fps": "70",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156540/_OAZ%20Facial%20Bisnaga%20e%20cartucho%20COR%203.png?v=639077309640830000",
    "url": "https://www.oaz.vc/oaz-kit-prot-solar-70fps-cor3-1/p",
    "tags": [
      "70",
      "cor",
      "facial",
      "fps 70",
      "fps70",
      "oaz",
      "protetor",
      "protetor-solar"
    ],
    "conteudo": "OAZ PROTETOR FACIAL FPS70 COR 3. Preço: R$ 57,43. O OAZ Protetor Facial FPS 70 Cor 3 oferece alta proteção diária contra os raios UVA e UVB, ajudando a prevenir queimaduras solares, manchas e o envelhecimento precoce da pele. Com textura leve e toque seco, é ideal para uso diário, inclusive antes da maquiagem. A versão Cor 3 proporciona cobertura u"
  },
  {
    "id": "prod-37463",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR FACIAL FPS70 COR 2",
    "preco": "R$ 57,43",
    "fps": "70",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156531/_OAZ-Facial-Bisnaga-e-cartucho-COR-2.png?v=639142159165600000",
    "url": "https://www.oaz.vc/oaz-kit-prot-solar-70fps-cor2-1/p",
    "tags": [
      "70",
      "cor",
      "facial",
      "fps 70",
      "fps70",
      "oaz",
      "protetor",
      "protetor-solar"
    ],
    "conteudo": "OAZ PROTETOR FACIAL FPS70 COR 2. Preço: R$ 57,43. O OAZ Protetor Facial FPS 70 Cor 2 oferece alta proteção diária contra os raios UVA e UVB, ajudando a prevenir queimaduras solares, manchas e o envelhecimento precoce da pele. Com textura leve e toque seco, é ideal para uso diário, inclusive antes da maquiagem A versão Cor 2 proporciona cobertura un"
  },
  {
    "id": "prod-37459",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR FACIAL FPS70 COR 1",
    "preco": "R$ 57,43",
    "fps": "70",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156519/_OAZ-Facial-Bisnaga-e-cartucho-COR-1.png?v=639077280641700000",
    "url": "https://www.oaz.vc/oaz-kit-prot-solar-70fps-cor1/p",
    "tags": [
      "70",
      "cor",
      "facial",
      "fps 70",
      "fps70",
      "oaz",
      "protetor",
      "protetor-solar"
    ],
    "conteudo": "OAZ PROTETOR FACIAL FPS70 COR 1. Preço: R$ 57,43. O OAZ Protetor Facial FPS 70 Cor 1 oferece alta proteção diária contra os raios UVA e UVB , ajudando a prevenir queimaduras solares, manchas e o envelhecimento precoce da pele. Com textura leve e toque seco, é ideal para uso diário, inclusive antes da maquiagem. A versão Cor 1 proporciona cobertura "
  },
  {
    "id": "prod-37457",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "KIT OAZ PROT SOLAR 70FPS 200ML+40ML",
    "preco": "R$ 69,00",
    "fps": "70",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156514/Protetor-solar_OAZ-Oferta.png?v=639072032882530000",
    "url": "https://www.oaz.vc/oaz-kit-prot-solar-70fps-200ml-40ml/p",
    "tags": [
      "200ml+40ml",
      "70",
      "70fps",
      "fps 70",
      "kit",
      "oaz",
      "prot",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "KIT OAZ PROT SOLAR 70FPS 200ML+40ML. Preço: R$ 69,00. OAZ Kit Protetor Solar FPS 70 – 200ml + 40ml O OAZ Kit Protetor Solar FPS 70 oferece alta proteção contra os raios UVA e UVB, ajudando a prevenir queimaduras solares, manchas e o envelhecimento precoce da pele. Ideal para uso diário e exposição intensa ao sol, sua fórmula proporciona proteção eficaz"
  },
  {
    "id": "prod-37455",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Capilar Creme Sol&Calor Leave-In  120ml",
    "preco": "R$ 35,00",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156583/01.png?v=639143606308800000",
    "url": "https://www.oaz.vc/protetor-capilar--creme-sol-calor/p",
    "tags": [
      "120ml",
      "calor",
      "capilar",
      "creme",
      "leave-in",
      "protetor",
      "protetor-solar",
      "sol"
    ],
    "conteudo": "Protetor Capilar Creme Sol&Calor Leave-In  120ml. Preço: R$ 35,00. O protetor capilar creme da linha Sol & Calor, desenvolvido com a chancela da Eurofarma, atua como uma barreira suave que ajuda a minimizar os impactos causados por ferramentas térmicas (secador e chapinha), exposição solar e contato com a água da piscina ou do mar. Sua formulação em creme favorece "
  },
  {
    "id": "prod-25831",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar Facial FPS 70 40G",
    "preco": "R$ 48,99",
    "fps": "70",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155951/OAZ-Protetor-Solar-70-Bisnaga-Incolor--1-.png?v=638955480593070000",
    "url": "https://www.oaz.vc/oaz-prot-sol-facial-70-fps-40g/p",
    "tags": [
      "40g",
      "70",
      "facial",
      "fps",
      "fps 70",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar Facial FPS 70 40G. Preço: R$ 48,99. Protetor solar facial FPS 70 com ação hidratante, antioxidante e anti-idade. Oferece toque seco, firmeza e viço à pele, além de ser resistente à água e ao suor. Com Niacinamida, Vitamina E, Ácido Hialurônico e Biossacarídeos, é dermatologicamente testado e ideal para uso diário."
  },
  {
    "id": "prod-25726",
    "categoria": "produtos",
    "subcategoria": "repelente",
    "sublabel": "Repelente",
    "titulo": "Repelente Aerossol 200ml",
    "preco": "R$ 23,90",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155902/7891317041410_0.jpg?v=638863844301670000",
    "url": "https://www.oaz.vc/oaz-repelente-aerossol/p",
    "tags": [
      "200ml",
      "aerossol",
      "repelente"
    ],
    "conteudo": "Repelente Aerossol 200ml. Preço: R$ 23,90. Repelente OAZ foi cuidadosamente desenvolvido para fornecer alta proteção contra insetos que transmitem Dengue, Zika, Chikungunya e Malária. Sua fórmula contém 7,5% de DEET, não é oleosa e proporciona hidratação para a pele."
  },
  {
    "id": "prod-25322",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Kit Família Protetor FPS 50 200ML + Protetor Infantil FPS 60 125ML",
    "preco": "R$ 70,99",
    "fps": "50",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156336/OAZ_Kit_FPS50_200ml_125ml_fr_pack3d.png?v=639004573995100000",
    "url": "https://www.oaz.vc/oaz-kit-familia-protetor-fps-50-200ml-protetor-infantil-fps-60-125ml/p",
    "tags": [
      "125ml",
      "200ml",
      "50",
      "família",
      "fps",
      "fps 50",
      "infantil",
      "kit",
      "protetor",
      "protetor-solar"
    ],
    "conteudo": "Kit Família Protetor FPS 50 200ML + Protetor Infantil FPS 60 125ML. Preço: R$ 70,99. Kit promocional com 1 protetor solar FPS 50 200ml + 1 protetor kids bob esponja FPS 60 125ml"
  },
  {
    "id": "prod-24825",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Kit Proteção Aerossol",
    "preco": "R$ 69,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155656/78913170320117.png.png?v=638749246511170000",
    "url": "https://www.oaz.vc/kit-protecao-aerossol/p",
    "tags": [
      "aerossol",
      "kit",
      "protetor-solar",
      "proteção"
    ],
    "conteudo": "Kit Proteção Aerossol. Preço: R$ 69,99. Kit \"Proteção Aerossol\" OAZ, que inclui 1 unidade do Protetor Solar Aerossol OAZ FPS 30 200ml e 1 unidade do Pós-Sol Aerossol OAZ 200ml. Este kit oferece uma combinação perfeita de proteção solar e hidratação pós-sol em formatos práticos e de fácil aplicação, ideais para quem busca praticidade e efi"
  },
  {
    "id": "prod-24821",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Kit Proteção e Repelente Infantil",
    "preco": "R$ 51,99",
    "fps": "",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155652/78913170320113.png.png?v=638749244492330000",
    "url": "https://www.oaz.vc/kit-protecao-e-repelente-kids/p",
    "tags": [
      "infantil",
      "kit",
      "protetor-solar",
      "proteção",
      "repelente"
    ],
    "conteudo": "Kit Proteção e Repelente Infantil. Preço: R$ 51,99. Kit \"Proteção e Repelente Kids\" Bob Esponja, que inclui 1 unidade do Protetor Solar Kids Bob Esponja FPS 60 125ml e 1 unidade do Repelente Kids Bob Esponja 100ml. Desenvolvido especialmente para crianças, este kit oferece proteção solar de alta eficiência e defesa contra insetos de forma divertida e"
  },
  {
    "id": "prod-24818",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Kit Proteção + Creme Labial",
    "preco": "R$ 42,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155649/78913170320110.png.png?v=638749242287530000",
    "url": "https://www.oaz.vc/kit-protecao-creme-labial/p",
    "tags": [
      "creme",
      "kit",
      "labial",
      "protetor-solar",
      "proteção"
    ],
    "conteudo": "Kit Proteção + Creme Labial. Preço: R$ 42,99. Kit \"Proteção + Creme Labial\" OAZ, que inclui 1 unidade do Protetor Solar OAZ FPS 50 200ml e 1 unidade do Hidratante Labial Cereja OAZ 10ml. Este kit oferece uma combinação perfeita de proteção solar e hidratação labial, garantindo cuidados completos para você aproveitar o sol com segurança e confor"
  },
  {
    "id": "prod-24817",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Kit Proteção Adulto",
    "preco": "R$ 39,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155648/78913170320109.png.png?v=638749238318000000",
    "url": "https://www.oaz.vc/kit-protecao-adulto/p",
    "tags": [
      "adulto",
      "kit",
      "protetor-solar",
      "proteção"
    ],
    "conteudo": "Kit Proteção Adulto. Preço: R$ 39,99. Kit \"Proteção Adulto\" OAZ, que inclui 1 unidade do Protetor Solar OAZ FPS 30 200ml e 1 unidade do Pós-Sol Gel OAZ 120ml. Este kit foi desenvolvido para oferecer uma rotina completa de proteção e cuidados pós-sol, garantindo que sua pele esteja sempre hidratada, protegida e saudável, seja na praia, n"
  },
  {
    "id": "prod-16916",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Escova Dental ULTRA MAX Cores Sortidas",
    "preco": "R$ 12,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155574/46.jpg?v=638681604039930000",
    "url": "https://www.oaz.vc/escova-dental-ultra-max/p",
    "tags": [
      "cores",
      "dental",
      "escova",
      "higiene-bucal",
      "max",
      "sortidas",
      "ultra"
    ],
    "conteudo": "Escova Dental ULTRA MAX Cores Sortidas. Preço: R$ 12,99. Com cerdas macias e ultrafinas, nossa escova Ultra Max proporciona uma limpeza mais confortável e eficiente quando comparada a escovas de dente tradicionais. Ela possui o formato ideal para a limpeza completa de gengivas e dentes e está disponível em 4 cores. Cores Sortidas: ( LARANJA, CINZA, VERDE,"
  },
  {
    "id": "prod-16911",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Escova Dental Gengiva PRO Cores Variadas",
    "preco": "R$ 10,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155569/11.jpg?v=638681594219130000",
    "url": "https://www.oaz.vc/escova-dental-gengiva-pro/p",
    "tags": [
      "cores",
      "dental",
      "escova",
      "gengiva",
      "higiene-bucal",
      "pro",
      "variadas"
    ],
    "conteudo": "Escova Dental Gengiva PRO Cores Variadas. Preço: R$ 10,99. Com cerdas macias no centro da cabeça e com cerdas massageadoras nas extremidades, nossa escova Gengiva Pro se torna a escova ideal para auxiliar no tratamento gengival, ajudando a acalmar gengivas irritadas e se mostrando uma grande aliada para quem apresenta sangramento gengival. Disponível em 4 c"
  },
  {
    "id": "prod-16906",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Escova Dental Deep Clean Cores Sortidas",
    "preco": "R$ 10,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155563/1.jpg?v=638679085988770000",
    "url": "https://www.oaz.vc/escova-dental-deep-clean/p",
    "tags": [
      "clean",
      "cores",
      "deep",
      "dental",
      "escova",
      "higiene-bucal",
      "sortidas"
    ],
    "conteudo": "Escova Dental Deep Clean Cores Sortidas. Preço: R$ 10,99. Escova de dente com cerdas anatômicas e ultrafinas, proporcionando uma escovação suave com maior eficiência e durabilidade que as escovas tradicionais. Possui carvão ativado na fórmula com ação bactericida e que auxilia no clareamento dental. Disponível em 4 cores. Para uma melhor experiência, utili"
  },
  {
    "id": "prod-16901",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Escova Dental Soft Class Cores Sortidas",
    "preco": "R$ 7,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155558/Template-foto-e-com--4-.jpg?v=638679057128270000",
    "url": "https://www.oaz.vc/escova-dental-soft-class-oaz/p",
    "tags": [
      "class",
      "cores",
      "dental",
      "escova",
      "higiene-bucal",
      "soft",
      "sortidas"
    ],
    "conteudo": "Escova Dental Soft Class Cores Sortidas. Preço: R$ 7,99. Com cerdas macias e espiraladas, nossa escova Soft Class possui uma ponta de dupla ação, que por seu formato alongado possui uma ponta limpadora que permite alcançar os dentes posteriores. Disponível em 4 cores e também no formato em kit. Cores Sortidas: ( AMARELA, CINZA, ROXA, AZUL)"
  },
  {
    "id": "prod-130",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar FPS 50 200ml",
    "preco": "R$ 43,99",
    "fps": "50",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156715/01.png?v=639201696183100000",
    "url": "https://www.oaz.vc/protetor-solar-corporal-locao-fps-50-oaz-200ml1/p",
    "tags": [
      "200ml",
      "50",
      "fps",
      "fps 50",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar FPS 50 200ml. Preço: R$ 43,99. O protetor solar 50 FPS em creme da OAZ mantém o seu rosto e corpo hidratados enquanto você se protege dos efeitos nocivos dos raios UVA/UVB. O produto é vegano e deixa a pele com toque seco. Sem adição de parabenos e dermatologicamente testado."
  },
  {
    "id": "prod-129",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal VALDA 250ml",
    "preco": "R$ 16,80",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156420/OAZ_VALDA_250ml_fr.png?v=639004613722000000",
    "url": "https://www.oaz.vc/oaz-valda-antisseptico-bucal-zero-alcool-250ml-eurofarma1/p",
    "tags": [
      "250ml",
      "bucal",
      "enxaguante",
      "higiene-bucal",
      "valda"
    ],
    "conteudo": "Enxaguante Bucal VALDA 250ml. Preço: R$ 16,80. O enxaguante bucal OAZ VALDA foi feito para você manter sua boca sempre limpa, protegida e saudável. Possui V-FR3SH, combinação exclusiva de Mentol, Eucaliptol e Timol, ativos que tem alto poder bactericida e trazem grande refrescância. O enxaguante possui ação 5 em 1 te auxilia no combate de 99% do"
  },
  {
    "id": "prod-127",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Fio Dental 100+25m",
    "preco": "R$ 13,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156364/OAZ_fio_dental_125m_cartela.png?v=639004592585930000",
    "url": "https://www.oaz.vc/oaz-fio-dental-menta1/p",
    "tags": [
      "100+25m",
      "dental",
      "fio",
      "higiene-bucal"
    ],
    "conteudo": "Fio Dental 100+25m. Preço: R$ 13,99. Ajuda a manter a gengiva saudavel, evita o acúmulo de placas, previne caries, remove até mesmo as placas mais dificeis de alcançar, sabor menta"
  },
  {
    "id": "prod-125",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal PeriOAZ Gengivas saudáveis - Menta 250ml",
    "preco": "R$ 23,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156359/OAZ_enxaguante_perioaz_250ml_curvo_fr.png?v=639004589114000000",
    "url": "https://www.oaz.vc/oaz-enxag-bucal-perioaz-500-ml1/p",
    "tags": [
      "250ml",
      "bucal",
      "enxaguante",
      "gengivas",
      "higiene-bucal",
      "menta",
      "perioaz",
      "saudáveis"
    ],
    "conteudo": "Enxaguante Bucal PeriOAZ Gengivas saudáveis - Menta 250ml. Preço: R$ 23,99. O enxaguante bucal antisséptico PeriOAZ é sem alcool e não arde, sabor menta reduz a gengivite, placas bacterianas e mau hálito. Para um sorriso mais saudável e refrescante."
  },
  {
    "id": "prod-123",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal VALDA 500ml",
    "preco": "R$ 27,30",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156424/OAZ_VALDA_500ml_fr.png?v=639004682759570000",
    "url": "https://www.oaz.vc/enxaguante-bucal-oaz-valda-sem-alcool-500ml1/p",
    "tags": [
      "500ml",
      "bucal",
      "enxaguante",
      "higiene-bucal",
      "valda"
    ],
    "conteudo": "Enxaguante Bucal VALDA 500ml. Preço: R$ 27,30. O enxaguante bucal OAZ VALDA foi feito para você manter sua boca sempre limpa, protegida e saudável. Possui V-FR3SH, combinação exclusiva de Mentol, Eucaliptol e Timol, ativos que tem alto poder bactericida e trazem grande refrescância. O enxaguante possui ação 5 em 1 te auxilia no combate de 99% do"
  },
  {
    "id": "prod-99",
    "categoria": "produtos",
    "subcategoria": "sabonete",
    "sublabel": "Sabonete",
    "titulo": "Sabonete Íntimo PH Equilibrado 300ml",
    "preco": "R$ 20,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156140/OAZ_CREME_DE_UREIA_10prc_300ML_fr.png?v=639004628606230000",
    "url": "https://www.oaz.vc/oaz-sabonete-intimo-ph-equilibrado-300ml11/p",
    "tags": [
      "300ml",
      "equilibrado",
      "sabonete",
      "íntimo"
    ],
    "conteudo": "Sabonete Íntimo PH Equilibrado 300ml. Preço: R$ 20,99. Com textura em gel, o sabonete íntimo OAZ foi desenvolvido exclusivamente para você manter o pH da região íntima equilibrado com proteção e conforto ao longo do dia. Além disso, sua fórmula é vegana e não contém adição de parabenos, promovendo confiança e bem-estar durante o seu dia-a-dia."
  },
  {
    "id": "prod-97",
    "categoria": "produtos",
    "subcategoria": "sabonete",
    "sublabel": "Sabonete",
    "titulo": "Sabonete Íntimo Diário 200ml",
    "preco": "R$ 13,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156144/OAZ_SABONETE_INTIMO_DIARIO_200ML_dt.png?v=638950932135830000",
    "url": "https://www.oaz.vc/oaz-sabonete-intimo-diario-200ml11/p",
    "tags": [
      "200ml",
      "diário",
      "sabonete",
      "íntimo"
    ],
    "conteudo": "Sabonete Íntimo Diário 200ml. Preço: R$ 13,99. Com o sabonete íntimo , você reforça as defesas naturais de seu corpo com uma limpeza suave da região, promovendo conforto e segurança ao longo do dia. Sua fórmula vegana te auxilia a equilibrar o PH da região íntima sem adição de parabenos, pensada especialmente para manter sua saúde em dia."
  },
  {
    "id": "prod-96",
    "categoria": "produtos",
    "subcategoria": "repelente",
    "sublabel": "Repelente",
    "titulo": "Repelente Infantil Bob Esponja 100ml",
    "preco": "R$ 18,99",
    "fps": "",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156011/OAZ_repelente_bob_100ml_dt.png?v=638890504292330000",
    "url": "https://www.oaz.vc/oaz-repelente-kids-100ml11/p",
    "tags": [
      "100ml",
      "bob",
      "esponja",
      "infantil",
      "repelente"
    ],
    "conteudo": "Repelente Infantil Bob Esponja 100ml. Preço: R$ 18,99. O repelente Infantil Bob Esponja tem ação contra insetos que transmitem Dengue, Zika, Chikungunya e Malária, enquanto hidrata a pele. É fácil de aplicar e tem rápida absorção. Dermatologicamente testado."
  },
  {
    "id": "prod-95",
    "categoria": "produtos",
    "subcategoria": "repelente",
    "sublabel": "Repelente",
    "titulo": "Repelente 200ml",
    "preco": "R$ 22,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156024/OAZ_repelente_200ml_fr.png?v=639004676295330000",
    "url": "https://www.oaz.vc/oaz-repelente-adulto-200ml11/p",
    "tags": [
      "200ml",
      "repelente"
    ],
    "conteudo": "Repelente 200ml. Preço: R$ 22,99. O repelente adulto protege contra insetos que transmitem Dengue, Zika, Chikungunya e Malária, enquanto hidrata a pele. É fácil de aplicar e tem rápida absorção. Dermatologicamente testado."
  },
  {
    "id": "prod-94",
    "categoria": "produtos",
    "subcategoria": "repelente",
    "sublabel": "Repelente",
    "titulo": "Repelente Infantil OAZ Bob Esponja 8h de proteção 100ml",
    "preco": "R$ 25,99",
    "fps": "",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156015/OAZ_repelente_8hs_bob_100ml_dt.png?v=638890504621200000",
    "url": "https://www.oaz.vc/oaz-repelente-8-h-kids-100ml11/p",
    "tags": [
      "100ml",
      "bob",
      "esponja",
      "infantil",
      "oaz",
      "proteção",
      "repelente"
    ],
    "conteudo": "Repelente Infantil OAZ Bob Esponja 8h de proteção 100ml. Preço: R$ 25,99. O repelente Infantil tem ação contra insetos que transmitem Dengue, Zika, Chikungunya e Malária, enquanto hidrata a pele. É fácil de aplicar e tem rápida absorção. Dermatologicamente testado."
  },
  {
    "id": "prod-93",
    "categoria": "produtos",
    "subcategoria": "repelente",
    "sublabel": "Repelente",
    "titulo": "Repelente 10h de proteção 200ml",
    "preco": "R$ 31,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156027/OAZ_repelente_10hrs_200ml_dt.png?v=638890511782930000",
    "url": "https://www.oaz.vc/repelente-oaz-10h-de-protecao/p",
    "tags": [
      "10h",
      "200ml",
      "proteção",
      "repelente"
    ],
    "conteudo": "Repelente 10h de proteção 200ml. Preço: R$ 31,99. Repelente OAZ foi cuidadosamente desenvolvido para fornecer alta proteção contra insetos que transmitem Dengue, Zika, Chikungunya e Malária. Sua fórmula contém 15% de DEET, não é oleosa e proporciona hidratação para a pele."
  },
  {
    "id": "prod-92",
    "categoria": "produtos",
    "subcategoria": "repelente",
    "sublabel": "Repelente",
    "titulo": "Protetor Solar e Repelente FPS 30 120ml",
    "preco": "R$ 37,99",
    "fps": "30",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156000/OAZ_protetor_repelente_30fps_120ml_fr.png?v=639004671227730000",
    "url": "https://www.oaz.vc/oaz-prot-sol-e-repelente-30-fps-120ml11/p",
    "tags": [
      "120ml",
      "30",
      "fps",
      "fps 30",
      "protetor",
      "repelente",
      "solar"
    ],
    "conteudo": "Protetor Solar e Repelente FPS 30 120ml. Preço: R$ 37,99. Protetor 2 em 1 OAZ Desenvolvido para fornecer dupla proteção: proteger a pele do corpo dos efeitos nocivos dos raios UVA/UVB com FPS 30 e também das picadas de insetos. Dermatologicamente testado."
  },
  {
    "id": "prod-91",
    "categoria": "produtos",
    "subcategoria": "repelente",
    "sublabel": "Repelente",
    "titulo": "Protetor Solar e Repelente OAZ - 60 FPS 120ml",
    "preco": "R$ 50,99",
    "fps": "60",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156441/OAZ_protetor_repelente_60fps_120ml_fr.png?v=639010535982430000",
    "url": "https://www.oaz.vc/oaz-prot-sol-e-rep-60-fps-120ml11/p",
    "tags": [
      "120ml",
      "60",
      "fps",
      "fps 60",
      "oaz",
      "protetor",
      "repelente",
      "solar"
    ],
    "conteudo": "Protetor Solar e Repelente OAZ - 60 FPS 120ml. Preço: R$ 50,99. Protetor 2 em 1 OAZ Desenvolvido para fornecer dupla proteção: proteger a pele do corpo dos efeitos nocivos dos raios UVA/UVB com FPS 60 e também das picadas de insetos. Dermatologicamente testado."
  },
  {
    "id": "prod-90",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar Infantil Bob Esponja FPS 70 125ml",
    "preco": "R$ 60,99",
    "fps": "70",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156399/OAZ_protetor_kids_bob_fps70_125ml_dt.png?v=639004602046530000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-70-fps-kids-125ml11/p",
    "tags": [
      "125ml",
      "70",
      "bob",
      "esponja",
      "fps",
      "fps 70",
      "infantil",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar Infantil Bob Esponja FPS 70 125ml. Preço: R$ 60,99. O protetor solar de 70 FPS em creme do Bob Esponja mantém o rosto e corpo das crianças hidratados e protegidos dos efeitos nocivos dos raios UVA/UVB. O produto é vegano e deixa a pele com toque seco. Sem adição de parabenos e dermatologicamente testado."
  },
  {
    "id": "prod-88",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar FPS 70 200ml",
    "preco": "R$ 53,99",
    "fps": "70",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156731/01.png?v=639201698806700000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-70-fps-200ml11/p",
    "tags": [
      "200ml",
      "70",
      "fps",
      "fps 70",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar FPS 70 200ml. Preço: R$ 53,99. Com alto fator de proteção, o protetor solar 70FPS da OAZ é ideal para curtir os dias ensolarados sem se preocupar com os efeitos nocivos dos raios UVA/UVB. Sua fórmula vegana é dermatologicamente testada e é Oil Free, garantindo toque seco e saudável da pele. Hidrata e fornece proteção muito alta p"
  },
  {
    "id": "prod-87",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar Infantil Bob Esponja FPS 60 125ml",
    "preco": "R$ 50,99",
    "fps": "60",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156227/60.jpg?v=638968441963070000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-60-fps-kids-125ml11/p",
    "tags": [
      "125ml",
      "60",
      "bob",
      "esponja",
      "fps",
      "fps 60",
      "infantil",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar Infantil Bob Esponja FPS 60 125ml. Preço: R$ 50,99. O protetor solar de 60 FPS em creme do Bob Esponja mantém o rosto e corpo das crianças hidratados e protegidos dos efeitos nocivos dos raios UVA/UVB. O produto é vegano e deixa a pele com toque seco. Sem adição de parabenos e dermatologicamente testado."
  },
  {
    "id": "prod-86",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar Aerossol  FPS 60 200ml",
    "preco": "R$ 75,99",
    "fps": "60",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156691/01.png?v=639201680915830000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-60-fps-aerosol-200-ml11/p",
    "tags": [
      "200ml",
      "60",
      "aerossol",
      "fps",
      "fps 60",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar Aerossol  FPS 60 200ml. Preço: R$ 75,99. Hidrata e protege a pele do rosto e do corpo dos efeitos nocivos dos raios UVA/UVB. Resistente à água e ao suor. Fórmula OilFree: pele com toque seco, saudável e hidratada pela Vitamina E."
  },
  {
    "id": "prod-85",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar FPS 60 200ml",
    "preco": "R$ 58,99",
    "fps": "60",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156723/01.png?v=639201697709100000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-60-fps-200ml11/p",
    "tags": [
      "200ml",
      "60",
      "fps",
      "fps 60",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar FPS 60 200ml. Preço: R$ 58,99. Com maior fator de durabilidade, o protetor solar 60 FPS em creme mantém seu rosto e corpo hidratados ao mesmo tempo em que inibe os efeitos nocivos dos raios UVA/UVB. O produto é vegano e deixa a pele com toque seco. Sem adição de parabenos e dermatologicamente testado."
  },
  {
    "id": "prod-84",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar Infantil Bob Esponja FPS 50 125ml",
    "preco": "R$ 48,99",
    "fps": "50",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156032/OAZ_protetor_kids_bob_fps50_125ml_fr.png?v=639004681538100000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-50-fps-kids-125ml11/p",
    "tags": [
      "125ml",
      "50",
      "bob",
      "esponja",
      "fps",
      "fps 50",
      "infantil",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar Infantil Bob Esponja FPS 50 125ml. Preço: R$ 48,99. O protetor solar de 50 FPS em creme do Bob Esponja mantém o rosto e corpo das crianças hidratados e protegidos dos efeitos nocivos dos raios UVA/UVB. O produto é vegano e deixa a pele com toque seco. Sem adição de parabenos e dermatologicamente testado."
  },
  {
    "id": "prod-80",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar Infantil Bob Esponja FPS 30 125ml",
    "preco": "R$ 37,99",
    "fps": "30",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155992/OAZ_protetor_kids_bob_fps30_125ml_fr.png?v=639004682205030000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-30-fps-kids-125ml11/p",
    "tags": [
      "125ml",
      "30",
      "bob",
      "esponja",
      "fps",
      "fps 30",
      "infantil",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar Infantil Bob Esponja FPS 30 125ml. Preço: R$ 37,99. O protetor solar de 30 FPS em creme do Bob Esponja mantém o rosto e corpo das crianças hidratados e protegidos dos efeitos nocivos dos raios UVA/UVB. O produto é vegano e deixa a pele com toque seco. Sem adição de parabenos e dermatologicamente testado."
  },
  {
    "id": "prod-79",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar Aerossol FPS 30 200ml",
    "preco": "R$ 59,99",
    "fps": "30",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156676/01.png?v=639201676474100000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-30-fps-aerosol-200ml11/p",
    "tags": [
      "200ml",
      "30",
      "aerossol",
      "fps",
      "fps 30",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar Aerossol FPS 30 200ml. Preço: R$ 59,99. Hidrata e protege a pele do rosto e do corpo dos efeitos nocivos dos raios UVA/UVB. Resistente à água e ao suor. Fórmula OilFree: pele com toque seco, saudável e hidratada pela Vitamina E."
  },
  {
    "id": "prod-78",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "Protetor Solar FPS 30 200ml",
    "preco": "R$ 44,99",
    "fps": "30",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156699/01.png?v=639201682450070000",
    "url": "https://www.oaz.vc/oaz-protetor-solar-30-fps-200ml11/p",
    "tags": [
      "200ml",
      "30",
      "fps",
      "fps 30",
      "protetor",
      "protetor-solar",
      "solar"
    ],
    "conteudo": "Protetor Solar FPS 30 200ml. Preço: R$ 44,99. O protetor solar de 30 FPS em creme mantém o seu rosto e corpo hidratados e protegidos dos efeitos nocivos dos raios UVA/UVB. O produto é vegano e deixa a pele com toque seco. Sem adição de parabenos e dermatologicamente testado."
  },
  {
    "id": "prod-76",
    "categoria": "produtos",
    "subcategoria": "pos-sol",
    "sublabel": "Pós-Sol",
    "titulo": "Pós-Sol Gel - 120ml",
    "preco": "R$ 18,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156383/OAZ_pos_sol_120ml_dt.png?v=639004597845600000",
    "url": "https://www.oaz.vc/oaz-pos-sol-gel-120ml11/p",
    "tags": [
      "120ml",
      "gel",
      "pos-sol",
      "pós-sol"
    ],
    "conteudo": "Pós-Sol Gel - 120ml. Preço: R$ 18,99. O pós-sol em gel te proporciona sensação de frescor e hidratação após alta exposição solar, garantindo alívio imediato para a sua pele. Possui fórmula vegana e sem adição de parabenos, sendo indicado também para peles oleosas."
  },
  {
    "id": "prod-75",
    "categoria": "produtos",
    "subcategoria": "pos-sol",
    "sublabel": "Pós-Sol",
    "titulo": "Pós-Sol Aerossol 200ml",
    "preco": "R$ 34,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156655/01.png?v=639201664660070000",
    "url": "https://www.oaz.vc/oaz-pos-sol-aerosol-200ml11/p",
    "tags": [
      "200ml",
      "aerossol",
      "pos-sol",
      "pós-sol"
    ],
    "conteudo": "Pós-Sol Aerossol 200ml. Preço: R$ 34,99. O pós-sol em aerossol foi desenvolvido para uso após a alta exposição no sol, garantindo a sensação de frescor, alívio e hidratação imediata com tecnologia em spray. Sua fórmula não é oleosa e traz a vantagem da uniformidade ao aplicar o produto pelo corpo, além de ser vegana e não conter adição de "
  },
  {
    "id": "prod-74",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Creme hidratante Pernas cansadas 300ml",
    "preco": "R$ 68,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156755/01.png?v=639201715567400000",
    "url": "https://www.oaz.vc/oaz-pernas-cansadas-300ml11/p",
    "tags": [
      "300ml",
      "cansadas",
      "creme",
      "hidratante",
      "pernas"
    ],
    "conteudo": "Creme hidratante Pernas cansadas 300ml. Preço: R$ 68,99. O hidratante para pernas cansadas é enriquecido com ativos relaxantes, pensado especialmente para você reduzir a sensação de cansaço e inchaço nas pernas após longos períodos em pé. Sua fórmula vegana conta com Cânfora, Mentol e Ginkgo Biloba, que proporcionam alívio imediato e aparência mais saudáv"
  },
  {
    "id": "prod-70",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Hidratante Labial Cereja 10ml",
    "preco": "R$ 19,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156196/OAZ_tubo_protetor_labial_10ml_fr.png?v=639004673241370000",
    "url": "https://www.oaz.vc/oaz-hidratante-labial-10-ml11/p",
    "tags": [
      "10ml",
      "cereja",
      "hidratante",
      "labial"
    ],
    "conteudo": "Hidratante Labial Cereja 10ml. Preço: R$ 19,99. Com o hidratante labial você mantém a umidade natural e evita o ressecamento da região. Sua fórmula mantém os lábios devidamente hidratados e sempre protegidos sem a adição de parabenos."
  },
  {
    "id": "prod-68",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Hidratante Infantil Com Ureia 3% Bob Esponja 150ml",
    "preco": "R$ 28,99",
    "fps": "",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156125/OAZ_CREME_DE_UREIA_3prc_150ML_fr.png?v=639004674705330000",
    "url": "https://www.oaz.vc/oaz-hidratante-infantil-com-ureia-3-bob-esponja-eurofarma-150ml11/p",
    "tags": [
      "150ml",
      "bob",
      "com",
      "esponja",
      "hidratante",
      "infantil",
      "ureia"
    ],
    "conteudo": "Hidratante Infantil Com Ureia 3% Bob Esponja 150ml. Preço: R$ 28,99. Com ureia 3%, o hidratante infantil é perfeito para você manter a pele dos pequenos sempre hidratada. Além disso, o produto é vegano e não contém parabenos, promovendo uma hidratação intensa nas camadas profundas da pele por período prolongado."
  },
  {
    "id": "prod-65",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Hidratante Corporal Creme De Ureia 10% 150ml",
    "preco": "R$ 42,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156739/01.png?v=639201705543000000",
    "url": "https://www.oaz.vc/oaz-creme-de-ureia-10-150ml11/p",
    "tags": [
      "10%",
      "150ml",
      "corporal",
      "creme",
      "hidratante",
      "ureia"
    ],
    "conteudo": "Hidratante Corporal Creme De Ureia 10% 150ml. Preço: R$ 42,99. Indicado para peles ressecadas, o hidratante de ureia 10% é ideal para você manter sua pele altamente hidratada e com toque suave por um longo período. Além de agir contra sintomas do ressecamento como coceira, pinicação e repuxamento, sua fórmula é vegana e não contém adição de parabenos."
  },
  {
    "id": "prod-64",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Hidratante Corporal Castanha Da Índia 200ml",
    "preco": "R$ 49,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156119/OAZ_CASTANHA_DA_INDIA_200ML_dt.png?v=638950921505530000",
    "url": "https://www.oaz.vc/oaz-castanha-da-india-200ml11/p",
    "tags": [
      "200ml",
      "castanha",
      "corporal",
      "hidratante",
      "índia"
    ],
    "conteudo": "Hidratante Corporal Castanha Da Índia 200ml. Preço: R$ 49,99. O hidratante Castanha da Índia foi desenvolvido especialmente para aliviar a sensação de cansaço e de peso nas pernas após longos períodos em pé. Sua fórmula vegana possui efeito relaxante sem a adição de parabenos, promovendo seu alívio e bem-estar após a aplicação."
  },
  {
    "id": "prod-37458",
    "categoria": "produtos",
    "subcategoria": "protetor-solar",
    "sublabel": "Protetor Solar",
    "titulo": "OAZ PROTETOR FACIAL FPS70 COR 1",
    "preco": "",
    "fps": "70",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156516/_OAZ-Facial-Bisnaga-e-cartucho-COR-1.png?v=639077265243200000",
    "url": "https://www.oaz.vc/oaz-protetor-facial-fps70-cor1/p",
    "tags": [
      "70",
      "cor",
      "facial",
      "fps 70",
      "fps70",
      "oaz",
      "protetor",
      "protetor-solar"
    ],
    "conteudo": "OAZ PROTETOR FACIAL FPS70 COR 1. O OAZ Protetor Facial FPS 70 Cor 1 oferece alta proteção diária contra os raios UVA e UVB , ajudando a prevenir queimaduras solares, manchas e o envelhecimento precoce da pele. Com textura leve e toque seco, é ideal para uso diário, inclusive antes da maquiagem."
  },
  {
    "id": "prod-24815",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Kit Hidrante Labial",
    "preco": "R$ 29,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155646/78913170320107.png.png?v=638749234850400000",
    "url": "https://www.oaz.vc/kit-hidrante-labial/p",
    "tags": [
      "hidrante",
      "hidratante",
      "kit",
      "labial"
    ],
    "conteudo": "Kit Hidrante Labial. Preço: R$ 29,99. Kit Hidratante Labial OAZ, que inclui 1 unidade do Hidratante Labial Valda Morango e 1 unidade do Hidratante Labial Cereja OAZ 10ml. Este kit oferece uma combinação perfeita de hidratação, proteção e sabor, ideal para cuidar dos lábios ressecados e deixá-los macios e saudáveis."
  },
  {
    "id": "prod-24814",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Kit Higiene Bucal",
    "preco": "R$ 23,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155645/78913170320106.png.png?v=638749234310530000",
    "url": "https://www.oaz.vc/kit-higiene-bucal/p",
    "tags": [
      "bucal",
      "higiene",
      "higiene-bucal",
      "kit"
    ],
    "conteudo": "Kit Higiene Bucal. Preço: R$ 23,99. Kit Higiene Bucal OAZ, que inclui 1 unidade da Escova Dental Soft Classic OAZ e 1 unidade do Enxaguante Bucal OAZ Protect 250ml. Este kit foi desenvolvido para oferecer uma rotina completa de cuidados bucais, garantindo limpeza, proteção e frescor para o seu sorriso."
  },
  {
    "id": "prod-24812",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Kit Escova Dental",
    "preco": "R$ 17,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155641/789131703209802.png.png?v=638749230240300000",
    "url": "https://www.oaz.vc/kit-escova-dental/p",
    "tags": [
      "dental",
      "escova",
      "higiene-bucal",
      "kit"
    ],
    "conteudo": "Kit Escova Dental. Preço: R$ 17,99. Transforme sua rotina de higiene bucal com o Kit Escova Dental OAZ PRO WHITE com 2 Unidades! Desenvolvido para quem busca um sorriso mais branco e saudável, este kit oferece duas escovas dentais com tecnologia avançada, garantindo uma limpeza profunda e um clareamento dental gradual. Por que escolhe"
  },
  {
    "id": "prod-16932",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Escova Dental Infantil Baby Shark Cores Sortidas",
    "preco": "R$ 9,99",
    "fps": "",
    "publico": "infantil",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155590/56.jpg?v=638681632165400000",
    "url": "https://www.oaz.vc/escova-dental-kids-baby-shark/p",
    "tags": [
      "baby",
      "cores",
      "dental",
      "escova",
      "higiene-bucal",
      "infantil",
      "shark",
      "sortidas"
    ],
    "conteudo": "Escova Dental Infantil Baby Shark Cores Sortidas. Preço: R$ 9,99. A escova BABY SHARK é recomendada para a primeira dentição, possui cabeça compacta, cerdas ultrafinas e niveladas, apropriada às crianças de 0 a 3 anos, com muita diversão. Cores Sortidas"
  },
  {
    "id": "prod-16926",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Kit Escova Dental Deep Clean + Pro White",
    "preco": "R$ 17,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156102/7891317032081_0.webp?v=638938963501400000",
    "url": "https://www.oaz.vc/kit-escova-dental-deep-clean-pro-white-oaz/p",
    "tags": [
      "clean",
      "deep",
      "dental",
      "escova",
      "higiene-bucal",
      "kit",
      "pro",
      "white"
    ],
    "conteudo": "Kit Escova Dental Deep Clean + Pro White. Preço: R$ 17,99. Kit de escovas OAZ contém 1 unidade da Escova Dental Deep Clean e 1 unidade da Escova Dental PRO White, perfeito para a família."
  },
  {
    "id": "prod-16921",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Kit Escova Dental Soft Class",
    "preco": "R$ 13,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155610/7891317037260--4-.jpg?v=638683331247600000",
    "url": "https://www.oaz.vc/kit-escova-dental-soft-class-oaz/p",
    "tags": [
      "class",
      "dental",
      "escova",
      "higiene-bucal",
      "kit",
      "soft"
    ],
    "conteudo": "Kit Escova Dental Soft Class. Preço: R$ 13,99. Com cerdas macias e espiraladas, nossa escova Soft Class possui uma ponta de dupla ação, que por seu formato alongado possui uma ponta limpadora que permite alcançar os dentes posteriores."
  },
  {
    "id": "prod-16893",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal OAZ VALDA 500ml",
    "preco": "R$ 20,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/155774/7891317031503.png.png?v=638834335523930000",
    "url": "https://www.oaz.vc/enxaguante-bucal-oaz-valda-500ml/p",
    "tags": [
      "500ml",
      "bucal",
      "enxaguante",
      "higiene-bucal",
      "oaz",
      "valda"
    ],
    "conteudo": "Enxaguante Bucal OAZ VALDA 500ml. Preço: R$ 20,99. O enxaguante bucal OAZ VALDA foi feito para você manter sua boca sempre limpa, protegida e saudável. Possui V-FR3SH, combinação exclusiva de Mentol, Eucaliptol e Timol, ativos que tem alto poder bactericida e trazem grande refrescância. O enxaguante possui ação 5 em 1 te auxilia no combate de 99% do"
  },
  {
    "id": "prod-133",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Hidratante Labial Valda Menta",
    "preco": "R$ 20,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156184/OAZ_tubo_Valda_menta_10ml_dt.png?v=639004678995100000",
    "url": "https://www.oaz.vc/hidratante-labial-valda-menta/p",
    "tags": [
      "hidratante",
      "labial",
      "menta",
      "valda"
    ],
    "conteudo": "Hidratante Labial Valda Menta. Preço: R$ 20,99. Hidratante Labial OAZ Valda não só proporciona hidratação intensa e profunda a partir da Manteiga de Karité e da Vitamina E, como também possui exclusiva ação reparadora do SymRepair® 100, mantendo os lábios macios, protegidos e hidratados diariamente. Além disso, eles possuem óleos essenciais que f"
  },
  {
    "id": "prod-132",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Hidratante Labial Valda Morango",
    "preco": "R$ 20,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156160/OAZ_tubo_Valda_morango_10ml_fr.png?v=639004673959300000",
    "url": "https://www.oaz.vc/hidratante-labial-valda-morango/p",
    "tags": [
      "hidratante",
      "labial",
      "morango",
      "valda"
    ],
    "conteudo": "Hidratante Labial Valda Morango. Preço: R$ 20,99. Hidratante Labial OAZ Valda não só proporciona hidratação intensa e profunda a partir da Manteiga de Karité e da Vitamina E, como também possui exclusiva ação reparadora do SymRepair® 100, mantendo os lábios macios, protegidos e hidratados diariamente. Além disso, eles possuem óleos essenciais que f"
  },
  {
    "id": "prod-126",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal - White Fresh 500ml",
    "preco": "R$ 23,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156357/OAZ_enxaguante_White-Fresh_500ml_fr.png?v=639004683340600000",
    "url": "https://www.oaz.vc/oaz-enxaguante-bucal-white-fresh-acao-branqueadora-com-500ml1/p",
    "tags": [
      "500ml",
      "bucal",
      "enxaguante",
      "fresh",
      "higiene-bucal",
      "white"
    ],
    "conteudo": "Enxaguante Bucal - White Fresh 500ml. Preço: R$ 23,99. O enxaguante bucal White Fresh sabor menta auxilia no branqueamento dos dentes, fortalecimento e protege contra os germes e mau halito."
  },
  {
    "id": "prod-124",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Fio Dental 50+25m",
    "preco": "R$ 8,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156366/OAZ_fio_dental_75m_cartela.png?v=639004592803900000",
    "url": "https://www.oaz.vc/fio-dental-oaz-eurofarma-sabor-menta-50-25m1/p",
    "tags": [
      "50+25m",
      "dental",
      "fio",
      "higiene-bucal"
    ],
    "conteudo": "Fio Dental 50+25m. Preço: R$ 8,99. Ajuda a manter a gengiva saudavel, evita o acúmulo de placas, previne caries, remove até mesmo as placas mais dificeis de alcançar, sabor menta"
  },
  {
    "id": "prod-121",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal Protect 250ml",
    "preco": "R$ 26,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156350/OAZ_enxaguante_protect_250ml_fr.png?v=639004585769600000",
    "url": "https://www.oaz.vc/enxaguante-bucal-oaz-protect-zero-alcool-sabor-menta-250ml1/p",
    "tags": [
      "250ml",
      "bucal",
      "enxaguante",
      "higiene-bucal",
      "protect"
    ],
    "conteudo": "Enxaguante Bucal Protect 250ml. Preço: R$ 26,99. O enxaguante bucal OAZ que oferece 12 horas de proteção contra manchas. Sabor menta, sem álcool."
  },
  {
    "id": "prod-120",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal PRO Sensi 500ml",
    "preco": "R$ 26,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156347/OAZ_enxaguante_PRO-SENSI_500ml_curvo_fr.png?v=639004584695930000",
    "url": "https://www.oaz.vc/enxaguante-bucal-oaz-pro-sensi-menta-eurofarma-500ml1/p",
    "tags": [
      "500ml",
      "bucal",
      "enxaguante",
      "higiene-bucal",
      "pro",
      "sensi"
    ],
    "conteudo": "Enxaguante Bucal PRO Sensi 500ml. Preço: R$ 26,99. O enxaguante bucal Pro Sensi sabor menta auxilia no combate a sensibilidade, mau halito, germes e fortalece os dentes."
  },
  {
    "id": "prod-119",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal White Fresh 250ml",
    "preco": "R$ 15,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156353/OAZ_enxaguante_White-Fresh_250ml_curvo_fr.png?v=639004586613100000",
    "url": "https://www.oaz.vc/enxaguante-bucal-menta-white-fresh-oaz-250ml1/p",
    "tags": [
      "250ml",
      "bucal",
      "enxaguante",
      "fresh",
      "higiene-bucal",
      "white"
    ],
    "conteudo": "Enxaguante Bucal White Fresh 250ml. Preço: R$ 15,99. O enxaguante bucal White Fresh sabor menta auxilia no branqueamento dos dentes, fortalecimento e protege contra os germes e mau halito."
  },
  {
    "id": "prod-117",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal PRO Sensi 250ml",
    "preco": "R$ 16,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156344/OAZ_enxaguante_PRO-SENSI_250ml_curvo_fr.png?v=639004584177470000",
    "url": "https://www.oaz.vc/enxaguante-bucal-eurofarma-oaz-prosensi-menta-250ml1/p",
    "tags": [
      "250ml",
      "bucal",
      "enxaguante",
      "higiene-bucal",
      "pro",
      "sensi"
    ],
    "conteudo": "Enxaguante Bucal PRO Sensi 250ml. Preço: R$ 16,99. O enxaguante bucal Pro Sensi sabor menta auxilia no combate a sensibilidade, mau halito, germes e fortalece os dentes."
  },
  {
    "id": "prod-116",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal 1L",
    "preco": "R$ 32,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156339/OAZ_enxaguante_bucal_hortela_1L_fr.png?v=639004582189700000",
    "url": "https://www.oaz.vc/antisseptico-bucal-oaz-fresh-hortela-zero-alcool-com-1l1/p",
    "tags": [
      "bucal",
      "enxaguante",
      "higiene-bucal"
    ],
    "conteudo": "Enxaguante Bucal 1L. Preço: R$ 32,99. O enxaguante bucal OAZ Fresh Care foi feito para você manter sua boca sempre limpa, protegida e saudável. Sua ação 5 em 1 te auxilia no combate de 99% dos germes causadores da placa bacteriana, mau hálito e gengivite. Além disso, o produto previne cáries e é livre de álcool."
  },
  {
    "id": "prod-98",
    "categoria": "produtos",
    "subcategoria": "sabonete",
    "sublabel": "Sabonete",
    "titulo": "Sabonete Íntimo Odor Block 300ml",
    "preco": "R$ 20,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156150/OAZ_SABONETE_INTIMO_ODOR_BLOCK_300ML_fr.png?v=639004673602700000",
    "url": "https://www.oaz.vc/oaz-sabonete-intimo-odor-block-300ml11/p",
    "tags": [
      "300ml",
      "block",
      "odor",
      "sabonete",
      "íntimo"
    ],
    "conteudo": "Sabonete Íntimo Odor Block 300ml. Preço: R$ 20,99. Com o sabonete íntimo bloqueador de odor OAZ você mantém sua região íntima protegida e livre de cheiros indesejáveis. Além disso, sua fórmula vegana não contém adição de parabenos e possui tecnologia anti-odor, promovendo mais conforto e confiança durante a correria de seu dia-a-dia."
  },
  {
    "id": "prod-71",
    "categoria": "produtos",
    "subcategoria": "hidratante",
    "sublabel": "Hidratante",
    "titulo": "Loção Hidratante Intensa Ureia 10% 300ml",
    "preco": "R$ 53,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156747/01.png?v=639201707003900000",
    "url": "https://www.oaz.vc/oaz-locao-hidratante-intensa-ureia-10-300ml11/p",
    "tags": [
      "10%",
      "300ml",
      "hidratante",
      "intensa",
      "loção",
      "ureia"
    ],
    "conteudo": "Loção Hidratante Intensa Ureia 10% 300ml. Preço: R$ 53,99. Indicado para peles ressecadas, o hidratante de ureia 10% é ideal para você manter sua pele altamente hidratada e com toque suave por um longo período. Além de agir contra sintomas do ressecamento como coceira, pinicação e repuxamento, sua fórmula é vegana e não contém adição de parabenos."
  },
  {
    "id": "prod-61",
    "categoria": "produtos",
    "subcategoria": "higiene-bucal",
    "sublabel": "Higiene Bucal",
    "titulo": "Enxaguante Bucal Hortelã 500ml",
    "preco": "R$ 17,99",
    "fps": "",
    "publico": "adulto",
    "imagem": "https://oaz.vtexassets.com/arquivos/ids/156341/OAZ_enxaguante_bucal_hortela_500ml_fr.png?v=639004583358700000",
    "url": "https://www.oaz.vc/enxaguante-bucal-oaz-hortela-500ml11/p",
    "tags": [
      "500ml",
      "bucal",
      "enxaguante",
      "higiene-bucal",
      "hortelã"
    ],
    "conteudo": "Enxaguante Bucal Hortelã 500ml. Preço: R$ 17,99. O enxaguante bucal Fresh Care foi feito para você manter sua boca sempre limpa, protegida e saudável. Sua ação 5 em 1 te auxilia no combate de 99% dos germes causadores da placa bacteriana, mau hálito e gengivite. Além disso, o produto previne cáries e é livre de álcool."
  }
];
