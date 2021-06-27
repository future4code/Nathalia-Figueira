// EXERCÍCIOS SOBRE LOOPS


// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// E X E R C Í C I O 1
// O que o código abaixo está fazendo? Qual o resultado impresso no console?
//let valor = 0
//for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// RESPOSTA = Pelo que pude entender ele inicia uma variável no valor 0, para 
// variável i = 0; continua até i ser menor que 5(que seria 4 neste caso), depois
// tem um incremento o qual o valor de i passa a ser 5.
// depois o valor recebe o incremento do valor de i = 5 
// valor é 5 + 5 =  10
// O console vai imprimir( valor)  = 10
//______________________________________________________________

//E X E R C Í C I O 2
//Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// Resposta = cria - se uma variavel com valor constante chamado Lista.
// Depois cria uma variavel modificavel chamada numero a partir da variavel lista. 
// se o numero for maioe que 18 ele sera impresso como um Number pertencente a 
// variavel chamada numero. 
//_________________________________________________________________

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// E X E R C Í C I O 3
// Nas perguntas abaixo, considere que você tenha acesso a um array(chamado de 'array original')
// que seja composto somente de números.Após o enunciado, há um exemplo de qual deve ser a resposta
// final de cada programa individualmente.

// a. Escreva um programa que:
//  - **Imprima** cada um dos valores do array original.
// let original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (numeros of original) {
//     console.log (numeros)
// }

//   b. Escreva um programa que:

//   - ** Imprima ** cada um dos valores do array original divididos por 10
// let original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let numero of original) {
//     console.log(numero/10)
// }
// c. Escreva um programa que:

// - **Crie** um novo array contendo, somente, os números pares do array original.
// - **Imprima** esse novo array
let original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numerosPares= [0]

for (numeros of original) {
    console.log(numeros)
    if (numeros % 2 === 0)
        numerosPares = numeros
}


// d. Escreva um programa que:

// - **imprima** o index e os valores do array da seguinte forma: "O elemento do índex `i` é: `numero`"
// - **Imprima** este novo array
// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original.