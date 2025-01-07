import { useCallback, useEffect, useRef } from 'react';
import { useReducedMotion } from '../use-reduced-motion/use-reduced-motion';
import { useWindowEvent } from '../use-window-event/use-window-event';
import { easeInOutQuad } from './utils/ease-in-out-quad';
import { getRelativePosition } from './utils/get-relative-position';
import { getScrollStart } from './utils/get-scroll-start';
import { setScrollParam } from './utils/set-scroll-param';

interface ScrollIntoViewAnimation {
  /** Target element alignment relatively to parent based on current axis */
  alignment?: 'start' | 'end' | 'center';
}

interface ScrollIntoViewParams {
  /** Callback fired after scroll */
  onScrollFinish?: () => void;

  /** Duration of scroll in milliseconds */
  duration?: number;

  /** Axis of scroll */
  axis?: 'x' | 'y';

  /** Custom mathematical easing function */
  easing?: (t: number) => number;

  /** Additional distance between nearest edge and element */
  offset?: number;

  /** Indicator if animation may be interrupted by user scrolling */
  cancelable?: boolean;

  /** Prevents content jumping in scrolling lists with multiple targets */
  isList?: boolean;
}

interface ScrollIntoViewReturnType<
  Target extends HTMLElement = any,
  Parent extends HTMLElement | null = null,
> {
  scrollableRef: React.RefObject<Parent>;
  targetRef: React.RefObject<Target>;
  scrollIntoView: (params?: ScrollIntoViewAnimation) => void;
  cancel: () => void;
}

export function useScrollIntoView<
  Target extends HTMLElement = any,
  Parent extends HTMLElement | null = null,
>({
  duration = 1250,
  axis = 'y',
  onScrollFinish,
  easing = easeInOutQuad,
  offset = 0,
  cancelable = true,
  isList = false,
}: ScrollIntoViewParams = {}) {
  const frameID = useRef(0);
  const startTime = useRef(0);
  const shouldStop = useRef(false);

  const scrollableRef = useRef<Parent>(null);
  const targetRef = useRef<Target>(null);

  const reducedMotion = useReducedMotion();

  const cancel = (): void => {
    if (frameID.current) {
      cancelAnimationFrame(frameID.current);
    }
  };

  const scrollIntoView = useCallback(
    ({ alignment = 'start' }: ScrollIntoViewAnimation = {}) => {
      shouldStop.current = false;

      if (frameID.current) {
        cancel();
      }

      const start = getScrollStart({ parent: scrollableRef.current, axis }) ?? 0;

      const change =
        getRelativePosition({
          parent: scrollableRef.current,
          target: targetRef.current,
          axis,
          alignment,
          offset,
          isList,
        }) - (scrollableRef.current ? 0 : start);

      function animateScroll() {
        if (startTime.current === 0) {
          startTime.current = performance.now();
        }

        const now = performance.now();
        const elapsed = now - startTime.current;

        // Easing timing progress
        const t = reducedMotion || duration === 0 ? 1 : elapsed / duration;

        const distance = start + change * easing(t);

        setScrollParam({
          parent: scrollableRef.current,
          axis,
          distance,
        });

        if (!shouldStop.current && t < 1) {
          frameID.current = requestAnimationFrame(animateScroll);
        } else {
          typeof onScrollFinish === 'function' && onScrollFinish();
          startTime.current = 0;
          frameID.current = 0;
          cancel();
        }
      }
      animateScroll();
    },
    [axis, duration, easing, isList, offset, onScrollFinish, reducedMotion]
  );

  const handleStop = () => {
    if (cancelable) {
      shouldStop.current = true;
    }
  };

  /**
   * Detection of one of these events stops scroll animation
   * wheel - mouse wheel / touch pad
   * touchmove - any touchable device
   */

  useWindowEvent('wheel', handleStop, {
    passive: true,
  });

  useWindowEvent('touchmove', handleStop, {
    passive: true,
  });

  // Cleanup requestAnimationFrame
  useEffect(() => cancel, []);

  return {
    scrollableRef,
    targetRef,
    scrollIntoView,
    cancel,
  } as ScrollIntoViewReturnType<Target, Parent>;
}
