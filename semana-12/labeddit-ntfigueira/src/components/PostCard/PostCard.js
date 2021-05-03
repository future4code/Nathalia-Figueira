import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { PostsCardContainer, 
        PostCardContent, 
        PostTitle, 
        PostIcons
 } from './Styled'


const PostCard = (props) => {

  return (
    <PostsCardContainer onClick={props.onClick}>
      <CardActionArea>
      <PostTitle align={'center'}>
            <b>{props.title.toUpperCase()}</b>
          </PostTitle>
        <PostCardContent>
          <PostIcons>
              <FavoriteIcon style={{ color: 'white' }}/>
              <ShareIcon style={{ color: 'white' }}/>
          </PostIcons>
        </PostCardContent>
      </CardActionArea>
    </PostsCardContainer>
  )
}

export default PostCard