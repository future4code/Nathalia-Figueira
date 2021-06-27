import React from 'react';
import Style from 'styled-components';
import axios from 'axios';
import GetStart from "./Page/GetStart.js";
import PokeDexPag from "./Page/PokePag.js";
import { baseUrl } from './Parameters';

export default class App extends React.Component {
  state={
    state: "getStart"
  }

render() {
  return (
    <GetStart/>
    
      
  );
}
}
