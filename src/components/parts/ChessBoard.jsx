import React, { useRef, useEffect } from "react";
import PreCount from "./PreCount";
import RandomSquare from "./RandomSquare";
import "./ChessBoard.css";

function ChessBoard({ setBoard, preCountDown, id, handleChoice, visible }) {
  const boardRef = useRef(null);

  useEffect(() => {
    setBoard(boardRef.current);
  }, [setBoard]);

  return (
    <table className="board" ref={boardRef}>
      <tbody>
        {[...Array(8)].map((_, i) => (
          <tr key={i}>
            {[...Array(8)].map((_, j) => {
              const id = `${String.fromCharCode(97 + j)}${8 - i}`;
              const className = (i + j) % 2 === 0 ? "white" : "green";
              const letter = String.fromCharCode(97 + j);
              const number = 8 - i;
              const isLetterCell = i === 7 && j !== 0;
              const isNumberCell = j === 0 && i !== 7;
              return isLetterCell ? (
                <td
                  key={id}
                  id={id}
                  className={className}
                  onClick={handleChoice}
                >
                  <p className="letter">{letter}</p>
                </td>
              ) : isNumberCell ? (
                <td
                  key={id}
                  id={id}
                  className={className}
                  onClick={handleChoice}
                >
                  <p className="number">{number}</p>
                </td>
              ) : i === 7 && j === 0 ? (
                <td
                  key={id}
                  id={id}
                  className={className}
                  onClick={handleChoice}
                >
                  <p className="letter">{letter}</p>
                  <p className="number">{number}</p>
                </td>
              ) : (
                <td
                  key={id}
                  id={id}
                  className={className}
                  onClick={handleChoice}
                ></td>
              );
            })}
          </tr>
        ))}
      </tbody>
      {preCountDown > 0 && <PreCount time={preCountDown} />}
      <RandomSquare id={id} visible={visible} />
    </table>
  );
}

export default ChessBoard;
