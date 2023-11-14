/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import { signUpButtonData } from './signUp.data';

interface IBtnStyles {
  text?: string;
  bgColor?: string | undefined;
  backgroundColor?: any;
  padding?: 'medium' | 'large' | 'small' | 'none';
  textColor?: 'white' | 'black';
  border?: 'none' | 'rounded';
  fontStyle?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  fontSize?: 'esm' | 'esmo' | 'sm' | 'base' | 'lg' | 'xl';
  lHeightValue?: 'lHSmall';
  children?: React.ReactNode;
}
const { btnPadding, btnBorder, textCol, btnCol, fStyle, fSize, lHeight } =
  signUpButtonData;

export const SignUp: React.FC<IBtnStyles> = ({
  text = 'button',
  bgColor,
  padding = 'none',
  border = 'none',
  textColor = 'black',
  fontStyle = 'H1',
  fontSize = 'sm',
  lHeightValue = 'lHSmall',
  ...props
}: IBtnStyles) => {
  return (
    <button
      className={classnames(
        btnBorder[border],
        btnCol[bgColor as keyof typeof btnCol],
        'h-full'
      )}
    >
      <div
        className={classnames(
          textCol[textColor],
          btnPadding[padding],
          fStyle[fontStyle],
          fSize[fontSize],
          lHeight[lHeightValue],
          'my-auto uppercase'
        )}
      >
        {text}
      </div>
    </button>
  );
};
