import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../Parameters";

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

export default class CreateUserPage extends React.Component {
    
    state = {
        name: '',
        email: ''
    };


    handleName = (e) => {
        this.setState({ name: e.target.value })
    };

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    };
    creatUser = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        };
        axios
            .post(baseUrl, body, axiosConfig)
            .then((res) => {
                console.log(res);
                this.setState({ name: "", email: "" });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    render() {
        return (
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
            
        )
    }

}