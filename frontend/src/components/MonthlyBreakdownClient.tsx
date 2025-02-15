// components/TrendAnalysisClient.tsx

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
import { quicksand } from '@/app/page';

interface TrendAnalysisClientProps {
  year: string;
  initialTrends: TrendResponse;
}

const TrendAnalysisClient: React.FC<TrendAnalysisClientProps> = ({
  year,
  initialTrends,
}) => {
  // Prepare data for the BarChart using top expense months
  const data = initialTrends.top_expenses.map((item) => ({
    name: `Month ${item.month}`,
    value: item.total,
  }));

  return (
    <Box
      className={`${quicksand.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}
      sx={{ maxWidth: 800, mx: 'auto' }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: 'var(--accent)' }} // Accent color for the header
        fontFamily={quicksand.className}
      >
        Highest spendings of {year}
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical" // Renders horizontal bars
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
            fill="var(--primary)" // Primary color for the bars
            radius={[10, 10, 10, 10]} // Rounds all corners
          >
            <LabelList
              dataKey="value"
              position="inside"
              fill="var(--labelInside)" // Use a different color for the value info inside the bar
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TrendAnalysisClient;
