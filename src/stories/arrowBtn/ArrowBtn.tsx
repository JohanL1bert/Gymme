import React from 'react';
import { arrowBtnData } from './arrowBtnData';
import classnames from 'classnames';

interface IArrowBtn {
  size?: 'big' | 'small';
  direction?: 'up' | 'down' | 'left' | 'right';
  children?: React.ReactNode;
  handleClick?: () => void;
  isOpen?: boolean;
}

const { arrowBtnDirection, arrowBtnSize } = arrowBtnData;

export const ArrowBtn: React.FC<IArrowBtn> = ({
  size = 'small',
  direction = 'up',
  handleClick,
  isOpen,
}) => {
  const directArrow = () => {
    if (isOpen === undefined) return null;
    if (isOpen) return arrowBtnDirection[direction];
    return arrowBtnDirection.down;
  };

  return (
    <div
      onClick={handleClick}
      className={classnames(
        arrowBtnSize[size],
        directArrow(),
        'bg-neutral-500 rounded-full relative'
      )}
    >
      <span className="arrow_btn" />
    </div>
  );
};
