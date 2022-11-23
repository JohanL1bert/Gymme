import React from 'react';
import { WorkoutSlider } from './workouts/WorkoutSlider';

export const Workouts = () => {
  return (
    <section>
      <div>
        <div>
          <div className="relative h-[calc(theme(spacing.36)+6px)]">
            <div className="absolute h-[calc(theme(spacing.28)+8px)] w-[calc(theme(spacing.28)+8px)] left-0 bg-trainingImg bg-cover bg-no-repeat" />
            <h2 className="H2 absolute left-[calc(theme(spacing.16)+6px)] top-9">
              Training programs
              <span className="text-primary-200">.</span>
            </h2>
          </div>
          <WorkoutSlider />
        </div>
      </div>
    </section>
  );
};
