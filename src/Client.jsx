import React, { Component } from "react";

class Client extends Component {
  render() {
    const { details, onDelete } = this.props;

    return (
      <div>
        <li>
          {details.nom}
          <button onClick={() => onDelete(this.props.details.id)}>x </button>
        </li>
      </div>
    );
  }
}

export default Client;
