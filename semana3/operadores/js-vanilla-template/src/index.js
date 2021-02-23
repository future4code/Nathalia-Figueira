//**Exercícios de interpretação de código**
// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 
console.log("a. ", resultado)
    a. falso
resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
    b. falso
resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
    c. verdadeiro
console.log("e. ", typeof resultado)
    e. boolean
*/

// 2. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
/*
let array
console.log('a. ', array)
    a. undefined
array = null
console.log('b. ', array)
    b. null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
    c. 11
let i = 0
console.log('d. ', array[i])
    d. 3
array[i+1] = 19
console.log('e. ', array)
    e. 11
const valor = array[i+6]
console.log('f. ', valor)
    f. 9
*/

//Exercícios de escrita de código
// 1. Faça um programa que:
//a. Pergunte a idade do usuário
//let idade = ""
//idade = prompt("Qual a sua idade?")
//let idadeNumber = Number (idade)

//b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//let idadeAmigo = ""
//idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
//let idadeAmigoNumber = Number (idadeAmigo)

/*
c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?",
seguido pela resposta(`true` ou`false`)
*/
//console.log ("Sua idade é maior do que a do seu melhor amigo", idade > idadeAmigo)

//d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)
//console.log(idadeNumber -= idadeAmigoNumber)


// 2. Faça um programa que:
// a. Peça ao usuário que insira um número par.
//let numeroPar = ""
//numeroPar = prompt("Insira um número par:")
//let numeroParNumber = Number(numeroPar)

// b. Imprima na tela **o resto da divisão** desse número por 2.
//console.log(numeroParNumber % 2) 

//c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Os resultado do resto sempre dá 0

//d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Os resultados do resto sempre dá 1

// 3. Faça um programa, seguindo os passos:

//a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
//listaDeTarefas = []
//b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//listaDeTarefas[0] = prompt("Por favor, insira uma tarefa do seu dia:")
//listaDeTarefas[1] = prompt("Mais uma tarefa do seu dia")
//listaDeTarefas[2] = prompt("E por fim a última tarefa do seu dia")
//c. Imprima o array na tela
//console.log (listaDeTarefas)
//d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
//let tarefaConcluida = prompt("Qual das tarefas você já realizou 0, 1 ou 2?")
//removerTarefa = Number(tarefaConcluida)
//e. Remova da lista o item de índice que o usuário escolheu.
//listaDeTarefas.splice (removerTarefa, 1)
//f. Imprima o array na tela
//console.log (listaDeTarefas)

//4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
//let nomeUsuario = ""
//nomeUsuario = prompt("Informe o seu nome:")
//let emailUsuario = ""
//emailUsuario = prompt("Informe o seu email:")
//console.log ("O email " +emailUsuario+ " foi cadastrado com sucesso. Seja bem-vindo(a), " +nomeUsuario+ " !" )

//Desafios

//Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura 
//entre Graus Celsius(°C), Graus Fahrenheit(°F) e Kelvin(K).Abaixo estão duas delas:
//Graus Fahrenheit(°F) para Kelvin(K)  = (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
//Graus Celsius(°C) para Graus Fahrenheit (°C)  = (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
//const fahrenheitParaKelvin = (77 - 32) * 5 / 9 + 273.15
//console.log (fahrenheitParaKelvin+"°k")
//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
//const celsiusParaFahrenheit = 80 * 9 / 5 + 32
//console.log (celsiusParaFahrenheit+"°F")
//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
//const fahrenheitParaKelvin = (30 - 32) * 5 / 9 + 273.15
//console.log (fahrenheitParaKelvin+"°k")
//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
//let celsius =""
//let fahrenheit = ""
//celsius = prompt("Insira o valor celsius para converter em Fahrenheit:")
//celsiusNumber =Number(Celsius)
//let celsiusParaFahrenheit = (celsiusNumber) * 9 / 5 + 32
//console.log (celsiusParaFahrenheit+"°F")

// 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
//Sabe - se que o quilowatt - hora de energia custa R$0.05.Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
//a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
//b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima 
//considerando 15 % de desconto.