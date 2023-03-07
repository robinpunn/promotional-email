import React from "react";

function Score({ score, history }) {
  return (
    <p className="score">
      {score}/{history.length}
    </p>
  );
}

export default Score;
