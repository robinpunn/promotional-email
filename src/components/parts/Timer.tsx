import { BsHourglassBottom } from "react-icons/bs";

function Timer({ time }: {time:string}) {
  return (
    <p className="time">
      <BsHourglassBottom size="1.1rem" color="white" className="time-icon" />
      {""}
      {time}
    </p>
  );
}

export default Timer;
