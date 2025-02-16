'use client';

import '@ant-design/v5-patch-for-react-19'; // added the patch for compatibility
import React from 'react';
import { useParams } from "next/navigation";
import { Button } from 'antd';
import Image from "next/image";
import HomePageSliderWrapper from '../components/ui/HomePageSliderWrapper'; 
import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, Bungee_Outline, Sour_Gummy } from "next/font/google";
import "./globals.css";
import { motion } from 'framer-motion';
import { metadata } from './metadata';

//export {metadata};

/*
  Quicksand -> use it for infos and minor texts
*/
export const quicksand = Quicksand({
  weight : ["400"],
  variable: "--font-quicksand",
  subsets: ["latin"],
})

export const sourGummy = Sour_Gummy({ 
  weight : ["400"],
  variable: "--font-quicksand",
  subsets: ["latin"],
})


/*
  Bungee_Outline -> use it for titles and punchlines
*/

export const bungeeOutline = Bungee_Outline({
  weight : ["400"],
  variable: "--font-bungee-outline",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  const params = useParams();

  return (
  <div className={`${sourGummy.className} relative h-screen w-full flex flex-col items-center justify-center `}>  
    <div className="relative z-10 text-primary text-3xl md:text-5xl font-bold text-center">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'tween', duration: 0.8, ease: "easeInOut" }}
      >
      <HomePageSliderWrapper></HomePageSliderWrapper>
      </motion.div>
    </div>
  </div>
  )
};

