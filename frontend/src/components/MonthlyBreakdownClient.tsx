'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts';
import { TrendResponse } from '@/types/trends';
import { quicksand, sourGummy } from '@/app/page';



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

  return (
    <Box
      className={`${sourGummy.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}
      sx={{ maxWidth: 800, mx: 'auto' }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ color: 'var(--accent)' }} 
        fontFamily={sourGummy.className}
      >
        Highest spendings 
      </Typography>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: 'var(--accent)' }} 
        fontFamily={sourGummy.className}
      >
        of your {year}!
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical" 
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            type="number"
            tick={{ fill: 'var(--accent)', fontSize: 14 }}
            // label={{
            //   value: 'Expenses',
            //   position: 'insideBottom',
            //   offset: -5,
            //   fill: 'var(--accent)',
            // }}
          />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: 'var(--accent)', fontSize: 14 }}
            // label={{
            //   value: 'Month',
            //   angle: -90,
            //   position: 'insideLeft',
            //   fill: 'var(--accent)',
            // }}
          />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="var(--primary)" 
            radius={[10, 10, 10, 10]} 
          >
            <LabelList
              content={renderCustomBarLabel}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TrendAnalysisClient;
