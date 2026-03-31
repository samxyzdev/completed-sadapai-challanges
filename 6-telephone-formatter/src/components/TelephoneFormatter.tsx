import { useEffect, useState } from "react";

export function TelePhoneFormatter() {
  const [inputValue, setInputValue] = useState("");

  const getStringWithNumberOnly = (str: string) =>
    [...str].filter((v) => Number.isInteger(+v) && v !== " ").join("");
  function handleChange(e) {
    console.log(inputValue.length);
    const numStr = getStringWithNumberOnly(e.target.value);
    setInputValue(
      numStr.length > 3
        ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3)
        : numStr,
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center pt-8">
        <input
          className="border w-60 text-xl p-1 font-semibold"
          maxLength={16}
          type="tel"
          placeholder="Mobile number"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <p className="text-center 12t-4">+(123)-4567890</p>
    </div>
  );
}
