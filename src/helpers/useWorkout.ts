/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import { calculateWorkoutWidthSlider } from 'helpers/calculateWidthOfWorkout';
import { workoutData, TWorkoutCard } from 'components/workouts/workout.data';
import { createSliderData } from 'helpers/createSliderData';
type TWorkOut = {
  moveRightSlider: () => void;
  moveLeftSlider: () => void;
  slider: Array<TWorkoutCard>;
  translateX: number;
};

export const useWorkOut = (ref: any): TWorkOut => {
  const MAX_NUMBER_TO_SLIDER_LEN = 4;
  const [current, setCurrent] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const slider = useMemo(() => {
    const copyOfData = [...workoutData];
    return createSliderData<TWorkoutCard>(copyOfData);
  }, []);

  const moveLeftSlider = () => {
    ref.current!.style.transitionDuration = '400ms';
    if (current <= 1) {
      setTranslateX(0);
      setCurrent(slider.length - MAX_NUMBER_TO_SLIDER_LEN);
    } else {
      const { translateXValue } = calculateWorkoutWidthSlider(ref, current - 1);

      setCurrent((prev) => prev - 1);
      setTranslateX(translateXValue);
    }
  };

  const moveRightSlider = () => {
    ref.current!.style.transitionDuration = '400ms';
    if (current >= slider.length - MAX_NUMBER_TO_SLIDER_LEN) {
      const { translateXValue } = calculateWorkoutWidthSlider(
        ref,
        MAX_NUMBER_TO_SLIDER_LEN
      );
      setTranslateX(translateXValue);
      setCurrent(1);
    } else {
      const { translateXValue } = calculateWorkoutWidthSlider(ref, current + 1);
      setTranslateX(translateXValue);
      setCurrent((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        const { translateXValue } = calculateWorkoutWidthSlider(ref, 1);
        ref.current!.style.transitionDuration = '0ms';
        setTranslateX(translateXValue);
      }

      if (current >= slider.length - MAX_NUMBER_TO_SLIDER_LEN) {
        ref.current!.style.transitionDuration = '0ms';
        const { translateXValue } = calculateWorkoutWidthSlider(
          ref,
          slider.length - MAX_NUMBER_TO_SLIDER_LEN
        );
        setTranslateX(translateXValue);
      }
    };

    document.addEventListener('transitionend', transitionEnd);

    return () => {
      document.removeEventListener('transitionend', transitionEnd);
    };
  }, [current]);

  useLayoutEffect(() => {
    const { firstRenderWidthToTranslate } = calculateWorkoutWidthSlider(ref!);

    return setTranslateX(firstRenderWidthToTranslate);
  }, []);
  return { moveRightSlider, moveLeftSlider, slider, translateX };
};
