//  EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
// Exercício 1
//Leia o código abaixo:
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}
*/
/*
Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console 
"Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?
*/
/*R E S P O S T A 
Primeiro ele cria uma variável constante, que receberá o seu valor pelo prompt.
Essa variável é transformada de string para number.
Posteriormente temos um laço condicional, no qual o resto da divisão por dois sendo igual a zero
imprimi - se a mensagem "Passou no Teste" e no caso de não ser este o caso a mensagem exibida seja
"Não passou no teste".Ele imprime a mensagem "passou no teste" para números pares e no caso de não ser par
só resta a opção de ser impar, imprimindo a segunda mensagem que é "Não passou no teste" 
*/
//_____________________F I M     D O   E X E R C Í C I O 1_________________________________________________
// Exercício 2
//O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar 
//algumas tarefas de um supermercado.Veja abaixo:
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
//a. Para que serve o código acima?
//R E S P O S T A
//Serve para retornar um valor de acordo com a fruta digitada
//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//R E S P O S T A
//O preço da Maçã é 2.25
//c.Considere que um usuário queira comprar uma`Pêra`, qual seria a mensagem impressa no console se retirássemos
//o`break` que está logo acima do `default`(o`break` indicado pelo comentário "BREAK PARA O ITEM c.") ?
//R E S P O S T A
//O preço da Pêra é 5
//_____________________F I M     D O   E X E R C Í C I O 2_________________________________________________

// Exercício 3
// leia o código abaixo:
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
    console.log("Esse número passou no teste")
	    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/

//a. O que a primeira linha está fazendo?
//R E S P O S T A
//A primeira linha está criando uma variavel constante que armazena seu valor, que será
//inserido pelo usuário, já convertido de string para Number.

//b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//R E S P O S T A
//Esse número passou no teste.No caso acredito que daria undefined, pois o - não será reconhecido Como 
//um sinal negativo, logo o sistema não reconhecerá o número composto por traço. 

//c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//R E S P O S T A
//Como coloquei acima acredito que será indefinido, devido ao fato do não reconhecimento do traço Como
//um sinal negativo.Não dara null pois existe um valor em si, mas não um valor negativo.
//_____________________F I M     D O   E X E R C Í C I O 3_________________________________________________

//  EXERCÍCIO DE ESCRITA DE CÓDIGO
// Eercício 4
/*Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário 
qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade). */

//1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.Se sim, imprima
//no console`"Você pode dirigir"`, caso contrário, imprima`"Você não pode dirigir."`
//R E S P O S T A

//const idadeusuario = Number(prompt("Digite a sua idade:"))

//if (idadeusuario >= 18) {
//    console.log("Você pode dirigir.")
//} else{
//    console.log("Você não pode dirigir.")
//}
//_____________________F I M     D O   E X E R C Í C I O 4_________________________________________________

// Exercício 5
//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar 
//M(matutino) ou V(Vespertino) ou N(Noturno).Imprima no console a mensagem "Bom Dia!", "Boa Tarde!"
//ou "Boa Noite!".Utilize o bloco if/else

//let turno = prompt("Olá, por gentileza digite M se for de manhã, V se for de Vespertino - tarde e N se for noturno")

//if (turno === "m"){
//        console.log ("Bom Dia.")
//    }   else if (turno === "v") {
//            console.log ("Boa Tarde.")
//    }  else if  (turno === "n") {
//        console.log ("Boa Noite.")
//    } else {
//        console.log ("insira um valor válido.")
//    }
//_____________________F I M     D O   E X E R C Í C I O 5_________________________________________________

//Exercício 6
//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

//let turno = prompt("Olá, por gentileza digite M se for de manhã, V se for de Vespertino - tarde e N se for noturno")

//switch (turno) {
//    case 'm':
//        console.log ("Bom Dia.")
//        break
//    case 'v':
//        console.log ("Boa Tarde.")
//        break
//    case 'n':
//        console.log ("Boa Noite.")
//        break
//    default:
//        console.log ("Insira uma letra válida.")
//}

//_____________________F I M     D O   E X E R C Í C I O 6_________________________________________________

// Exercício 7 
/*Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero
fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de 
filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga 
vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, 
imprima "Escolha outro filme :("*/

//let tipoFilme = prompt("Qual o tipo de filme?")
//let valorIngresso = Number(prompt("Qual o valor do ingresso"))

//if (tipoFilme ==="fantasia" && valorIngresso<=15 ) {
//    console.log("Bom Filme!") 
//} else {
//    console.log ("Escolha Outro Filme.")
//} 

//_____________________F I M     D O   E X E R C Í C I O 7_________________________________________________

//DESAFIOS
// Desafio 1
//Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", 
//pergunte ao usuário, pelo prompt que snack ele vai comprar(pipoca, chocolate, doces, etc) e
//imprima no console as mensagens "Bom filme!" e "... com [SNACK]", trocando[SNACK] pelo que o usuário
//colocou no input.
// R E S P O S T A
//let tipoFilme = prompt("Qual o tipo de filme?")
//let valorIngresso = Number(prompt("Qual o valor do ingresso"))

//if (tipoFilme ==="fantasia" && valorIngresso<=15 ) {
//    let snack = prompt("Qual snack você quer comprar?")
//    console.log ("Bom Filme!... com", snack,".")
//} else {
//    console.log ("Escolha Outro Filme.")
//}

//_____________________F I M     D O   D E S A F I O 1_________________________________________________
// Desafio 2
// Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol.
// Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos
// O seu sistema deve solicitar estas informações ao usuário, através do `prompt`.Além disso, ele 
// deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que
// pagar(ou seja, o valor unitário do ingresso multiplicado pela quantidade).Abaixo, há a tabela com
// os valores de cada ingresso e exemplos de execução do programa.Lembrando que o valor de jogos
// internacionais é o mesmo de jogos domésticos, mas seus preços devem ser dados em dólar(considerar 
// a cotação de U$1,00 = R$4, 10)

let nome = prompt("Qual o seu Nome Completo?")
let tipoJogo = prompt("Qual o Tipo de Jogo?\n Digite:\n IN - para internacional\n DO - para doméstico")
let etapaJogo =("Qual a etapa?\n Digite:\n SF - semi-final\n DT - decisão 3º lugar\n FI - final ")
let categoria = Number(prompt("Qual a categoria - ala ?\ Digite:\n 1 - azul \n 2 - verde \n 3 - vermelho \n 4 - rosa")) 
let ingressos = Number(prompt("Qual a Quantidade de Ingressos?")) 

switch (tipoJogo) {
    case 'in':
        tipoJogo = "(IN) internacional"
        let internacional = 4.10
        break
    case 'do':
        tipoJogo = "(DO) Doméstico"
        break
    default:
        tipoJogo = "Insira a sigla Tipo de Jogo Correta"
}

switch (etapaJogo) {
    case 'sf':
        etapaJogo= 1
        break
    case 'dt':
        etapaJogo = 2
        break
    case 'fn':
        etapaJogo = 3
        break
    default:
        tipoJogo = "Insira a sigla Tipo de Jogo Correta"
}
