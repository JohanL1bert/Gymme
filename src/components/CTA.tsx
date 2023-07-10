import React from 'react';
import CTAImg from '../assets/image/CTA.png';
import { SignUp } from '../stories/button/SignUp';
import { SignUpOutlined } from 'stories/button/SignUp.stories';

export const CTA = () => {
  const btnJoin = { ...SignUpOutlined.args, text: 'Join Now' };

  return (
    <section>
      <div className="max-h-[calc(theme(spacing.96)+theme(spacing.40)-7px)] h-full bg-neutral-500 flex justify-center items-center">
        <div className="h-full ">
          <img
            src={CTAImg}
            alt="image of CTA"
            className="max-h-[618px] h-full -translate-y-10 max-w-[500px]"
          />
        </div>
        <div className="max-h-[290px] h-full max-w-[492px] w-full flex flex-col -translate-x-12 items-start">
          <div>
            <h3 className="H1 text-neutral-100 text-start">
              Wanna join
              <span className="text-primary-200"> & </span>
              have fun?
            </h3>
          </div>
          <div className="body_medium text-neutral-100 text-start mt-6 mb-8">
            We’ll keep you updated on the things you need to know about Gymme.
            Nothing more, nothing less.
          </div>
          <SignUp {...btnJoin} />
        </div>
      </div>
    </section>
  );
};
