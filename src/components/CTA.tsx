import React from 'react';
import CTAImg from '../assets/image/CTA.png';
import { SignUp } from '../stories/button/SignUp';
import { SignUpOutlined } from 'stories/button/SignUp.stories';

export const CTA = () => {
  const btnJoin = { ...SignUpOutlined.args, text: 'Join Now' };

  // first div height iPad:max-h-[calc(theme(spacing.96)+theme(spacing.40)-7px)]
  return (
    <section>
      <div className=" h-full bg-neutral-500 flex iPad:justify-center iPad:items-center iPad:flex-row mobile:flex-col">
        <div className="h-full ">
          <img
            src={CTAImg}
            alt="image of CTA"
            className="max-h-[618px] h-full -translate-y-10 iPad:max-w-[500px] mobile:max-w-[calc(100%-276px)] mobile:min-w-[276px]"
          />
        </div>
        <div
          className="iPad:max-h-[290px] iPad:h-full iPad:max-w-[492px] iPad:ml-0 w-full iPad:gap-0 iPad:mb-0 flex flex-col iPad:-translate-x-12 items-start
        mobile:translate-x-0 mobile:max-h-[236px] mobile:max-w-[calc(100%-348px)] mobile:min-w-[348px] mobile:gap-4
        mobile:ml-[30px] mobile:mb-[50px] mobile:-translate-y-20"
        >
          <div>
            <h3
              className="iPad:H1 iPad:text-neutral-100 iPad:text-start mobileSmall:text-neutral-100 mobileSmall:text-start
            mobileSmall:text-[40px] mobileSmall:leading-[40px]"
            >
              Wanna join
              <span className="text-primary-200"> & </span>
              have fun?
            </h3>
          </div>
          <div
            className="iPad:body_medium  iPad:text-neutral-100 iPad:text-start iPad:mt-6 iPad:mb-8
           mobileSmall:body_small mobileSmall:text-neutral-100  mobileSmall:text-start mobileSmall:mb-0 mobileSmall:mt-0"
          >
            We’ll keep you updated on the things you need to know about Gymme.
            Nothing more, nothing less.
          </div>
          <SignUp {...btnJoin} />
        </div>
      </div>
    </section>
  );
};
