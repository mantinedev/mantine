import { useRef } from 'react';

export function useGuaranteedMemo<T>(fn: () => T, deps: React.DependencyList): T {
  const ref = useRef<{ v: T; prevDeps: unknown[] }>();

  if (
    !ref.current ||
    deps.length !== ref.current.prevDeps.length ||
    ref.current.prevDeps.map((v, i) => v === deps[i]).indexOf(false) >= 0
  ) {
    ref.current = {
      v: fn(),
      prevDeps: [...deps],
    };
  }

  return ref.current.v;
}
