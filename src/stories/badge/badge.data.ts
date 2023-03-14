interface IBadgeStyle {
  dark: string;
  white: string;
}

interface IBadgeSize {
  small: string;
  medium: string;
  big: string;
}

export interface IBadgeData {
  badgeSize: IBadgeSize;
  badgeStyle: IBadgeStyle;
}

export const badgeStyle: IBadgeStyle = {
  dark: 'bg-neutral-500 text-white',
  white: 'bg-white text-neutral-500',
};

const borderDefault: string = 'border-none rounded-[1px] px-[14px] py-[4px]';

const badgeSize: IBadgeSize = {
  small: `${borderDefault} `,
  medium: `${borderDefault} `,
  big: `${borderDefault} `,
};

export const badgeData = {
  badgeSize,
  badgeStyle,
};

// w-[88px] h-[26px]
