export function checarVitoria() {
  const caixa = document.querySelectorAll(".grade");

  //possibilidades x
  const horizontalx1 =
    caixa[0].childNodes[0].className == "x" &&
    caixa[1].childNodes[0].className == "x" &&
    caixa[2].childNodes[0].className == "x";
  const horizontalx2 =
    caixa[3].childNodes[0].className == "x" &&
    caixa[4].childNodes[0].className == "x" &&
    caixa[5].childNodes[0].className == "x";
  const horizontalx3 =
    caixa[6].childNodes[0].className == "x" &&
    caixa[7].childNodes[0].className == "x" &&
    caixa[8].childNodes[0].className == "x";
  const verticalx1 =
    caixa[0].childNodes[0].className == "x" &&
    caixa[3].childNodes[0].className == "x" &&
    caixa[6].childNodes[0].className == "x";
  const verticalx2 =
    caixa[1].childNodes[0].className == "x" &&
    caixa[4].childNodes[0].className == "x" &&
    caixa[7].childNodes[0].className == "x";
  const verticalx3 =
    caixa[2].childNodes[0].className == "x" &&
    caixa[5].childNodes[0].className == "x" &&
    caixa[8].childNodes[0].className == "x";
  const diagonalx1 =
    caixa[0].childNodes[0].className == "x" &&
    caixa[4].childNodes[0].className == "x" &&
    caixa[8].childNodes[0].className == "x";
  const diagonalx2 =
    caixa[2].childNodes[0].className == "x" &&
    caixa[4].childNodes[0].className == "x" &&
    caixa[6].childNodes[0].className == "x";

  //possibilidades o
  const horizontalo1 =
    caixa[0].childNodes[0].className == "o" &&
    caixa[1].childNodes[0].className == "o" &&
    caixa[2].childNodes[0].className == "o";
  const horizontalo2 =
    caixa[3].childNodes[0].className == "o" &&
    caixa[4].childNodes[0].className == "o" &&
    caixa[5].childNodes[0].className == "o";
  const horizontalo3 =
    caixa[6].childNodes[0].className == "o" &&
    caixa[7].childNodes[0].className == "o" &&
    caixa[8].childNodes[0].className == "o";
  const verticalo1 =
    caixa[0].childNodes[0].className == "o" &&
    caixa[3].childNodes[0].className == "o" &&
    caixa[6].childNodes[0].className == "o";
  const verticalo2 =
    caixa[1].childNodes[0].className == "o" &&
    caixa[4].childNodes[0].className == "o" &&
    caixa[7].childNodes[0].className == "o";
  const verticalo3 =
    caixa[2].childNodes[0].className == "o" &&
    caixa[5].childNodes[0].className == "o" &&
    caixa[8].childNodes[0].className == "o";
  const diagonalo1 =
    caixa[0].childNodes[0].className == "o" &&
    caixa[4].childNodes[0].className == "o" &&
    caixa[8].childNodes[0].className == "o";
  const diagonalo2 =
    caixa[2].childNodes[0].className == "o" &&
    caixa[4].childNodes[0].className == "o" &&
    caixa[6].childNodes[0].className == "o";


//verificação se deu velha
let contador = 0;
const vazio = "";

for (let i = 0; i < caixa.length; i++) {
  if (caixa[i].childNodes[0].innerText != vazio) {
    contador++;
  }
}
if (contador == 9) {
  declaraVencedor("deu velha");
}

  //vericação se x ou o venceram
  if (
    horizontalx1 ||
    horizontalx2 ||
    horizontalx3 ||
    verticalx1 ||
    verticalx2 ||
    verticalx3 ||
    diagonalx1 ||
    diagonalx2
  ) {
    declaraVencedor("x");
  } else if (
    horizontalo1 ||
    horizontalo2 ||
    horizontalo3 ||
    verticalo1 ||
    verticalo2 ||
    verticalo3 ||
    diagonalo1 ||
    diagonalo2
  ) {
    declaraVencedor("o");
  }

  
}

function declaraVencedor(vencedor) {
  const placarX = document.querySelector(".placar__x--cont");
  const placarO = document.querySelector(".placar__o--cont");
  const mensagem = document.querySelector(".mensagem");
  const p = document.querySelector(".mensagem p");

  if (vencedor == 'deu velha') {
    p.innerText = "DEU VELHA!";
  } else if(vencedor == "x") {
    p.innerText = "X VENCEU!";
    placarX.textContent = parseInt(placarX.textContent) + 1;
  } else if (vencedor == "o") {
    p.innerText = "O VENCEU!";
    placarO.textContent = parseInt(placarO.textContent) + 1;
  }

  //exibe mensagem
  mensagem.classList.remove("esconder");

  //esconde mensagem
  setTimeout(() => {
    mensagem.classList.add("esconder");
  }, 3000);

  //removendo x e o

  const gradeRemover = document.querySelectorAll(".grade div");

  for (let i = 0; i < gradeRemover.length; i++) {
    gradeRemover[i].parentNode.removeChild(gradeRemover[i]);
  }

  const caixa = document.querySelectorAll(".grade");

  for (let i = 0; i < caixa.length; i++){
    const div = document.createElement('div');
    div.classList.add('sub');
    caixa[i].appendChild(div)
  }
}
