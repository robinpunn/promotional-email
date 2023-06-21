import React from "react";
import ChessBoard from "../parts/ChessBoard";
import CurrentSquare from "../parts/CurrentSquare";
import History from "../parts/History";
import Timer from "../parts/Timer";
import Score from "../parts/Score";
import Start from "../parts/Start";
import HighScore from "../parts/HighScore";
import Modal from "../modal/Modal";

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
  visible,
  countDownStart,
  highScore,
  showModal,
  setShowModal,
}) {
  return (
    <div className="desktop">
      {showModal && (
        <Modal
          score={score}
          highScore={highScore}
          handleStart={handleStart}
          setShowModal={setShowModal}
        />
      )}
      <div className="board-container">
        <ChessBoard
          setBoard={setBoard}
          preCountDown={preCountDown}
          id={id}
          handleChoice={handleChoice}
          visible={visible}
        />
      </div>
      <div className="other-container">
        <CurrentSquare id={id} countDown={countDown} />
        <Timer time={countDown} />
        <div className="desktop-scores">
          <Score score={score} history={history} />
          <HighScore highScore={highScore} />
        </div>
        <History history={history} choice={choiceHx} />
        <Start handleStart={handleStart} disabled={countDownStart} />
      </div>
    </div>
  );
}

export default Desktop;
