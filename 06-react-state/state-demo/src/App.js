import React from "react";
import Game from "./Game";
import Game2 from "./Game2";
import Demo from "./Demo";
import Rando from "./Rando";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import BrokenClick2 from "./BrokenClick2";
import Clicker from "./Clicker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Clicker />
      <Game />
      <Game2 />
      <Demo animal="Bobcat" food="Pineapple" />
      <Rando maxNum={7} />
      <Button />
      <BrokenClick />
      <BrokenClick2 />
    </div>
  );
}

export default App;
