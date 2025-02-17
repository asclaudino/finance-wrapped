"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sourGummy } from "../app/page";
import "../app/globals.css";
import { TrendResponse } from "@/types/trends";
import { Spotify } from "react-spotify-embed";

interface FinancialProfileClientProps {
  year: string;
  initialTrends: TrendResponse;
}

const FinancialProfileClient: React.FC<FinancialProfileClientProps> = ({ 
  year, 
  initialTrends,
}) => {
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
          exit={{ opacity: 0, x: "-100vw" }}
          transition={{ duration: 0.8 }}
          className="text-xl text-primary font-bold text-center whitespace-pre-line"
          >
            <div className={`${sourGummy.className} flex items-center justify-center min-h-screen`}>
              <div className="bg-black p-8 rounded-lg shadow-lg">
                <p className="text-accent text-center text-xl">
                  Your financial year had its ups and downs, but your unique approach to money always stood out.<br /><br />
                  Let's see what your profile is!
                </p>
              </div>
            </div>
          </motion.div>
        
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
            className=" p-6 rounded-lg shadow-lg max-w-lg"
          >
          
            <div className="flex flex-row items-center justify-center w-full gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-3xl text-accent font-bold pb-5">YOUR FINANCIAL PROFILE</p>
              </div>
            </div>

          
            <div className="text-xl text-primary font-bold text-center pb-5">
              <p>Your {year} financial profile is:</p>
            </div>
            <div className="bg-yellow-200 p-6 rounded-lg shadow-lg max-w-lg">
               
                <h1 className="text-3xl md:text-5xl font-bold text-center text-secondary">
                  {initialTrends.financial_profile.name}
                </h1>
                <p className="mt-4 text-lg text-center text-secondary whitespace-pre-line">
                  {initialTrends.financial_profile.description}
                </p>
                
                <div className="mt-4 flex justify-center">
                  <Spotify link={initialTrends.financial_profile.spotify_link} />
                </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinancialProfileClient;
