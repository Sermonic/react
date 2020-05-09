import React, { useState } from "react";

function CounterHooks() {
  // const [the piece of state, function to update that piece of state] = useState(initial value for this piece);

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Functional Component</h1>
      <p>The Count Is: {count}</p>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
}

export default CounterHooks;
