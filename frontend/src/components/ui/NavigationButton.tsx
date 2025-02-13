"use client";


import React from 'react';
import { Button } from 'antd';
import { RightCircleFilled } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { quicksand, bungeeOutline } from "../../app/page";
import { motion } from 'framer-motion';



const NavigationButton = ({
  nextPage = '/next',       // URL of the next page
  size = 'large',           // Button size; options: 'small', 'middle', or 'large'
  color = '#171717',  
  bordercolor = '#f5d108' ,     // Button background and border color
  text = '',       // Button label text
  icon = <RightCircleFilled />,// Icon component; default is an arrow icon
  isAlreadyAnimated = false
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(nextPage);
  };
  if (isAlreadyAnimated){
    return (
      <motion.div
        initial={{ opacity: 0, x: "0vw", y: "0vh" }}
        animate={{ opacity: 1, x: "65vw", y: "-30vh" }}
        transition={{ type: "tween", duration: 1.2, ease: "easeInOut" }}
      >
        <div style={{
          position: 'fixed',
          zIndex: 1000 // ensures the button is always on top
        }}>
          <Button
            type="primary"
            style={{ backgroundColor: color, borderColor: bordercolor, fontFamily: bungeeOutline.className}}
            size = 'large'
            onClick={handleClick}
            icon={icon}
          >
            {text}
          </Button>
        </div>
      </motion.div>
    )
  }
  else return (
    <div style={{
      position: 'fixed',
      zIndex: 1000 // ensures the button is always on top
    }}>
      <Button
        type="primary"
        style={{ backgroundColor: color, borderColor: bordercolor, fontFamily: bungeeOutline.className}}
        size = 'large'
        onClick={handleClick}
        icon={icon}
      >
        {text}
      </Button>
    </div>
  );
};

export default NavigationButton;
