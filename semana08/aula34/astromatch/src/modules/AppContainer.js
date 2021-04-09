import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import ProfileChoice from './ProfileChoice';


const HtmlDiv =styled.div `
width: 100vw;
height: 100vh;
position: fixed;
display:flex;
justify-content:center;
align-items: center;

`

const ContainerDiv = styled.div`
  background-color: #8B008B	;
  width:40vw;
  min-width:400px;
  height: 98vh;
  position: relative;
  display: flex;
  border: 5px solid black;
  border-radius: 10px;
 `

export default class AppContainer extends Component{

  state = {
    page: 'ProfileChoice'
  }




    render(){
    return (
      <HtmlDiv>
        <ContainerDiv>
          <Header>
          </Header>


        </ContainerDiv>
      </HtmlDiv>
        );
    }
    }