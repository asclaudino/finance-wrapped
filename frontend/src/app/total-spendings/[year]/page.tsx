"use client"; 

import React from "react";
import { motion } from "framer-motion";
import { quicksand, bungeeOutline } from "../../page";
import { useParams } from "next/navigation";
import '../../globals.css';


export default function TotalSpendingsPage() {
  const { year } = useParams();

  return (
    <div className={`${bungeeOutline.className} relative h-screen w-full flex flex-col items-center justify-center `}>  
        <div className="relative z-10 text-primary text-3xl md:text-5xl font-bold text-center">         
              <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: 'tween', duration: 0.8, ease: "easeInOut" }}
              >
                  <h1>Total Spendings in {year}:</h1>
              </motion.div>
              
        </div>
      </div>
  );
}

