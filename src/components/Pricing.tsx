import React from 'react';
import { PricingCard } from './pricing/PricingCard';
import { pricingCardTypography } from './pricing/pricingCard.typography';
import { pricingCardData } from './pricing/pricingCard.data';

export const Pricing = () => {
  return (
    <section>
      <div className="flex justify-center items-center h-full margin_top_section">
        <div className="w-[calc(theme(spacing.96)+theme(spacing.96)+theme(spacing.96)+theme(spacing.32))] h-full">
          <div className="flex flex-col mobile:items-center mobileSmall:items-start">
            <div
              className="relative mobile:h-[calc(theme(spacing.28)+8px)] mobile:w-[calc(theme(spacing.96)-5px)] mobile:mb-20 mobile:ml-0
            mobileSmall:mb-[calc(theme(spacing.16)+6px)] mobileSmall:ml-5 mobileSmall:h-20 mobileSmall:w-[calc(theme(spacing.64)-6px)]"
            >
              <div
                className="absolute mobile:h-[calc(theme(spacing.28)+8px)] mobile:w-[calc(theme(spacing.28)+9.5px)] left-0 bg-priceImg bg-cover bg-no-repeat
              mobileSmall:w-20 mobileSmall:h-20"
              />
              <h2
                className="mobile:H2 absolute mobile:left-[calc(theme(spacing.16)+6px)] mobile:top-9
                mobileSmall:H2 mobileSmall:left-[calc(theme(spacing.12)-6px)] mobileSmall:text-[32px] mobileSmall:leading-10
                mobileSmall:top-5"
              >
                Pricing plan
                <span className="text-primary-200">.</span>
                <span />
              </h2>
            </div>
            <div className="flex gap-8 flex-wrap justify-center w-full iPad:items-center">
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
