import React from 'react';
import style from 'styled-components';
import axios from 'axios'

export default class App extends React.Component {
  state = {
    user: [""],
    inputName: "",
    inputEmail: "",
  };

  componentDidMoount() {
    this.getUserlist();

  }
  handleInputChange = (e) => {
    this.setState({ inputName: e.target.value });
    this.setState({ inputEmail: e.target.value });
  };
  getUserlist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/`,
        {
          headers: {
            Authorization: "nathalia-figueira-cruz",
          }
        }
      )
      .then((res) => {
        this.setState({ userlist: res.data.result.list });
        console.log(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    userList = () => {
      const body = {
        name: this.state.inputName,
        email: this.state.inputEmail,
      };
      axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id`,
            body,
          {
            headers: {
              Authorization: "nathalia-figueira-cruz"
            }
          }
        )
        .then((res) => {
          this.setState({ inputName: "" })
          this.setState({ inputEmail: "" })
          this.getUserlist()
        })
        .catch((err) => {
          console.log(err.response.fata);
        });
    };

    render()
    {const userlistnew = this.state.userList.map((userlist) => (
      <li key={userlist.id}> {userlist.name}{userlist.email}</li>
      ));
      return <div className="App">
          <input
            placeholder={"Nome:"}
            value={this.state.inputName}
            placeholder={"Email:"}
            value={this.state.inputEmail}
            onChange={this.handleInputChange}
          />
          <button onClick={this.createUserlist}>Criar Cadastro</button>
          {this.state.userlist.length > 0 ? (
            <ul>{userlistnew}</ul>
          ) : (
            <p>Carregando...</p>
          )}
        </div>;
    }
  }
}



