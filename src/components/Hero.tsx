import React from 'react';
import HeroImg from '../assets/image/Hero.png';
import { SignUp } from '../stories/button/SignUp';
import { SignUpOutlined } from 'stories/button/SignUp.stories';

export const Hero = () => {
  const btnJoin = { ...SignUpOutlined.args, text: 'Join Now' };

  return (
    <section>
      <div className="h-[calc(theme(spacing.96)+theme(spacing.96)-36px)] bg-neutral-500 flex justify-center items-center">
        <div className="h-[364px] max-w-[527px] w-full relative z-10 translate-x-20 gap-y-8 flex flex-col">
          <div className="">
            <h1 className="H1 text-neutral-100 text-start ">
              Get the best part of your day
              <br />
              <span className="text-primary-200">-you fit here.</span>
            </h1>
          </div>
          <div className="body_medium text-neutral-100 text-start max-w-[415px] w-full">
            We provide serious fitness but within a fun and friendly, safe
            space.
          </div>
          <div className="max-h-[46px] h-full w-[159px] mr-0">
            <SignUp {...btnJoin} />
          </div>
        </div>
        <div className="">
          <img
            src={HeroImg}
            alt="image of Heading page"
            className="-translate-y-24 max-w-[581px] w-full h-[790px]"
          />
        </div>
      </div>
    </section>
  );
};
