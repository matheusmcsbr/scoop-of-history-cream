
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { gelatoVsIceCreamComparison } from '@/services/iceCreamDataService';

const GelatoVsIceCreamChart = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Gelato vs Regular Ice Cream Consumer Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={gelatoVsIceCreamComparison}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="category" width={150} />
              <Tooltip 
                formatter={(value) => [`${value}%`, '']}
              />
              <Legend />
              <Bar dataKey="gelatoPercentage" name="Gelato" fill="#8884d8" radius={[0, 4, 4, 0]} />
              <Bar dataKey="regularIceCreamPercentage" name="Regular Ice Cream" fill="#82ca9d" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right">
          Source: Consumer Behavior Research Institute (2023)
        </div>
      </CardContent>
    </Card>
  );
};

export default GelatoVsIceCreamChart;
