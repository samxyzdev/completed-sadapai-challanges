import { useState } from "react";

// Helper function ko flexible banaya taaki min aur max set kar sakein
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Component ab min aur max props accept karta hai (Default: 0-100)
export function Guess({ min = 0, max = 100 }) {
  const [randomValue, setRandomValue] = useState(() =>
    generateRandomNumber(min, max),
  );
  const [inputValue, setInputValue] = useState(""); // Start with empty string
  const [feedback, setFeedback] = useState(null); // 'correct', 'high', 'low', ya null

  function handleSubmit(e) {
    e.preventDefault(); // Form ko reload hone se roknna
    const guess = Number(inputValue);

    if (inputValue === "" || isNaN(guess)) return; // Agar input khali hai toh kuch mat karo

    if (guess === randomValue) {
      setFeedback("correct");
    } else if (guess > randomValue) {
      setFeedback("high");
    } else {
      setFeedback("low");
    }
  }

  function handleReset() {
    setRandomValue(generateRandomNumber(min, max));
    setInputValue("");
    setFeedback(null); // Reset ke time message clear karna zaruri hai
  }

  return (
    <div className="flex justify-center items-center">
      {/* Form wrap karne se "Enter" key press par submit ho jayega */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <p className="pt-4">
          Guess a Number between {min} and {max}
        </p>

        <div className="pt-4">
          <input
            className="border p-2 w-sm text-center"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min={min}
            max={max}
            autoFocus // Page load hote hi cursor directly input box mein aa jayega
          />
        </div>

        <div className="flex justify-center items-center pt-4 gap-12">
          <button
            type="button" // Important: Taaki ye form ko submit na kare
            onClick={handleReset}
            className="px-12 py-2 bg-[#EFEFEF] cursor-pointer hover:bg-gray-200 transition"
          >
            Reset
          </button>
          <button
            type="submit" // Enter press handle karega
            className="px-12 py-2 bg-[#EFEFEF] cursor-pointer hover:bg-gray-200 transition"
          >
            Check
          </button>
        </div>

        {/* Dynamic aur clean Feedback Rendering */}
        {feedback && (
          <p className="text-center pt-4">
            {feedback === "correct" ? (
              <span className="text-green-600 font-bold">
                You guessed it right!
              </span>
            ) : (
              <span>
                Your guess is{" "}
                <span className="font-bold capitalize">{feedback}</span> than
                the actual number
              </span>
            )}
          </p>
        )}
      </form>
    </div>
  );
}
