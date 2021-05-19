// console.log ('Hello World!')

//Letra A
// let minhaString : string
// minhaString = 10
// Resposta : Aparece uma caixa indicando que o parametro fornecido não é compátivel com o tipo da variavel
// Type 'number' is not assignable to type 'string'.ts(2322)
// View Problem (Ctrl+K N)
// No quick fixes available
//Letra B
// let meuNumero : number | string
//  meuNumero = "nathi"
// Resposta:
// Adicionando o tipo separando por este sinal |

//Letra C

enum coresArcoIris {
    VIOLETA ="violeta", 
    ANIL = "anil", 
    AZUL = "azul", 
    VERDE = "verde", 
    AMARELO = "amarelo", 
    LARANJA = "laranja", 
    VERMELHO = "vermelho",
}

type pessoa = {
    nome: string
    idade: number
    corFavorita: coresArcoIris 
}

const ana : pessoa = {
    nome : "Ana",
    idade : 13,
    corFavorita : coresArcoIris.VIOLETA ,
}

const bia : pessoa = {
    nome : "Bia",
    idade : 14,
    corFavorita : coresArcoIris.ANIL ,
}

const carol : pessoa = {
    nome : "Carol",
    idade : 13,
    corFavorita : coresArcoIris.AMARELO ,
}

const pessoas : pessoa[] = []
pessoas.push(ana)
pessoas.push(bia)
pessoas.push(carol)
 console.table(pessoas)





