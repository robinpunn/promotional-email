import React from "react";
import ChessBoard from "../parts/ChessBoard";
import CurrentSquare from "../parts/CurrentSquare";
import History from "../parts/History";
import Timer from "../parts/Timer";
import Score from "../parts/Score";
import Start from "../parts/Start";
import "./Desktop.css";

function Desktop({
  setBoard,
  preCountDown,
  id,
  handleChoice,
  history,
  choiceHx,
  countDown,
  score,
  handleStart,
  countDownStart,
  highScore,
}) {
  return (
    <div className="desktop">
      <div className="board-container">
        <ChessBoard
          setBoard={setBoard}
          preCountDown={preCountDown}
          id={id}
          handleChoice={handleChoice}
        />
      </div>
      <div className="other-container">
        <CurrentSquare id={id} />
        <History history={history} choice={choiceHx} />
        <Timer time={countDown} />
        <Score score={score} history={history} />
        <Start handleStart={handleStart} disabled={countDownStart} />
        <HighScore highScore={highScore} />
      </div>
    </div>
  );
}

export default Desktop;
