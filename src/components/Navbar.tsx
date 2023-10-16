import React from 'react';
import { SignUp } from '../stories/button/SignUp';
import { Logo } from './logo/Logo';
import { SignUpPrimary, LogInSmall } from 'stories/button/SignUp.stories';
import { navBarText } from 'helpers/navBarInfo';

export const Navbar = () => {
  return (
    <div className="bg-neutral-500 w-full h-[82px]">
      <div className="px-[theme(spacing.20)] py-5 w-full h-full flex">
        <nav className="flex justify-between w-full max-w-[1980px] items-center h-[calc(theme(spacing.10)+2px)]  shrink-0">
          <Logo />

          <div className="iPad:hidden">
            <div className="w-[30px] h-[3px] mt-[5px] bg-white transition-all ease-in-out duration-300" />
            <div className="w-[30px] h-[3px] mt-[5px] bg-white transition-all ease-in-out duration-300" />
            <div className="w-[30px] h-[3px] mt-[5px] bg-white transition-all ease-in-out duration-300" />
          </div>

          <ul className="flex w-[calc(theme(spacing.96)+theme(spacing.36))] justify-between h-5 items-center relative z-10">
            {navBarText.map(({ nav, id }) => (
              <li key={id} className="hover_navbar">
                <a href="#" className="navbar_link">
                  {nav}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative z-10 flex items-start h-[48px] w-[188px] gap-[theme(spacing.4)]">
            <SignUp {...LogInSmall.args} />
            <SignUp {...SignUpPrimary.args} />
          </div>
        </nav>
      </div>
    </div>
  );
};
