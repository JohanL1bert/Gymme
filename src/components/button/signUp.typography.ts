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
      textColor: 'neutral-500',
      borderColor: null,
      backgroundColor: null,
      ...paddingMedium,
    },
    border: {
      textColor: 'neutral-500',
      borderColor: 'neutral-500',
      backgroundColor: null,
      ...paddingMedium,
    },
    green: {
      textColor: 'neutral-100',
      borderColor: null,
      backgroundColor: 'primary-200',
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
  },
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type TSignUpBtnTypo = Nullable<typeof signUpTypography.medium.simple>;
