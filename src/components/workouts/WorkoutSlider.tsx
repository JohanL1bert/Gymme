/* eslint-disable react/display-name */
import React from 'react';
import { WorkoutsCard } from './WorkoutsCard';
import { TWorkoutData } from './workout.data';

type TSlider = {
  slider: TWorkoutData;
  translateX: number;
};

export const WorkoutSlider = React.forwardRef<HTMLUListElement, TSlider>(
  (props, ref) => {
    const { slider, translateX } = props;

    return (
      <div className="mt-20">
        <ul
          className="flex items-center gap-x-8"
          ref={ref}
          style={{
            transform: `translate3d(${-translateX}px, 0, 0)`,
          }}
        >
          {slider.map((card) => (
            <WorkoutsCard key={card.id} {...card} />
          ))}
        </ul>
      </div>
    );
  }
);
