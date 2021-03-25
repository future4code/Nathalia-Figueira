import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import { pokeBallBackground } from "../Parameters.js";
import { principalBackground } from "../Parameters";


const Principal = Styled.div`
background-image: url(principalBackground)
`

export default class GetStart extends React.Component {

    render() {
        return (
            <Principal>
                <h1>Você está Pronto Para Pegar Pokémons? </h1>
                <label>Insira o seu nome:  </label>
                <input />
                <button>Confirmar</button>
            </Principal>
        );
    }
}