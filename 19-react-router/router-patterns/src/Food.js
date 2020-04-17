import React, { Component } from "react";
import "./Food.css";

class Food extends Component {
  render() {
    const name = this.props.match.params.name;
    const url = `https://source.unsplash.com/500x300/?${name}`;

    return (
      <div className="Food">
        <h1>i love to eat {name}</h1>
        <img src={url} alt={name} />
      </div>
    );
  }
}

export default Food;
