import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/icons/Logo.svg';

export const Logo = () => {
  return (
    <div className="flex w-[calc(theme(spacing.20)+45px)] h-6 justify-center items-center bg-[transparent] ">
      <LogoSvg />
    </div>
  );
};
