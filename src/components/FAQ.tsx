import React from 'react';
import { faQuestionsData } from './faqQuestions/faQuestions.data';
import { FAQuestions } from './faqQuestions/FAQuestions';
/* import { ReactComponent as VectorDot } from '../assets/icons/Vector1.svg';
import { ReactComponent as VectorQuestionMark } from '../assets/icons/Vector.svg'; */

// max-h-[calc(theme(spacing.96)+theme(spacing.96)+theme(spacing.96)+5px)]

export const FAQ = () => {
  return (
    <section>
      <div className="w-full min-h-full h-full mb-20">
        <div className="max-w-full relative">
          <div className="faq">
            <div className="faq_mark" />
            <div className=" w-[calc(100%/3)] h-[calc(theme(spacing.60)+4px)] flex justify-center items-center ">
              <div className="faq_dot" />
            </div>
          </div>
        </div>

        <div>
          <div
            className="flex flex-col items-center gap-y-[85px] mx-[calc(theme(spacing.28)-theme(spacing.6))]
        min-h-[calc(theme(spacing.96)+theme(spacing.96)+theme(spacing.96)+5px)] h-full
        mobile:mx-28
        mobileSmall:mx-5"
          >
            <div className="flex flex-col items-center h-full">
              <h2 className="H2 pt-24 -z-10 absolute">
                {'faq'.toUpperCase()}
                <span className="text-primary-200">.</span>
                <span />
              </h2>
              <div className="flex flex-col items-center mt-[calc(theme(spacing.56))]  ">
                <ul className="gap-y-[16px] flex flex-col ">
                  {faQuestionsData.map((item) => (
                    <FAQuestions key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
