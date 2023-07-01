import React from "react";
import HighScore from "./HighScore";

interface History {
  history: string[];
  choice: string[];
}

const History: React.FC<History> = ({ history, choice }) => {
  return (
    <div className="history-container">
      {history.map((item, index) => {
        const isCorrect = item === choice[index];
        const symbol = isCorrect ? "✓" : "✕";
        const color = isCorrect ? "green" : "red";
        return (
          <div className="history" key={index}>
            <p style={{ color }}>
              <span style={{ color }}>{symbol} </span>
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default History;
