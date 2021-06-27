import React from "react";
import CreateUserPage from "./pages/CreateUserPage.js";
import UsersListPage from "./pages/UsersListPage.js";

export default class App extends React.Component {
  state = {
    page: "createUser"
  };

  changePage = () => {
    if (this.state.page === "createUser") {
      this.setState({ page: "usersList" });
    } else if (this.state.page === "usersList") {
      this.setState({ page: "createUser" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "createUser":
        return <CreateUserPage />;
      case "usersList":
        return <UsersListPage />;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button onClick={this.changePage}>Lista de Cadastrados</button>
        {this.renderPage()}
      </div>
    );
  }
}
