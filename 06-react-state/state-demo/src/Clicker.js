import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  randomNumber = () => {
    let rndNum = Math.floor(Math.random() * 10 + 1);
    this.setState({ num: rndNum });
  };

  render() {
    const isWinner =
      this.state.num === 7 ? (
        <h1>YOU WIN!</h1>
      ) : (
        <button onClick={this.randomNumber}>Random Number</button>
      );

    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {isWinner}
      </div>
    );
  }
}

export default Clicker;
