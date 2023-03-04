import { useState } from "react";
import ChessBoard from "./components/ChessBoard";
import "./App.css";

function App() {
  const [board, setBoard] = useState(null);

  return (
    <div className="App">
      <ChessBoard setBoard={setBoard} />
    </div>
  );
}

export default App;
