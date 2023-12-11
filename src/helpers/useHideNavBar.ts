import { useEffect, RefObject } from 'react';

const option = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

export const useHideNavBar = (
  ref: RefObject<HTMLSpanElement>,
  callback: () => void
) => {
  useEffect(() => {
    if (!ref.current) return;
    const callFunction = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (!target.isIntersecting) return callback();
    };

    const observeItem = new IntersectionObserver(callFunction, option);
    observeItem.observe(ref.current);

    return () => observeItem.disconnect();
  }, [ref]);
};
