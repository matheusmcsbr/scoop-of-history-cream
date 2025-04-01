
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { flavorPopularityData } from '@/services/iceCreamDataService';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FlavorPopularityChart = () => {
  const [selectedYear, setSelectedYear] = useState('2023');
  
  const years = useMemo(() => {
    return [...new Set(flavorPopularityData.map(item => item.year))].sort((a, b) => b - a);
  }, []);
  
  const filteredData = useMemo(() => {
    return flavorPopularityData
      .filter(item => item.year === parseInt(selectedYear))
      .sort((a, b) => b.percentagePopularity - a.percentagePopularity);
  }, [selectedYear]);

  // Custom colors for flavors
  const getFlavorColor = (flavor: string) => {
    const colorMap: Record<string, string> = {
      'Vanilla': '#F5F5DC',
      'Chocolate': '#7B3F00',
      'Cookies N\' Cream': '#413C3C',
      'Mint Chocolate Chip': '#86C5B5',
      'Chocolate Chip Cookie Dough': '#C9A66B'
    };
    return colorMap[flavor] || '#999999';
  };

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Top Ice Cream Flavors</CardTitle>
          <Select
            value={selectedYear}
            onValueChange={(value) => setSelectedYear(value)}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 30]} />
              <YAxis type="category" dataKey="flavor" />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Popularity']}
              />
              <Bar 
                dataKey="percentagePopularity" 
                fill="#8884d8" 
                radius={[0, 4, 4, 0]}
                barSize={30}
              >
                {filteredData.map((entry, index) => (
                  <rect key={`cell-${index}`} fill={getFlavorColor(entry.flavor)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right">
          Source: International Ice Cream Association, YouGov Survey, IDFA Survey
        </div>
      </CardContent>
    </Card>
  );
};

export default FlavorPopularityChart;
