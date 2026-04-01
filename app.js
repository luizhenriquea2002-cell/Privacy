async function carregar() {
  const res = await fetch("/anuncios");
  const data = await res.json();

  const user = localStorage.getItem("user");

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  data.forEach(a => {
    lista.innerHTML += `
      <div style="
        background:#111;
        margin:15px;
        padding:10px;
        border-radius:12px;
        box-shadow:0 0 10px #000;
      ">
        ${a.premium ? "<div style='color:gold'>💎 DESTAQUE</div>" : ""}

        <img src="${a.imagem}" style="width:100%; border-radius:10px;">

        <h3>
          ${a.nome}
          ${a.verificado ? "⭐" : ""}
        </h3>

        <p>${a.descricao}</p>

        <p style="color:gold; font-size:18px;">
          💰 R$ ${a.preco}
        </p>

        ${
          user
          ? `<a href="https://wa.me/${a.whatsapp}" target="_blank">
              <button>📲 WhatsApp</button>
            </a>`
          : `<button onclick="alert('Faça login 🔒')">Ver contato</button>`
        }
      </div>
    `;
  });
}

carregar();
