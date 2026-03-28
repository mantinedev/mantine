import { useEffect, useEffectEvent, useRef, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | 'unknown';

export function useScrollDirection(): ScrollDirection {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('unknown');
  const [isResizing, setIsResizing] = useState(false);
  const resizeTimerRef = useRef<number | undefined>(undefined);

  const handleScroll = useEffectEvent(() => {
    if (isResizing) {
      return;
    }

    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    setScrollDirection(currentScrollTop < lastScrollTop ? 'up' : 'down');
    setLastScrollTop(currentScrollTop);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);
      window.clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = window.setTimeout(() => {
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

  return scrollDirection;
}
