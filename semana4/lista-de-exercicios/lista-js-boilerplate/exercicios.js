// • Não modifiquem o arquivo testes.js
// • Não modifiquem os nomes das funções do arquivo exercicios.js
// • Escrevam o código dentro da função correspondente ao número do exercício, no
// arquivo exercicios.js
// • Não esqueçam de usar o return quando falamos de retornar a resposta(seja uma
// string, número, objeto ou array).
// • Nos exercícios envolvendo objeto lembrem - se de colocar os nomes das
// propriedades exatamente como mostramos nos enunciados.
// • Se vocês travarem em um exercício, pulem para o próximo.E, se mesmo assim
// continuarem muito travados / travadas, venham falar conosco.
// • Os testes vão começar falando que vocês erraram a questão porque ainda não
// existe lógica dentro das funções! Não se desespere com isso!
// • Sintam - se livres para consultar os materiais das aulas anteriores

//Exercício 1

function inverteArray(array) {
   // implemente sua lógica aqui
   let arrayReverso = [0, 8, 23, 16, 10, 15, 41, 12, 13]
   arrayReverso.reverse(arrayReverso.values);
   return arrayReverso

}
//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   // implemente sua lógica aqui
   numeroPares = [];
   array.forEach(number => {
      if (number % 2 === 0) {
         numeroPares.push(number ** 2);
      } 
   })
   return numeroPares;

}


//Exercício 3

function retornaNumerosPares(array) {
   // implemente sua lógica aqui
   numeroPares = [];
   array.forEach(number => {
      if (number % 2 === 0) {
         numeroPares.push(number);
      }
   })
   return numeroPares;
}



//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}