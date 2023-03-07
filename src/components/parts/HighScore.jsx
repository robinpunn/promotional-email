import React from "react";
import { BsTrophyFill } from "react-icons/bs";

function HighScore({ highScore }) {
  return (
    <p className="high-score">
      <BsTrophyFill size="1rem" color="white" />
      {""} {highScore}
    </p>
  );
}

export default HighScore;
