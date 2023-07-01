import React from "react";
import { GiEyeTarget } from "react-icons/gi";

interface CurrentProps {
  id: string | null;
  countDown: string;
}

const CurrentSquare: React.FC<CurrentProps> = ({ id, countDown }) => {
  return (
    <div className="current-container">
      {parseInt(countDown) > 0 ? (
        <p className="current" style={{ color: "white", fontSize: "2rem" }}>
          {id}
        </p>
      ) : (
        <GiEyeTarget color="white" size="4rem" />
      )}
    </div>
  );
}

export default CurrentSquare;
