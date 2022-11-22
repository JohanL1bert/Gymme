import React from 'react';
import { chooseCardStyle } from '../../helpers/chooseCardStyle';
import { ICardDetails, TCardKeys } from '../pricing/pricingCard.data';

interface ICardColorSize {
  color: string;
  sizeW: string;
  sizeH: string;
}

type TCardStylish = {
  // eslint-disable-next-line no-unused-vars
  [key in TCardKeys]: ICardColorSize;
};

export interface ICardChooseDetails extends TCardStylish {}
export type TCardIndexSignature = TCardKeys;

export const PricingCard = ({
  cardStylish,
  cardDetails,
}: {
  cardStylish: TCardStylish;
  cardDetails: ICardDetails;
}) => {
  chooseCardStyle(cardDetails.styleCard, cardStylish);

  return (
    <div>
      <div>{cardDetails.heading}</div>
      <div>
        <div>
          <div>{cardDetails.price}</div>
          <div>$</div>
        </div>
        <div>/month</div>
      </div>
      <ul>
        {cardDetails.services.map((item, index) => (
          <li key={index}>{item.features}</li>
        ))}
      </ul>
      <button>join now</button>
    </div>
  );
};
