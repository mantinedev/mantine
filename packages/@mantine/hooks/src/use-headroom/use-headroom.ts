import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { useWindowScroll } from '../use-window-scroll/use-window-scroll';

export const isFixed = (current: number, fixedAt: number) => current <= fixedAt;
export const isPinned = (current: number, previous: number) => current <= previous;
export const isReleased = (current: number, previous: number, fixedAt: number) =>
  !isPinned(current, previous) && !isFixed(current, fixedAt);

export const isPinnedOrReleased = (
  current: number,
  fixedAt: number,
  isCurrentlyPinnedRef: React.RefObject<boolean>,
  isScrollingUp: boolean,
  onPin?: () => void,
  onRelease?: () => void
) => {
  const isInFixedPosition = isFixed(current, fixedAt);
  if (isInFixedPosition && !isCurrentlyPinnedRef.current) {
    isCurrentlyPinnedRef.current = true;
    onPin?.();
  } else if (!isInFixedPosition && isScrollingUp && !isCurrentlyPinnedRef.current) {
    isCurrentlyPinnedRef.current = true;
    onPin?.();
  } else if (!isInFixedPosition && !isScrollingUp && isCurrentlyPinnedRef.current) {
    isCurrentlyPinnedRef.current = false;
    onRelease?.();
  }
};

export function useScrollDirection() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleScroll = useEffectEvent(() => {
    if (isResizing) {
      return;
    }
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsScrollingUp(currentScrollTop < lastScrollTop);
    setLastScrollTop(currentScrollTop);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        setIsResizing(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimerRef.current);
    };
  }, []);

  return isScrollingUp;
}

export interface UseHeadroomInput {
  /** Number in px at which element should be fixed */
  fixedAt?: number;

  /** Number of px to scroll to fully reveal or hide the element, 100 by default */
  scrollDistance?: number;

  /** Called when element is pinned */
  onPin?: () => void;

  /** Called when element is at fixed position */
  onFix?: () => void;

  /** Called when element is unpinned */
  onRelease?: () => void;
}

export interface UseHeadroomReturnValue {
  /** True when the element is at least partially visible */
  pinned: boolean;

  /** Reveal progress: 0 = fully hidden, 1 = fully visible */
  scrollProgress: number;
}

export function useHeadroom({
  fixedAt = 0,
  scrollDistance = 100,
  onPin,
  onFix,
  onRelease,
}: UseHeadroomInput = {}): UseHeadroomReturnValue {
  const isCurrentlyPinnedRef = useRef(false);
  const isScrollingUp = useScrollDirection();
  const [{ y: scrollPosition }] = useWindowScroll();

  const onPinEvent = useEffectEvent(() => onPin?.());
  const onReleaseEvent = useEffectEvent(() => onRelease?.());
  const onFixEvent = useEffectEvent(() => onFix?.());

  useIsomorphicEffect(() => {
    isPinnedOrReleased(
      scrollPosition,
      fixedAt,
      isCurrentlyPinnedRef,
      isScrollingUp,
      onPinEvent,
      onReleaseEvent
    );
  }, [scrollPosition, fixedAt, isScrollingUp]);

  useIsomorphicEffect(() => {
    if (isFixed(scrollPosition, fixedAt)) {
      onFixEvent();
    }
  }, [scrollPosition, fixedAt]);

  // Refs for scroll-progress tracking. Mutated during render (safe for refs).
  const currentlyFixed = isFixed(scrollPosition, fixedAt);
  const prevIsFixedRef = useRef(currentlyFixed);
  const directionChangeScrollYRef = useRef(scrollPosition);
  const progressAtDirectionChangeRef = useRef(currentlyFixed ? 1 : 0);
  const prevIsScrollingUpRef = useRef(isScrollingUp);

  // Detect fixed-zone transitions first. When leaving the fixed zone the baseline
  // is anchored at fixedAt (not the current scroll position) so the delta is measured
  // from where the element was last fully visible, regardless of how scroll position
  // was initialised on the first render.
  if (prevIsFixedRef.current !== currentlyFixed) {
    prevIsFixedRef.current = currentlyFixed;

    if (!currentlyFixed) {
      directionChangeScrollYRef.current = fixedAt;
      progressAtDirectionChangeRef.current = 1;
    } else {
      directionChangeScrollYRef.current = scrollPosition;
      progressAtDirectionChangeRef.current = 1;
    }

    prevIsScrollingUpRef.current = isScrollingUp;
  }

  // When scroll direction changes outside the fixed zone, save the current progress
  // so the next direction accumulates from that point (handles partial reveals).
  if (!currentlyFixed && prevIsScrollingUpRef.current !== isScrollingUp) {
    const transitionDelta = Math.abs(scrollPosition - directionChangeScrollYRef.current);
    const transitionProgress = prevIsScrollingUpRef.current
      ? Math.min(progressAtDirectionChangeRef.current + transitionDelta / scrollDistance, 1)
      : Math.max(progressAtDirectionChangeRef.current - transitionDelta / scrollDistance, 0);

    prevIsScrollingUpRef.current = isScrollingUp;
    directionChangeScrollYRef.current = scrollPosition;
    progressAtDirectionChangeRef.current = transitionProgress;
  }

  let scrollProgress: number;

  if (currentlyFixed) {
    scrollProgress = 1;
  } else {
    const scrollDelta = Math.abs(scrollPosition - directionChangeScrollYRef.current);

    if (isScrollingUp) {
      scrollProgress = Math.min(
        progressAtDirectionChangeRef.current + scrollDelta / scrollDistance,
        1
      );
    } else {
      scrollProgress = Math.max(
        progressAtDirectionChangeRef.current - scrollDelta / scrollDistance,
        0
      );
    }
  }

  return { pinned: scrollProgress > 0, scrollProgress };
}

export namespace useHeadroom {
  export type Input = UseHeadroomInput;
  export type ReturnValue = UseHeadroomReturnValue;
}
