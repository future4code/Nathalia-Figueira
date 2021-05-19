// a. Quais são as entradas e saídas dessa função? 
// O Array de numeros
// A primeira saida é numerosOrdenados, que volta de acordo com os numeros os numeros em oderm crescente
// A segunda saida é a soma que inicia em zero, mas para cada numero do array numeros soma o proximo item
// a terceira saida é a estatistica que ao receber os array da como saida o numero maior, depois o menor e a media dos
// valores presentes no array
// Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas
// Não consegui observar outras váriveis alem das que comportam numeros

function obterEstatisticas(numeros: number[],) {


    type numeros = {
        numeros: number[]
    }

    const numerosOrdenados : number[] = numeros.sort(
        (a, b) => a - b
    ) 
    
    let soma: 0

    for (let num of numeros ){
        soma += num
    }

    const estatisticas = {
        maior:  numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
    console.log(estatisticas)
}

// c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com 
// as chaves **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse 
// tipo, declarado em JavaScript: