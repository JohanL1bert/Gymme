import React from 'react';
import { chooseCardStyle } from '../../helpers/chooseCardStyle';
import { ICardDetails, TCardKeys } from '../pricing/pricingCard.data';
import { TPricingCardTypography } from './pricingCard.typography';
import classNames from 'classnames';

export interface ICardChooseDetails extends TPricingCardTypography {}
export type TCardIndexSignature = TCardKeys;

export const PricingCard = ({
  cardStylish,
  cardDetails,
}: {
  cardStylish: TPricingCardTypography;
  cardDetails: ICardDetails;
}) => {
  const cardStyle = chooseCardStyle(cardDetails.styleCard, cardStylish);

  const upperBtnStyle = Object.values({ ...cardStyle.upperBtnStyle });
  const { priceColor, usdColor, monthColor } = cardStyle.priceSection;

  return (
    <div className={`${cardStyle.sizeH} ${cardStyle.sizeW} ${cardStyle.color}`}>
      <div className="flex flex-col items-center px-24">
        <div className={classNames(upperBtnStyle, 'rounded text-center')}>
          {cardDetails.heading}
        </div>
        <div>
          <div className="flex flex-col items-center">
            <div className={priceColor}>
              {cardDetails.price}
              <span className={usdColor}>$</span>
            </div>
          </div>
          <div className={monthColor}>/month</div>
        </div>
        <ul className="flex flex-col gap-y-4">
          {cardDetails.services.map((item, index) => (
            <li key={index}>
              <span className="w-[20px] h-[20px] rounded-full">
                <span className="" />
              </span>
              <span className={cardStyle.textColor}>{item.features}</span>
            </li>
          ))}
        </ul>
        <button className="">join now</button>
      </div>
    </div>
  );
};
