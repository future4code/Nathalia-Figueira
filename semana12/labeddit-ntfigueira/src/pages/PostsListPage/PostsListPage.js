import React from "react"
import PostagemCard  from "../../components/PostCard/PostCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { PostsCardContainer } from "../../components/PostCard/Styled"



const PostsListPage = (postagem) => {
  useProtectedPage()
 
  const posts = useRequestData([],`${BASE_URL}posts`)
  console.log(posts.posts)
  

  const postCards = posts.posts && posts.posts.map ((postagem)=>{
    return(
    <PostagemCard
    key ={postagem.id}
    title={postagem.title}
    />
    )
  })

  return (
    <PostsCardContainer>
      {postCards}
    </PostsCardContainer>
          


   
    )
}

export default PostsListPage
