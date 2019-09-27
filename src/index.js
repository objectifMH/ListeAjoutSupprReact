import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: " Einstein T" },
      { id: 12, nom: " Nobel T" },
      { id: 13, nom: " Ace T" },
      { id: 14, nom: " Thales T" },
      { id: 15, nom: " Clara T" }
    ],
    inputMalin: ""
  };

  monClick = () => {
    const clientsPush = this.state.clients.slice();
    clientsPush.push({ id: 43, nom: " Le  petit nouveau" });
    this.setState({ clients: clientsPush });
    console.log(this.state);
  };

  deleteMe = id => {
    const clientsDelete = this.state.clients
      .slice()
      .filter(client => client.id !== id);
    this.setState({ clients: clientsDelete });
  };

  inputChange = event => {
    this.setState({ inputMalin: event.currentTarget.value });
  };

  submitForm = event => {
    event.preventDefault();
    console.log(this.state.inputMalin);
    const nouveauClients = [...this.state.clients];
    let newId = new Date().getTime();

    nouveauClients.push({ id: newId, nom: this.state.inputMalin });
    this.setState({ clients: nouveauClients, inputMalin: "" });
  };

  render() {
    const title = "Liste des petits malins :";
    const monLi = (
      <li>
        <h3>Le premier petit malin </h3>
      </li>
    );
    const desLi = this.state.clients.map(client => (
      <Client details={client} onDelete={this.deleteMe} />
    ));
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.monClick}>hello</button>
        <ul>
          {monLi}
          {desLi}
        </ul>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            value={this.state.inputMalin}
            onChange={this.inputChange}
            placeholder="Ajouter un petit malin ..."
          />
          <button> Valider </button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
