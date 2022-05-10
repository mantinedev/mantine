import React, { useRef } from 'react';

export function usePropRef<T>(value: T): React.MutableRefObject<T> {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}
