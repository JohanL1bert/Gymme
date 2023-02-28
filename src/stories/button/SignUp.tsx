/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import { TVisualBtn } from './SignUp.stories';
import { buttonData } from './signUp.typography';

interface IBtnStyles {
  /*   visualBtn: TVisualBtn; */
  size: 'medium' | 'large';
  text?: string;
  bgColor: string;
  textColor: 'white' | 'black';
  border: 'none' | 'rounded';
  children?: React.ReactNode;
}

const { btnSize, btnBorder, textCol, btnCol } = buttonData;

export const SignUp = ({
  size = 'medium',
  text = 'button',
  bgColor,
  border = 'none',
  textColor = 'black',
  ...props
}: IBtnStyles) => {
  return (
    <button
      className={classnames(
        btnBorder[border],
        textCol[textColor],
        btnCol[bgColor as keyof typeof btnCol]
      )}
    >
      <div className={classnames(btnSize[size])}>{text.toUpperCase()}</div>
    </button>
  );
};
