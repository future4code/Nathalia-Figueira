/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   
   
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
*/
// ** Montando o jogo 🎰**
//    1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".
const boasVindas =alert("Bem-vindo ao jogo de Blackjack!")
//    2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
let iniciar = confirm("Quer iniciar uma nova rodada?")
//    3 - Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".
//    4 - Se o usuário responder Ok, o programa deve iniciar uma nova rodada.
//Começando uma rodada
// A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada
// jogador e informar o vencedor(usuário ou computador), ou empate, caso as pontuações sejam iguais.
//    5 - Nós preparamos um método que permite sortear uma carta.Ela vem com um texto que representa
// o que é escrito na carta; e um valor que mostra a pontuação da carta. 


// Começando uma rodada 
let maoJogador = [];
maoJogador[0] = ""
maoJogador[2] = ""
maoJogador[3] = ""
maoJogador[4] = ""
maoJogador[5] = ""
   
let maoMaquina = [];
maoMaquina [0] = ""
maoMaquina [2] = ""
maoMaquina [3] = ""
maoMaquina [4] = ""
maoMaquina [5] =""


if (iniciar) {
   console.log ("Vamos Apostar!")
   maoJogador[0] = comprarCarta()
   maoJogador[1] = comprarCarta()
   maoMaquina[0] = comprarCarta()
   maoMaquina[1] = comprarCarta()
   console.log("Mão da Máquina = \n", maoMaquina[0].texto, "  ", maoMaquina[1].texto,
      "\n Sua Mão = \n", maoJogador[0].texto, " ", maoJogador[1].texto)
} else {
   console.log ("O Jogo Acabou.")
   } 




//    6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo
//    "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
//    "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
//    7 - Além disso, deve indicar o vencedor ou um empate
//    "Empate!"
//    "O usuário ganhou!"
//    "O computador ganhou!"








