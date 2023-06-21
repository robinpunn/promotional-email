import React from "react";

function RandomSquare({ id, visible }) {
  return (
    <tbody className={`random${visible ? "" : " fade-out"}`}>
      <tr>
        <td>{id}</td>
      </tr>
    </tbody>
  );
}

export default RandomSquare;
