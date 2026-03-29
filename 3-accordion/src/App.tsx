import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Accordion } from "./components/Accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Accordion />
    </>
  );
}

export default App;
