import { useLayoutEffect, useRef } from 'react';

export function useCallbackRef<T>(callback: T) {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return callbackRef;
}
