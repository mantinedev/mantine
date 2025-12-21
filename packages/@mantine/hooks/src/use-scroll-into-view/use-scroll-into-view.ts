import { useCallback, useEffect, useRef } from 'react';
import { useReducedMotion } from '../use-reduced-motion/use-reduced-motion';
import { useWindowEvent } from '../use-window-event/use-window-event';

interface UseScrollIntoViewAnimation {
  /** Target element alignment relatively to parent based on current axis */
  alignment?: 'start' | 'end' | 'center';
}

export interface UseScrollIntoViewOptions {
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

export interface UseScrollIntoViewReturnValue<
  Target extends HTMLElement = any,
  Parent extends HTMLElement | null = null,
> {
  scrollableRef: React.RefObject<Parent | null>;
  targetRef: React.RefObject<Target | null>;
  scrollIntoView: (params?: UseScrollIntoViewAnimation) => void;
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
}: UseScrollIntoViewOptions = {}): UseScrollIntoViewReturnValue<Target, Parent> {
  const frameID = useRef(0);
  const startTime = useRef(0);
  const shouldStop = useRef(false);

  const scrollableRef = useRef<Parent | null>(null);
  const targetRef = useRef<Target | null>(null);

  const reducedMotion = useReducedMotion();

  const cancel = (): void => {
    if (frameID.current) {
      cancelAnimationFrame(frameID.current);
    }
  };

  const scrollIntoView = useCallback(
    ({ alignment = 'start' }: UseScrollIntoViewAnimation = {}) => {
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
  };
}

// ---------------------------------------------------
// Helpers
// ---------------------------------------------------

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function getRelativePosition({ axis, target, parent, alignment, offset, isList }: any): number {
  if (!target || (!parent && typeof document === 'undefined')) {
    return 0;
  }
  const isCustomParent = !!parent;
  const parentElement = parent || document.body;
  const parentPosition = parentElement.getBoundingClientRect();
  const targetPosition = target.getBoundingClientRect();

  const getDiff = (property: 'top' | 'left'): number =>
    targetPosition[property] - parentPosition[property];

  if (axis === 'y') {
    const diff = getDiff('top');

    if (diff === 0) {
      return 0;
    }

    if (alignment === 'start') {
      const distance = diff - offset;
      const shouldScroll = distance <= targetPosition.height * (isList ? 0 : 1) || !isList;

      return shouldScroll ? distance : 0;
    }

    const parentHeight = isCustomParent ? parentPosition.height : window.innerHeight;

    if (alignment === 'end') {
      const distance = diff + offset - parentHeight + targetPosition.height;
      const shouldScroll = distance >= -targetPosition.height * (isList ? 0 : 1) || !isList;

      return shouldScroll ? distance : 0;
    }

    if (alignment === 'center') {
      return diff - parentHeight / 2 + targetPosition.height / 2;
    }

    return 0;
  }

  if (axis === 'x') {
    const diff = getDiff('left');

    if (diff === 0) {
      return 0;
    }

    if (alignment === 'start') {
      const distance = diff - offset;
      const shouldScroll = distance <= targetPosition.width || !isList;

      return shouldScroll ? distance : 0;
    }

    const parentWidth = isCustomParent ? parentPosition.width : window.innerWidth;

    if (alignment === 'end') {
      const distance = diff + offset - parentWidth + targetPosition.width;
      const shouldScroll = distance >= -targetPosition.width || !isList;

      return shouldScroll ? distance : 0;
    }

    if (alignment === 'center') {
      return diff - parentWidth / 2 + targetPosition.width / 2;
    }

    return 0;
  }

  return 0;
}

function getScrollStart({ axis, parent }: any) {
  if (!parent && typeof document === 'undefined') {
    return 0;
  }

  const method = axis === 'y' ? 'scrollTop' : 'scrollLeft';

  if (parent) {
    return parent[method];
  }

  const { body, documentElement } = document;

  // While one of it has a value the second is equal 0
  return body[method] + documentElement[method];
}

function setScrollParam({ axis, parent, distance }: any) {
  if (!parent && typeof document === 'undefined') {
    return;
  }

  const method = axis === 'y' ? 'scrollTop' : 'scrollLeft';

  if (parent) {
    parent[method] = distance;
  } else {
    const { body, documentElement } = document;
    body[method] = distance;
    documentElement[method] = distance;
  }
}

export namespace useScrollIntoView {
  export type Options = UseScrollIntoViewOptions;
  export type ReturnValue<
    Target extends HTMLElement,
    Parent extends HTMLElement | null,
  > = UseScrollIntoViewReturnValue<Target, Parent>;
}
