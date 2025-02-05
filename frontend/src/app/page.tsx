import React from 'react';
import { Button } from 'antd';
import Image from "next/image";
import { quicksand, bungeeOutline } from './layout';

const Home = () => (
  <div className={`${bungeeOutline.className} relative h-screen w-full flex flex-col items-center justify-center `}>  
    <div className="relative z-10 text-primary text-3xl md:text-5xl font-bold text-center">
      <h1>
        2024
      </h1>
    </div>
    <div className="relative z-10 text-primary text-3xl md:text-5xl font-bold text-center">
      <h1>
        Wrapped
      </h1>
    </div>
  </div>
);

export default Home;