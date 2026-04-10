import { useState } from "react";

const calculator = [
  "Clear",
  "Del",
  "-",
  "x2",
  1,
  2,
  3,
  "+",
  4,
  5,
  6,
  "/",
  7,
  8,
  9,
  "-",
  0,
  "x",
  "?",
  "*",
  ".",
  "=",
];

type Calculator = string | number;

export function Calculator() {
  const [result, setResult] = useState<Calculator[]>(["-"]);

  return (
    <div className="max-w-75 m-auto bg-[#D6E4E5] rounded-xl mt-8">
      <div className="py-8 px-4">
        <div className="bg-black w-full h-16 rounded-lg">
          <p className="text-right pt-2 pr-2 text-[#d3d3d3] font-mono text-xs">
            {result}
          </p>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-2">
          {calculator.map((ele, index) => (
            <Button
              key={index}
              element={ele}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Button({
  element,
  onClick,
}: {
  element: string | number;
  onClick: () => void;
}) {
  const isNumber =
    typeof element === "number" || element === "0" || element === ".";
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center text-white text-lg  font-extrabold rounded-2xl px-3 py-4 ${isNumber ? "bg-[#497174]" : "bg-[#EB6441]"} hover:bg-[#808080] hover:cursor-pointer hover:text-black active:text-xl active:shadow-[0_0_5px_#000]`}
    >
      {element}
    </button>
  );
}
