/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros   
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
*/
// ** Montando o jogo 🎰**
//    1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".
//    2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
//    3 - Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".
//    4 - Se o usuário responder Ok, o programa deve iniciar uma nova rodada.
//Começando uma rodada
// A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada
// jogador e informar o vencedor(usuário ou computador), ou empate, caso as pontuações sejam iguais.
//    5 - Nós preparamos um método que permite sortear uma carta.Ela vem com um texto que representa
// o que é escrito na carta; e um valor que mostra a pontuação da carta. 
//    6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo
//    "Usuário - cartas: Q♣️ 10♣️  - pontuação 20"
//    "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
//    7 - Além disso, deve indicar o vencedor ou um empate
//    "Empate!"
//    "O usuário ganhou!"
//    "O computador ganhou!"

const boasVindas = alert("Bem-vindo ao jogo de Blackjack!")
let iniciar = confirm("Quer iniciar uma nova rodada?")

// Começando uma rodada 
let maoJogador = [];
maoJogador[0] = ""
maoJogador[2] = ""
maoJogador[3] = ""
maoJogador[4] = ""
maoJogador[5] = ""
   
let maoComputador = [];
maoComputador [0] = ""
maoComputador [2] = ""
maoComputador [3] = ""
maoComputador [4] = ""
maoComputador [5] = ""

let pontosJogador = Number
let pontosComputador = Number
let resultado = ""
let resultadojogador = Number
let resultadoComputador = Number



if (iniciar) {
   console.log ("Vamos Apostar!")
   maoJogador[0] = comprarCarta()
   maoJogador[1] = comprarCarta()
   maoComputador[0] = comprarCarta()
   maoComputador[1] = comprarCarta()
   pontosJogador = (maoJogador[0].valor + maoJogador[1].valor) 
   pontosComputador = (maoComputador[0].valor, " ", maoComputador[1].valor)

   console.log("Usuário -  cartas: ", maoJogador[0].texto, " ", maoJogador[1].texto,
      " Pontuação = ",pontosJogador, 
      "\nComputador -  cartas: ", 
      " Pontuação = ", pontosComputador)
} else {
   console.log ("O Jogo Acabou.")
   } 
if (pontosJogador <= 21 && pontosComputador > 21) {
   console.log("O Usuário Ganhou!")
}
else if (pontosJogador > 21 && pontosComputador <= 21) {
   console.log("O Computador Ganhou!")
}
else if ((pontosJogador === 21 & pontosComputador === 21) || (pontosJogador > 21 && pontosComputador > 21)) {
   console.log("Empate!");
}else desempate()
      console.log (resultado)

function desempate(){
   if (pontosJogador < 21 & pontosComputador < 21) {
      resultadoJogador = 21 - pontosJogador
      resultadoComputador = 21 - pontosComputador
   }
   if (resultadoJogador < resultadoComputador) {
         resultado = "O Usuário Ganhou!"
   }
   if (resultadoJogador > resultadoComputador) {
         resultado = "O Computador Ganhou!"
   }
   if (resultadoJogador === resultadoComputador) {
         resultado = "Empate!"
      }
   }
