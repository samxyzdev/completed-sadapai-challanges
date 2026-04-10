import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Traffic } from "./components/TrafficLight";

function App() {
  const [timer, setTimer] = useState({
    timer: 5,
    roundCount: 1,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => {
        if (prev.timer !== 0) {
          console.log(prev.timer);
          return { ...prev, timer: prev.timer - 1 };
        } else if (prev.timer === 0 && prev.roundCount === 3) {
          return { ...prev, timer: 5, roundCount: 1 };
        } else if (prev.timer === 0) {
          return { ...prev, timer: 5, roundCount: prev.roundCount + 1 };
        }
      });
    }, 1000);
    return () => {
      return clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Traffic roundCount={timer.roundCount} />
      <p className="text-center pt-2 font-bold text-lg">
        <span>{timer.timer}</span> seconds
      </p>
    </>
  );
}

export default App;
