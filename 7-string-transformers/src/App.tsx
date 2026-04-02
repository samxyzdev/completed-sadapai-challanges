import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { StringTransformer } from "./components/StringTransformer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <StringTransformer />
    </>
  );
}

export default App;
