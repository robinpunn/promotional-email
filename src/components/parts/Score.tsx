import React from "react";
import { BsBullseye } from "react-icons/bs";

interface Score {
  score: number;
  history: string[];
}

const Score: React.FC<Score> = ({ score, history }) => {
  return (
    <>
      <p className="score">
        <BsBullseye size="1rem" color="white" />
        {""} {score}/{history.length}
      </p>
    </>
  );
}

export default Score;
