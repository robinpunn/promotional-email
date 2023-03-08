import React from "react";
import { BsHourglassBottom } from "react-icons/bs";

function Timer({ time }) {
  return (
    <p className="time">
      <BsHourglassBottom size="1.1rem" color="white" className="time-icon" />
      {""}
      {time}
    </p>
  );
}

export default Timer;
