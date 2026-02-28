import React from "react";

interface StepCountPrimeProps {
  idx?: string;
  value: number;
  onStepValueChange: (value: number) => void;
  enableDelete?: boolean;
  totalBg?: string;
}

const StepCountPrime: React.FC<StepCountPrimeProps> = ({
  value = 0,
  onStepValueChange,
  totalBg,
}) => {
  const decrement = () => onStepValueChange(value - 1);
  const increment = () => onStepValueChange(value + 1);

  return (
    <div className="flex w-full items-center">
      <div className="flex w-1/2">
        <button
          type="button"
          disabled={value === 0}
          onClick={decrement}
          className="rounded-full p-0 leading-none disabled:opacity-40"
        >
          {/* Minus circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#023047"
            className="h-[42px] w-[42px]"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
          </svg>
        </button>
      </div>
      <div className="flex w-1/2 justify-end">
        <button
          type="button"
          onClick={increment}
          className="rounded-full p-0 leading-none"
        >
          {/* Plus circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={totalBg}
            className="h-[42px] w-[42px]"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StepCountPrime;
