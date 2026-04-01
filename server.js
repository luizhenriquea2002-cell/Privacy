const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

let users = [];
let anuncios = [];

// REGISTRO
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  users.push({ email, password });

  res.json({ ok: true });
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return res.status(401).json({ erro: "Login inválido" });

  res.json({ ok: true });
});

// CRIAR ANÚNCIO
app.post("/criar-anuncio", (req, res) => {
  const { nome, descricao, imagem } = req.body;

  anuncios.push({
    id: Date.now(),
    nome,
    descricao,
    imagem
  });

  res.json({ ok: true });
});

// LISTAR
app.get("/anuncios", (req, res) => {
  res.json(anuncios);
});

// ROTAS
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => console.log("Servidor rodando 🚀"));
