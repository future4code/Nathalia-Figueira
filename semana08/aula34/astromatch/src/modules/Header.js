import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/astromatch.png'


const Header =styled.div `
display:flex;
position: relative;
width:100%;
height: 20%;
justify-content: center;

`
const ImgLogo = styled.img`
width: auto;
height: 100%;
`

export default class HeaderApp extends Component{




    render(){
    return (
        <Header>
            <ImgLogo src={logo}></ImgLogo>
        </Header>
        )
    }
    }