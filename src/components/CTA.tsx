import React from 'react';
import CTAImg from '../assets/image/CTA.png';

export const CTA = () => {
  return (
    <section>
      <div className="h-[calc(theme(spacing.96)+theme(spacing.40)-7px)] bg-neutral-500">
        <div className="flex justify-center ">
          <img
            src={CTAImg}
            alt="image of CTA"
            className="h-[618px] w-[500px] z-10 -translate-y-10"
          />
        </div>
        <div>text</div>
      </div>
    </section>
  );
};
