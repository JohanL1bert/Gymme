import React from 'react';
import { SignUp } from '../stories/button/SignUp';
import { Logo } from './logo/Logo';
import { SignUpPrimary, LogInSmall } from 'stories/button/SignUp.stories';

const navBarText = ['Home', 'About', 'Workouts', 'Pricing', 'Community', 'FAQ'];

export const Navbar = () => {
  return (
    <div className="bg-neutral-500 w-full h-[82px]">
      <div className="px-[theme(spacing.20)] py-5 w-full h-full flex">
        <nav className="flex justify-between w-full max-w-[1980px] items-center h-[calc(theme(spacing.10)+2px)]  shrink-0">
          <Logo />
          <ul className="flex w-[calc(theme(spacing.96)+theme(spacing.36))] justify-between h-5 items-center relative z-10">
            {navBarText.map((nav, index) => (
              <li key={index} className="hover_navbar">
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
