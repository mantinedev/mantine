import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useDidUpdate(fn: EffectCallback, dependencies?: DependencyList) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return fn();
    }

    mounted.current = true;
  }, dependencies);
}
