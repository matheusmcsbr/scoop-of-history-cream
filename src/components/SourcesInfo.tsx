
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SourcesInfo = () => {
  const sources = [
    {
      name: "IDFA (International Dairy Foods Association)",
      description: "Trade organization representing dairy manufacturing companies and their suppliers.",
      website: "https://www.idfa.org/"
    },
    {
      name: "USDA Economic Research Service",
      description: "Research arm of the U.S. Department of Agriculture providing economic data on food production and consumption.",
      website: "https://www.ers.usda.gov/"
    },
    {
      name: "Bureau of Labor Statistics",
      description: "U.S. government agency that collects and processes labor and economic data including consumer prices.",
      website: "https://www.bls.gov/"
    },
    {
      name: "Statista Research",
      description: "Global business data platform specializing in market and consumer data.",
      website: "https://www.statista.com/"
    },
    {
      name: "Grand View Research",
      description: "Market research and consulting company providing industry analysis and market insights.",
      website: "https://www.grandviewresearch.com/"
    },
    {
      name: "Mintel Market Research",
      description: "Global market intelligence agency providing market research, product intelligence, and competitive intelligence.",
      website: "https://www.mintel.com/"
    },
    {
      name: "Market Research Future",
      description: "Market research firm providing reports and insights on various industries.",
      website: "https://www.marketresearchfuture.com/"
    },
    {
      name: "YouGov Survey",
      description: "International research data and analytics group providing public opinion and consumer insights.",
      website: "https://yougov.com/"
    },
    {
      name: "Mordor Intelligence",
      description: "Market research firm that provides industry reports and advisory services.",
      website: "https://www.mordorintelligence.com/"
    }
  ];

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Data Sources Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {sources.map((source, index) => (
            <AccordionItem key={index} value={`source-${index}`}>
              <AccordionTrigger className="text-left">{source.name}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-2">{source.description}</p>
                <a 
                  href={source.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Visit website
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>Note: This dataset has been compiled for educational and illustrative purposes only.</p>
          <p>Data points are collected from publicly available reports, articles, and research papers. Some values may be approximated or interpolated where exact data was unavailable.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesInfo;
