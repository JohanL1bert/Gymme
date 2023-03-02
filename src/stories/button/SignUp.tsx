/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import { buttonData } from './signUp.data';

interface IBtnStyles {
  size: 'medium' | 'large';
  text?: string;
  bgColor: string | undefined;
  backgroundColor?: any;
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
  console.log(bgColor, 'bgColor');
  return (
    <button
      className={classnames(
        btnBorder[border],
        textCol[textColor],
        /*  btnCol[bgColor as keyof typeof btnCol] */
        bgColor
      )}
      style={
        (bgColor as any) && {
          backgroundColor: bgColor,
        }
      }
    >
      <div className={classnames(btnSize[size])}>{text.toUpperCase()}</div>
    </button>
  );
};
