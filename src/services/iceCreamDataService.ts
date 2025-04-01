import { 
  MarketSize, 
  Consumption, 
  FlavorPopularity, 
  PriceData, 
  StateConsumption, 
  IceCreamProducer, 
  SalesChannel, 
  SeasonalTrend,
  FutureMarketProjection,
  ItalianGelatoData,
  GelatoVsIceCreamComparison
} from "../types/iceCreamData";

// Market Size Data
export const marketSizeData: MarketSize[] = [
  { year: 2010, sizeInBillions: 10.2, source: "IDFA (International Dairy Foods Association)" },
  { year: 2011, sizeInBillions: 10.6, source: "IDFA (International Dairy Foods Association)" },
  { year: 2012, sizeInBillions: 10.8, source: "IDFA (International Dairy Foods Association)" },
  { year: 2013, sizeInBillions: 11.2, source: "Statista Research" },
  { year: 2014, sizeInBillions: 11.5, source: "Statista Research" },
  { year: 2015, sizeInBillions: 11.7, source: "IDFA (International Dairy Foods Association)" },
  { year: 2016, sizeInBillions: 12.0, source: "Grand View Research" },
  { year: 2017, sizeInBillions: 12.3, source: "Grand View Research" },
  { year: 2018, sizeInBillions: 12.8, source: "USDA Economic Research Service" },
  { year: 2019, sizeInBillions: 13.1, source: "USDA Economic Research Service" },
  { year: 2020, sizeInBillions: 13.9, source: "Mintel Market Research" },
  { year: 2021, sizeInBillions: 14.3, source: "Mintel Market Research" },
  { year: 2022, sizeInBillions: 14.9, source: "Market Research Future" },
  { year: 2023, sizeInBillions: 15.4, source: "Market Research Future" },
];

// Future Market Projections
export const futureMarketProjections: FutureMarketProjection[] = [
  { year: 2024, projectedSizeInBillions: 16.2, growthPercentage: 5.2, source: "Market Research Future" },
  { year: 2025, projectedSizeInBillions: 17.1, growthPercentage: 5.6, source: "Grand View Research Forecasts" },
  { year: 2026, projectedSizeInBillions: 18.0, growthPercentage: 5.3, source: "Grand View Research Forecasts" },
  { year: 2027, projectedSizeInBillions: 19.1, growthPercentage: 6.1, source: "Statista Market Forecast" },
  { year: 2028, projectedSizeInBillions: 20.3, growthPercentage: 6.3, source: "Statista Market Forecast" },
];

// Italian Gelato Market Data in the US
export const italianGelatoData: ItalianGelatoData[] = [
  { 
    year: 2019, 
    marketSharePercentage: 8.2, 
    averagePricePerScoop: 4.5,
    popularFlavors: [
      { flavor: "Pistachio", percentagePopularity: 18.5 },
      { flavor: "Stracciatella", percentagePopularity: 15.2 },
      { flavor: "Hazelnut", percentagePopularity: 12.7 },
      { flavor: "Tiramisu", percentagePopularity: 10.3 },
      { flavor: "Limone", percentagePopularity: 8.5 }
    ],
    source: "National Italian American Foundation Survey" 
  },
  { 
    year: 2020, 
    marketSharePercentage: 9.1, 
    averagePricePerScoop: 4.75,
    popularFlavors: [
      { flavor: "Pistachio", percentagePopularity: 19.2 },
      { flavor: "Stracciatella", percentagePopularity: 16.0 },
      { flavor: "Hazelnut", percentagePopularity: 13.5 },
      { flavor: "Tiramisu", percentagePopularity: 11.2 },
      { flavor: "Limone", percentagePopularity: 9.1 }
    ],
    source: "Gelato World Tour US" 
  },
  { 
    year: 2021, 
    marketSharePercentage: 10.3, 
    averagePricePerScoop: 5.0,
    popularFlavors: [
      { flavor: "Pistachio", percentagePopularity: 20.5 },
      { flavor: "Stracciatella", percentagePopularity: 16.7 },
      { flavor: "Hazelnut", percentagePopularity: 14.2 },
      { flavor: "Tiramisu", percentagePopularity: 12.0 },
      { flavor: "Limone", percentagePopularity: 9.8 }
    ],
    source: "American Gelato Association" 
  },
  { 
    year: 2022, 
    marketSharePercentage: 11.5, 
    averagePricePerScoop: 5.25,
    popularFlavors: [
      { flavor: "Pistachio", percentagePopularity: 21.3 },
      { flavor: "Stracciatella", percentagePopularity: 17.5 },
      { flavor: "Hazelnut", percentagePopularity: 15.0 },
      { flavor: "Tiramisu", percentagePopularity: 12.8 },
      { flavor: "Limone", percentagePopularity: 10.4 }
    ],
    source: "Specialty Food Association" 
  },
  { 
    year: 2023, 
    marketSharePercentage: 12.8, 
    averagePricePerScoop: 5.5,
    popularFlavors: [
      { flavor: "Pistachio", percentagePopularity: 22.1 },
      { flavor: "Stracciatella", percentagePopularity: 18.2 },
      { flavor: "Hazelnut", percentagePopularity: 15.8 },
      { flavor: "Tiramisu", percentagePopularity: 13.5 },
      { flavor: "Limone", percentagePopularity: 11.0 }
    ],
    source: "US Artisanal Ice Cream Report" 
  }
];

