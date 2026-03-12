'use client';
import { useMemo } from 'react';

type CustomRadioButtonProps = {
  position: number | string;
  handlePosition: any;
};

const options = [
  { title: 'GK', val: 0, background: 'bg-yellow-500' },
  { title: 'DEF', val: 1, background: 'bg-blue-500' },
  { title: 'MID', val: 2, background: 'bg-green-500' },
  { title: 'FRW', val: 3, background: 'bg-red-500' },
  { title: 'ALL', val: "", background: 'bg-gray-400' },
];

export default function PlayerPositionRadio({ position, handlePosition }: CustomRadioButtonProps) {
  const selectedIndex = useMemo(
    () => options.findIndex((opt) => opt.val === position),
    [position]
  );

  return (
    <div className="flex justify-between w-full relative p-2 bg-gray-100 rounded-full overflow-hidden">
      {options.map(({ title, val }, index) => (
        <div key={index} className="relative z-10 flex-1 px-2">
          <input
            type="radio"
            id={`option${index}`}
            name="position"
            className="appearance-none hidden"
            checked={position === val}
            onChange={() => handlePosition(val)}
          />
          <label
            htmlFor={`option${index}`}
            className={`w-full flex items-center cursor-pointer justify-center truncate uppercase select-none font-semibold text-sm rounded-full py-2 transition-colors ${
              selectedIndex === index ? 'text-white' : 'text-black'
            }`}
          >
            {title}
          </label>
        </div>
      ))}

      {/* Moving background indicator */}
      {selectedIndex !== -1 && (
        <div
          className={`absolute top-2 bottom-2 left-2 rounded-full transition-transform duration-300 z-0 ${options[selectedIndex].background}`}
          style={{
            width: `calc((100% - 1rem) / ${options.length})`,
            transform: `translateX(${selectedIndex * 100}%)`,
          }}
        />
      )}
    </div>
  );
}
