import React from "react";

function RandomSquare({ id }) {
  return (
    <tbody className="random" style={{ color: "white", fontSize: "3rem" }}>
      <tr>
        <td>{id}</td>
      </tr>
    </tbody>
  );
}

export default RandomSquare;
