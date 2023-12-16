/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
  useEffect,
  useCallback,
  useReducer,
  RefObject,
} from 'react';
import { ArrowBtn } from 'stories/arrowBtn/ArrowBtn';
import { TestimonalsCard } from './testimonals/TestimonalsCard';
import {
  testimonalData,
  TTestimonalCard,
} from './testimonals/testimonalCard.data';
import {
  ArrowBtnBingDirectionLeft,
  ArrowBtnBingDirectionRight,
} from 'stories/arrowBtn/ArrowBtn.stories';
import classNames from 'classnames';

const classToggle = {
  activeClass: 'testimonal-transition-active',
  disableClass: 'testimonal-transition-disable',
} as const;

Object.freeze(classToggle);

const calculateWidth = (refOfElement: RefObject<HTMLUListElement>) => {
  if (refOfElement.current) {
    const widthOfFullContainerWithOverflow = refOfElement.current.scrollWidth;
    const numberOfElements = refOfElement.current.childNodes.length;
    const oneSection = widthOfFullContainerWithOverflow / numberOfElements;
    return oneSection;
  }
  throw new Error(`${refOfElement} is undefined`);
};

type TKeyClassToggle = keyof typeof classToggle;
type TLiteralClassToggle = typeof classToggle[TKeyClassToggle];

interface IState {
  direction: string;
  translateX: number;
  activeAnimation: TLiteralClassToggle;
}

type TCalcPos = {
  type: 'calc-pos';
  payload: {
    translateX: number;
  };
};

type TCalcValue = {
  type: 'calc-value';
  payload: IState;
};

type IPayload = TCalcPos | TCalcValue;

const initState = {
  direction: '',
  translateX: 0,
  activeAnimation: classToggle.disableClass,
};

const reducerFuction = (
  state: IState = initState,
  action: IPayload
): IState => {
  const { payload, type } = action;
  switch (type) {
    case 'calc-pos':
      return {
        ...state,
        translateX: payload.translateX,
      };
    case 'calc-value':
      return {
        ...state,
        translateX: payload.translateX,
        direction: payload.direction,
        activeAnimation: payload.activeAnimation,
      };
    default:
      return state;
  }
};

export const Testimonals = () => {
  const [slider, setChangeSlider] = useState<typeof testimonalData>([
    ...testimonalData,
  ]);
  const containerSliderRef = useRef<HTMLUListElement>(null);
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const IsFirstRender = useRef<boolean>(true);
  const [state, dispatch] = useReducer(reducerFuction, initState);

  useLayoutEffect(() => {
    if (containerSliderRef.current) {
      const width = calculateWidth(containerSliderRef);
      dispatch({ type: 'calc-pos', payload: { translateX: width * 2 } });
    }
  }, []);

  useMemo(() => {
    const lastElements = slider.slice(0, 2);
    const firstElements = slider.slice(slider.length - 2);
    setChangeSlider((prev) => [...firstElements, ...prev, ...lastElements]);
  }, []);

  useEffect(() => {
    const onTransitionRun = () => {
      setDisableBtn(true);
    };

    containerSliderRef.current?.addEventListener(
      'transitionrun',
      onTransitionRun
    );

    return () =>
      containerSliderRef.current?.removeEventListener(
        'transitionrun',
        onTransitionRun
      );
  }, []);

  const moveLeftSlider = () => {
    if (containerSliderRef.current) {
      const width = calculateWidth(containerSliderRef);
      dispatch({
        type: 'calc-value',
        payload: {
          direction: 'left',
          translateX: Number(state.translateX) - width,
          activeAnimation: classToggle.activeClass,
        },
      });
    }
  };

  const moveRightSlisder = () => {
    if (containerSliderRef.current) {
      const width = calculateWidth(containerSliderRef);
      dispatch({
        type: 'calc-value',
        payload: {
          direction: 'right',
          translateX: Math.abs(Number(state.translateX) + width),
          activeAnimation: classToggle.activeClass,
        },
      });
    }
  };

  const transitionEnd = () => {
    const width = calculateWidth(containerSliderRef);
    setDisableBtn(false);

    if (state.direction === 'left') {
      dispatch({
        type: 'calc-value',
        payload: {
          ...state,
          translateX: state.translateX + width,
          activeAnimation: classToggle.disableClass,
        },
      });

      if (IsFirstRender.current) {
        IsFirstRender.current = false;
        return setChangeSlider((prev) => {
          const lastElements = prev.splice(prev.length - 2);
          return [lastElements[0], ...prev];
        });
      } else {
        return setChangeSlider((prev) => {
          const lastElements = prev.pop()!!;
          return [lastElements, ...prev];
        });
      }
    }

    dispatch({
      type: 'calc-value',
      payload: {
        ...state,
        translateX: Math.abs(Number(state.translateX) - width),
        activeAnimation: classToggle.disableClass,
      },
    });

    if (IsFirstRender.current) {
      IsFirstRender.current = false;
      // we can't delete two element, cause slide 3 is going to zero points and center is on 3 slide
      return setChangeSlider((prev) => {
        prev.splice(0, 1);
        return [...prev];
      });
    } else {
      return setChangeSlider((prev) => {
        const firstElements = prev.shift()!!;
        return [...prev, firstElements];
      });
    }
  };

  // img h-134 w-120
  // section p-20

  // com w-195 h - 40
  // img w-89 h-80

  // slider w-300 h-400

  return (
    <section className="flex justify-center">
      <div className="mb-44 grid-testimonal-cards margin_top_section">
        <div
          // mobileSmall:w-[245px] mobileSmall:h-[80px]
          className="relative iPad:h-[calc(theme(spacing.32)-8px)] iPad:w-[calc(theme(spacing.96))]
          mobileSmall:w-[calc(theme(spacing.60)+5px)] mobileSmall:h-20
        testimonal-header"
        >
          <div
            className="absolute iPad:h-[calc(theme(spacing.32)+6px)] iPad:w-[calc(theme(spacing.32)-8px)] left-0 bg-iconCommunity bg-contain bg-no-repeat
            mobileSmall:w-[89px] mobileSmall:h-[80px]
          "
          />
          <h2
            className="mobileSmall:H2 absolute iPad:left-[calc(theme(spacing.20)-10px)] iPad:top-9 iPad:translate-y-0
          mobileSmall:text-[32px] mobileSmall:leading-10 mobileSmall:left-[50px] mobileSmall:top-0 translate-y-1/2"
          >
            Commuinity
            <span className="text-primary-200">.</span>
            <span />
          </h2>
        </div>
        <div className="relative overflow-hidden  max-w-[871px] w-full testimonal-slider">
          <ul
            ref={containerSliderRef}
            onTransitionEnd={transitionEnd}
            className={classNames(
              'flex gap-x-[theme(spacing.8)]',
              state.activeAnimation
            )}
            style={{
              transform: `translate3d(${-state.translateX}px, 0, 0)`,
            }}
          >
            {slider.map((item, index) => (
              <TestimonalsCard key={index} {...item} />
            ))}
          </ul>
        </div>
        <div
          className={classNames(
            'flex gap-[theme(spacing.8)] justify-self-start items-end testimonal-btn',
            {
              'pointer-events-none [&>div]:invert [&>div]:transition-colors [&>div]:duration-00  [&>div]ease-linear':
                disableBtn,
            }
          )}
        >
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
      </div>
    </section>
  );
};
