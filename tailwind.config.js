const enumColors = Object.freeze({
  primary100: '#A5FFCE',
  primary200: '#4AE290',
  primary300: '#25C870',
  neutral100: '#CFCFDE',
  neutral200: '#DEDEE3',
  neutral300: '#9797A1',
  neutral400: '#595962',
  neutral500: '#131316',
});

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'primary-100': enumColors.primary100,
      'primary-200': enumColors.primary200,
      'primary-300': enumColors.primary300,
      'neutral-500': enumColors.neutral500,
      'neutral-400': enumColors.neutral400,
      'neutral-300': enumColors.neutral300,
      'neutral-200': enumColors.neutral200,
      'neutral-100': enumColors.neutral100,
      white: '#FFFFFF',
      cardWhite: 'rgba(19, 19, 22, 0.05)',
      cardBlack: enumColors.neutral500,
      aqua: '#34ebeb',
      violet: '#9b34eb',
      pink: '#eb349b',
      yellow: '#ebdb34',
      faqBorder: 'rgba(19, 19, 22, 0.1)',
    },
    extend: {
      spacing: {
        SMALL: '16px',
        MEDIUM: '32px',
        LARGE: '80px',
        XLARGE: '180px',
      },
      backgroundImage: {
        aboutImg: 'url(assets/icons/Team_Icon.svg)',
        trainingImg: 'url(assets/icons/Calendar_Icon.svg)',
        priceImg: 'url(assets/icons/PriceTag_Icon.svg)',
        iconFaqMark: 'url(assets/icons/Vector.svg)',
        iconFaqDot: 'url(assets/icons/Vector1.svg)',
      },
    },
  },
  plugins: [],
};
