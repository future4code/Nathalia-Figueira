import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import { pokeBallBackground } from "../Parameters.js";
import {principalBackgroundUrl} from "../Parameters";
import PokePag from "./PokePag.js";


const PagInicial = Styled.div`
text-align:right;
margin: 0;
position: fixed;
height: 100vh;
width: 100vw;
background-image: url("https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2016/08/pokeball-divulgacao.jpg");
-webkit-background-size: 100%;
-webkit-background-resolution: hd;
background-position: 80% 45%;

`
const Cadastro = Styled.div`
display: flex;
flex-direction: column;
margin-left:60%;
margin-top: 10%;
margin-right:8%;
text-align: right;
justify-items: right;
height: 50vh;
width:20vw;
`

const Title = Styled.h1`
color: white;
text-shadow: 4px 2px #ff0000;
`
const Subtitulo = Styled.label`
color: red;
margin: 8px;`

const CampoNome = Styled.input`
margin-left:36%;
width:60%;
font-size: 20px;
`
const ConfirmarNome = Styled. button`
width: 40%;
margin-left: 60%;
margin-top:8px;
border-radius: 50px;
`

export default class GetStart extends React.Component {
        state ={
            name:""
        }
        handleName = (event) => {
            this.setState({ name: event.target.value });
        };
    

    render() {
        return (
            <PagInicial>
                <Cadastro>
                <Title>Você está Pronto Para Pegar Pokémons? </Title>
                <Subtitulo>Insira o seu nome:  </Subtitulo>
                <CampoNome onChange={this.handleName}
                value={this.state.name}
                placeholder=" Insira Seu Nome"/>
                <ConfirmarNome onClick={this.state.createUser} link to="/PokePag.js">Confirmar</ConfirmarNome>
                </Cadastro>
            </PagInicial>
        );
    }
}