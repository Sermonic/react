import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHearthbroken, toggleIsHearthbroken] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(true);

  return (
    <>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😊" : "😟"}</h1>
      <h1 onClick={toggleIsHearthbroken}>{isHearthbroken ? "💖" : "💔"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍏"}</h1>
    </>
  );
}

export default Toggler;
