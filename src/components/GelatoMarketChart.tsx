
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { italianGelatoData } from '@/services/iceCreamDataService';

const GelatoMarketChart = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Italian Gelato Market Share in US (2019-2023)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={italianGelatoData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                yAxisId="left"
                orientation="left" 
                stroke="#8884d8"
                label={{ value: 'Market Share (%)', angle: -90, position: 'insideLeft' }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="#82ca9d"
                domain={[0, 8]}
                label={{ value: 'Price ($)', angle: 90, position: 'insideRight' }}
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'marketSharePercentage') return [`${value}%`, 'Market Share'];
                  if (name === 'averagePricePerScoop') return [`$${value}`, 'Avg. Price/Scoop'];
                  return [value, name];
                }}
              />
              <Legend />
              <Bar 
                yAxisId="left" 
                dataKey="marketSharePercentage" 
                name="Market Share" 
                fill="#8884d8" 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                yAxisId="right" 
                dataKey="averagePricePerScoop" 
                name="Price per Scoop" 
                fill="#82ca9d" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right">
          Source: National Italian American Foundation, American Gelato Association
        </div>
      </CardContent>
    </Card>
  );
};

export default GelatoMarketChart;
