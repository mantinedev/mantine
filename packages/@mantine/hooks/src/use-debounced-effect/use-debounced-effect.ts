import { DependencyList, EffectCallback, useEffect, useRef } from 'react';
import {
  useDebouncedCallback,
  type UseDebouncedCallbackOptions,
} from '../use-debounced-callback/use-debounced-callback';

export type UseDebouncedEffectOptions = Omit<UseDebouncedCallbackOptions, 'flushOnUnmount'>;

export function useDebouncedEffect(
  effect: EffectCallback,
  deps: DependencyList,
  options: number | UseDebouncedEffectOptions
): void {
  const cleanupRef = useRef<void | (() => void)>(undefined);

  const runEffect = useDebouncedCallback(() => {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
    }

    cleanupRef.current = effect();
  }, options);

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

export namespace useDebouncedEffect {
  export type Options = UseDebouncedEffectOptions;
}
