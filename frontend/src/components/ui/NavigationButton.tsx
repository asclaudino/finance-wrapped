"use client";

import React from 'react';
import { Button } from 'antd';
import { RightCircleFilled } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { quicksand } from "../../app/page"; // assuming quicksand is an imported font style
import { motion } from 'framer-motion';

const NavigationButton = ({
  nextPage = '/next',       // URL of the next page
  size = 'large',           // Button size; options: 'small', 'middle', or 'large'
  color = '#171717',  
  bordercolor = '#f5d108',  // Button background and border color
  text = '',                // Button label text
  icon = <RightCircleFilled />, // Icon component; default is an arrow icon
  isAlreadyAnimated = false,
  animationDelay = 0        // Optional delay in milliseconds before the animation starts
}) => {
  
  const router = useRouter();

  const handleClick = () => {
    router.push(nextPage);
  };

  if (isAlreadyAnimated) {
    return (
      <motion.div
        style={{
          position: 'fixed',
          bottom: '15%', // adjust as needed
          right: '10%',  // adjust as needed
          zIndex: 1000   // ensures the button is always on top
        }}
        initial={{ opacity: 0, translateY: 50 }}  // Start slightly below its final position
        animate={{ opacity: 1, translateY: 0 }}     // Animate into view
        transition={{ delay: animationDelay / 1000, type: "tween", duration: 1.2, ease: "easeInOut" }}
      >
        <Button
          type="primary"
          style={{ backgroundColor: color, borderColor: bordercolor, fontFamily: quicksand.className }}
          size="large"
          onClick={handleClick}
          icon={icon}
        >
          {text}
        </Button>
      </motion.div>
    );
  } else {
    return (
      <div style={{
        position: 'fixed',
        bottom: '10%', // adjust as needed
        right: '80%',  // adjust as needed
        zIndex: 1000   // ensures the button is always on top
      }}>
        <Button
          type="primary"
          style={{ backgroundColor: color, borderColor: bordercolor, fontFamily: quicksand.className }}
          size="large"
          onClick={handleClick}
          icon={icon}
        >
          {text}
        </Button>
      </div>
    );
  }
};

export default NavigationButton;
