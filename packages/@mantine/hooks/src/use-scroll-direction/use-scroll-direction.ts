import { useEffect, useEffectEvent, useRef, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | 'unknown';

export function useScrollDirection(): ScrollDirection {
  const lastScrollTopRef = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('unknown');
  const isResizingRef = useRef(false);
  const resizeTimerRef = useRef<number | undefined>(undefined);

  const handleScroll = useEffectEvent(() => {
    if (isResizingRef.current) {
      return;
    }

    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    setScrollDirection(currentScrollTop < lastScrollTopRef.current ? 'up' : 'down');
    lastScrollTopRef.current = currentScrollTop;
  });

  useEffect(() => {
    const handleResize = () => {
      isResizingRef.current = true;
      window.clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = window.setTimeout(() => {
        isResizingRef.current = false;
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

  return scrollDirection;
}
