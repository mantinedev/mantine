/* eslint-disable no-param-reassign */
import { useCallback, useRef, useEffect } from 'react';

import { easeInOutQuad } from './utils/ease-in-out-quad';
import { getRelativePosition } from './utils/get-relative-position';
import { getScrollStart } from './utils/get-scroll-start';
import { setScrollParam } from './utils/set-scroll-param';

interface ScrollIntoViewAnimation {
   /** target node to be scrolled yo */
   target: HTMLElement;

   /** scrollable parent node default to document */
   parent?: HTMLElement;
}

interface ScrollIntoViewParams {
  /** callback fired after scroll */
  onScrollFinish?: () => void;

  /** duration of scroll in seconds */
  duration?: number;

  /** axis of scroll */
  axis?: 'x' | 'y'

  /** custom mathematical easing function */
  easing?: (t: number) => number

  /** additional distance from the beginning of the axis */
  offset?: number;
}

export function useScrollIntoView({
  duration = 1.25,
  axis = 'y',
  onScrollFinish,
  easing = easeInOutQuad,
  offset = 0,
}: ScrollIntoViewParams = {}) {
  const frameID = useRef(0);
  const startTime = useRef(0);

  const scrollIntoView = useCallback(
    ({ target, parent }: ScrollIntoViewAnimation) => {
      const start = getScrollStart({ parent, axis }) ?? 0;
      const change = getRelativePosition({ parent, target, axis }) - (parent ? 0 : start);
      const totalChange = change !== 0 ? change - offset : change;

      function animateScroll() {
        if (startTime.current === 0) {
          startTime.current = performance.now();
        }

        const now = performance.now();
        const elapsed = (now - startTime.current) / 1000;

        // easing timing progress
        const t = duration === 0 ? 1 : elapsed / duration;

        const distance = start + totalChange * easing(t);

        setScrollParam({ parent, axis, distance });

        if (t < 1) {
          frameID.current = requestAnimationFrame(animateScroll);
        } else {
          typeof onScrollFinish === 'function' && onScrollFinish();
          startTime.current = 0;
          cancelAnimationFrame(frameID.current);
        }
      }
      animateScroll();
    },
    []
  );

  const cancel = (): void => {
    cancelAnimationFrame(frameID.current);
  };

  // cleanup RAF
  useEffect(() => cancel, []);

  return {
    scrollIntoView,
    cancel,
  };
}
