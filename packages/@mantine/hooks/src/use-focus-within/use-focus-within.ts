import { useCallback, useRef, useState, type RefCallback } from 'react';

export interface UseFocusWithinOptions {
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

function containsRelatedTarget(event: FocusEvent) {
  if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof HTMLElement) {
    return event.currentTarget.contains(event.relatedTarget);
  }

  return false;
}

export function useFocusWithin<T extends HTMLElement = any>({
  onBlur,
  onFocus,
}: UseFocusWithinOptions = {}) {
  const [focused, setFocused] = useState(false);
  const focusedRef = useRef(false);

  const cleanupAbortControllerRef = useRef<AbortController>(null);

  const _setFocused = (value: boolean) => {
    setFocused(value);
    focusedRef.current = value;
  };

  const handleFocusIn = (event: FocusEvent) => {
    if (!focusedRef.current) {
      _setFocused(true);
      onFocus?.(event);
    }
  };

  const handleFocusOut = (event: FocusEvent) => {
    if (focusedRef.current && !containsRelatedTarget(event)) {
      _setFocused(false);
      onBlur?.(event);
    }
  };

  const onRefChange: RefCallback<T> = useCallback((node) => {
    cleanupAbortControllerRef.current?.abort();

    cleanupAbortControllerRef.current = new AbortController();
    const {signal} = cleanupAbortControllerRef.current;

    node?.addEventListener('focusin', handleFocusIn, { signal });
    node?.addEventListener('focusout', handleFocusOut, { signal });
  }, [handleFocusIn, handleFocusOut]);

  return { ref: onRefChange, focused };
}
