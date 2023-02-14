import React from 'react';
import { TTestimonalCard } from './testimonalCard.data';

export const TestimonalsCard = ({ namePeople, text, img }: TTestimonalCard) => {
  return (
    <li className="h-[480px] w-[360px]">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <q>{text}</q>
        <div>
          <span>svg</span>
          <p>{namePeople}</p>
          <span>.</span>
        </div>
      </div>
    </li>
  );
};
