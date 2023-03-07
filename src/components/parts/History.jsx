import React from "react";

function History({ history, choice }) {
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
