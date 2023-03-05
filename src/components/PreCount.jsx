import React from "react";

function PreCount({ time }) {
  return (
    <tbody className="precount" style={{ color: "white", fontSize: "3rem" }}>
      {time}
    </tbody>
  );
}

export default PreCount;
