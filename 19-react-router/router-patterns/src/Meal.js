import React, { Component } from "react";

class Meal extends Component {
  render() {
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodUrl = `https://source.unsplash.com/500x300/?${foodName}`;
    const drinkUrl = `https://source.unsplash.com/500x300/?${drinkName}`;

    return (
      <div>
        <h1>
          This is a Meal of {foodName} + {drinkName}
        </h1>
        <img src={foodUrl} alt={foodName} />
        <img src={drinkUrl} alt={drinkName} />
      </div>
    );
  }
}

export default Meal;
