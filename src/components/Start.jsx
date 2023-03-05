import React from "react";

function Start({ handleStart, disabled }) {
  return (
    <button className="start" onClick={handleStart} disabled={disabled}>
      Start Game
    </button>
  );
}

export default Start;
