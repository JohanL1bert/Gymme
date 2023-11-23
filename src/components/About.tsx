import React from 'react';
import { SignUp } from '../stories/button/SignUp';
import { SignUpOutlinedWithoutPadding } from 'stories/button/SignUp.stories';
import { ArrowBtn } from 'stories/arrowBtn/ArrowBtn';
import { ArrowBtnSmallDirectionRight } from 'stories/arrowBtn/ArrowBtn.stories';

export const About = () => {
  const JoinNowBtn = { ...SignUpOutlinedWithoutPadding.args, text: 'Join Now' };

  return (
    <section>
      <div className="flex justify-center items-center">
        <div
          className="w-[calc(theme(spacing.96)+theme(spacing.96))] min-h-[calc(theme(spacing.96)+44px)] iPad:mx-0 margin_top_section
        mobileSmall:mx-5"
        >
          <div
            className="relative mobile:h-[calc(theme(spacing.36)+6px)]
          mobileSmall:h-24"
          >
            <div
              className="absolute mobile:h-[calc(theme(spacing.28)+8px)] mobile:w-[calc(theme(spacing.36)+6px)]
            left-0 bg-aboutImg bg-cover bg-no-repeat
            mobileSmall:w-[calc(theme(spacing.24)+4px)] mobileSmall:h-20"
            />
            <h2
              className="mobile:H2 absolute mobile:left-[calc(theme(spacing.16)+6px)] mobile:top-9
            mobileSmall:left-[calc(theme(spacing.14)-6px)] mobileSmall:top-5 mobileSmall:H2 mobileSmall:text-[32px] leading-[40px]"
            >
              Our mission
              <span className="text-primary-200">.</span>
              <span />
            </h2>
          </div>
          <div>
            <div className="text-neutral-400 body_medium text-start">
              We are distinguished by our unsurpassed motivating atmosphere,
              knowledgeable staff, and premier exercise equipment, which
              supports our members in meeting their individual fitness goals.
            </div>
            <br />
            <div className="text-neutral-400 body_medium text-start">
              The strength of our heart-felt identity is utilized to inspire
              every person that steps foot into our gyms to better themselves.
            </div>
            <div className="flex mt-8 gap-x-4">
              <div>
                <SignUp {...JoinNowBtn} />
              </div>
              <div className="flex flex-col justify-center">
                <ArrowBtn {...ArrowBtnSmallDirectionRight.args} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
