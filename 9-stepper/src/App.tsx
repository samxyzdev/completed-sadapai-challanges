import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Stepper } from "./components/Stepper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Stepper />
    </>
  );
}

export default App;
