import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'



export const PostsCardContainer = styled(Card)`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-around;
  margin: 10px;
  border: none;
  ` 


export const PostTitle = styled(Typography)`
display:flex;
height:40px;
width: 200px;
font-size: 90%;

`

export const PostIcons = styled(CardContent)`
 display: flex;
 flex-direction: row;
 width: 100%;
 height:100%;
 margin-left: auto;
`

export const PostCardContent = styled(CardContent)`
display:flex;
`

export const PostCardActionArea = styled(CardActionArea)`
height: 100px;
`