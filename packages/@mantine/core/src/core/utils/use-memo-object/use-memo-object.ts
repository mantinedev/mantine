import { useMemo, useRef } from 'react';

// Memoize object value to avoid unnecessary renders
export function useMemoObject<T>(value: T): T {
  const valueRef = useRef(value);
  useMemo(() => {
    for (const field in value) {
      if (valueRef.current[field] !== value[field]) {
        valueRef.current = value;
        return;
      }
    }
  }, [value]);
  return valueRef.current;
}
