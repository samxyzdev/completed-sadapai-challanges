export function Traffic({ roundCount }: { roundCount: number }) {
  console.log(roundCount);
  return (
    <div className="bg-black max-w-32 m-auto mt-8 rounded-4xl flex justify-center items-center flex-col gap-6 py-8">
      <div
        className={` ${roundCount === 1 ? "bg-red-700" : "bg-gray-300"}  w-20 h-20 rounded-full`}
      ></div>
      <div
        className={`${roundCount === 3 ? "bg-yellow-400" : "bg-gray-300"} w-20 h-20 rounded-full`}
      ></div>
      <div
        className={`${roundCount === 2 ? "bg-green-700" : "bg-gray-300"} w-20 h-20 rounded-full`}
      ></div>
    </div>
  );
}
