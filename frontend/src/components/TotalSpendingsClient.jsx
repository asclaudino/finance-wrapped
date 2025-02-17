"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quicksand, bungeeOutline, sourGummy } from "../app/page";
import "../app/globals.css";

export default function TotalSpendingsClient({ year, initialSummary }) {
  const [summary, setSummary] = useState(initialSummary);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // Show the intro for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${sourGummy.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}
    >
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
              <div
                className={`${sourGummy.className} flex items-center justify-center min-h-screen`}
              >
                <div className="bg-black p-8 rounded-lg shadow-lg">
                  <p className="text-accent text-center text-xl">
                    Every financial choice told a story this year.<br /><br />
                    Let's see how you allocated your resources?
                  </p>
                </div>
              </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="flex flex-row items-center justify-center w-full gap-4 mb-5">
              <div className="flex-shrink-0" style={{ perspective: "800px" }}>
                <motion.img
                  src="/coin.jpg"
                  alt="coin"
                  style={{ width: "4rem", height: "4rem" }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-lg text-primary font-bold font-large">OVERALL</p>
                <p className="text-lg text-primary font-bold font-large">SPENDINGS</p>
                <p className="text-lg text-primary font-bold font-medium"></p>
              </div>
            </div>

            <div className="text-xl text-primary font-bold font-large text-center mb-5">
              <p>You spent a total of</p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
              className="bg-yellow-200 p-6 rounded-lg shadow-lg mt-5"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-center text-secondary">
                $ {summary.total_spent}
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
