
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { italianGelatoData } from '@/services/iceCreamDataService';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#FF6B6B'];

const GelatoFlavorsChart = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  
  const selectedYearData = italianGelatoData.find(item => item.year === parseInt(selectedYear.toString())) || italianGelatoData[italianGelatoData.length - 1];
  
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex justify-between items-center">
          <span>Popular Italian Gelato Flavors</span>
          <Select
            value={selectedYear.toString()}
            onValueChange={(value) => setSelectedYear(parseInt(value))}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {italianGelatoData.map((data) => (
                <SelectItem key={data.year} value={data.year.toString()}>
                  {data.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={selectedYearData.popularFlavors}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="percentagePopularity"
                nameKey="flavor"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {selectedYearData.popularFlavors.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, 'Popularity']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right">
          Source: {selectedYearData.source}
        </div>
      </CardContent>
    </Card>
  );
};

export default GelatoFlavorsChart;
