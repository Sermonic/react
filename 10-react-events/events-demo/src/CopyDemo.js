import React, { Component } from "react";

class CopyDemo extends Component {
  handleCopy() {
    alert("STOP STEALING FROM ME!");
  }

  render() {
    return (
      <div>
        <h3>Try Copying Some of this Text: </h3>
        <section
          style={{ width: "300px", display: "inline-block" }}
          onCopy={this.handleCopy}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste
          quaerat repellat corporis hic, quod facilis mollitia itaque aliquid.
          Itaque quos libero numquam suscipit voluptas eius saepe placeat
          officia earum!
        </section>
      </div>
    );
  }
}

export default CopyDemo;
