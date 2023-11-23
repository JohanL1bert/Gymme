import React from 'react';
import HeroImg from '../assets/image/Hero.png';
import { SignUp } from '../stories/button/SignUp';
import { SignUpOutlined } from 'stories/button/SignUp.stories';

export const Hero = () => {
  const btnJoin = { ...SignUpOutlined.args, text: 'Join Now' };

  return (
    <section>
      <div className="h-full max-h-[calc(theme(spacing.96)+theme(spacing.96)-theme(spacing.14)-theme(spacing.1))] w-full bg-neutral-500 flex justify-center items-end">
        <div className="flex items-center  iPad:w-auto  max-h-[inherit] h-[calc(theme(spacing.96)+theme(spacing.96)-theme(spacing.14)-theme(spacing.1))] mobileSmall:w-1/4">
          <div
            className="iPad:max-w-[calc(theme(spacing.96)+theme(spacing.36)-1px)] w-full mobileSmall:z-10 flex  flex-col gap-y-8 iPad:translate-x-[calc(theme(spacing.16)+theme(spacing[1.5]))]
    mobileSmall:static translate-y-0 mobile:min-w-[calc(theme(spacing.80)+theme(spacing.5))]  mobileSmall:translate-x-[theme(spacing.5)] max-mobileSmall:h-fit
    mobileSmall:max-w-[calc(theme(spacing.80)+theme(spacing.5))] mobileSmall:min-w-[calc(100vw-50%)]
  "
          >
            <div className="">
              <h1
                className="iPad:H1 iPad:text-start  iPad:text-neutral-100
      mobile:text-[40px] mobile:leading-10 mobile:text-neutral-100 mobile:text-start
      mobileSmall:text-[40px] mobileSmall:leading-10 mobileSmall:text-neutral-100 mobileSmall:text-start
"
              >
                Get the best part of your day
                <br />
                <span className="text-primary-200">-you fit here.</span>
              </h1>
            </div>
            <div
              className="body_medium text-neutral-100 text-start iPad:max-w-[calc(theme(spacing.52)+theme(spacing.52)-1px)] w-full
    mobile:text-[20px] mobile:leading-8
    mobileSmall:text-[20px] mobileSmall:leading-8"
            >
              We provide serious fitness but within a fun and friendly, safe
              space.
            </div>
            <div className="max-h-[calc(theme(spacing.11)+theme(spacing[0.5]))] h-full w-[calc(theme(spacing.40)-1px)] mr-0">
              <SignUp {...btnJoin} />
            </div>
          </div>
        </div>
        <div
          className="
  mobile:static translate-x-0 translate-y-0 mobileSmall:max-w-[calc(theme(spacing.72)+theme(spacing.72)+5px)] mobileSmall:w-full
  mobileSmall:overflow-x-clip  mobileSmall:flex mobileSmall:justify-end
"
        >
          <img
            src={HeroImg}
            alt="image of Hero page"
            className="iPad:w-[calc(theme(spacing.72)+theme(spacing.72)+5px)] h-[calc(theme(spacing.96)+theme(spacing.96)+theme(spacing.6)-theme(spacing[0.5]))] iPad:max-w-none iPad:overflow-auto
      mobile:min-w-[calc(theme(spacing.72)+theme(spacing.72)+5px)] mobile:w-full overflow-hidden
      mobileSmall:min-w-[calc(theme(spacing.72)+theme(spacing.72)+5px)] mobileSmall:w-full
    "
          />
        </div>
      </div>
    </section>
  );
};