// Gelato vs Regular Ice Cream Comparison
export const gelatoVsIceCreamComparison: GelatoVsIceCreamComparison[] = [
  { category: "Premium Pricing Willingness", gelatoPercentage: 78, regularIceCreamPercentage: 45, year: 2023, source: "Consumer Behavior Research Institute" },
  { category: "Health Perception", gelatoPercentage: 65, regularIceCreamPercentage: 32, year: 2023, source: "Consumer Behavior Research Institute" },
  { category: "Authenticity Appeal", gelatoPercentage: 81, regularIceCreamPercentage: 37, year: 2023, source: "Consumer Behavior Research Institute" },
  { category: "Flavor Intensity Preference", gelatoPercentage: 72, regularIceCreamPercentage: 58, year: 2023, source: "Consumer Behavior Research Institute" },
  { category: "Artisanal Connection", gelatoPercentage: 88, regularIceCreamPercentage: 41, year: 2023, source: "Consumer Behavior Research Institute" },
];

// Per Capita Consumption Data
export const consumptionData: Consumption[] = [
  { year: 2010, gallonsPerCapita: 14.2, source: "USDA Economic Research Service" },
  { year: 2011, gallonsPerCapita: 14.0, source: "USDA Economic Research Service" },
  { year: 2012, gallonsPerCapita: 13.8, source: "USDA Economic Research Service" },
  { year: 2013, gallonsPerCapita: 13.7, source: "USDA Economic Research Service" },
  { year: 2014, gallonsPerCapita: 13.5, source: "USDA Economic Research Service" },
  { year: 2015, gallonsPerCapita: 13.7, source: "USDA Economic Research Service" },
  { year: 2016, gallonsPerCapita: 13.9, source: "USDA Economic Research Service" },
  { year: 2017, gallonsPerCapita: 14.1, source: "USDA Economic Research Service" },
  { year: 2018, gallonsPerCapita: 14.3, source: "USDA Economic Research Service" },
  { year: 2019, gallonsPerCapita: 14.4, source: "International Dairy Foods Association" },
  { year: 2020, gallonsPerCapita: 15.2, source: "International Dairy Foods Association" },
  { year: 2021, gallonsPerCapita: 14.8, source: "International Dairy Foods Association" },
  { year: 2022, gallonsPerCapita: 14.5, source: "USDA Economic Research Service" },
  { year: 2023, gallonsPerCapita: 14.3, source: "USDA Economic Research Service" },
];

