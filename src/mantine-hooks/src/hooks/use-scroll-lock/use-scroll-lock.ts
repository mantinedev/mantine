import { useEffect, useRef } from 'react';

export function useScrollLock(lock: boolean) {
  const bodyOverflow = useRef<React.CSSProperties['overflow']>(null);

  useEffect(() => {
    if (lock) {
      bodyOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = bodyOverflow.current || '';
    }
  }, [lock]);
}
