
//  E X E R C Í C I O   D E   L E I T U R A  D E    C Ó D I G O 
// Exercício 1
// Leia o código abaixo:
// //function minhaFuncao(variavel) {
// return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// a.O que vai ser impresso no console ?
//     Resposta : será impresso 10 e abaixo 50;
// b.O que aconteceria se retirasse os dois console.log e simplesmente invocasse
// a função minhaFuncao(2) e minhaFuncao(10) ? O que apareceria no console ?
//     Resposta : ela vai apresentar erro, pois não foi chamada corretamente

// Exercício 2
// Leia o código abaixo:
// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

// const outraFuncao = function (array) {
//     for (let i = 0; i < 2; i++) {
//         console.log(array[i])
//     }
// }

// outraFuncao(arrayDeNomes)
// a.Explicite quais são as saídas impressas no console.
//     Resposta: vai imprimir a quantidade de itens, até o item que seja menor que 2 em sua posição no arrayDeNomes
//     de modo que vai imprimir os nomes Darvas e Caio, um em cada linha
// b.Se arrayDeNomes mudasse de valor para["Amanda", "Caio"], o que vai ser impresso no console ? 
//     Resposta : iria imprimir os nomes amanda e Caio, um em cada linha

// EXERCÍCIO 3
// O código abaixo mostra uma função que recebe um array e devolve outro array.
// Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
// Resposta: ele cria uma variavel, que é uma array, e condiciona que se O
// item da variavel do array dividivo por dois tiver zero como resizeTo, ele
// deve adiconar um número ao arrayFinal, que é o numero vezes ele mesmo.E
//     no final retorna o arrayFinal. Eu chamaria de multiplicacaoEntrePares
// const metodo = (array) => {
//     let arrayFinal = [];

//     for (let x of array) {
//         if (x % 2 === 0) {
//             arrayFinal.push(x * x)
//         }
//     }

//     return arrayFinal;
// }

//  E X E R C Í C I O   D E   E S C R I T A  D E    C Ó D I G O 
// Exercício 4
// Escreva as funções abaixo:
// a.A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando
// algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
// Lembrando que a função não possui entradas, apenas imprimir essa mensagem.
// function informacoes() {
//     console.log("Eu sou Nathália, tenho 31 anos, moro no Rio de Janeiro e sou estudante")
// }

// informacoes()
//     b.Agora escreva uma função que receba 4 parâmetros que correspondem às informações
// de uma pessoa: o nome(`string`), a idade(`number`), a cidade(`string`) e um`boolean`
function informacoes(String, Number, String, Boolean) {
    console.log("Eu sou",[NOME]," tenho",[IDADE]," anos, moro em",[ENDEREÇO]," e",[SOU / NÃO SOU],"estudante." )
}

informacoes()
// que representa se é estudante ou não.Ela deve retornar uma`string` que unifique todas
// as informações da pessoa em uma só mensagem com o template:
// Eu sou[NOME], tenho[IDADE] anos, moro em[ENDEREÇO] e[SOU / NÃO SOU]estudante. 

