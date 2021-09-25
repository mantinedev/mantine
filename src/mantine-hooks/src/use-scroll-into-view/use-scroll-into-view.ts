/* eslint-disable no-param-reassign */
import { useForceUpdate } from '@mantine/hooks';
import { useCallback, useRef, useEffect } from 'react';

import { easeInOutQuad } from './utils/ease-in-out-quad';
import { getRelativePosition } from './utils/get-relative-position';
import { getScrollStart } from './utils/get-scroll-start';
import { setScrollParam } from './utils/set-scroll-param';

interface ScrollIntoViewParams {
  /** target node to be scrolled yo */
  target: HTMLElement;

  /** scrollable parent node default to document */
  parent?: HTMLElement;

  /** callback fired after scroll */
  onScrollFinish?: () => void;

  /** duration of scroll in seconds */
  duration?: number;

  /** axis of scroll */
  axis?: 'x' | 'y'

  /** custom mathematical easing function */
  easing?: (t: number) => number
}

export function useScrollIntoView({
  target,
  parent,
  duration = 1.25,
  axis = 'y',
  onScrollFinish,
  easing = easeInOutQuad,
}: ScrollIntoViewParams) {
  const forceRerender = useForceUpdate();
  const frameID = useRef(0);
  const startTime = useRef(0);

  const scrollIntoView = useCallback(
    () => {
      const start = getScrollStart({ parent, axis }) ?? 0;
      const change = getRelativePosition({ parent, target, axis }) - (parent ? 0 : start);

      function animateScroll() {
        if (startTime.current === 0) {
          startTime.current = performance.now();
        }

        const now = performance.now();
        const elapsed = (now - startTime.current) / 1000;

        // easing timing progress
        const t = elapsed / duration;

        const distance = start + change * easing(t);

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
    [parent, target]
  );

  const cancel = (): void => {
    cancelAnimationFrame(frameID.current);
  };

  useEffect(() => {
    // since that hook doesn't cause any rerenders we need to force
    // it once to get proper refs for target and parent
    forceRerender();

    // cleanup RAF
    return cancel;
  }, []);

  return {
    scrollIntoView,
    cancel,
  };
}
