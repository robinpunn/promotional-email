import React from "react";

function Start({ handleStart, countDownStart }) {
  return (
    <div>
      <button onClick={handleStart} disabled={countDownStart}>
        Start Game
      </button>
    </div>
  );
}

export default Start;
