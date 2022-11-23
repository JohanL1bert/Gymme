import React from 'react';

export const About = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="w-[calc(theme(spacing.96)+theme(spacing.96))] h-[calc(theme(spacing.96)+44px)]">
          <div className="relative h-[calc(theme(spacing.36)+6px)]">
            <div className="absolute h-[calc(theme(spacing.28)+8px)] w-[calc(theme(spacing.36)+6px)] left-0 bg-aboutImg" />
            <h2 className="H2 absolute left-[calc(theme(spacing.16)+6px)] top-9">
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
            <div className="mt-8">
              <a href="">Join Now</a>
              <button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
