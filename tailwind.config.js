module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'primary-100': '#A5FFCE',
      'primary-200': '#4AE290',
      'primary-300': '#25C870',
      'neutral-500': '#131316',
      'neutral-400': '#595962',
      'neutral-300': '#9797A1',
      'neutral-200': '#DEDEE3',
      'neutral-100': '#CFCFDE',
      white: '#FFFFF',
      cardWhite: 'rgba(19, 19, 22, 0.05)',
      cardBlack: 'neutral-500',
    },
    extend: {
      spacing: {
        SMALL: '16px',
        MEDIUM: '32px',
        LARGE: '80px',
        XLARGE: '180px',
      },
    },
  },
  plugins: [],
};
