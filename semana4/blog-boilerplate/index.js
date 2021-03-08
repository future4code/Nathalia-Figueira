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
const titulo = document.getElementById ("titulo-post")
const autor = document.getElementById ("autor-post")
const conteudo = document.getElementById ("conteudo-post")
const div = document.getElementById("container-de-posts")

const postagem = {
        titulo: Text,
        autor: Text,
        conteudo: Text,
    }

    

    function adicionar(evento){
        console.log(evento)
        adicionarPost ()
    }
    

function adicionarPost() {
        const tituloDoPost = postagem.titulo
        const nomeAutor = postagem.autor
        const textoConteudo = postagem.conteudo

        div.innerHTML += `<h1>${titulo.value}</h1>`
        div.innerHTML += `<h3>${autor.value}</h3>`
        div.innerHTML += `<p>${conteudo.value}</p>`
        
        console.log(postagem.value)
        console.log(tituloDoPost.value)
        console.log(nomeAutor.value)
        console.log(textoConteudo.value)

        titulo.value = ""
        autor.value=""
        conteudo.value =""
    }



