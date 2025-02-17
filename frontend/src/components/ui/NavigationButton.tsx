"use client";

import React from 'react';
import { Button } from 'antd';
import { RightCircleFilled } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { quicksand } from "../../app/page"; 
import { motion } from 'framer-motion';

const NavigationButton = ({
  nextPage = '/next',       
  size = 'large',          
  color = '#171717',  
  bordercolor = '#f5d108',  
  text = '',               
  icon = <RightCircleFilled />, 
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
          bottom: '15%', 
          right: '10%',  
          zIndex: 1000   
        }}
        initial={{ opacity: 0, translateY: 50 }}  
        animate={{ opacity: 1, translateY: 0 }}     
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
        bottom: '10%', 
        right: '80%',  
        zIndex: 1000   
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
