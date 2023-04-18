import React, {
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
  useEffect,
} from 'react';
import { ArrowBtn } from 'stories/arrowBtn/ArrowBtn';
import { TestimonalsCard } from './testimonals/TestimonalsCard';
import {
  testimonalData,
  TTestimonalCard,
} from './testimonals/testimonalCard.data';
import { createSliderData } from 'helpers/createSliderData';
import { calculateTestimonalWidthSlider } from 'helpers/calculateWidthOfTestimonal';
import {
  ArrowBtnBingDirectionLeft,
  ArrowBtnBingDirectionRight,
} from 'stories/arrowBtn/ArrowBtn.stories';

const MAX_NUMBER_TO_SLIDER_LEN = 4;

export const Testimonals = () => {
  const [current, setCurrent] = useState<number>(2);
  const [translateX, setTranslateX] = useState<number>(0);
  const containerSliderRef = useRef<HTMLUListElement>(null);

  const slider = useMemo(() => {
    const copyOfData = [...testimonalData];
    return createSliderData<TTestimonalCard>(copyOfData);
  }, []);

  const moveLeftSlider = () => {
    containerSliderRef.current!.style.transitionDuration = '400ms';
    if (current <= 1) {
      setTranslateX(0);
      setCurrent(slider.length - MAX_NUMBER_TO_SLIDER_LEN);
    } else {
      const { translateXValue } = calculateTestimonalWidthSlider(
        containerSliderRef,
        current - 1
      );

      setCurrent((prev) => prev - 1);
      setTranslateX(translateXValue);
    }
  };

  const moveRightSlisder = () => {
    containerSliderRef.current!.style.transitionDuration = '400ms';
    if (current >= slider.length - MAX_NUMBER_TO_SLIDER_LEN) {
      const { translateXValue } = calculateTestimonalWidthSlider(
        containerSliderRef,
        MAX_NUMBER_TO_SLIDER_LEN
      );
      setTranslateX(translateXValue);
      setCurrent(1);
    } else {
      const { translateXValue } = calculateTestimonalWidthSlider(
        containerSliderRef,
        current + 1
      );
      setTranslateX(translateXValue);
      setCurrent((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        const { translateXValue } = calculateTestimonalWidthSlider(
          containerSliderRef,
          1
        );
        containerSliderRef.current!.style.transitionDuration = '0ms';
        setTranslateX(translateXValue);
      }

      if (current >= slider.length - MAX_NUMBER_TO_SLIDER_LEN) {
        containerSliderRef.current!.style.transitionDuration = '0ms';
        const { translateXValue } = calculateTestimonalWidthSlider(
          containerSliderRef,
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
    const { firstRenderWidthToTranslate } = calculateTestimonalWidthSlider(
      containerSliderRef!
    );

    return setTranslateX(firstRenderWidthToTranslate);
  }, []);

  return (
    <section className="p-20">
      <div className="flex justify-between mb-44">
        <div>
          <ArrowBtn
            handleClick={moveLeftSlider}
            {...ArrowBtnBingDirectionLeft.args}
          />
          <br />
          <ArrowBtn
            handleClick={moveRightSlisder}
            {...ArrowBtnBingDirectionRight.args}
          />
        </div>
        <div className="relative overflow-hidden">
          <ul
            ref={containerSliderRef}
            className="flex gap-x-[32px] w-[918px]"
            style={{
              transform: `translate3d(${-translateX}px, 0, 0)`,
            }}
          >
            {slider.map((item) => (
              <TestimonalsCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
