/* eslint-disable no-unused-vars */
import { RefObject } from 'react';

// CONSTANTS
const PERCENT_CARD_SHOW = 10;
const MAX_WIDTH_WRAPPER = 1442;
const CARDS_NUMBER = 7;
const GAP_ONE_BIG = 32;
const GAP_ONE_SMALL = 16;
// gap 32px
// const ELEMENT = 7 visible = 5
// half WIDTH / 2 - widht_element / 2
// 4 slide big size, 3 slide small size

/*
1442 - container width
1280 position of center element
320 - width of element
2400 - with gap

*/

const calculateChildWidth = <T extends HTMLElement>(
  child: RefObject<T>
): number | undefined => {
  return child.current?.firstElementChild?.clientWidth;
};

// number of gap = number of element - 1
const getGapBetweenelements = <T extends RefObject<HTMLElement>>(
  container: T
) => {
  const numberInContainer: any = container.current?.childElementCount;
  const numberOfGap = numberInContainer - 1;
  const getFirstElement = container.current?.children[0];
  const getSecondElement = container.current?.children[1];
  // Object possibly undefined or null
  const diffrenceWithoutGap =
    getSecondElement?.getBoundingClientRect().x! -
    getFirstElement?.getBoundingClientRect().x!;
  const gapOne =
    diffrenceWithoutGap - getSecondElement?.getBoundingClientRect().width!;
  const gapAll = gapOne * numberOfGap;
  return { gapOne, gapAll, numberInContainer };
};

const getCenterForTheFirstTImeAndResize = (
  widhtOfContainer: number,
  widthOfChild: number,
  GAP_ONE: number,
  NUMBER_IN_CONTAINERS: number
) => {
  const getHalfNumber = Math.ceil(NUMBER_IN_CONTAINERS / 2);
  const positionOfNumberFour = widthOfChild * getHalfNumber - GAP_ONE / 2; // cause in left side of 4 element is only 2 gap
  const centerContainer = widhtOfContainer / 2;
  return positionOfNumberFour - centerContainer;
};

export const calculateWorkoutWidthSlider = (
  container: RefObject<HTMLUListElement>,
  current: number
) => {
  const widthOfContainer = container.current?.clientWidth;
  const widthOfChild = calculateChildWidth<HTMLUListElement>(container);
  const { gapOne, gapAll, numberInContainer } =
    getGapBetweenelements(container);

  if (!widthOfChild || !widthOfContainer) {
    throw new Error(`${widthOfChild} or ${widthOfContainer} is undefined`);
  }

  // first Render and Resize
  const firstRenderWidthToTranslate = getCenterForTheFirstTImeAndResize(
    widthOfContainer,
    widthOfChild,
    gapOne,
    numberInContainer
  );

  // Calculation when slider is change
  /*   const leftWidthOfContainer =
    widthOfChild * numberInContainer - widthOfContainer;
  const possibleGap = (leftWidthOfContainer / 100) * PERCENT_CARD_SHOW;
  const halfPossibleGap = possibleGap / 2;

  console.log(firstRenderWidthToTranslate, 'firstRenderWidthToTranslate');
  const translateXValue = (widthOfChild + halfPossibleGap) * (current ?? 2); */

  // 4 from left 4 from right = 15 - 8 = 7
  // new Calculating
  // 2 gap < 900px view  900px > 4gap
  const widthOfFullContainerWithOverflow = container.current.scrollWidth; // 4544
  const numberOfElements = container.current.childNodes.length; // amount element in container
  const gapWidth =
    widthOfFullContainerWithOverflow - widthOfChild * numberOfElements - 1; // All gap width
  const gapOneWidth = gapWidth / numberOfElements - 1; // oneGap
  const oneSectionInContainer =
    widthOfFullContainerWithOverflow / numberOfElements; // one section
  const translateXValue =
    oneSectionInContainer * current + widthOfChild / 2 - gapOneWidth / 2; // seems working or delete gapOne / 2

  return {
    widthOfContainer,
    widthOfChild,
    firstRenderWidthToTranslate,

    translateXValue,
  };
};
