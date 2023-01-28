import { useRef, useSyncExternalStore } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export const isFixed = (current: number, fixAt: number) => current <= fixAt;
export const isPinned = (current: number, previous: number) => current <= previous;
export const isReleased = (current: number, previous: number, fixAt: number) =>
  !isPinned(current, previous) && !isFixed(current, fixAt);

const subscribe = (notify: () => void) => {
  window.addEventListener('scroll', notify);
  return () => window.removeEventListener('scroll', notify);
};

interface UseHeadroomInput {
  fixAt?: number;
  onPin?(): void;
  onFix?(): void;
  onRelease?(): void;
}

export function useHeadroom({ fixAt = 0, onPin, onFix, onRelease }: UseHeadroomInput = {}) {
  const scrollRef = useRef(0);
  const scroll = useSyncExternalStore(subscribe, () => window.scrollY) as number;

  useIsomorphicEffect(() => {
    if (isPinned(scroll, scrollRef.current)) {
      onPin?.();
    }
  }, [scroll, onPin]);

  useIsomorphicEffect(() => {
    if (isFixed(scroll, fixAt)) {
      onFix?.();
    }
  }, [scroll, fixAt, onFix]);

  useIsomorphicEffect(() => {
    if (isReleased(scroll, scrollRef.current, fixAt)) {
      onRelease?.();
    }
  }, [scroll, onRelease]);

  useIsomorphicEffect(() => {
    scrollRef.current = window.scrollY;
  }, [scroll]);

  if (isPinned(scroll, scrollRef.current)) {
    return true;
  }

  if (isFixed(scroll, fixAt)) {
    return true;
  }

  return false;
}
