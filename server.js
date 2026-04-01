let mensagens = [];

// ENVIAR MENSAGEM
app.post("/chat", (req, res) => {
  const { user, texto } = req.body;

  mensagens.push({
    user,
    texto,
    hora: new Date().toLocaleTimeString()
  });

  res.json({ ok: true });
});

// LISTAR MENSAGENS
app.get("/chat", (req, res) => {
  res.json(mensagens.slice(-50)); // últimas 50
});
