// src/components/TotalSpendingsClient.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { quicksand, bungeeOutline, sourGummy } from "../app/page";
import "../app/globals.css";

export default function TotalSpendingsClient({ year, initialSummary }) {
  const [summary, setSummary] = useState(initialSummary);

  return (
    <div
      className={`${sourGummy.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}
    >
      {/* Row 1: Two columns */}
      <div className="flex flex-row items-center justify-center w-full gap-4">
        {/* Left Column: Big Icon */}
        <div className="flex-shrink-0" style={{ perspective: "800px" }}>
            <motion.img
                src="/pig.jpg" // Place your converted coin.svg in the public folder
                alt="pig"
                style={{ width: "4rem", height: "4rem" }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 1, repeat: 3, ease: "linear" }}
            />
        </div>
        {/* Right Column: Three short texts stacked vertically */}
        <div className="flex flex-col gap-2">
          <p className="text-lg text-primary font-bold font-large">OVERALL </p>
          <p className="text-lg text-primary font-bold font-large">SAVINGS</p>
          <p className="text-lg text-primary font-bold font-medium"></p>
        </div>
      </div>

      {/* Row 2: A single text (less prominent) */}
      <div className="text-xl text-primary font-bold font-large text-center">
        <p>You have saved a total of</p>
      </div>

      {/* Row 3: Data in a solid, rounded background */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
        className="bg-yellow-200 p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center text-secondary">
          $ {summary.total_saved}
        </h1>
      </motion.div>
    </div>
  );
}

