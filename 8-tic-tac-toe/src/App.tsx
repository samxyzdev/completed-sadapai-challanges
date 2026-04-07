import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TicTacToe } from "./components/TicTacToe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <TicTacToe />
    </>
  );
}

export default App;
