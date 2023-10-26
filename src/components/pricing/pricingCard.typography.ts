const priceCardDefaultStyle = 'H5 leading-[50px] not-italic text-center';
const priceDefaultStyle = `${priceCardDefaultStyle} text-[50px]`;
const usdDefaultStyle = `${priceCardDefaultStyle} text-[30px]`;
const monthDefaultStyle = 'H2 text-[14px] not-italic font-medium leading-6';

const whiteUpperFont = {
  font: 'H5 font-semibold text-esmo non-italic leading-[18px] text-center text-neutral-100',
  bgAndBorder: 'rounded-[1px] bg-neutral-500 py-1 px-3.5',
};

const blackUpperFont = {
  font: 'H5 font-semibold text-esmo non-italic leading-[18px] text-center text-neutral-500',
  bgAndBorder: 'rounded-[1px] bg-neutral-100 py-1 px-3.5',
};

export const pricingCardTypography = {
  white: {
    color: 'bg-cardWhite',
    sizeW:
      'iPad:w-[calc(theme(spacing.96)+21px)] mobile:w-full mobileSmall:w-full',
    sizeH: '',
    paddingX: '',
    marginX: 'iPad:mx-0 mobile:mx-12 mobileSmall:mx-5',
    paddingY: '21px',
    arrowColor: 'bg-white',
    joinBtnBackgroundColor: 'bg-cardWhite',
    joinBtnBorderColor: '',
    textColor: 'text-cardBlack',
    upperBtnStyle: {
      ...whiteUpperFont,
    },
    priceSection: {
      priceStyle: `${priceDefaultStyle} text-cardBlack`,
      usdStyle: `${usdDefaultStyle} text-cardBlack`,
      monthStyle: `${monthDefaultStyle} text-neutral-400`,
    },
  },
  black: {
    color: 'bg-cardBlack',
    sizeW:
      'iPad:w-[calc(theme(spacing.96)+21px)] mobile:w-full mobileSmall:w-full',
    sizeH: '',
    paddingX: '',
    marginX: 'iPad:mx-0 mobile:mx-12 mobileSmall:mx-5',
    paddingY: '21px',
    arrowColor: 'bg-cardBlack',
    joinBtnBackgroundColor: 'bg-white',
    joinBtnBorderColor: '',
    textColor: 'text-white',
    upperBtnStyle: {
      ...blackUpperFont,
    },
    priceSection: {
      priceStyle: `${priceDefaultStyle} text-white`,
      usdStyle: `${usdDefaultStyle} text-white`,
      monthStyle: `${monthDefaultStyle} text-neutral-200`,
    },
  },
};

export type TPricingCardTypography = typeof pricingCardTypography;
