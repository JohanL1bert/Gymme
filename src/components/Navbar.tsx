import React from 'react';
import { SignUp } from '../stories/button/SignUp';
import { Logo } from './logo/Logo';
import { SignUpPrimary } from 'stories/button/SignUp.stories';

const navBarText = ['Home', 'About', 'Workouts', 'Pricing', 'Community', 'FAQ'];

export const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center h-20 bg-neutral-500">
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
      <div className="relative z-10">
        <button className="">
          <div className="uppercase py-3 px-7">Log in</div>
        </button>
        <SignUp {...SignUpPrimary.args} />
      </div>
    </nav>
  );
};
