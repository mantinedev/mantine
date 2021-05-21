import { useEffect, useRef } from 'react';

// touch devices do not support overflow: hidden on body element
// instead we need to prevent default for touchmove event:
// https://stackoverflow.com/a/49853392
const preventDefault = (event: TouchEvent) => {
  event.preventDefault();
};

export function useScrollLock(lock: boolean, options = { disableTouchEvents: false }) {
  // value is stored to prevent body overflow styles override with initial useScrollLock(false)
  const locked = useRef(false);

  // after scroll is unlocked body overflow style returns to the previous known value
  const bodyOverflow = useRef<React.CSSProperties['overflow']>(null);

  const unlockScroll = () => {
    if (locked.current) {
      locked.current = false;
      document.body.style.overflow = bodyOverflow.current || '';

      if (options.disableTouchEvents) {
        document.body.removeEventListener('touchmove', preventDefault);
      }
    }
  };

  const lockScroll = () => {
    locked.current = true;
    bodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (options.disableTouchEvents) {
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
    }
  };

  useEffect(() => {
    if (lock) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return unlockScroll;
  }, [lock]);
}
