import React from 'react';
import { TWorkoutCard } from './workout.data';

export const WorkoutsCard = ({ nameOfUse, img }: TWorkoutCard) => {
  return (
    <li className="workout_card">
      <div className="relative inline-block h-full overflow-hidden">
        <img src={img} alt="sport" />
        <div className="text-center border-[1px] inline px-[14px] py-[4px] bg-white absolute bottom-[5%] left-6">
          <span>{nameOfUse}</span>
        </div>
      </div>
    </li>
  );
};
