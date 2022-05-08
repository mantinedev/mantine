import React, { useRef, useEffect } from 'react';

export function usePropRef<T>(value: T): React.MutableRefObject<T> {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
