/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import { signUpButtonData } from './signUp.data';
import { getValueFromKeysObject } from 'helpers/getValueFromKeysObject';

interface IBtnStyles {
  size?: 'medium' | 'large';
  text?: string;
  bgColor?: string | undefined;
  backgroundColor?: any;
  padding?: 'medium' | 'large';
  textColor?: 'white' | 'black';
  border?: 'none' | 'rounded';
  children?: React.ReactNode;
}
const { btnPadding, btnBorder, textCol, btnCol } = signUpButtonData;

export const SignUp: React.FC<IBtnStyles> = ({
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
      <div className={classnames(btnPadding[size])}>{text.toUpperCase()}</div>
    </button>
  );
};
