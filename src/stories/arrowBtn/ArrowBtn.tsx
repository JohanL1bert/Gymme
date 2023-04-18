import React from 'react';
import { arrowBtnData } from './arrowBtnData';
import classnames from 'classnames';

interface IArrowBtn {
  size?: 'big' | 'small';
  direction?: 'up' | 'down' | 'left' | 'right';
  children?: React.ReactNode;
  handleClick?: () => void;
}

const { arrowBtnDirection, arrowBtnSize } = arrowBtnData;

export const ArrowBtn: React.FC<IArrowBtn> = ({
  size = 'small',
  direction = 'up',
  handleClick,
}) => {
  return (
    <div
      onClick={handleClick}
      className={classnames(
        arrowBtnSize[size],
        arrowBtnDirection[direction],

        'bg-neutral-500 rounded-full relative cursor-pointer'
      )}
    >
      <span className="arrow_btn" />
    </div>
  );
};
