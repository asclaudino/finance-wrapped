"use client"; 

import React from "react";
import { motion } from "framer-motion";
import { quicksand, bungeeOutline } from "../page";
import { useParams } from "next/navigation";
import '../globals.css';
import NavigationButton from '../../../components/ui/NavigationButton';




export default function AfterHome() {
  return (
    <div className={`${bungeeOutline.className} relative h-screen w-full flex flex-col items-center justify-center `}>  
        <div className="relative z-10 text-primary text-3xl md:text-5xl font-bold text-center">         
              <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: 'tween', duration: 0.8, ease: "easeInOut" }}
              >
                  <h1>This is your </h1>
                  <h1 className="text-accent">2024 financial wrapped!</h1>  
              </motion.div>
              <motion.div
                    initial={{ opacity: 0, x: 300, y:300}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'tween', duration: 1.2, ease: "easeInOut" }}
              >
                  <NavigationButton
                    nextPage="/about"          // Redirects to the /about page when clicked
                    size='small'               // Button size
                    text="Ready to discover"         // Custom button text
                  />
              </motion.div>
              
        </div>
      </div>
  );
}

