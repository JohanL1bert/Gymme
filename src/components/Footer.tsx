import React from 'react';
import { Logo } from './logo/Logo';

export const Footer = () => {
  return (
    <footer>
      <div className="h-[calc(theme(spacing.48)+3px)] bg-neutral-500 flex items-center justify-evenly">
        <Logo />
        <div className="text-neutral-300 h-[calc(theme(spacing.4)+2px)] footer_text">
          All rights reserved. Gymme
          <span className="text-neutral-300 "> 2021.</span>
        </div>
      </div>
    </footer>
  );
};
