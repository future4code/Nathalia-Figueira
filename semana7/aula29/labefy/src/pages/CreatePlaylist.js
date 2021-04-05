import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {baseUrl} from '../Parameters.js';
import {axiosConfig} from '../Parameters.js';


export default class CreatePlaylist extends React.Component {
    state ={
        nameCreate:""
    };
    handleNameCreate = (e) => {
        this.setState({ nameCreate: e.target.value});
    };
    createPlaylist = () => {
        const body = {
            "name": this.state.nameCreate
        };
        axios
        .post(baseUrl, body, axiosConfig)
        .then((resCreate) => {
            console.log(resCreate);
            alert("Playlist Criada Com Sucesso!");
            this.setState({ nameCreate: ""});
    })
        .catch((err) => {
            alert("Não Foi Possível Criar a Playlist");
            console.log(err);
    });
    };
    render(){
        return(
            <div>
            <h2>Criar Nova Playlist: </h2>
            <label>Insira o Nome da Sua Nova Playlist:</label>
            <input value={this.state.nameCreate} onChange={this.handleNameCreate}placeholder="Nome da Playlist"></input>
            <button id="create" onClick={this.createPlaylist}>Criar</button>
            </div>
        );
    };
}