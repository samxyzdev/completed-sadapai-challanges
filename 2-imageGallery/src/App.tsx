import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Gallery } from "./components/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Gallery />
    </>
  );
}

export default App;
