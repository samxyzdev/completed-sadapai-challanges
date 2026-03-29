import { useState } from "react";

const FAQ = [
  {
    title: "Do I have to allow the use of cookies?",
    description:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    title: "Do I have to allow the use of cookies?",
    description:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    title: "Do I have to allow the use of cookies?",
    description:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    title: "Do I have to allow the use of cookies?",
    description:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    title: "Do I have to allow the use of cookies?",
    description:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
];

export function Accordion() {
  const [isMultipleAllowed, setIsMultipleAllowed] = useState(true);
  const [oepnIndices, setOpenIndices] = useState<number[]>([]);

  function handleCLick(index) {
    if (isMultipleAllowed) {
      setOpenIndices(
        (prev) =>
          prev.includes(index)
            ? prev.filter((i) => i !== index) // Remove if already open
            : [...prev, index], // Add if closed
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  }

  function handleModeToggle() {
    setIsMultipleAllowed(!isMultipleAllowed);
    setOpenIndices([]);
  }

  return (
    <div className="px-2">
      <div className="flex justify-center items-center p-4 gap-2 font-bold">
        <p>is mulitple open accordion allowed?</p>
        <input
          type="checkbox"
          checked={isMultipleAllowed}
          onChange={handleModeToggle}
        />
      </div>
      {FAQ.map(({ title, description }, index) => (
        <AccordionCard
          key={index}
          title={title}
          description={description}
          isOpen={oepnIndices.includes(index)}
          handleCLick={handleCLick}
          index={index}
        />
      ))}
    </div>
  );
}

function AccordionCard({ title, description, isOpen, handleCLick, index }) {
  return (
    <div className="border px-2 py-4 max-w-4xl m-auto mb-2">
      <div className="flex justify-between items-center">
        <p className="font-bold">{title}</p>
        <div
          onClick={() => handleCLick(index)}
          className="w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      {isOpen && <p className="text-xs py-4">{description}</p>}
    </div>
  );
}
