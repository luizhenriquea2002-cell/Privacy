let users = [];
let anuncios = [];

// LOGIN
app.post("/login", (req, res) => {
  const { email } = req.body;

  if (!users.includes(email)) {
    users.push(email);
  }

  res.json({ ok: true });
});

// CRIAR ANÚNCIO
app.post("/criar-anuncio", (req, res) => {
  const { nome, descricao, imagem, preco, whatsapp, verificado, premium } = req.body;

  anuncios.push({
    id: Date.now(),
    nome,
    descricao,
    imagem,
    preco,
    whatsapp,
    verificado,
    premium
  });

  res.json({ ok: true });
});

// LISTAR ORDENADO (premium primeiro)
app.get("/anuncios", (req, res) => {
  const ordenado = anuncios.sort((a, b) => b.premium - a.premium);
  res.json(ordenado);
});
