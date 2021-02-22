// Exercício de Interpretação de Código
/* 1Analise o programa abaixo e diga o que será impresso 
no console, SEM EXECUTAR o programa.
a = 10
b = 10

console.log(b)    
    ----  RESPOSTA = 10

b = 5
console.log(a, b)  
    ----  RESPOSTA = 10 5

*/

/*2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)
    ----  RESPOSTA = 10 20 a
*/

//**Exercícios de escrita de código**
// 1 - Construa um programa, seguindo os seguintes passos:

// a)
let nome = ""
//undefined

// b)
let idade = ""
//undefined
//c)
typeof nome
//"string"
typeof idade
//"string"

/* d) Como o valor foi indefinido, acredito que o string seja uma predeterminado, uma vez que o mesmo
é uma classe de um objeto, que neste caso é indefinido, mas ainda sim é um objeto, mesmo que sem valor.
*/ 
//d)
nome = prompt ('Qual o seu nome?')
//"Nathalia"
idade = prompt ('Qual a sua idade?')
//"31"

/*e) Notei que ambas os objetos são liddos como string, creio que como coloquei acima, isso se deve ao fato de string ser
uma classe pré definida, uma vez que comporta letras, numeros e caracteres.
*/
//f)console.log ('Olá,'+ nome +'. Seja bem-vindo. Sua idade é,'+ idade  +'.')

/*2.Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). 
Imprima-as com as respostas no console da seguinte forma:
*/console.log ('1- Qual o seu pais?'+pais+'Qual o seu estado?'+ estado+ '.Qual a sua cidade?'+cidade+
'.Qual a sua rua?'+rua+ '.Qual o número da sua rua?' +numero +'.Por, fim. Qual o seu cep?' +cep+'.')

//3 -Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos: