import {
  ICardChooseDetails,
  TCardIndexSignature,
} from '../components/pricing/PricingCard';

export const chooseCardStyle = (
  styleCard: TCardIndexSignature,
  objectFromChoose: ICardChooseDetails
) => {
  const styleProperty = objectFromChoose[styleCard];
  return styleProperty ?? objectFromChoose.white;
};
