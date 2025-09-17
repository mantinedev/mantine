import { useCallback, type Ref, type RefCallback } from 'react';

type PossibleRef<T> = Ref<T> | undefined;
type StrictRef<T> = NonNullable<Ref<T>>;
type RefCleanup<T> = ReturnType<RefCallback<T>>;

export function assignRef<T>(ref: StrictRef<T>, value: T): RefCleanup<T> {
  if (typeof ref === 'function') {
    return ref(value);
  }

  ref.current = value;
}

export function mergeRefs<T>(...refs: PossibleRef<T>[]): RefCallback<T> {
  const availableRefs = refs.filter((ref) => ref != null);
  const cleanupMap = new Map<StrictRef<T>, Exclude<RefCleanup<T>, void>>();

  return (node: T | null) => {
    availableRefs.forEach((ref) => {
      const cleanup = assignRef(ref, node);
      if (cleanup) {
        cleanupMap.set(ref, cleanup);
      }
    });

    return () => {
      availableRefs.forEach((ref) => {
        const cleanup = cleanupMap.get(ref);
        if (cleanup && typeof cleanup === 'function') {
          cleanup();
        } else {
          assignRef(ref, null);
        }
      });
      cleanupMap.clear();
    };
  };
}

export function useMergedRef<T>(...refs: PossibleRef<T>[]) {
  return useCallback(mergeRefs(...refs), refs);
}
