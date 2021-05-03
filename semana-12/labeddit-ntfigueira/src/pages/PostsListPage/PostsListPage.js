import React from "react"
import PostCard from "../../components/PostCard/PostCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'



const PostsListPage = () => {
  useProtectedPage()
 
  const posts = useRequestData([],`${BASE_URL}posts`)
  console.log(posts.posts)
  

  const postCards = posts.posts && posts.posts.map ((post)=>{
    return <p>{post.title}</p>
    console.log(post)
  })

  return (
      <div>
      {postCards}
      </div>
    )
}

export default PostsListPage
