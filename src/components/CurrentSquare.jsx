import React from "react";

function CurrentSquare({ id }) {
  return (
    <div className="current-container">
      <p className="current" style={{ color: "white", fontSize: "2rem" }}>
        {id}
      </p>
    </div>
  );
}

export default CurrentSquare;
