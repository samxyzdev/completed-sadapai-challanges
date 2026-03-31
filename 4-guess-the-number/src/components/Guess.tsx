import { useState } from "react";

const generateRandomNumber = () => Math.floor(Math.random() * 100);

export function Guess() {
  const [randomValue, setRandomValue] = useState(() => generateRandomNumber());
  console.log(randomValue);
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState("");
  const [guessIsRight, setGuessIsRight] = useState(false);

  function handleCheck() {
    if (randomValue === inputValue) {
      setResult("right");
      setGuessIsRight(true);
    } else if (inputValue > randomValue) {
      setResult("Higher");
      setGuessIsRight(false);
    } else {
      setResult("Less");
      setGuessIsRight(false);
    }
  }

  function handleReset() {
    setRandomValue(generateRandomNumber());
    setInputValue(0);
  }

  return (
    <div className="flex justify-center items-center ">
      <div>
        <p className=" pt-4">Guess a Number between 0 and 100</p>
        <div className="pt-4">
          <input
            className="border p-2 w-sm text-center"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(parseInt(e.target.value))}
          />
        </div>
        <div className="flex justify-center items-center pt-4 gap-12 ">
          <button
            onClick={handleReset}
            className="px-12 py-2 bg-[#EFEFEF] cursor-pointer"
          >
            Reset
          </button>
          <button
            onClick={handleCheck}
            className=" px-12 py-2 bg-[#EFEFEF] cursor-pointer"
          >
            Check
          </button>
        </div>

        {result && (
          <p className="text-center pt-4">
            Your guess is <span className="font-bold">{result}</span>{" "}
            {guessIsRight ? "" : "than the actual number"}
          </p>
        )}
      </div>
    </div>
  );
}
