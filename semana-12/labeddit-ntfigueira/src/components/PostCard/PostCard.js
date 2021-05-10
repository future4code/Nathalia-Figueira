import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { PostsCardContainer,
        PostCardActionArea, 
        PostCardContent, 
        PostTitle, 
        PostIcons
 } from './Styled'


const PostagemCard = (postagem) => {

  return (
    <PostsCardContainer>
      <PostCardActionArea>
      <PostTitle 
      align={'center'}
      color= {'primary'}>
            <b>{postagem.title.toUpperCase()}</b>
          </PostTitle>
        <PostCardContent>
          <PostIcons>
              <FavoriteIcon color="secondary"/>
              <ShareIcon color="secondary"/>
          </PostIcons>
        </PostCardContent>
      </PostCardActionArea>
    </PostsCardContainer>
  )
}

export default PostagemCard