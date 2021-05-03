import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'


export const PostsCardContainer = styled(Card)`
  width: 200px;
  margin: 10px;
  ` 


export const PostTitle = styled(Typography)`
display:flex;
color: #FFF6D5;
font-size: 90%;

`

export const PostIcons = styled(CardContent)`
 display: flex;
 flex-direction: column;
 width: 10%;
 height:100%;
 margin-left: auto;
`

export const PostCardContent = styled(CardContent)`
display:flex;
`
