import React from "react";
import WiseSquare from "./WiseSquare";
import AnnoyingForm from "./AnnoyingForm";
import CopyDemo from "./CopyDemo";
import WiseSquareWithProps from "./WiseSquareWithProps";
import ExperimentalSquare from "./ExperimentalSquare";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WiseSquare />
      <AnnoyingForm />
      <CopyDemo />
      <WiseSquareWithProps />
      <ExperimentalSquare />
    </div>
  );
}

export default App;
