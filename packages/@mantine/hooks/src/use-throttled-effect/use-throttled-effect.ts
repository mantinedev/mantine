import { DependencyList, EffectCallback, useEffect, useRef } from 'react';
import { useThrottledCallback } from '../use-throttled-callback/use-throttled-callback';

export function useThrottledEffect(
  effect: EffectCallback,
  deps: DependencyList,
  wait: number
): void {
  const cleanupRef = useRef<void | (() => void)>(undefined);

  const runEffect = useThrottledCallback(() => {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
    }

    cleanupRef.current = effect();
  }, wait);

  useEffect(() => {
    runEffect();
  }, [runEffect, ...deps]);

  useEffect(
    () => () => {
      if (typeof cleanupRef.current === 'function') {
        cleanupRef.current();
      }

      cleanupRef.current = undefined;
    },
    []
  );
}
