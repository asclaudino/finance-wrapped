"use client";

import { Slider } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";


type SliderProps = {
  onChange?: (value: number) => void;
};

export default function AntdSliderComponent({ onChange }: SliderProps) {
  const params = useParams();
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [redirecting, setRedirecting] = useState(false);


  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
    
    if (onChange) {
      onChange(newValue);
    }

    // Redirect when slider reaches 100
    if (newValue === 100) {
      setRedirecting(true);
      setTimeout(() => {
        router.push("/afterhome");
      }, 500); // Allows exit animation to play before redirecting
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[var(--background-color)] text-4xl font-bold">2024</h1>
      <h1 className="text-[var(--background-color)] text-2xl">Wrapped</h1>

      {/* Ant Design Slider inside a custom rounded background */}
      <div className="relative w-full max-w-3xl h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg p-2">
        <Slider
          value={value}
          min={0}
          max={100}
          onChange={handleSliderChange}
          style={{ width: "90%" }}
          tooltip={{ open: false }} // Show tooltip
        />
      </div>
    </div>
  );
}
