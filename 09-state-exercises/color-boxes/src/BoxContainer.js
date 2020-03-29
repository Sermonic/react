import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: [
      "#E52B50",
      "#FFBF00",
      "#9966CC",
      "#FBCEB1",
      "#7FFFD4",
      "#007FFF",
      "#000000",
      "#DE5D83",
      "#8A2BE2",
      "#7FFF00",
      "#DC143C",
      "#EDC9Af",
      "#4B0082",
      "#00A86B",
      "#FFF700",
      "#0F52BA"
    ]
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));

    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
