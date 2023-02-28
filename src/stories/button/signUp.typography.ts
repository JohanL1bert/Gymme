const paddingMedium = {
  paddingX: '30px',
  paddingY: '12px',
};

const paddingLarge = {
  paddingX: '40px',
  paddingY: '14px',
};

export const signUpTypography = {
  medium: {
    simple: {
      textColor: 'text-neutral-500',
      borderColor: null,
      backgroundColor: null,
      ...paddingMedium,
    },
    border: {
      textColor: 'text-neutral-500',
      borderColor: 'neutral-500',
      backgroundColor: null,
      ...paddingMedium,
    },
    green: {
      textColor: 'text-neutral-100',
      borderColor: null,
      backgroundColor: 'primary-200',
      ...paddingMedium,
    },
    cat: {
      textColor: 'text-neutral-500',
      borderColor: 'neutral-100',
      backgroundColor: 'neutral-100',
      ...paddingMedium,
    },
  },
  large: {
    simple: {
      textColor: 'neutral-500',
      borderColor: null,
      backgroundColor: null,
      ...paddingLarge,
    },
    border: {
      textColor: 'neutral-500',
      borderColor: 'neutral-500',
      backgroundColor: null,
      ...paddingLarge,
    },
    green: {
      textColor: 'neutral-100',
      borderColor: null,
      backgroundColor: 'primary-200',
      ...paddingLarge,
    },
    white: {
      textColor: 'text-neutral-500',
      borderColor: null,
      backgroundColor: 'bg-neutral-100',
      ...paddingLarge,
    },
  },
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type TSignUpBtnTypo = Nullable<typeof signUpTypography.medium.simple>;

const btnSize = {
  medium: 'px-[30px] py-[12px]',
  large: 'px-[40px] py-[14px]',
};

const btnCol = {
  white: 'bg-white',
  green: 'bg-primary-200',
  aqua: 'bg-aqua',
  violet: 'bg-violet',
  pink: 'bg-pink',
  yellow: 'bg-yellow',
};

const btnBorder = {
  none: 'border-none',
  rounded: 'border-[1px] rounded-[1px]',
};

const textCol = {
  white: 'text-white',
  black: 'text-neutral-500',
};

export const buttonData = {
  btnSize,
  btnBorder,
  textCol,
  btnCol,
};
