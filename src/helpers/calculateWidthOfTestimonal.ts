import { RefObject } from 'react';
const PERCENT_CARD_SHOW = 40;

export const calculateTestimonalWidthSlider = (
  container: RefObject<HTMLUListElement>,
  current?: number
) => {
  const widthOfContainer = container.current?.clientWidth;
  const widthOfChild = container.current?.firstElementChild?.clientWidth;

  if (!widthOfChild || !widthOfContainer) {
    throw new Error(`${widthOfChild} or ${widthOfContainer} is undefined`);
  }

  const leftWidthOfContainer = widthOfChild * 3 - widthOfContainer;
  const possibleGap = (leftWidthOfContainer / 100) * PERCENT_CARD_SHOW;
  const halfPossibleGap = possibleGap / 2;
  const firstRenderWidthToTranslate = (widthOfChild + halfPossibleGap) * 2;

  const translateXValue = (widthOfChild + halfPossibleGap) * (current ?? 2);

  return {
    widthOfContainer,
    widthOfChild,
    firstRenderWidthToTranslate,
    possibleGap,
    translateXValue,
  };
};
