const btnPadding = {
  none: 'py-[17px]',
  small: 'px-3 py-2',
  medium: 'px-[calc(theme(spacing.8)-theme(spacing[0.5]))] py-3',
  large: 'px-10 py-3.5',
} as const;

const btnCol = {
  white: 'bg-white',
  green: 'bg-primary-200',
  aqua: 'bg-aqua',
  violet: 'bg-violet',
  pink: 'bg-pink',
  yellow: 'bg-yellow',
  transparent: 'bg-transparent',
} as const;

const btnBorder = {
  none: 'border-none',
  rounded: 'border-[1px] rounded-[1px]',
} as const;

const textCol = {
  white: 'text-white',
  black: 'text-neutral-500',
} as const;

const fStyle = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6',
} as const;

const fSize = {
  esm: 'text-esm',
  esmo: 'text-esmo',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
} as const;

const lHeight = {
  lHSmall: 'leading-[18px]',
} as const;

export const signUpButtonData = {
  btnPadding,
  btnBorder,
  textCol,
  btnCol,
  fStyle,
  fSize,
  lHeight,
};
