import React from 'react';
import { faQuestionsData } from './faqQuestions/faQuestions.data';
import { FAQuestions } from './faqQuestions/FAQuestions';
/* import { ReactComponent as VectorDot } from '../assets/icons/Vector1.svg';
import { ReactComponent as VectorQuestionMark } from '../assets/icons/Vector.svg'; */

export const FAQ = () => {
  return (
    <section>
      <div className="h-auto">
        <div className="flex flex-col items-center gap-y-[85px] h-auto">
          <div className="faq_mark flex flex-col items-center">
            <h2 className="H2 mt-[108px] mb-[77px]">
              {'faq'.toUpperCase()}
              <span className="text-primary-200">.</span>
              <span />
            </h2>
            <div>DELETE</div>
            <div className="flex flex-col items-center">
              <ul className="gap-y-[16px] flex flex-col">
                {faQuestionsData.map((item) => (
                  <FAQuestions key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="faq_dot" />
        </div>
      </div>
    </section>
  );
};
