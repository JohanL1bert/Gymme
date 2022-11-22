export type TCardKeys = 'black' | 'white';

export interface ICardDetails {
  heading: string;
  id: number;
  price: string;
  services: Array<{ features: string }>;
  styleCard: TCardKeys;
}

export const pricingCardData: Array<ICardDetails> = [
  {
    id: 1,
    heading: 'Basic',
    price: '20',
    styleCard: 'white',
    services: [
      { features: 'unlimited gym access' },
      { features: '1 training programs' },
      { features: 'free fitness consultation' },
    ],
  },
  {
    id: 2,
    heading: 'Premium',
    price: '35',
    styleCard: 'black',
    services: [
      { features: 'unlimited gym access' },
      { features: '5 training progrmas' },
      { features: 'free fitness consultation' },
      {
        features: 'personal trainer',
      },
    ],
  },
  {
    id: 3,
    heading: 'Elite',
    price: '49',
    styleCard: 'white',
    services: [
      { features: 'unlimited gym access' },
      { features: 'all training programs' },
      { features: 'free fitness consultation' },
      { features: 'personal trainer' },
      { features: '50% off drinks' },
    ],
  },
];
