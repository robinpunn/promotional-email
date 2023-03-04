import React, { useState, useRef, useEffect } from "react";
import "./ChessBoard.css";

function ChessBoard() {
  return (
    <table className="board">
      <tbody>
        <tr className="rank-8">
          <td id="a8" className="white">
            <p className="number">8</p>
          </td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
        </tr>
        <tr className="rank-7">
          <td id="seven" className="green">
            <p className="number">7</p>
          </td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
        </tr>
        <tr className="rank-6">
          <td id="six" className="white">
            <p className="number">6</p>
          </td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
        </tr>
        <tr className="rank-5">
          <td id="five" className="green">
            <p className="number">5</p>
          </td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
        </tr>
        <tr className="rank-4">
          <td id="four" className="white">
            <p className="number">4</p>
          </td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
        </tr>
        <tr className="rank-3">
          <td id="three" className="green">
            <p className="number">3</p>
          </td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
        </tr>
        <tr className="rank-2">
          <td id="two" className="white">
            <p className="number">2</p>
          </td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
          <td className="white"></td>
          <td className="green"></td>
        </tr>
        <tr className="rank-1">
          <td id="one" className="green">
            <p className="number">1</p>
            <p className="letter">a</p>
          </td>
          <td className="white">
            <p className="letter">b</p>
          </td>
          <td className="green">
            <p className="letter">c</p>
          </td>
          <td className="white">
            <p className="letter">d</p>
          </td>
          <td className="green">
            <p className="letter">e</p>
          </td>
          <td className="white">
            <p className="letter">f</p>
          </td>
          <td className="green">
            <p className="letter">g</p>
          </td>
          <td className="white">
            <p className="letter">h</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ChessBoard;
