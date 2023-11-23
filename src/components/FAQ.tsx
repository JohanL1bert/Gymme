import React from 'react';
import { faQuestionsData } from './faqQuestions/faQuestions.data';
import { FAQuestions } from './faqQuestions/FAQuestions';
import { ReactComponent as VectorDot } from '../assets/icons/Vector1.svg';
import { ReactComponent as VectorQuestionMark } from '../assets/icons/Vector.svg';

export const FAQ = () => {
  return (
    <section>
      <div className="w-full  h-full mb-20 margin_top_section min-h-[1157.5px] flex flex-col justify-start relative">
        <div className="flex flex-col items-center gap-20 faq">
          <VectorQuestionMark />
          <div className="w-full grid grid-cols-3 justify-items-center">
            <div className="" />
            <div className=" -translate-x-5 max-w-[252px] w-full max-h-[248px] flex-grow shrink">
              <VectorDot />
            </div>
            <div className="" />
          </div>
        </div>
        <div className="">
          <div
            className="flex flex-col items-center  gap-y-[85px] mobile:mx-[calc(100vw-95%)] h-full
  mobileSmall:mx-5 mt-[108px]"
          >
            <h2 className="H2 ">
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
        </div>
      </div>
    </section>
  );
};
