"use client"; 

import { useState } from "react";
import SliderComponent from "./HomePageSlider";

export default function SliderWrapper() {
  const [value, setValue] = useState(50);

  const handleSliderAction = (newValue: number) => {
    setValue(newValue);
    //console.log("Slider moved to:", newValue);
  };

  return <SliderComponent onChange={handleSliderAction} />;
}
