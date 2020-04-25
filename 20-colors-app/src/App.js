import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[3]));

  return (
    <div className="App">
      <Palette {...seedColors[2]} />
    </div>
  );
}

export default App;
