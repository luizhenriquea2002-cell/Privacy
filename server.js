const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

let users = {};
let posts = [];

// LOGIN
app.post("/login", (req, res) => {
  const { user } = req.body;

  if (!users[user]) {
    users[user] = { vip: false };
  }

  res.json({ user, vip: users[user].vip });
});

// VIRAR VIP (fake pagamento)
app.post("/vip", (req, res) => {
  const { user } = req.body;

  users[user].vip = true;

  res.json({ ok: true });
});

// CRIAR POST
app.post("/post", (req, res) => {
  posts.push(req.body);
  res.json({ ok: true });
});

// LISTAR POSTS
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Servidor rodando 🚀")
);
