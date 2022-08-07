import { useEffect, useRef, EffectCallback } from 'react';

export function useDidUpdate(fn: EffectCallback, dependencies?: any[]) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      fn();
    } else {
      mounted.current = true;
    }
  }, dependencies);
}
