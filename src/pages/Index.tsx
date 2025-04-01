
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
import FutureMarketChart from '@/components/FutureMarketChart';
import GelatoMarketChart from '@/components/GelatoMarketChart';
import GelatoFlavorsChart from '@/components/GelatoFlavorsChart';
import GelatoVsIceCreamChart from '@/components/GelatoVsIceCreamChart';

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
          <h2 className="text-xl font-semibold mb-4">Market Trends & Projections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <MarketSizeChart />
            <FutureMarketChart />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ConsumptionChart />
            <PriceChart />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FlavorPopularityChart />
            <ProducersPieChart />
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Italian Gelato in US Market</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <GelatoMarketChart />
            <GelatoFlavorsChart />
          </div>
          <div className="mb-6">
            <GelatoVsIceCreamChart />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
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
