import React from 'react';
import HeroImg from '../assets/image/Hero.png';
import { SignUp } from '../stories/button/SignUp';
import { SignUpOutlined } from 'stories/button/SignUp.stories';

export const Hero = () => {
  const btnJoin = { ...SignUpOutlined.args, text: 'Join Now' };

  return (
    <section>
      <div className="h-full max-h-[708px] w-full bg-neutral-500 flex justify-center items-end">
        <div className="flex items-center  iPad:w-auto  max-h-[inherit] h-[708px] mobileSmall:w-1/4">
          <div
            className="  iPad:max-w-[527px] w-full mobileSmall:z-10 flex  flex-col gap-y-8  iPad:translate-x-[70px]
    mobileSmall:static translate-y-0 mobile:min-w-[340px]  mobileSmall:translate-x-[20px] max-mobileSmall:h-fit
    mobileSmall:max-w-[340px] mobileSmall:min-w-[calc(100vw-50%)]
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
              className="body_medium text-neutral-100 text-start iPad:max-w-[415px] w-full
    mobile:text-[20px] mobile:leading-8
    mobileSmall:text-[20px] mobileSmall:leading-8"
            >
              We provide serious fitness but within a fun and friendly, safe
              space.
            </div>
            <div className="max-h-[46px] h-full w-[159px] mr-0">
              <SignUp {...btnJoin} />
            </div>
          </div>
        </div>
        <div
          className="
  mobile:static translate-x-0 translate-y-0 mobileSmall:max-w-[581px] mobileSmall:w-full
  mobileSmall:overflow-x-clip  mobileSmall:flex mobileSmall:justify-end
"
        >
          <img
            src={HeroImg}
            alt="image of Heading page"
            className=" iPad:w-[581px] h-[790px] iPad:max-w-none iPad:overflow-auto
      mobile:min-w-[581px] mobile:w-full overflow-hidden mobileSmall:min-w-[581px] mobileSmall:w-full
    "
          />
        </div>
      </div>
    </section>
  );
};

/* return (
  <section>
    <div className="h-full min-h-[calc(theme(spacing.96)+theme(spacing.96)-36px)] bg-neutral-500 flex justify-center items-center">
      <div className="max-h-[364px] h-full max-w-[527px] w-full relative z-10 translate-x-20 gap-y-8 flex flex-col">
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
); */

/*
<section>
<div
  className="h-full iPad:min-h-[calc(theme(spacing.96)+theme(spacing.96)-36px)] bg-neutral-500 flex justify-center items-center iPad:relative
mobile:min-h-[calc(theme(spacing.96)+theme(spacing.96)-36px)]"
>
  <div
    className="iPad:max-h-[364px] h-full iPad:max-w-[527px] w-full  z-10  gap-y-8 flex flex-col  iPad:hero_container_text
    mobile:static translate-x-0 translate-y-0 mobile:max-w-[340px]
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
      className="body_medium text-neutral-100 text-start iPad:max-w-[415px] w-full
    mobile:text-[20px] mobile:leading-8
    mobileSmall:text-[20px] mobileSmall:leading-8"
    >
      We provide serious fitness but within a fun and friendly, safe
      space.
    </div>
    <div className="max-h-[46px] h-full w-[159px] mr-0">
      <SignUp {...btnJoin} />
    </div>
  </div>
  <div
    className="iPad:absolute iPad:w-[581px] h-[790px] iPad:hero_container_image
  mobile:static translate-x-0 translate-y-0 mobile:max-w-[581px] mobile:w-full
  mobile:overflow-x-clip mobile:flex mobile:justify-end"
  >
    <img
      src={HeroImg}
      alt="image of Heading page"
      className="-translate-y-24 iPad:w-[581px] h-[790px] iPad:max-w-none iPad:overflow-auto
      mobile:min-w-[581px] mobile:w-full overflow-hidden
    "
    />
  </div>
</div>
</section> */
