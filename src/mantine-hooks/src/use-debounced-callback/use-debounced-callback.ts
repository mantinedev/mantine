import { useRef, useEffect, useCallback } from 'react';
import { useCallbackRef } from '../use-callback-ref/use-callback-ref';

export function useDebounceCallback(callback: () => void, delay: number) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
