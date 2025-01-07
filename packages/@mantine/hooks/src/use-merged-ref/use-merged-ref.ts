import { Ref, useCallback, type RefCallback } from 'react';

type PossibleRef<T> = Ref<T> | undefined;

type RefCleanup<T> = ReturnType<RefCallback<T>>;

export function assignRef<T>(ref: PossibleRef<T>, value: T): RefCleanup<T> {
  if (typeof ref === 'function') {
    return ref(value);
  } else if (typeof ref === 'object' && ref !== null && 'current' in ref) {
    ref.current = value;
  }
}

export function mergeRefs<T>(...refs: PossibleRef<T>[]) {
  const cleanupMap = new Map<PossibleRef<T>, Exclude<RefCleanup<T>, void>>();

  return (node: T | null) => {
    refs.forEach((ref) => {
      const cleanup = assignRef(ref, node);
      if (cleanup) {
        cleanupMap.set(ref, cleanup);
      }
    });

    if (cleanupMap.size > 0) {
      return () => {
        refs.forEach((ref) => {
          const cleanup = cleanupMap.get(ref);
          if (cleanup) {
            cleanup();
          } else {
            assignRef(ref, null);
          }
        });
        cleanupMap.clear();
      };
    }
  };
}

export function useMergedRef<T>(...refs: PossibleRef<T>[]) {
  return useCallback(mergeRefs(...refs), refs);
}
