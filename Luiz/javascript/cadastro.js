let descricao = document.querySelector("#descricao");
let nome = document.querySelector("#nome");
let link = document.querySelector("#link");
let input_com_imagem = document.getElementById("input_com_imagem");
let lista_de_jogos = document.querySelector(".lista_de_jogos");
const texto_pesquisa = document.querySelector("#texto_pesquisa");

texto_pesquisa.addEventListener("input", function () {
  ListaComFiltro();
});

limpar_filtro.addEventListener("click", function () {
  ListaSemFiltro();
});

const Jogo = (nome, descricao, imagem, link) => ({
  nome,
  descricao,
  imagem,
  link,
});

function VerificarCampos(jogo) {
  if (jogo.nome != "" && jogo.descriçao != "" && jogo.link !== "") {
    return true;
  }

  return false;
}

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

  if (VerificarCampos(novoJogo)) {
    jogos.push(novoJogo);
    ListaSemFiltro();
  } else {
    alert("Preencha todos os campos obrigatórios!");
  }

  lista_de_jogos.innerHTML = "";
  for (let i = 0; i < jogos.length; i++) {
    const div = document.createElement("div");
    div.classList.add("card_jogo");
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
  ListaSemFiltro();
}

function ListaSemFiltro() {
  lista_de_jogos.innerHTML = "";
  for (let i = 0; i < jogos.length; i++) {
    const div = document.createElement("div");
    div.classList.add("card_jogo");
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

function ListaComFiltro() {
  lista_de_jogos.innerHTML = "";
  //Comando de repetiçao
  for (let i = 0; i < jogos.length; i++) {
    if (jogos[i].nome === texto_pesquisa.value) {
      const div = document.createElement("div");
      div.classList.add("card_jogo");
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
}
