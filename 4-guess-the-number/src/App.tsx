import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Guess } from "./components/Guess";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Guess />
    </>
  );
}

export default App;
