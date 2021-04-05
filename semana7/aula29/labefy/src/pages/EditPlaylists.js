import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {baseUrl} from '../Parameters.js';
import {axiosConfig} from '../Parameters.js';


export default class EditPlaylists extends React.Component {
    
    state = {
        nameEdit:""
    };

    handleNameEdit = (e) => {
        this.setState({ nameEdit: e.target.value});
    };
    editPlaylist = () => {
        const bodyEdit = {
            name: this.state.nameEdit
        };

        axios
        .get(baseUrl, bodyEdit, axiosConfig)
        .then((resEdit) => {
            console.log(resEdit);
            alert("Vamos a Edição");
            this.setState({ nameEdit: "" });
    })
        .catch((err) => {
            alert("Playlist Inexistente");
            console.log(err);
    });
    };



    render(){
        return(
            <div>
            <h2>Editar Playlist: </h2>
            <label>Qual Playlist Deseja Editar:</label>
            <input value={this.state.nameEdit} onChange={this.handleNameEdit} placeholder="Nome da Playlist"></input>
            <button id="edit" onClick={this.editPlaylist}>Editar</button>
            </div>

        );
    };


}