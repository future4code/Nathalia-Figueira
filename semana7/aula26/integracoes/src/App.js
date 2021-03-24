import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreateUserPage from "./pages/CreateUserPage.js";
import UsersListPage from "./pages/UserListPage.js";


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
          <CreateUserPage></CreateUserPage>
        </div>
      )
    }
    }



