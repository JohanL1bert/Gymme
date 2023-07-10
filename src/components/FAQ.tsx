import React from 'react';
import { faQuestionsData } from './faqQuestions/faQuestions.data';
import { FAQuestions } from './faqQuestions/FAQuestions';
/* import { ReactComponent as VectorDot } from '../assets/icons/Vector1.svg';
import { ReactComponent as VectorQuestionMark } from '../assets/icons/Vector.svg'; */

export const FAQ = () => {
  return (
    <section>
      <div className="h-auto w-full">
        <div className="flex flex-col items-center gap-y-[85px] mx-[calc(theme(spacing.28)-theme(spacing.6))]">
          <div className="faq_mark flex flex-col items-center">
            <h2 className="H2  mt-[calc(theme(spacing.28)-theme(spacing.1))] mb-[calc(theme(spacing.20)-theme(spacing.1))]">
              {'faq'.toUpperCase()}
              <span className="text-primary-200">.</span>
              <span />
            </h2>
            <div className="flex flex-col items-center ">
              <ul className="gap-y-[16px] flex flex-col ">
                {faQuestionsData.map((item) => (
                  <FAQuestions key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </div>
          {/* FIXME: Fix resize of dot */}
          <div className="h-[248px] w-full flex justify-center items-center">
            <div className="faq_dot" />
          </div>
        </div>
      </div>
    </section>
  );
};
