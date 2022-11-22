import React from 'react';
import { PricingCard } from './pricing/PricingCard';
import { pricingCardTypography } from './pricing/pricingCard.typography';
import { pricingCardData } from './pricing/pricingCard.data';

export const Pricing = () => {
  return (
    <section>
      <div>
        <div>
          <img src="" alt="" />
          <h3>
            Pricing plan
            <span>dots</span>
          </h3>
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
