// 1 - Extraia o para dentro da pasta blog , garanta que o arquivo JS está
// linkado com o arquivo HTML.
//VERIFICADO
// blog.zip
// 2 - Capture os valores dos campos do HTML e crie um objeto para armazenar as
// informações do seu post, possuindo as mesmas propriedades que serão
// preenchidas no formulário.

// 3 - Ao preencher o formulário, adicione o objeto criado no passo acima a um array
// de objetos e limpe os campos do formulário. Para testar, faça com que o array seja
// impresso no console.
// 4 - Na mesma página, crie uma seção no HTML que será responsável por mostrar
// os posts. Pode ser uma div ou uma section, por exemplo.
// 5 - Crie uma função responsável por inserir os posts no HTML. Não se preocupe
// com a aparência, garanta que os dados estão sendo exibidos
    

function postagem () {
    let titulo = String (document.getElementById('titulo-post'))
    let autor = String (document.getElementById('autor-post'))
    let conteudo = String (document.getElementById('conteudo-post'))
    if ( titulo.value !=="" && autor.value!=="" && conteudo.value !== ""){
        let publicacao = document.getElementById('container-de-posts')
        publicacao.innerHTML += <h1> $(titulo.valor)</h1>; 
        <h3>$(autor.valor)</h3>;
        <p>$(conteudo.valor)</p>
        div;
        titulo.value =""
        autor.value=""
        conteudo.value =""        console.log (postagem)

    } else (titulo.value==="" || autor.value==="" || conteudo.value ==="")
        alert ("Preencha todos os campos corretamente.")
}
postagem()

posted.innerHTML += `