// src/components/TotalSpendingsClient.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { quicksand, bungeeOutline } from "../app/page"; 
import '../app/globals.css';

export default function TotalSpendingsClient({ year, initialSummary }) {
  const [summary, setSummary] = useState(initialSummary);

  // You could add interactivity here (e.g. updating the summary based on user actions)

  return (
    <div className={`${bungeeOutline.className} relative h-screen w-full flex flex-col items-center justify-center`}>
      <div className="relative z-10 text-primary text-3xl md:text-5xl font-bold text-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'tween', duration: 0.8, ease: "easeInOut" }}
        >
          <h1>Total Spendings in {year}: $ {summary.total_spent}</h1>
        </motion.div>
      </div>
    </div>
  );
}
