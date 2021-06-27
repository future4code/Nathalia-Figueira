import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreatePlaylist from './pages/CreatePlaylist.js';
import EditPlaylists from './pages/EditPlaylists.js';
import Playlist from './pages/Playlist.js'

export default class App extends React.Component {
  state = {
    page: "editPlaylists"
  };

  render(){
    return(
      <div>
      <h1> Labefy</h1>
      
      <CreatePlaylist/>
      <EditPlaylists/>
      </div>
    );
  };
}

