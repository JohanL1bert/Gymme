/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import { signUpButtonData } from './signUp.data';
import { getValueFromKeysObject } from 'helpers/getValueFromKeysObject';

interface IBtnStyles {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  bgColor?: string | undefined;
  backgroundColor?: any;
  padding?: 'medium' | 'large' | 'small';
  textColor?: 'white' | 'black';
  border?: 'none' | 'rounded';
  fontStyle?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  fontSize?: 'esm' | 'sm' | 'base' | 'lg' | 'xl';
  lHeightValue?: 'lHSmall';
  children?: React.ReactNode;
}
const { btnPadding, btnBorder, textCol, btnCol, fStyle, fSize, lHeight } =
  signUpButtonData;

export const SignUp: React.FC<IBtnStyles> = ({
  size = 'medium',
  text = 'button',
  bgColor,
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
        textCol[textColor],
        btnCol[bgColor as keyof typeof btnCol],
        'h-full'
      )}
    >
      <div
        className={classnames(
          btnPadding[size],
          fStyle[fontStyle],
          fSize[fontSize],
          lHeight[lHeightValue],
          'my-auto'
        )}
      >
        {text.toUpperCase()}
      </div>
    </button>
  );
};
