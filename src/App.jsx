import { useState, useEffect } from "react";
import ChessBoard from "./components/ChessBoard";
import { getRandomSquare } from "./services/random";
import Start from "./components/Start";
import "./App.css";
import Timer from "./components/Timer";
import Score from "./components/Score";
import CurrentSquare from "./components/CurrentSquare";
import History from "./components/History";

function App() {
  const [board, setBoard] = useState(null);
  const [id, setId] = useState(null);
  const [countDown, setCountDown] = useState("0:00");
  const [preCountDown, setPreCountDown] = useState("");
  const [countDownStart, setCountDownStart] = useState(false);
  const [history, setHistory] = useState([]);
  const [choiceHx, setChoiceHx] = useState([]);
  const [score, setScore] = useState(0);

  /*countdown timer*/
  useEffect(() => {
    let interval = null;

    if (countDownStart) {
      if (preCountDown > 0) {
        interval = setInterval(() => {
          setPreCountDown((preCountDown) => preCountDown - 1);
        }, 1000);
      } else if (countDown > 0) {
        interval = setInterval(() => {
          setCountDown((countDown) => countDown - 1);
        }, 1000);
      } else {
        setCountDownStart(false);
      }
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countDownStart, countDown, preCountDown]);

  useEffect(() => {
    if (countDownStart && preCountDown === 0) {
      setId(getRandomSquare().id);
    }
  }, [countDownStart, preCountDown]);

  /*start timer function*/
  const handleStart = () => {
    setScore(0);
    setCountDownStart(true);
    setPreCountDown(3);
    setCountDown(30);
    setHistory([]);
    setChoiceHx([]);
    setId(null);
  };

  /*select square*/
  const handleChoice = (e) => {
    let choice = e.target.id;
    // setSelect(choice);
    if (countDownStart && preCountDown === 0) {
      if (choice === id) {
        setChoiceHx([...choiceHx, choice]);
        setHistory([...history, id]);
        setScore(score + 1);
        setId(getRandomSquare().id);
      } else {
        setChoiceHx([...choiceHx, choice]);
        setHistory([...history, id]);
        setId(getRandomSquare().id);
      }
      console.log(
        "score:",
        score,
        "id:",
        id,
        "history:",
        history,
        "choice:",
        choiceHx
      );
    }
  };

  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default App;
