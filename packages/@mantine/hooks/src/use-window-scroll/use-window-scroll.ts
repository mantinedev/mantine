import { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

export interface UseWindowScrollPosition {
  x: number;
  y: number;
}

export type UseWindowScrollTo = (position: Partial<UseWindowScrollPosition>) => void;
export type UseWindowScrollReturnValue = [UseWindowScrollPosition, UseWindowScrollTo];

function getScrollPosition(): UseWindowScrollPosition {
  return typeof window !== 'undefined' ? { x: window.scrollX, y: window.scrollY } : { x: 0, y: 0 };
}

function scrollTo({ x, y }: Partial<UseWindowScrollPosition>) {
  if (typeof window !== 'undefined') {
    const scrollOptions: ScrollToOptions = { behavior: 'smooth' };

    if (typeof x === 'number') {
      scrollOptions.left = x;
    }

    if (typeof y === 'number') {
      scrollOptions.top = y;
    }

    window.scrollTo(scrollOptions);
  }
}

export function useWindowScroll(): UseWindowScrollReturnValue {
  const [position, setPosition] = useState<UseWindowScrollPosition>({ x: 0, y: 0 });

  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      return;
    }

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;

      setPosition((prev) => {
        const next = getScrollPosition();
        if (prev.x === next.x && prev.y === next.y) {
          return prev;
        }

        return next;
      });
    });
  }, []);

  useWindowEvent('scroll', handleScroll, { passive: true });
  useWindowEvent('resize', handleScroll, { passive: true });

  useEffect(() => {
    setPosition(getScrollPosition());

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return [position, scrollTo] as const;
}