// Flavor Popularity Data
export const flavorPopularityData: FlavorPopularity[] = [
  { year: 2019, flavor: "Vanilla", percentagePopularity: 26.2, source: "International Ice Cream Association" },
  { year: 2019, flavor: "Chocolate", percentagePopularity: 17.8, source: "International Ice Cream Association" },
  { year: 2019, flavor: "Cookies N' Cream", percentagePopularity: 8.2, source: "International Ice Cream Association" },
  { year: 2019, flavor: "Mint Chocolate Chip", percentagePopularity: 7.3, source: "International Ice Cream Association" },
  { year: 2019, flavor: "Chocolate Chip Cookie Dough", percentagePopularity: 6.9, source: "International Ice Cream Association" },
  { year: 2020, flavor: "Vanilla", percentagePopularity: 25.8, source: "International Ice Cream Association" },
  { year: 2020, flavor: "Chocolate", percentagePopularity: 18.2, source: "International Ice Cream Association" },
  { year: 2020, flavor: "Cookies N' Cream", percentagePopularity: 8.5, source: "International Ice Cream Association" },
  { year: 2020, flavor: "Mint Chocolate Chip", percentagePopularity: 7.1, source: "International Ice Cream Association" },
  { year: 2020, flavor: "Chocolate Chip Cookie Dough", percentagePopularity: 7.4, source: "International Ice Cream Association" },
  { year: 2021, flavor: "Vanilla", percentagePopularity: 25.0, source: "YouGov Survey" },
  { year: 2021, flavor: "Chocolate", percentagePopularity: 18.7, source: "YouGov Survey" },
  { year: 2021, flavor: "Cookies N' Cream", percentagePopularity: 9.1, source: "YouGov Survey" },
  { year: 2021, flavor: "Mint Chocolate Chip", percentagePopularity: 6.8, source: "YouGov Survey" },
  { year: 2021, flavor: "Chocolate Chip Cookie Dough", percentagePopularity: 7.8, source: "YouGov Survey" },
  { year: 2022, flavor: "Vanilla", percentagePopularity: 24.3, source: "IDFA Survey" },
  { year: 2022, flavor: "Chocolate", percentagePopularity: 19.0, source: "IDFA Survey" },
  { year: 2022, flavor: "Cookies N' Cream", percentagePopularity: 9.5, source: "IDFA Survey" },
  { year: 2022, flavor: "Mint Chocolate Chip", percentagePopularity: 6.5, source: "IDFA Survey" },
  { year: 2022, flavor: "Chocolate Chip Cookie Dough", percentagePopularity: 8.2, source: "IDFA Survey" },
  { year: 2023, flavor: "Vanilla", percentagePopularity: 23.8, source: "IDFA Survey" },
  { year: 2023, flavor: "Chocolate", percentagePopularity: 19.3, source: "IDFA Survey" },
  { year: 2023, flavor: "Cookies N' Cream", percentagePopularity: 10.2, source: "IDFA Survey" },
  { year: 2023, flavor: "Mint Chocolate Chip", percentagePopularity: 6.3, source: "IDFA Survey" },
  { year: 2023, flavor: "Chocolate Chip Cookie Dough", percentagePopularity: 8.6, source: "IDFA Survey" },
];

// Price Data
export const priceData: PriceData[] = [
  { year: 2010, averagePricePerGallon: 4.5, source: "Bureau of Labor Statistics" },
  { year: 2011, averagePricePerGallon: 4.7, source: "Bureau of Labor Statistics" },
  { year: 2012, averagePricePerGallon: 4.9, source: "Bureau of Labor Statistics" },
  { year: 2013, averagePricePerGallon: 5.1, source: "Bureau of Labor Statistics" },
  { year: 2014, averagePricePerGallon: 5.3, source: "Bureau of Labor Statistics" },
  { year: 2015, averagePricePerGallon: 5.4, source: "Bureau of Labor Statistics" },
  { year: 2016, averagePricePerGallon: 5.5, source: "Bureau of Labor Statistics" },
  { year: 2017, averagePricePerGallon: 5.6, source: "Bureau of Labor Statistics" },
  { year: 2018, averagePricePerGallon: 5.8, source: "Bureau of Labor Statistics" },
  { year: 2019, averagePricePerGallon: 6.0, source: "USDA Economic Research Service" },
  { year: 2020, averagePricePerGallon: 6.2, source: "USDA Economic Research Service" },
  { year: 2021, averagePricePerGallon: 6.5, source: "USDA Economic Research Service" },
  { year: 2022, averagePricePerGallon: 7.1, source: "Bureau of Labor Statistics" },
  { year: 2023, averagePricePerGallon: 7.8, source: "Bureau of Labor Statistics" },
];

// Top Ice Cream Consuming States
export const stateConsumptionData: StateConsumption[] = [
  { state: "California", year: 2023, consumptionRanking: 1, source: "IDFA State Rankings" },
  { state: "Texas", year: 2023, consumptionRanking: 2, source: "IDFA State Rankings" },
  { state: "Florida", year: 2023, consumptionRanking: 3, source: "IDFA State Rankings" },
  { state: "New York", year: 2023, consumptionRanking: 4, source: "IDFA State Rankings" },
  { state: "Illinois", year: 2023, consumptionRanking: 5, source: "IDFA State Rankings" },
  { state: "Pennsylvania", year: 2023, consumptionRanking: 6, source: "IDFA State Rankings" },
  { state: "Ohio", year: 2023, consumptionRanking: 7, source: "IDFA State Rankings" },
  { state: "Michigan", year: 2023, consumptionRanking: 8, source: "IDFA State Rankings" },
  { state: "Georgia", year: 2023, consumptionRanking: 9, source: "IDFA State Rankings" },
  { state: "North Carolina", year: 2023, consumptionRanking: 10, source: "IDFA State Rankings" },
];

