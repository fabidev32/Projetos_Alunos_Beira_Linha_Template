const nome = document.getElementById("nome");
let descriçao = document.getElementById("descriçao");
let lista_de_comidas = document.querySelector(".lista_de_comidas");
const texto_pesquisa = document.querySelector("#texto_pesquisa");
const limpar_filtro = document.querySelector("#limpar_filtro");
//Cria um array
let comidas = [];
//selecionar um elemento
let link = document.querySelector("#link");
//Selecionar um elemento
let input_com_imagem = document.getElementById("input_com_imagem");
//Utilizar o codigo sm precisar escrever varias vazes

texto_pesquisa.addEventListener("input", function () {
  ListaComFiltro();
});

limpar_filtro.addEventListener("click", function () {
  ListaSemFiltro();
});

function PegarURLImagem() {
  //Verdadeiro
  if (input_com_imagem.files.length === 0) {
    return "";
  }
  return URL.createObjectURL(input_com_imagem.files[0]);
}

//Utilizar o codigo sm precisar escrever varias vazes
function cadastrar_comida() {
  const urlImagem = PegarURLImagem();
  const nova_comida = Comida(
    nome.value,
    descriçao.value,
    urlImagem,
    link.value,
  );

  if (VerificarCampos(nova_comida)) {
    comidas.push(nova_comida);
    ListaSemFiltro();
  }
  else {
    alert("Preencha todos os campos obrigatórios!");
  }
}

function VerificarCampos(comida) {
  if (comida.nome != "" && comida.descriçao != "" && comida.link !== "") {
    return true;
  }

  return false;
}

//Utilizar o codigo sm precisar escrever varias vazes
function RemoverElemento(indice) {
  comidas.splice(indice, 1);
  //Código alterado aqui
  lista_de_comidas.innerHTML = "";
  //Comando de repetiçao
  ListaSemFiltro();
}

function ListaSemFiltro() {
  lista_de_comidas.innerHTML = "";
  //Comando de repetiçao
  for (let i = 0; i < comidas.length; i++) {
    const div = document.createElement("div");
    div.classList.add("card_comida");
    div.innerHTML = `
        <img src = "${comidas[i].imagem}">
        <h2>${comidas[i].nome}</h2>
        <div>
        <p>${comidas[i].descriçao}</p>
         <a href="${comidas[i].link}"> Acesse o link </a>
         </div>
         ${/* 🔴 Código alterado aqui */ ""}
         <button onclick="RemoverElemento(${i})"> Remover elemento </button>
        
         `;
    lista_de_comidas.appendChild(div);
  }
}

function ListaComFiltro() {
  lista_de_comidas.innerHTML = "";
  //Comando de repetiçao
  for (let i = 0; i < comidas.length; i++) {
    if (comidas[i].nome === texto_pesquisa.value) {
      const div = document.createElement("div");
      div.classList.add("card_comida");
      div.innerHTML = `
        <p>${comidas[i].nome}</p>
        <p>${comidas[i].descriçao}</p>
         <a href="${comidas[i].link}"> Acesse o link </a>
         <img width = "100px" src = "${comidas[i].imagem}">
         ${/* 🔴 Código alterado aqui */ ""}
         <button onclick="RemoverElemento(${i})"> Remover elemento </button>
        `;
      lista_de_comidas.appendChild(div);
    }
  }
}

const Comida = (nome, descriçao, imagem, link) => ({
  nome,
  descriçao,
  imagem,
  link,
});
