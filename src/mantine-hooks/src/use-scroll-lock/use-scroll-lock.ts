import { useEffect, useRef, useState } from 'react';

export function useScrollLock(lock?: boolean) {
  const [scrollLocked, setScrollLocked] = useState(lock || false);

  // value is stored to prevent body overflow styles override with initial useScrollLock(false)
  const locked = useRef(false);

  // after scroll is unlocked body overflow style returns to the previous known value
  const bodyOverflow = useRef<React.CSSProperties['overflow']>(null);

  const unlockScroll = () => {
    if (locked.current) {
      locked.current = false;
      document.body.style.overflow = bodyOverflow.current || '';
    }
  };

  const lockScroll = () => {
    locked.current = true;
    bodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    if (scrollLocked) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return unlockScroll;
  }, [scrollLocked]);

  useEffect(() => {
    if (lock !== undefined) {
      setScrollLocked(lock);
    }
  }, [lock]);

  useEffect(() => {
    if (lock === undefined && typeof window !== 'undefined') {
      window.document.body.style.overflow === 'hidden' && setScrollLocked(true);
    }
  }, [setScrollLocked]);

  return [scrollLocked, setScrollLocked] as const;
}
