import React from 'react';
import { chooseCardStyle } from '../../helpers/chooseCardStyle';
import { ICardDetails, TCardKeys } from '../pricing/pricingCard.data';
import { TPricingCardTypography } from './pricingCard.typography';
import classNames from 'classnames';
import { ArrowBtn } from 'stories/arrowBtn/ArrowBtn';
import { ArrowBtnSmall } from 'stories/arrowBtn/ArrowBtn.stories';
import { SignUpOutlinedWithoutPadding } from 'stories/button/SignUp.stories';
import { SignUp } from 'stories/button/SignUp';

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
  const { priceStyle, usdStyle, monthStyle } = cardStyle.priceSection;

  const joinStyles = {
    ...SignUpOutlinedWithoutPadding.args,
    padding: 'large' as const,
    border: 'rounded' as const,
    text: 'Join Now',
  };

  const blackCardStyle =
    cardDetails.id === 2
      ? {
          bgcolor: 'bg-neutral-200',
          colorArr: 'before:bg-neutral-500 after:bg-neutral-500',
        }
      : undefined;

  return (
    <div
      className={classNames(
        `${cardStyle.sizeH} ${cardStyle.sizeW} ${cardStyle.color} ${cardStyle.marginX} iPad:h-full`
      )}
    >
      <div
        className={classNames(
          `flex iPad:flex-col iPad:gap-8 items-center iPad:px-24 iPad:py-20  
          mobile:flex-row mobile:gap-8 mobile:h-full mobile:justify-center mobile:py-[42px]
          mobileSmall:justify-center mobileSmall:gap-8 mobileSmall:py-10
          ${cardDetails.id === 3 ? 'iPad:py-[42px]' : null}`
        )}
      >
        <div className=" flex gap-8 iPad:items-center flex-col">
          <div
            className={classNames(
              upperBtnStyle,
              'flex items-start gap-[10px] px-[14px] py-[4px]'
            )}
          >
            {cardDetails.heading}
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className={priceStyle}>
                {cardDetails.price}
                <span className={usdStyle}>$</span>
              </div>
            </div>
            <div className={monthStyle}>/month</div>
          </div>
        </div>
        <div>
          <div
            className="iPad:flex iPad:flex-col iPad:items-center iPad:gap-8
          mobile:flex mobile:flex-col mobile:items-start mobile:gap-8
          mobileSmall:flex mobileSmall:flex-col mobileSmall:items-start mobileSmall:gap-8"
          >
            <ul className="flex flex-col mobile:gap-y-4 mobileSmall:gap-3">
              {cardDetails.services.map(({ features }, index) => (
                <li key={index} className="gap-y-4 gap-x-2 flex items-center">
                  <ArrowBtn
                    {...ArrowBtnSmall.args}
                    overrideStyle={blackCardStyle}
                  />
                  <span
                    className={classNames(
                      cardStyle.textColor,
                      'not-italic font-normal leading-[26px] text-esmo'
                    )}
                  >
                    {features}
                  </span>
                </li>
              ))}
            </ul>
            <SignUp {...joinStyles} />
          </div>
        </div>
      </div>
    </div>
  );
};
