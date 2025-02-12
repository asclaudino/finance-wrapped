"use client";


import React from 'react';
import { Button } from 'antd';
import { RightCircleFilled } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { quicksand, bungeeOutline } from "../../app/page";



const NavigationButton = ({
  nextPage = '/next',       // URL of the next page
  size = 'large',           // Button size; options: 'small', 'middle', or 'large'
  color = '#171717',  
  bordercolor = '#f5d108' ,     // Button background and border color
  text = '',       // Button label text
  icon = <RightCircleFilled />// Icon component; default is an arrow icon
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(nextPage);
  };

  return (
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
