import { useMemo, useRef } from 'react';
import { useIsomorphicEffect } from '../../use-isomorphic-effect/use-isomorphic-effect';

export function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined): T {
  const callbackRef = useRef(callback);

  // Layout effect instead of useEffect so the ref is already fresh when other
  // layout effects and event listeners run within the same commit
  useIsomorphicEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}
