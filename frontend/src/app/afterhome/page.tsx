"use client"; 

import React from "react";
import { motion } from "framer-motion";
import { quicksand, bungeeOutline } from "../page";
import { useParams } from "next/navigation";
import '../globals.css';
import NavigationButton from '../../components/ui/NavigationButton';




export default function AfterHome() {
  return (
    <div className={`${bungeeOutline.className} relative h-screen w-full flex flex-col items-center justify-center `}>  
        <div className="relative z-10 text-primary text-3xl md:text-5xl font-bold text-center">         
              <motion.div
                      initial={{ opacity: 0, x:"100vw" }}
                      animate={{ opacity: 1, x: "0vw" }}
                      transition={{ type: 'tween', duration: 0.8, ease: "easeInOut" }}
              >
                  <h1>This is your </h1>
                  <h1 className="text-accent">2024 financial wrapped!</h1>  
              </motion.div>
              <motion.div
                    initial={{ opacity: 0, x: "0vw", y: "0vh"}}
                    animate={{ opacity: 1, x: "65vw", y: "20vh" }}
                    transition={{ type: 'tween', duration: 1.2, ease: "easeInOut" }}
              >
                  <NavigationButton
                    nextPage="/total-spendings/2024"          // Redirects to the total-spendings/2024 page when clicked
                    size='large'               // Button size
                  />
              </motion.div>
              
        </div>
      </div>
  );
}

