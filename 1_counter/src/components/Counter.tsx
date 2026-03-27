import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function handleReset() {
    setCounter(0);
    setIncrementBy(1);
  }

  return (
    <div>
      <p className="text-center text-2xl pt-8">{counter}</p>
      <div className="flex justify-center items-center gap-4 pt-6">
        <button
          onClick={() => setCounter((prev) => prev - incrementBy)}
          className="border p-2 bg-[#EFEFEF] font-semibold rounded"
        >
          -
        </button>
        <button
          onClick={() => setCounter((prev) => prev + incrementBy)}
          className="border p-2 bg-[#EFEFEF] font-semibold rounded"
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center pt-8 gap-4">
        <p>increment/Decrement by </p>
        <input
          className="border w-16 px-2 rounded"
          type="text"
          value={incrementBy}
          onChange={(e) => setIncrementBy(parseInt(e.target.value))}
        />
      </div>
      <div className="flex justify-center items-center pt-6">
        <button
          onClick={handleReset}
          className="border p-2 bg-[#EFEFEF] font-semibold rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
