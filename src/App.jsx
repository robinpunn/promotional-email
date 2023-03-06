import { useState, useEffect } from "react";
import ChessBoard from "./components/ChessBoard";
import { getRandomSquare } from "./services/random";
import Start from "./components/Start";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState(null);
  const [id, setId] = useState(null);
  const [countDown, setCountDown] = useState("0:00");
  const [preCountDown, setPreCountDown] = useState("");
  const [countDownStart, setCountDownStart] = useState(false);
  const [select, setSelect] = useState(null);
  const [history, setHistory] = useState([]);
  const [choiceHx, setChoiceHx] = useState([]);

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
    setCountDownStart(true);
    setPreCountDown(3);
    setCountDown(30);
    setSelect(null);
    setHistory([]);
    setChoiceHx([]);
    setId(null);
  };

  /*select square*/
  const handleChoice = (e) => {
    if (countDownStart && preCountDown === 0) {
      console.log(e.target.id, history, choiceHx);
      setSelect(e.target.id);
      setHistory([...history, e.target.id]);
      setChoiceHx([...choiceHx, e.target.id]);
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
        <Timer time={countDown} />
        <Start handleStart={handleStart} disabled={countDownStart} />
      </div>
    </div>
  );
}

export default App;
