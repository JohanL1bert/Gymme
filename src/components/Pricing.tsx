import React from 'react';
import { PricingCard } from './pricing/PricingCard';
import { pricingCardTypography } from './pricing/pricingCard.typography';
import { pricingCardData } from './pricing/pricingCard.data';

export const Pricing = () => {
  return (
    <section>
      <div>
        <div className="relative h-[calc(theme(spacing.36)+6px)]">
          <div className="absolute h-[calc(theme(spacing.28)+8px)] w-[calc(theme(spacing.28)+9.5px)] left-0 bg-priceImg bg-cover bg-no-repeat" />
          <h2 className="H2 absolute left-[calc(theme(spacing.16)+6px)] top-9">
            Pricing plan
            <span className="text-primary-200">.</span>
            <span />
          </h2>
        </div>
        <div>
          {pricingCardData.map((item) => (
            <PricingCard
              key={item.id}
              cardStylish={pricingCardTypography}
              cardDetails={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
