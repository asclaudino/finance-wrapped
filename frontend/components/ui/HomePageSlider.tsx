"use client";
import { Slider } from "antd";
import { useEffect, useState } from "react";

type SliderProps = {
  onChange?: (value: number) => void;
};

export default function AntdSliderComponent({ onChange }: SliderProps) {
  const [value, setValue] = useState(10);

  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // useEffect(() => {
  //   const preventDefaultTouchMove = (e: TouchEvent) => e.preventDefault();

  //   // Add event listener for touchmove to prevent interference
  //   document.addEventListener('touchmove', preventDefaultTouchMove, { passive: false });

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     document.removeEventListener('touchmove', preventDefaultTouchMove);
  //   };
  // }, []);

  return (
    <div className="w-full">
      <h1 className="text-[var(--background-color)]"> 2024</h1>
      <h1 className="text-[var(--background-color)]"> Wrapped</h1>
      {/* Ant Design Slider inside a custom rounded background */}
      <div className="relative w-full max-w-3xl h-12 text-accent bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
        <Slider
          value={value}
          min={0}
          max={100}
          onChange={handleSliderChange}
          style={{ width: "100%" }}
        />
      </div>

    </div>
  );
}
