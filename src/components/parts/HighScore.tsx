import React from "react";
import { BsTrophyFill } from "react-icons/bs";

interface HighScore {
  highScore: string;
}

const HighScore: React.FC<HighScore> = ({ highScore }) => {
  return (
    <p className="high-score">
      <BsTrophyFill size="1rem" color="white" />
      {""} {highScore}
    </p>
  );
}

export default HighScore;
