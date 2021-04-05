import { useEffect, useRef } from 'react';

export function useScrollLock(lock: boolean) {
  const bodyOverflow = useRef<React.CSSProperties['overflow']>(null);
  const locked = useRef(false);

  const unlockScroll = () => {
    if (locked.current) {
      locked.current = false;
      document.body.style.overflow = bodyOverflow.current || '';
    }
  };

  useEffect(() => {
    if (lock) {
      locked.current = true;
      bodyOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      unlockScroll();
    }

    return unlockScroll;
  }, [lock]);
}
