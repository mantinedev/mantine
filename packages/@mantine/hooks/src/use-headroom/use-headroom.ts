import { useRef } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { useWindowScroll } from '../use-window-scroll/use-window-scroll';

export const isFixed = (current: number, fixedAt: number) => current <= fixedAt;
export const isPinned = (current: number, previous: number) => current <= previous;
export const isReleased = (current: number, previous: number, fixedAt: number) =>
  !isPinned(current, previous) && !isFixed(current, fixedAt);

export const isPinnedOrReleased = (
  current: number,
  fixedAt: number,
  isCurrentlyPinnedRef: React.MutableRefObject<boolean>,
  onPin?: () => void,
  onRelease?: () => void
) => {
  const isInFixedPosition = isFixed(current, fixedAt);
  if (isInFixedPosition && !isCurrentlyPinnedRef.current) {
    isCurrentlyPinnedRef.current = true;
    onPin?.();
  } else if (!isInFixedPosition && isCurrentlyPinnedRef.current) {
    isCurrentlyPinnedRef.current = false;
    onRelease?.();
  }
};

interface UseHeadroomInput {
  /** Number in px at which element should be fixed */
  fixedAt?: number;

  /** Called when element is pinned */
  onPin?: () => void;

  /** Called when element is at fixed position */
  onFix?: () => void;

  /** Called when element is unpinned */
  onRelease?: () => void;
}

export function useHeadroom({ fixedAt = 0, onPin, onFix, onRelease }: UseHeadroomInput = {}) {
  const isCurrentlyPinnedRef = useRef(false);
  const [{ y: scrollPosition }] = useWindowScroll();

  useIsomorphicEffect(() => {
    isPinnedOrReleased(scrollPosition, fixedAt, isCurrentlyPinnedRef, onPin, onRelease);
  }, [scrollPosition]);

  useIsomorphicEffect(() => {
    if (isFixed(scrollPosition, fixedAt)) {
      onFix?.();
    }
  }, [scrollPosition, fixedAt, onFix]);

  if (isFixed(scrollPosition, fixedAt)) {
    return true;
  }

  return false;
}
