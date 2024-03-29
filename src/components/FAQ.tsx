import React from 'react';
import { faQuestionsData } from './faqQuestions/faQuestions.data';
import { FAQuestions } from './faqQuestions/FAQuestions';

export const FAQ = () => {
  return (
    <div className="H1 h-[1000px]">
      {faQuestionsData.map((item) => (
        <FAQuestions key={item.id} {...item} />
      ))}
    </div>
  );
};
