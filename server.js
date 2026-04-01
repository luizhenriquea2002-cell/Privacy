const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

let posts = [];

// criar post
app.post("/post", (req, res) => {
  posts.push(req.body);
  res.json({ ok: true });
});

// listar posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000, () => console.log("rodando"));
