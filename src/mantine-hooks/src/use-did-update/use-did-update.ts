import { useEffect, useRef } from 'react';

export function useDidUpdate(fn: () => void, dependencies?: any[]) {
  const mounted = useRef(false);

  // for react-refresh
  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (mounted.current) {
      return fn();
    } else {
      mounted.current = true;
    }
  }, dependencies);
}
