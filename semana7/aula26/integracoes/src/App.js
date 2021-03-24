import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Box = styled.div`
    margin: 10% 40%;
    display: flex;
    background-color: grey; 
    flex-direction: column;
    border: 2px solid black;
    border-radius: 10px;
    justify-content: center;
    align-items:center;
    height: 300px;
    width: 20%;`

const Itens = styled.div`
margin: 10px;
justify-content: space-around;
`
const Item = styled.div`
margin: 4px;`


export default class App extends React.Component {
  state = {
    id: [],
    inputName: "",
    inputEmail:"",

  }
  handleOnChangeName = (event) => {
    this.setState({ inputName: event.target.value });
  };
  handleOnChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }
  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "nathalia-figueira-cruz"
          }
        }
      )
      .then((res) => {
        this.setState({ inputName: '' })
        this.setState({ inputEmail: '' })
        alert("Parabens!Cadastro realizado com Sucesso.")
      })
      .catch((err) => {
        this.setState({ inputName: '' })
        this.setState({ inputEmail: '' })
        alert("Por favor verifique as informações. </br>Nome ou Email Inválido.")
      });
  };


    render(){
      return (
        <div>
          <button> Lista de cadastros</button>
          <Box>
            <h1>Cadastro</h1>
            <Itens>
                <Item>
                  <label >Nome:</label>
                </Item>
                <Item>
                  <input value={this.state.inputName}
                    onChange={this.handleOnChangeName}
                    placeholder={"Nome do Usuario"}>
                  </input>
                </Item>
            </Itens>
            <Itens>
                <Item>
                  <label >Email: </label>
                </Item>
                <Item>
                  <input
                    value={this.state.inputEmail}
                    onChange={this.handleOnChangeEmail}
                    placeholder={"Email"}>
                  </input>
                </Item> 
            </Itens>
            <button >Enviar</button>
            </Box>
        </div>
      )
    }
    }



