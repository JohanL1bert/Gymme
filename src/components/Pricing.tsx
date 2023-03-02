import React from 'react';
import { PricingCard } from './pricing/PricingCard';
import { pricingCardTypography } from './pricing/pricingCard.typography';
import { pricingCardData } from './pricing/pricingCard.data';

export const Pricing = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="w-[calc(theme(spacing.96)+theme(spacing.96)+theme(spacing.96)+theme(spacing.32))] h-[calc(theme(spacing.96)+theme(spacing.80)+51px)]">
          <div className="flex flex-col items-center">
            <div className="relative h-[calc(theme(spacing.36)+6px)] w-[calc(theme(spacing.96)-5px)] mb-20">
              <div className="absolute h-[calc(theme(spacing.28)+8px)] w-[calc(theme(spacing.28)+9.5px)] left-0 bg-priceImg bg-cover bg-no-repeat" />
              <h2 className="H2 absolute left-[calc(theme(spacing.16)+6px)] top-9">
                Pricing plan
                <span className="text-primary-200">.</span>
                <span />
              </h2>
            </div>
            <div className="flex">
              {pricingCardData.map((item) => (
                <PricingCard
                  key={item.id}
                  cardStylish={pricingCardTypography}
                  cardDetails={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
