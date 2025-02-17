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
import { TrendResponse } from '@/types/trends';
import { quicksand, sourGummy } from '@/app/page';
import { motion, AnimatePresence } from 'framer-motion';

interface TrendAnalysisClientProps {
  year: string;
  initialTrends: TrendResponse;
}

const monthNames: { [key: number]: string } = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

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

const TrendAnalysisClient: React.FC<TrendAnalysisClientProps> = ({
  year,
  initialTrends,
}) => {
  // Prepare data for the BarChart using top expense months
  const data = initialTrends.top_expenses.map((item) => ({
    name: monthNames[item.month] || `Month ${item.month}`,
    value: item.total,
  }));

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // Show the intro for 5 seconds
    return () => clearTimeout(timer);
  }, []);

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
            className="w-full text-center whitespace-pre-line"
          >
            <Typography
              variant="h5"
              component="p"
              sx={{ color: 'var(--primary)' }}
              fontFamily={sourGummy.className}
            >
              Every expense leaves its mark.{"\n"}Let's uncover the months that defined your spending this year!
            </Typography>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className={`${sourGummy.className} text-[var(--accent-color)] text-4xl font-bold pb-2`}>
              Slide into
            </h1>
            <Typography
              variant="h4"
              component="h1"
              sx={{ color: 'var(--accent)' }}
              fontFamily={sourGummy.className}
              className={`${sourGummy.className} text-center  pb-4`}
            >
              Highest monthly spendings
            </Typography>
            {/* <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ color: 'var(--accent)' }}
              fontFamily={sourGummy.className}
            >
              of your {year}!
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

export default TrendAnalysisClient;
