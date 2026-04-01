async function carregar() {
  const res = await fetch("/anuncios");
  const data = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  data.forEach(a => {
    lista.innerHTML += `
      <div>
        <img src="${a.imagem}" width="100%">
        <h3>${a.nome}</h3>
        <p>${a.descricao}</p>
      </div>
    `;
  });
}

carregar();
