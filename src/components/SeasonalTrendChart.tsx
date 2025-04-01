
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { seasonalTrendData } from '@/services/iceCreamDataService';

// Month abbreviations
const monthAbbr = {
  'January': 'Jan',
  'February': 'Feb',
  'March': 'Mar',
  'April': 'Apr',
  'May': 'May',
  'June': 'Jun',
  'July': 'Jul',
  'August': 'Aug',
  'September': 'Sep',
  'October': 'Oct',
  'November': 'Nov',
  'December': 'Dec'
};

const SeasonalTrendChart = () => {
  const formattedData = seasonalTrendData.map(item => ({
    ...item,
    monthAbbr: monthAbbr[item.month as keyof typeof monthAbbr]
  }));

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Seasonal Sales Trends (% of Annual Sales)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={formattedData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monthAbbr" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Percentage of Annual Sales']}
                labelFormatter={(_, payload) => payload[0]?.payload.month}
              />
              <Bar 
                dataKey="percentageOfAnnualSales" 
                fill="#4cc9f0" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right">
          Source: IDFA Seasonal Report
        </div>
      </CardContent>
    </Card>
  );
};

export default SeasonalTrendChart;
