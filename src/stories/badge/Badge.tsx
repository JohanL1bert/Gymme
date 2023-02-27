import React from 'react';
import classNames from 'classnames';
import { badgeTypography } from './badge.typography';

type TBadge = {
  visualBtn: 'dark' | 'white';
  label: string;
  type: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: () => void;
};

export const Badge = ({
  visualBtn = 'dark',
  label = '',
  type = 'button',
}: TBadge) => {
  return (
    <div>
      <button
        type={type}
        className={classNames(
          'border-none w-[88px] h-[26px] rounded-[1px]',
          badgeTypography[visualBtn]
        )}
      >
        {label}
      </button>
    </div>
  );
};
