
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { getAllData } from '@/services/iceCreamDataService';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const formatNumber = (num: number) => {
  if (num % 1 === 0) return num.toString();
  return num.toFixed(1);
};

const downloadCsv = (data: any[], filename: string) => {
  if (data.length === 0) return;
  
  const headers = Object.keys(data[0]);
  const csvRows = [headers.join(',')];
  
  for (const row of data) {
    const values = headers.map(header => {
      const value = row[header];
      return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
    });
    csvRows.push(values.join(','));
  }
  
  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DataTable = () => {
  const [activeTab, setActiveTab] = useState('market-size');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  const data = getAllData();
  
  const getFilteredData = () => {
    let filteredData: any[] = [];
    
    switch(activeTab) {
      case 'market-size':
        filteredData = data.marketSizeData.filter(item => 
          item.year.toString().includes(searchTerm) || 
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'future-projections':
        filteredData = data.futureMarketProjections.filter(item => 
          item.year.toString().includes(searchTerm) || 
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'consumption':
        filteredData = data.consumptionData.filter(item => 
          item.year.toString().includes(searchTerm) || 
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'flavor-popularity':
        filteredData = data.flavorPopularityData.filter(item => 
          item.year.toString().includes(searchTerm) || 
          item.flavor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'price-data':
        filteredData = data.priceData.filter(item => 
          item.year.toString().includes(searchTerm) || 
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'state-consumption':
        filteredData = data.stateConsumptionData.filter(item => 
          item.state.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.year.toString().includes(searchTerm) ||
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'producer-data':
        filteredData = data.producerData.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.year.toString().includes(searchTerm) ||
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'sales-channel':
        filteredData = data.salesChannelData.filter(item => 
          item.channel.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.year.toString().includes(searchTerm) ||
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'seasonal-trend':
        filteredData = data.seasonalTrendData.filter(item => 
          item.month.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'italian-gelato':
        filteredData = data.italianGelatoData.map(item => ({
          year: item.year,
          marketSharePercentage: item.marketSharePercentage,
          averagePricePerScoop: item.averagePricePerScoop,
          topFlavor: item.popularFlavors[0].flavor,
          source: item.source
        })).filter(item => 
          item.year.toString().includes(searchTerm) || 
          item.topFlavor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'gelato-comparison':
        filteredData = data.gelatoVsIceCreamComparison.filter(item => 
          item.category.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      default:
        filteredData = [];
    }
    
    if (['market-size', 'consumption', 'price-data', 'future-projections', 'italian-gelato'].includes(activeTab)) {
      filteredData.sort((a, b) => sortOrder === 'desc' ? b.year - a.year : a.year - b.year);
    }
    
    return filteredData;
  };
  
  const filteredData = getFilteredData();
  
  const getColumns = () => {
    switch(activeTab) {
      case 'market-size':
        return [
          { header: 'Year', key: 'year' },
          { header: 'Market Size (Billions $)', key: 'sizeInBillions' },
          { header: 'Source', key: 'source' },
        ];
      case 'future-projections':
        return [
          { header: 'Year', key: 'year' },
          { header: 'Projected Size (Billions $)', key: 'projectedSizeInBillions' },
          { header: 'Growth (%)', key: 'growthPercentage' },
          { header: 'Source', key: 'source' },
        ];
      case 'consumption':
        return [
          { header: 'Year', key: 'year' },
          { header: 'Gallons Per Capita', key: 'gallonsPerCapita' },
          { header: 'Source', key: 'source' },
        ];
      case 'flavor-popularity':
        return [
          { header: 'Year', key: 'year' },
          { header: 'Flavor', key: 'flavor' },
          { header: 'Popularity (%)', key: 'percentagePopularity' },
          { header: 'Source', key: 'source' },
        ];
      case 'price-data':
        return [
          { header: 'Year', key: 'year' },
          { header: 'Price Per Gallon ($)', key: 'averagePricePerGallon' },
          { header: 'Source', key: 'source' },
        ];
      case 'state-consumption':
        return [
          { header: 'State', key: 'state' },
          { header: 'Year', key: 'year' },
          { header: 'Consumption Ranking', key: 'consumptionRanking' },
          { header: 'Source', key: 'source' },
        ];
      case 'producer-data':
        return [
          { header: 'Producer', key: 'name' },
          { header: 'Year', key: 'year' },
          { header: 'Market Share (%)', key: 'marketSharePercentage' },
          { header: 'Source', key: 'source' },
        ];
      case 'sales-channel':
        return [
          { header: 'Year', key: 'year' },
          { header: 'Channel', key: 'channel' },
          { header: 'Sales Percentage', key: 'percentageSales' },
          { header: 'Source', key: 'source' },
        ];
      case 'seasonal-trend':
        return [
          { header: 'Month', key: 'month' },
          { header: 'Percentage of Annual Sales', key: 'percentageOfAnnualSales' },
          { header: 'Source', key: 'source' },
        ];
      case 'italian-gelato':
        return [
          { header: 'Year', key: 'year' },
          { header: 'Market Share (%)', key: 'marketSharePercentage' },
          { header: 'Price Per Scoop ($)', key: 'averagePricePerScoop' },
          { header: 'Top Flavor', key: 'topFlavor' },
          { header: 'Source', key: 'source' },
        ];
      case 'gelato-comparison':
        return [
          { header: 'Category', key: 'category' },
          { header: 'Gelato (%)', key: 'gelatoPercentage' },
          { header: 'Regular Ice Cream (%)', key: 'regularIceCreamPercentage' },
          { header: 'Year', key: 'year' },
          { header: 'Source', key: 'source' },
        ];
      default:
        return [];
    }
  };
  
  const columns = getColumns();
  
  const getTabTitle = () => {
    switch(activeTab) {
      case 'market-size': return 'Market Size Data';
      case 'future-projections': return 'Future Market Projections';
      case 'consumption': return 'Per Capita Consumption';
      case 'flavor-popularity': return 'Flavor Popularity';
      case 'price-data': return 'Price Data';
      case 'state-consumption': return 'State Consumption Rankings';
      case 'producer-data': return 'Producer Market Share';
      case 'sales-channel': return 'Sales Channel Distribution';
      case 'seasonal-trend': return 'Seasonal Sales Trends';
      case 'italian-gelato': return 'Italian Gelato Data';
      case 'gelato-comparison': return 'Gelato vs Ice Cream Comparison';
      default: return '';
    }
  };
  
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span className="text-lg font-medium">Ice Cream Market Dataset</span>
          <Badge variant="outline" className="font-normal">
            {filteredData.length} records
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="pb-4 overflow-x-auto">
            <TabsList className="flex min-w-max">
              <TabsTrigger value="market-size">Market Size</TabsTrigger>
              <TabsTrigger value="future-projections">Projections</TabsTrigger>
              <TabsTrigger value="consumption">Consumption</TabsTrigger>
              <TabsTrigger value="flavor-popularity">Flavors</TabsTrigger>
              <TabsTrigger value="price-data">Prices</TabsTrigger>
              <TabsTrigger value="state-consumption">States</TabsTrigger>
              <TabsTrigger value="producer-data">Producers</TabsTrigger>
              <TabsTrigger value="sales-channel">Channels</TabsTrigger>
              <TabsTrigger value="seasonal-trend">Seasonal</TabsTrigger>
              <TabsTrigger value="italian-gelato">Gelato</TabsTrigger>
              <TabsTrigger value="gelato-comparison">Gelato vs Ice Cream</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex justify-between items-center mb-4 gap-2">
            <div className="flex-1">
              <Input
                placeholder="Search data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as 'asc' | 'desc')}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Newest First</SelectItem>
                  <SelectItem value="asc">Oldest First</SelectItem>
                </SelectContent>
              </Select>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => downloadCsv(filteredData, activeTab)}
                title="Download CSV"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableCaption>
                {getTabTitle()} - Compiled from various public sources
              </TableCaption>
              <TableHeader>
                <TableRow>
                  {columns.map((column) => (
                    <TableHead key={column.key}>{column.header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length > 0 ? (
                  filteredData.map((row, index) => (
                    <TableRow key={index}>
                      {columns.map((column) => (
                        <TableCell key={column.key}>
                          {typeof row[column.key] === 'number' 
                            ? formatNumber(row[column.key]) 
                            : row[column.key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DataTable;
