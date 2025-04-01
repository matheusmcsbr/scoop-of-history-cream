
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { futureMarketProjections, marketSizeData } from '@/services/iceCreamDataService';

const FutureMarketChart = () => {
  // Combine historical and projected data for a continuous chart
  const combinedData = [
    ...marketSizeData.slice(-5), // Last 5 years of historical data
    ...futureMarketProjections.map(item => ({
      year: item.year,
      sizeInBillions: item.projectedSizeInBillions,
      isProjection: true
    }))
  ];

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">US Ice Cream Market Future Projections (in Billions USD)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={combinedData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[10, 22]} />
              <Tooltip 
                formatter={(value, name) => [`$${value}B`, name === 'sizeInBillions' ? 'Market Size' : 'Projected Size']}
                labelFormatter={(label) => `Year: ${label}`}
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 border rounded shadow-sm">
                        <p className="font-medium">{`Year: ${label}`}</p>
                        <p className="text-[#e27396]">{`Market Size: $${payload[0].value}B`}</p>
                        {data.isProjection && (
                          <p className="text-xs mt-1 text-muted-foreground">Projected Value</p>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="sizeInBillions" 
                stroke="#e27396" 
                fill="#e27396" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right">
          Source: Market Research Future, Grand View Research, Statista Forecasts
        </div>
      </CardContent>
    </Card>
  );
};

export default FutureMarketChart;
