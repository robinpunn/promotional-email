import React from "react";

function History({ history, choice }) {
  return (
    <div className="history-container">
      {history.map((item, index) => {
        const isCorrect = item === choice[index];
        const symbol = isCorrect ? "✓" : "✕";
        const color = isCorrect ? "green" : "red";
        return (
          <p style={{ color }} key={index}>
            <span style={{ color }}>{symbol} </span>
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default History;
