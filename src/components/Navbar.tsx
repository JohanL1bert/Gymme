import React from 'react';
import { SignUp } from './button/SignUp';
import { signUpTypography } from './button/signUp.typography';
import { Logo } from './logo/Logo';

export const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center h-20">
      <Logo />
      <ul className="flex w-[calc(theme(spacing.96)+theme(spacing.36))] justify-between h-5 items-center">
        <li className="hover_navbar">
          <a href="#">Home</a>
        </li>
        <li className="hover_navbar">
          <a href="#">About</a>
        </li>
        <li className="hover_navbar">
          <a href="#">Workouts</a>
        </li>
        <li className="hover_navbar">
          <a href="">Pricing</a>
        </li>
        <li className="hover_navbar">
          <a href="">Community</a>
        </li>
        <li className="hover_navbar">
          <a href="">FAQ</a>
        </li>
      </ul>
      <div>
        <button className="">
          <div className="uppercase py-3 px-7">Log in</div>
        </button>
        <SignUp btnStyle={signUpTypography.medium.green} />
      </div>
    </div>
  );
};
