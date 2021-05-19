


  function buscarPostsPorAutor(post: any, autorInformado: any) {

    type postagem =[
    {
        autor: string,
        texto: number | string
    }
]
    const posts: postagem = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]
  console.table(posts)

    return posts.filter(
      (post: any) => {
        return post.autor === autorInformado
      }
      
    )
  }