import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
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
