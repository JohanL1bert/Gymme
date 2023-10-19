import React from 'react';
import { arrowBtnData } from './arrowBtnData';
import classnames from 'classnames';

interface IArrowBtn {
  size?: 'big' | 'small';
  direction?: 'up' | 'down' | 'left' | 'right';
  children?: React.ReactNode;
  handleClick?: () => void;
  overrideStyle?: { bgcolor: string; colorArr: string };
  props?: any;
}

const { arrowBtnDirection, arrowBtnSize } = arrowBtnData;

export const ArrowBtn: React.FC<IArrowBtn> = ({
  size = 'small',
  direction = 'up',
  handleClick,
  overrideStyle,
  ...props
}) => {
  return (
    <div
      onClick={handleClick}
      className={classnames(
        arrowBtnSize[size],
        arrowBtnDirection[direction],
        'bg-neutral-500 rounded-full relative cursor-pointer',
        overrideStyle?.bgcolor,
        ...Object.values(props)
      )}
    >
      <span className={classnames('arrow_btn', overrideStyle?.colorArr)} />
    </div>
  );
};
