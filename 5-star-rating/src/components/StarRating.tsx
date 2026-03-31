import { useState } from "react";

const array = new Array(5).fill("");

export function StarRating() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleClick(index) {
    console.log(index);
    setSelectedIndex(index);
  }
  return (
    <div className="flex justify-center items-center pt-8">
      {array.map((_, index) => (
        <StarIcon
          key={index}
          isFill={index <= selectedIndex ? "fill" : "none"}
          onClick={() => handleClick(index)}
          onMouseOver={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

function StarIcon({ isFill = "none", onClick, onMouseOver }) {
  return (
    <svg
      onClick={onClick}
      onMouseOver={onMouseOver}
      xmlns="http://www.w3.org/2000/svg"
      fill={isFill}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}
