import { useState, useEffect } from "react";
import "./App.css";
import Desktop from "./components/Layout/Desktop";
import Mobile from "./components/Layout/Mobile";

function App() {
  const [board, setBoard] = useState(null);
  const [id, setId] = useState(null);
  const [countDown, setCountDown] = useState("0:00");
  const [preCountDown, setPreCountDown] = useState("");
  const [countDownStart, setCountDownStart] = useState(false);
  const [history, setHistory] = useState([]);
  const [choiceHx, setChoiceHx] = useState([]);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const [highScore, setHighScore] = useState(0);

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

  /*high score*/
  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(parseFloat(storedHighScore));
    }
  }, []);

  /*random square fade out*/
  useEffect(() => {
    if (id !== null) {
      setVisible(true);
      const timerId = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [id]);

  /*random square*/
  const getRandomSquare = () => {
    const randomIndex = Math.floor(Math.random() * 64);
    const row = Math.floor(randomIndex / 8);
    const col = randomIndex % 8;
    const id = `${String.fromCharCode(97 + col)}${8 - row}`;
    return { row, col, id };
  };

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
    if (countDownStart && preCountDown === 0) {
      if (choice === id) {
        setChoiceHx([...choiceHx, choice]);
        setHistory([...history, id]);
        setScore(score + 1);
        saveHighScore(score + 1, history.length + 1);
        setId(getRandomSquare().id);
      } else {
        setChoiceHx([...choiceHx, choice]);
        setHistory([...history, id]);
        setId(getRandomSquare().id);
      }
    }
  };

  /*save high score*/
  const saveHighScore = (score, total) => {
    const highScoreString = localStorage.getItem("highScore");
    if (highScoreString) {
      const [prevScore, prevTotal] = highScoreString.split("/");
      if (score > prevScore || (score === prevScore && total < prevTotal)) {
        const newHighScore = `${score}/${total}`;
        setHighScore(newHighScore);
        localStorage.setItem("highScore", newHighScore);
      }
    } else {
      const newHighScore = `${score}/${total}`;
      setHighScore(newHighScore);
      localStorage.setItem("highScore", newHighScore);
    }
  };

  return (
    <div className="App">
      {/*<Desktop
        setBoard={setBoard}
        preCountDown={preCountDown}
        id={id}
        handleChoice={handleChoice}
        history={history}
        choiceHx={choiceHx}
        countDown={countDown}
        score={score}
        handleStart={handleStart}
        countDownStart={countDownStart}
        visible={visible}
        highScore={highScore}
  />*/}
      {
        <Mobile
          setBoard={setBoard}
          preCountDown={preCountDown}
          id={id}
          handleChoice={handleChoice}
          history={history}
          choiceHx={choiceHx}
          countDown={countDown}
          score={score}
          handleStart={handleStart}
          countDownStart={countDownStart}
          visible={visible}
          highScore={highScore}
        />
      }
    </div>
  );
}

export default App;
