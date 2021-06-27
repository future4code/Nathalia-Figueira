import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {baseUrl} from '../Parameters.js';
import {axiosConfig} from '../Parameters.js';
import CreatePlaylist from './CreatePlaylist.js';
import EditPlaylists from './EditPlaylists.js';

export default class Playlist extends React.Component {
    state={
    playlists:[]
    };
    componentDidMount() {     
        this.getAllPlaylists();
        }
        getAllPlaylists = async () => {
            try {
                const response = await 
                axios
                .get(baseUrl,axiosConfig);
                this.setState({ playlists: response.name });
            }   
            catch (err) {
                console.log(err);
            };
        }
    render(){
        const mapPlaylists = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                </div>
                );
            });        
        return(
            <div>
                <h2>Playlists Criadas: </h2>
                {mapPlaylists}
            </div>
        );
    };
}