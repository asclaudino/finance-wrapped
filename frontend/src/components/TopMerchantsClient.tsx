'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from 'recharts';
import { TopMerchantsResponse } from '@/types/merchants';
import { quicksand, sourGummy } from '@/app/page';
import { motion, AnimatePresence } from 'framer-motion';

interface TopMerchantsClientProps {
  year: string;
  initialMerchants: TopMerchantsResponse;
}

const renderCustomBarLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="var(--labelInside)"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={12}
    >
      ${value}
    </text>
  );
};

const TopMerchantsClient: React.FC<TopMerchantsClientProps> = ({
  year,
  initialMerchants,
}) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // Show the intro for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Prepare data for the BarChart using top merchant categories
  const data = initialMerchants.top_merchants.map((item) => ({
    name: item.category,
    value: item.total,
  }));

  return (
    <Box
      className={`${sourGummy.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}
      sx={{ maxWidth: 800, mx: 'auto' }}
    >
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', textAlign: 'center' }}
            className="whitespace-pre-line"
          >
            <div className={`${sourGummy.className} flex items-center justify-center min-h-screen`}>
              <div className="bg-black p-8 rounded-lg shadow-lg">
                <p className="text-accent text-center text-xl">
                  Your money took different paths throughout the year.<br /><br />
                  Let's find out where it went!
                </p>
              </div>
            </div>

          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%' }}
          >
            <div className={`${sourGummy.className} pl-10`}>
              <div className="pl-8 rounded-lg shadow-lg">
                <h1 className="text-accent pl-6 pb-4 text-4xl">
                  Top Spent Categories
                </h1>
              </div>
            </div>

            {/* <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ color: 'var(--accent)' }}
              fontFamily={sourGummy.className}
            >
              in your {year}
            </Typography> */}
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  type="number"
                  tick={{ fill: 'var(--accent)', fontSize: 14 }}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  tick={{ fill: 'var(--accent)', fontSize: 14 }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="var(--primary)"
                  radius={[10, 10, 10, 10]}
                >
                  <LabelList content={renderCustomBarLabel} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default TopMerchantsClient;
