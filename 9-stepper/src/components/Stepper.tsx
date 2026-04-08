import { useState } from "react";

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
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < information.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const isFullyCompleted = currentStep === information.length;

  return (
    <div>
      <div className="flex justify-center items-center pt-8">
        {information.map(({ title }, index) => (
          <RoundCircleWithLine
            key={index}
            index={index}
            title={title}
            isLast={index + 1 === information.length}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          />
        ))}
      </div>
      {isFullyCompleted ? (
        <StepperDescription description="Order Delivered successfully 🎉" />
      ) : (
        <StepperDescription
          description={information[currentStep].description}
        />
      )}

      <div className="flex justify-center items-center gap-24">
        <button
          disabled={currentStep === 0}
          className="px-4 py-2 mt-4 bg-[#CCCCCC] rounded-md text-xl
          disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          disabled={isFullyCompleted}
          onClick={handleNext}
          className="px-4 py-2 mt-4 bg-[#CCCCCC] rounded-md text-xl disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed "
        >
          {currentStep >= information.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

function RoundCircleWithLine({
  index,
  title,
  isLast,
  isActive,
  isCompleted,
}: {
  index: number;
  title: string;
  isLast: boolean;
  isActive: boolean;
  isCompleted: boolean;
}) {
  let circleBgClass = "bg-[#CCCCCC] text-black";
  if (isActive) circleBgClass = "bg-[#4746F7] text-white";
  if (isCompleted) circleBgClass = "bg-[#1EC41F] text-white";

  return (
    <div>
      <div className="flex items-center ">
        <div
          className={`relative border-2 border-black w-8 h-8 shrink-0 rounded-full flex justify-center items-center ${circleBgClass}  z-10`}
        >
          {isCompleted ? "✓" : index + 1}
          <p className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-wrap text-md text-black md:text-nowrap  ">
            {title}
          </p>
        </div>
        {!isLast && (
          <div
            className={`w-16 md:w-32 lg:w-48 h-1 ${isCompleted ? "bg-[#008000]" : "bg-[#808080]"} `}
          />
        )}
      </div>
    </div>
  );
}

function StepperDescription({ description }: { description: string }) {
  return (
    <div>
      <h2 className="text-center mt-14 text-xl font-semibold">{description}</h2>
    </div>
  );
}
