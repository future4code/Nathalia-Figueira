// Exercício1
// Resposta A
//R: node  nomeDoArquivo.js parametro
//Ex node exercicios.js 



//Resposta B e C
// const name = process.argv[2]
// const age = Number(process.argv[3])
// const futureAge = age + 7

// console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}`)

//Exercício 2
// const number1 = Number(process.argv[2])
// const number2 = Number(process.argv[3])
// const operacao = process.argv[4]
// const soma = number1 + number2
// const multiplicação  = number1 * number2
// const subtracao = number1 - number2 
// const divisao = number1 / number2

// switch (operacao) {
//     case "soma" :
//         console.log(`O resultado é : ${soma}`)
//         break;
//     case "multiplicação":
//         console.log(`O resultado é : ${multiplicação}`)
//         break;
//     case "subtração":
//         console.log(`O resultado é : ${subtracao}`)       
//         break;
//     case "divisão":
//         console.log(`O resultado é : ${divisao}`)
       
//     break;
// }
// Exercicio 3

const listaTarefas = [process.argv[2], process.argv[3], process.argv[4]]
console.log ({listaTarefas})

console.log(process.argv[0])
console.log(process.argv[1])


//é um array. De todos os argumentos de um processo
//process.argv[0] SEMPRE VALE o próprio node
//process.argv[1] SEMPRE VALE o arquivo que o node vai rodar
//portanto, process.argv[0] e process.argv[1] sempre estão ocupados