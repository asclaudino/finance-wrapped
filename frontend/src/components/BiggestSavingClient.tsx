"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quicksand, bungeeOutline, sourGummy } from "../app/page";
import "../app/globals.css";
import { TrendResponse } from "@/types/trends";

const monthNames: { [key: number]: string } = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

interface BiggestSavingClientProps {
  year: string;
  initialTrends: TrendResponse;
}

const BiggestSavingClient: React.FC<BiggestSavingClientProps> = ({ year, initialTrends }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // Show the intro for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${sourGummy.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}>
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl text-primary font-bold font-large text-center whitespace-pre-line"
          >
            <p>
              There was one month where you truly shined at saving.{"\n"}Want to know which one?
            </p>
          </motion.div>
        ) : (
          <>
            {/* Row 1: Two columns with header text */}
            <div className="flex flex-row items-center justify-center w-full gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-3xl text-accent font-bold font-large">HIGHEST SAVINGS MONTH</p>
              </div>
            </div>

            {/* Row 2: A single text above the data */}
            <div className="text-xl text-primary font-bold font-large text-center">
              <p>Your {year} top saving month was</p>
            </div>

            {/* Row 3: Data in a solid, rounded background */}
            <motion.div
              key="content"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
              className="bg-yellow-200 p-6 rounded-lg shadow-lg"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-center text-secondary">
                {monthNames[initialTrends.top_savings[0].month]}: $ {initialTrends.top_savings[0].total}
              </h1>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BiggestSavingClient;
