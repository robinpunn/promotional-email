import { useState, useEffect } from "react";
import ChessBoard from "./components/ChessBoard";
import { getRandomSquare } from "./services/random";
import Start from "./components/Start";
import "./App.css";
import PreCount from "./components/PreCount";
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState(null);
  const [id, setId] = useState(null);
  const [countDown, setCountDown] = useState("");
  const [preCountDown, setPreCountDown] = useState("");
  const [countDownStart, setCountDownStart] = useState(false);

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
          console.log(countDown);
        }, 1000);
      }
    } else {
      clearInterval(interval);
      setCountDownStart(false);
    }
    return () => clearInterval(interval);
  }, [countDownStart, countDown, preCountDown]);

  /*start timer function*/
  const handleStart = () => {
    /*set gameTime to 30*/
    setCountDownStart(true);
    setPreCountDown(3);
    setCountDown(30);
  };

  return (
    <div className="App">
      <div className="board-container">
        <ChessBoard setBoard={setBoard} preCountDown={preCountDown} id={id} />
      </div>
      <Start handleStart={handleStart} countDownStart={countDownStart} />
      {countDown > 0 && preCountDown === 0 && <Timer time={countDown} />}
    </div>
  );
}

export default App;
