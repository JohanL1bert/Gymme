import React from 'react';
import CTAImg from '../assets/image/CTA.png';
import { SignUp } from '../components/button/SignUp';
import { signUpTypography } from './button/signUp.typography';

const btnStyle = { ...signUpTypography.medium.cat, textInside: 'Join Now' };

export const CTA = () => {
  return (
    <section>
      <div className="h-[calc(theme(spacing.96)+theme(spacing.40)-7px)] bg-neutral-500 flex justify-center items-center">
        <div className="">
          <img
            src={CTAImg}
            alt="image of CTA"
            className="h-[618px] w-[500px]  -translate-y-10"
          />
        </div>
        <div className="h-[290px] w-[492px] flex flex-col flex-start -translate-x-12">
          <div>
            <h3 className="H1 text-neutral-100 text-start">
              Wanna join
              <span className="text-primary-200"> & </span>
              have fun?
            </h3>
          </div>
          <div className="body_medium text-neutral-100 text-start mt-6">
            We’ll keep you updated on the things you need to know about Gymme.
            Nothing more, nothing less.
          </div>
          <SignUp btnStyle={btnStyle} />
        </div>
      </div>
    </section>
  );
};
