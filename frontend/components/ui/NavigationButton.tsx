"use client";


import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';


const NavigationButton = ({
  nextPage = '/next',       // URL of the next page
  size = 'large',           // Button size; options: 'small', 'middle', or 'large'
  color = '#f5d108',        // Button background and border color
  text = 'Next Page',       // Button label text
  icon = <ArrowRightOutlined /> // Icon component; default is an arrow icon
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(nextPage);
  };

  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      zIndex: 1000 // ensures the button is always on top
    }}>
      <Button
        type="primary"
        style={{ backgroundColor: color, borderColor: color }}
        onClick={handleClick}
        icon={icon}
      >
        {text}
      </Button>
    </div>
  );
};

export default NavigationButton;
