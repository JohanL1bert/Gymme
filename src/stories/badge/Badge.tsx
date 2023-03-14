import React from 'react';
import classNames from 'classnames';
import { badgeData } from './badge.data';
import { getValueFromKeysObject } from 'helpers/getValueFromKeysObject';

export type TBadge = {
  visualBtn?: 'dark' | 'white';
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'big';
  children?: React.ReactNode;
  onClick?: () => void;
};

const { badgeSize, badgeStyle } = badgeData;

export const Badge = ({
  visualBtn = 'dark',
  label = 'premium',
  size = 'medium',
  type = 'button',
  onClick,
  ...props
}: TBadge) => {
  getValueFromKeysObject([visualBtn, size], badgeData);

  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={classNames(badgeSize[size], badgeStyle[visualBtn])}
      >
        {label}
      </button>
    </div>
  );
};
