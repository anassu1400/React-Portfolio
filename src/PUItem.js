import React, { Component } from "react";

class PUItem extends Component {
  render() {
    return (
      <li>
        <h3>{this.props.PU.title}</h3>
        <p>
          <a href="#">{this.props.PU.description}</a>
        </p>
      </li>
    );
  }
}

export default PUItem;
