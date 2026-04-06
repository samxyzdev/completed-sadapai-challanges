const information = [
  {
    title: "Contact Details",
    description: "Add contact details for further communications",
  },
  {
    title: "Shipping Address",
    description: "Add shipping address for successful delivery.",
  },
  {
    title: "Payment",
    description: "Complete Payment to complete the order.",
  },
  {
    title: "Delivered",
    description: "Ready to get delivered!",
  },
];

export function Stepper() {
  return (
    <div className="flex justify-center items-center pt-8">
      {information.map(({ title }, index) => (
        <RoundCircle key={index} title={title} index={index} />
      ))}
    </div>
  );
}

function RoundCircle({ title, index }) {
  return (
    <div className="relative flex flex-col items-center">
      {!isLast && (
        <div className="absolute top-4 left-1/2 w-full h-[2px] bg-gray-300 -z-10 "></div>
      )}
      <div className="w-8 h-8 rounded-full bg-[#CCCCCC] border-2 flex justify-center items-center font-medium">
        {index + 1}
      </div>
      <p className="mt-2 font-medium text-sm text-gray-700 text-center">
        {title}
      </p>
    </div>
  );
}
