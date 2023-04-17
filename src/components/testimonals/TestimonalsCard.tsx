import React from 'react';
import { TTestimonalCard } from './testimonalCard.data';
import { ReactComponent as Line } from '../../assets/icons/Community_Slider_Strip.svg';

// fix adaptive width
// w-[calc(theme(spacing.96)-24px)] li
export const TestimonalsCard = ({ namePeople, text, img }: TTestimonalCard) => {
  return (
    <li className="w-[360px] h-[480px] relative">
      <div className="w-[360px]">
        <img
          src={img}
          alt="img of testimonal person"
          className="w-full inline-block"
        />
      </div>
      <div className="absolute bottom-[32px] mx-5 gap-[32px] text-white flex flex-col justify-center items-center">
        <q>{text}</q>
        <div className="flex gap-1 items-center">
          <Line />
          <p>{namePeople}</p>
          <span>.</span>
        </div>
      </div>
    </li>
  );
};
