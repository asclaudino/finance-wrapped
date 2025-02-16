"use client";

import { Slider } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";


type SliderProps = {
  onChange?: (value: number) => void;
};

const shakeVariants = {
  shake: {
    x: [0, -20, 20, -20, 20, 0], // Moves left and right
    transition: { duration: 1.0, ease: "easeInOut" }
  }
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
      }, 100); // Allows exit animation to play before redirecting
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-[var(--background-color)] text-4xl font-bold pb-2">Slide into</h1>
      <h1 className="text-[var(--background-color)] text-4xl font-bold pb-2">Your 2024</h1>
      <h1 className="text-[var(--background-color)] text-4xl font-bold pb-2">financial</h1>
      <h1 className="text-[var(--background-color)] text-4xl font-bold p-10px" style={{marginBottom: "20px"}}>journey</h1>

      {/* Ant Design Slider inside a custom rounded background */}
      <motion.div variants={shakeVariants} animate="shake">
        <div 
        className="relative w-full max-w-3xl h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg p-2"
        style={{ width: "90%", minWidth: "50vw", overflow: "hidden" }}  
        >
          <Slider
            value={value}
            min={0}
            max={100}
            onChange={handleSliderChange}
            style={{ width: "90%"}}
            tooltip={{ open: false }} // Show tooltip
            trackStyle={{ backgroundColor: "#f5d108", borderColor: "#f5d108"}}
            handleStyle={{ backgroundColor: "#f5d108", borderColor: "#f5d108"}}
          />
        </div>
      </motion.div>
      
    </div>
  );
}
