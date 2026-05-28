const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const div_trilho = document.querySelector(".carrossel_trilho");
let indice = 0;
let total_imagens = 4;


function AtualizarCarrossel() {
    const deslocamento = indice * 100;
    div_trilho.style.transform = `translateX(-${deslocamento}%)`;
}

function Anterior() {
    indice = (indice === 0) ? 0 : indice - 1;
    if(indice === 0){
        indice = 0;
    }
    else {

        indice = indice - 1;

    }
    AtualizarCarrossel(); 
}

function Proximo() {
    if(indice === total_imagens - 1){
        indice = 0;
    }
    else {
        indice = indice + 1; 
    }
    AtualizarCarrossel(); 
}