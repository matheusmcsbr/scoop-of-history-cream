
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { marketSizeData } from '@/services/iceCreamDataService';

const MarketSizeChart = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">US Ice Cream Market Size (in Billions USD)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={marketSizeData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[9, 16]} />
              <Tooltip 
                formatter={(value) => [`$${value}B`, 'Market Size']}
                labelFormatter={(label) => `Year: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="sizeInBillions" 
                stroke="#e27396" 
                strokeWidth={2}
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right">
          Source: Various (IDFA, Statista, Grand View Research, USDA)
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketSizeChart;
