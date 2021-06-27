import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import GetStart from "./GetStart.js";


const PokePag = Styled.div`
background-color: blue;` 

const Usuario =Styled.div`
`
export default class PokeDexPag extends React.Component {

    state ={
        pokemonList:[]
    }
 componentDidMount(){
     this.getPokemonList();
 }
getPokemonList =() =>{
axios.get ("https://pokeapi.co/api/v2/ability/?limit=150&offset=0")
    .then((answer) => this.setState({pokemonList: answer.data.results}))
    .catch((err) => console.log (err));
};
render(){
    return(   
    <PokePag>
        <Usuario>

        </Usuario>
        <h1>Pokédex</h1>
    </PokePag>
    );
}
}
