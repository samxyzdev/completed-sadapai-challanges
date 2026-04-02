import { useState } from "react";

const buttonName = [
  "Lower Case",
  "Upper Case",
  "Camel Case",
  "Pascal Case",
  "Snake Case",
  "Kebab Case",
  "Trim",
];

export function StringTransformer() {
  const [inputString, setInputString] = useState("hello worlds");
  const [transformedString, setTransformedString] = useState("");

  function handleClick(index) {
    switch (true) {
      case index === 0:
        setTransformedString(inputString.toLowerCase());
        break;
      case index === 1:
        setTransformedString(inputString.toUpperCase());
        break;
      case index === 2:
        const string = inputString.split(" ");
        let modifyString: string;
        string.map((str, index) => {
          if (index === 0) {
            modifyString = str.toLowerCase();
          } else {
            modifyString =
              modifyString + str.charAt(0).toUpperCase() + str.slice(1);
          }
          setTransformedString(modifyString);
        });
        break;
      case index === 3:
        const string1 = inputString.split(" ");
        let modifyString1: string;
        string1.map((str, index) => {
          if (index === 0) {
            modifyString1 = str.charAt(0).toUpperCase() + str.slice(1);
          } else {
            modifyString1 =
              modifyString1 + str.charAt(0).toUpperCase() + str.slice(1);
          }
          setTransformedString(modifyString1);
        });
        break;
      case index === 4:
        const string2 = inputString.replaceAll(" ", "_");
        setTransformedString(string2);
        break;
      case index === 5:
        const string3 = inputString.replaceAll(" ", "-");
        setTransformedString(string3);
        break;
      case index === 6:
        const string4 = inputString.trim();
        setTransformedString(string4);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <div className="flex justify-center pt-8">
        <textarea
          onChange={(e) => setInputString(e.target.value)}
          value={inputString}
          id="input-text"
          rows={3}
          className="border p-1 w-lg"
          placeholder="Enter a sentence..."
        >
          {inputString}
        </textarea>
      </div>
      <div className="flex justify-between items-center gap-2 pt-4 flex-wrap max-w-lg mx-auto">
        {buttonName.map((name, index) => (
          <Button buttonName={name} onClick={() => handleClick(index)} />
        ))}
      </div>
      <p className="text-center font-bold pt-4">Transformer String:</p>
      <p className="text-center">{transformedString}</p>
    </div>
  );
}

function Button({
  buttonName,
  onClick,
}: {
  buttonName: string;
  onClick: () => void;
}) {
  return (
    <button
      className="border w-40  py-2 text-xs bg-[#EFEFEF] "
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
