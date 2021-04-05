import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../Parameters";

export default class UsersListPage extends React.Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.getAllUsers();
    };
    
    getAllUsers = () => {
        axios
            .get(baseUrl, axiosConfig)
            .then((res) => {
                this.setState({ users: res.data });

            })
            .catch((err) => {
                console.log(err);
            });
    };

    deleteUser = (id) => {
        if (window.confirm("Deseja mesmo deletar o usuário?")) {
            axios
                .delete(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                    axiosConfig
                )
                .then((res) => {
                    this.getAllUsers();
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    
        
    render() {
        const mapUsers = this.state.users.map((user) => {
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <button onClick={ () => this.deleteUser(user.id)}>Deletar</button>
                </div>
            );
        });
        return (
            <div>
                <h2>Lista de Usuários:</h2>
                {this.state.users.map((user) => {
                    return (
                        <div>
                            {mapUsers}
                        </div>
                    );
                })}
            </div>
        );
    }
}