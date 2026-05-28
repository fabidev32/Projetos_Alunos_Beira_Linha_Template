let descricao = document.querySelector("#descricao");
let nome = document.querySelector("#nome");
let link = document.querySelector("#link");
let input_com_imagem = document.getElementById("input_com_imagem");
let lista_de_jogos = document.querySelector(".lista_de_jogos");

const Jogo = (nome, descricao, imagem, link) => ({
  nome,
  descricao,
  imagem,
  link,
});

const jogos = [];
function PegarURLImagem() {
  if (input_com_imagem.files.length === 0) {
    return "";
  }
  return URL.createObjectURL(input_com_imagem.files[0]);
}

function CriarJogo() {
  const urlImagem = PegarURLImagem();
  const novoJogo = Jogo(nome.value, descricao.value, urlImagem, link.value);
  jogos.push(novoJogo);

  lista_de_jogos.innerHTML = "";
  for (let i = 0; i < jogos.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${jogos[i].nome}</h3>
    <p>${jogos[i].descricao}<p/>
    <a href = "${jogos[i].link}" target= _"blank">Link do jogo</a>
    <img width = "100px" src = "${jogos[i].imagem}">
    <button onclick = "RemoverElemento(${i})">
    Remover</button>
    `;
    lista_de_jogos.appendChild(div);
  }
}

function RemoverElemento(indice) {
  jogos.splice(indice, 1);
  lista_de_jogos.innerHTML = "";
  for (let i = 0; i < jogos.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${jogos[i].nome}</h3>
    <p>${jogos[i].descricao}<p/>
    <a href = "${jogos[i].link}" target= _"blank">Link do jogo</a>
    <img width = "100px" src = "${jogos[i].imagem}">
    <button onclick = "RemoverElemento(${i})">
    Remover</button>
    `;
    lista_de_jogos.appendChild(div);
  }
}
