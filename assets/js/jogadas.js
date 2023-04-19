import { checarVitoria } from "./checarVitoria.js";
//botoes e elementos para esconder
const botoes = document.querySelectorAll(".menu__botoes button");
const menu = document.querySelector(".menu");
const grades = document.querySelector(".grades");
const placar = document.querySelector(".placar");
const voltar = document.querySelector(".voltar");

//elementos jogaveis
const caixa = document.querySelectorAll(".grade");
const x = document.querySelector(".x");
const o = document.querySelector(".o");
let contraComputador;
const vazio = "";

export function jogadas() {

  // evento para saber se são de 2 jogadores locais ou contra o computador
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
      contraComputador = this.getAttribute("id");

      setTimeout(function () {
        menu.classList.add("esconder");
        grades.classList.remove("esconder");
        placar.classList.remove("esconder");
        voltar.classList.remove("esconder");
      }, 500);
    });
  }

  //contador de jogadas
  let jogador1 = 0;
  let jogador2 = 0;

  //clique nas caixas
  for (let i = 0; i < caixa.length; i++) {
    caixa[i].addEventListener("click", function () {
      let elemento;

      if (jogador1 == jogador2) {
        //x
        elemento = x;
      } else {
        //o
        elemento = o;
      }

      //verifica se já tem x ou o
      if (this.childNodes[0].innerText == vazio) {
        let cloneElemento = elemento.cloneNode(true);

        this.removeChild(this.firstChild);
        this.appendChild(cloneElemento);

        //computar jogada
        if (jogador1 == jogador2) {
          jogador1++;

          if (contraComputador == "pc") {
            jogadaComputador();
            jogador2++;
          }
        } else {
          jogador2++;
        }

        //checa quem foi o vencedor
        checarVitoria();
      }
    });
  }
}

function jogadaComputador() {

  let cloneO = o.cloneNode(true);
  let contador = 0;
  let preenchidos = 0;

  for(let i = 0; i < caixa.length; i++){

    let numeroAleatorio = Math.floor(Math.random() * 5);

    //somente preencher se estiver vazio o filho
    if(caixa[i].childNodes[0].innerText == vazio){
      if(numeroAleatorio <= 1) {
        caixa[i].removeChild(caixa[i].firstChild);
        caixa[i].appendChild(cloneO);
        contador++;
        break;
      }
      //checagem de quantas estão preenchidos
    } else {
      preenchidos++;
    }

  }

  if(contador == 0 && preenchidos < 9) {
    jogadaComputador();
  }

}
