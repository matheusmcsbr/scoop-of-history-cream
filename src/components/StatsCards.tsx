
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Slice, 
  TrendingUp, 
  DollarSign, 
  ShoppingBasket,
  Users,
  Zap
} from 'lucide-react';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="ice-cream-gradient shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6 flex items-start">
          <div className="bg-white/90 p-2 rounded-full mr-4 shadow-sm">
            <Slice className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Annual Market Size</p>
            <h3 className="text-white text-2xl font-bold mt-1">$15.4 Billion</h3>
            <p className="text-white/80 text-xs mt-1">As of 2023</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mint-gradient shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6 flex items-start">
          <div className="bg-white/90 p-2 rounded-full mr-4 shadow-sm">
            <TrendingUp className="h-5 w-5 text-secondary" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Per Capita Consumption</p>
            <h3 className="text-white text-2xl font-bold mt-1">14.3 Gallons</h3>
            <p className="text-white/80 text-xs mt-1">Average per year (2023)</p>
          </div>
        </CardContent>
      </Card>

      <Card className="chocolate-gradient shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6 flex items-start">
          <div className="bg-white/90 p-2 rounded-full mr-4 shadow-sm">
            <DollarSign className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Average Price</p>
            <h3 className="text-white text-2xl font-bold mt-1">$7.80 / Gallon</h3>
            <p className="text-white/80 text-xs mt-1">National average (2023)</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-200 to-purple-400 shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6 flex items-start">
          <div className="bg-white/90 p-2 rounded-full mr-4 shadow-sm">
            <ShoppingBasket className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Top Sales Channel</p>
            <h3 className="text-white text-2xl font-bold mt-1">Supermarkets</h3>
            <p className="text-white/80 text-xs mt-1">42.3% of all sales</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-200 to-blue-400 shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6 flex items-start">
          <div className="bg-white/90 p-2 rounded-full mr-4 shadow-sm">
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Top Consumer State</p>
            <h3 className="text-white text-2xl font-bold mt-1">California</h3>
            <p className="text-white/80 text-xs mt-1">Highest consumption (2023)</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-200 to-amber-400 shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6 flex items-start">
          <div className="bg-white/90 p-2 rounded-full mr-4 shadow-sm">
            <Zap className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Peak Season</p>
            <h3 className="text-white text-2xl font-bold mt-1">July</h3>
            <p className="text-white/80 text-xs mt-1">14.8% of annual sales</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
