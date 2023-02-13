import React from 'react';
import HeroImg from '../assets/image/Hero.png';
import { SignUp } from './button/SignUp';
import { signUpTypography } from './button/signUp.typography';

const btnStyle = { ...signUpTypography.medium.cat, textInside: 'Join Now' };

export const Hero = () => {
  return (
    <section>
      <div className="h-[calc(theme(spacing.96)+theme(spacing.96)-36px)] bg-neutral-500 flex justify-center items-center">
        <div className="h-[286px] w-[527px] relative z-10 translate-x-20">
          <div className="">
            <h1 className="H1 text-neutral-100 text-start ">
              Get the best part of your day
              <br />
              <span className="text-primary-200">-you fit here.</span>
            </h1>
          </div>
          <div className="body_medium text-neutral-100 text-start mt-8 w-[415px]">
            We provide serious fitness but within a fun and friendly, safe
            space.
          </div>
          <SignUp btnStyle={btnStyle} />
        </div>
        <div>
          <img
            src={HeroImg}
            alt="image of Heading page"
            className="-translate-y-24 w-[581px] h-[790px]"
          />
        </div>
      </div>
    </section>
  );
};
