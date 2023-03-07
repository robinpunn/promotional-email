import React from "react";

function Score({ score, history }) {
  return (
    <div className="score-container">
      {" "}
      <p style={{ color: "white", fontSize: "3rem" }}>
        {score}/{history.length}
      </p>
    </div>
  );
}

export default Score;
