import React from "react";

interface StartProps {
  handleStart: () => void;
  disabled?: boolean;
  className?: string
}

const Start: React.FC<StartProps> = ({ handleStart, disabled }) => {
  return (
    <button className="start" onClick={handleStart} disabled={disabled}>
      Start Game
    </button>
  );
}

export default Start;