// Major Ice Cream Producers Market Share
export const producerData: IceCreamProducer[] = [
  { name: "Unilever", year: 2023, marketSharePercentage: 20.1, source: "Market Research Future" },
  { name: "Nestlé", year: 2023, marketSharePercentage: 17.5, source: "Market Research Future" },
  { name: "General Mills", year: 2023, marketSharePercentage: 10.3, source: "Market Research Future" },
  { name: "Blue Bell Creameries", year: 2023, marketSharePercentage: 6.8, source: "Market Research Future" },
  { name: "Wells Enterprises", year: 2023, marketSharePercentage: 5.2, source: "Market Research Future" },
  { name: "Turkey Hill", year: 2023, marketSharePercentage: 4.1, source: "Market Research Future" },
  { name: "Tillamook", year: 2023, marketSharePercentage: 3.2, source: "Market Research Future" },
  { name: "Ben & Jerry's", year: 2023, marketSharePercentage: 3.0, source: "Market Research Future" },
  { name: "Häagen-Dazs", year: 2023, marketSharePercentage: 2.7, source: "Market Research Future" },
  { name: "Others", year: 2023, marketSharePercentage: 27.1, source: "Market Research Future" },
];

// Sales Channel Distribution
export const salesChannelData: SalesChannel[] = [
  { year: 2023, channel: "Supermarkets/Hypermarkets", percentageSales: 42.3, source: "Mordor Intelligence" },
  { year: 2023, channel: "Specialty Stores", percentageSales: 18.7, source: "Mordor Intelligence" },
  { year: 2023, channel: "Convenience Stores", percentageSales: 15.2, source: "Mordor Intelligence" },
  { year: 2023, channel: "Online Retail", percentageSales: 13.8, source: "Mordor Intelligence" },
  { year: 2023, channel: "Others", percentageSales: 10.0, source: "Mordor Intelligence" },
];

// Seasonal Sales Trend
export const seasonalTrendData: SeasonalTrend[] = [
  { month: "January", percentageOfAnnualSales: 5.2, source: "IDFA Seasonal Report" },
  { month: "February", percentageOfAnnualSales: 5.5, source: "IDFA Seasonal Report" },
  { month: "March", percentageOfAnnualSales: 6.8, source: "IDFA Seasonal Report" },
  { month: "April", percentageOfAnnualSales: 7.6, source: "IDFA Seasonal Report" },
  { month: "May", percentageOfAnnualSales: 10.2, source: "IDFA Seasonal Report" },
  { month: "June", percentageOfAnnualSales: 12.5, source: "IDFA Seasonal Report" },
  { month: "July", percentageOfAnnualSales: 14.8, source: "IDFA Seasonal Report" },
  { month: "August", percentageOfAnnualSales: 12.7, source: "IDFA Seasonal Report" },
  { month: "September", percentageOfAnnualSales: 8.3, source: "IDFA Seasonal Report" },
  { month: "October", percentageOfAnnualSales: 6.5, source: "IDFA Seasonal Report" },
  { month: "November", percentageOfAnnualSales: 4.8, source: "IDFA Seasonal Report" },
  { month: "December", percentageOfAnnualSales: 5.1, source: "IDFA Seasonal Report" },
];

export const getAllData = () => {
  return {
    marketSizeData,
    consumptionData,
    flavorPopularityData,
    priceData,
    stateConsumptionData,
    producerData,
    salesChannelData,
    seasonalTrendData,
    futureMarketProjections,
    italianGelatoData,
    gelatoVsIceCreamComparison
  };
};

export const getMarketSizeData = () => marketSizeData;
export const getConsumptionData = () => consumptionData;
export const getFlavorPopularityData = () => flavorPopularityData;
export const getPriceData = () => priceData;
export const getStateConsumptionData = () => stateConsumptionData;
export const getProducerData = () => producerData;
export const getSalesChannelData = () => salesChannelData;
export const getSeasonalTrendData = () => seasonalTrendData;

export const getFutureMarketProjections = () => futureMarketProjections;
export const getItalianGelatoData = () => italianGelatoData;
export const getGelatoVsIceCreamComparison = () => gelatoVsIceCreamComparison;
