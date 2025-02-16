"use client";

import React from "react";
import { motion } from "framer-motion";
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
  console.log(initialTrends);
  return (
    <div className={`${sourGummy.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}>
      {/* Header Section */}
      <div className="flex flex-row items-center justify-center w-full gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-3xl text-accent font-bold">YOUR FINANCIAL PROFILE</p>
        </div>
      </div>

      {/* Subheader */}
      <div className="text-xl text-primary font-bold text-center">
        <p>Your {year} financial profile is:</p>
      </div>

      {/* Financial Profile Display */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
        className="bg-yellow-200 p-6 rounded-lg shadow-lg max-w-lg"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center text-secondary">
          {initialTrends.financial_profile.name}
        </h1>
        <p className="mt-4 text-lg text-center text-secondary whitespace-pre-line">
          {initialTrends.financial_profile.description}
        </p>
        {/* Spotify Embed using the react-spotify-embed component */}
        <div className="mt-4 flex justify-center">
          <Spotify link={initialTrends.financial_profile.spotify_link} />
        </div>
      </motion.div>
    </div>
  );
};

export default FinancialProfileClient;
