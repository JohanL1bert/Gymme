/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { ArrowBtn } from 'stories/arrowBtn/ArrowBtn';
import { WorkoutSlider } from './workouts/WorkoutSlider';
import { useWorkOut } from 'helpers/useWorkout';
import {
  ArrowBtnBingDirectionLeft,
  ArrowBtnBingDirectionRight,
} from 'stories/arrowBtn/ArrowBtn.stories';
export const Workouts = () => {
  const containerSliderRef = useRef<HTMLUListElement>(null);
  const { moveRightSlider, moveLeftSlider, slider, translateX } =
    useWorkOut(containerSliderRef);

  return (
    <section>
      <div className="w-full flex justify-center">
        <div className="w-[1442px] overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="relative h-[calc(theme(spacing.36)+6px)]">
              <div className="absolute h-[calc(theme(spacing.28)+8px)] w-[calc(theme(spacing.28)+8px)] left-0 bg-trainingImg bg-cover bg-no-repeat" />
              <h2 className="H2 absolute left-[calc(theme(spacing.16)+6px)] top-9">
                Training programs
                <span className="text-primary-200">.</span>
              </h2>
            </div>
            <WorkoutSlider
              ref={containerSliderRef}
              slider={slider}
              translateX={translateX}
            />
          </div>
          <div className="flex justify-end mt-20">
            <div className="w-[112px] h-[40px]] gap-[32px] flex">
              <ArrowBtn
                handleClick={moveRightSlider}
                {...ArrowBtnBingDirectionLeft.args}
              />
              <ArrowBtn
                handleClick={moveLeftSlider}
                {...ArrowBtnBingDirectionRight.args}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
