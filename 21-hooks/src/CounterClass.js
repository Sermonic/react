import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Class Component</h1>
        <p>The Count Is: {count} </p>
        <button onClick={this.increment}>+ 1</button>
      </div>
    );
  }
}

export default CounterClass;
