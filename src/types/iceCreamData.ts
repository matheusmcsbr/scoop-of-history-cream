
export interface MarketSize {
  year: number;
  sizeInBillions: number;
  source: string;
}

export interface Consumption {
  year: number;
  gallonsPerCapita: number;
  source: string;
}

export interface FlavorPopularity {
  year: number;
  flavor: string;
  percentagePopularity: number;
  source: string;
}

export interface PriceData {
  year: number;
  averagePricePerGallon: number;
  source: string;
}

export interface StateConsumption {
  state: string;
  year: number;
  consumptionRanking: number;
  source: string;
}

export interface IceCreamProducer {
  name: string;
  year: number;
  marketSharePercentage: number;
  source: string;
}

export interface SalesChannel {
  year: number;
  channel: string;
  percentageSales: number;
  source: string;
}

export interface SeasonalTrend {
  month: string;
  percentageOfAnnualSales: number;
  source: string;
}
