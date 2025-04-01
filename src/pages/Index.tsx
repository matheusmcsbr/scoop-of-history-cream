
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsCards from '@/components/StatsCards';
import MarketSizeChart from '@/components/MarketSizeChart';
import ConsumptionChart from '@/components/ConsumptionChart';
import FlavorPopularityChart from '@/components/FlavorPopularityChart';
import PriceChart from '@/components/PriceChart';
import ProducersPieChart from '@/components/ProducersPieChart';
import SeasonalTrendChart from '@/components/SeasonalTrendChart';
import DataTable from '@/components/DataTable';
import SourcesInfo from '@/components/SourcesInfo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">US Ice Cream Market Dataset</h1>
        <p className="text-muted-foreground mb-8">
          A comprehensive collection of historical data about the US ice cream industry
          from various public sources including IDFA, USDA, and market research firms.
        </p>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Key Statistics</h2>
          <StatsCards />
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Market Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <MarketSizeChart />
            <ConsumptionChart />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <PriceChart />
            <FlavorPopularityChart />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProducersPieChart />
            <SeasonalTrendChart />
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Complete Dataset</h2>
          <DataTable />
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Sources</h2>
          <SourcesInfo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
