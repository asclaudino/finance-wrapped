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
  LabelList,
} from 'recharts';
import { TopMerchantsResponse } from '@/types/merchants';
import { quicksand, sourGummy } from '@/app/page';

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
      <Typography
        variant="h4"
        component="h1"
        sx={{ color: 'var(--accent)' }}
        fontFamily={sourGummy.className}
      >
        Top Merchant Categories
      </Typography>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: 'var(--accent)' }}
        fontFamily={sourGummy.className}
      >
        for {year}
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
    </Box>
  );
};

export default TopMerchantsClient;
