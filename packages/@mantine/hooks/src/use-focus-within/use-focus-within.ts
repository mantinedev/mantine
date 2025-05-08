import { useCallback, useEffect, useRef, useState } from 'react';

function containsRelatedTarget(event: FocusEvent) {
  if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof HTMLElement) {
    return event.currentTarget.contains(event.relatedTarget);
  }

  return false;
}

export interface UseFocusWithinOptions {
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

export interface UseFocusWithinReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  focused: boolean;
}

export function useFocusWithin<T extends HTMLElement = any>({
  onBlur,
  onFocus,
}: UseFocusWithinOptions = {}): UseFocusWithinReturnValue<T> {
  const [focused, setFocused] = useState(false);
  const focusedRef = useRef(false);
  const previousNode = useRef<T | null>(null);

  const _setFocused = useCallback((value: boolean) => {
    setFocused(value);
    focusedRef.current = value;
  }, []);

  const handleFocusIn = useCallback(
    (event: FocusEvent) => {
      if (!focusedRef.current) {
        _setFocused(true);
        onFocus?.(event);
      }
    },
    [onFocus]
  );

  const handleFocusOut = useCallback(
    (event: FocusEvent) => {
      if (focusedRef.current && !containsRelatedTarget(event)) {
        _setFocused(false);
        onBlur?.(event);
      }
    },
    [onBlur]
  );

  const callbackRef: React.RefCallback<T | null> = useCallback(
    (node) => {
      if (!node) {
        return;
      }

      if (previousNode.current) {
        previousNode.current.removeEventListener('focusin', handleFocusIn);
        previousNode.current.removeEventListener('focusout', handleFocusOut);
      }

      node.addEventListener('focusin', handleFocusIn);
      node.addEventListener('focusout', handleFocusOut);
    },
    [handleFocusIn, handleFocusOut]
  );

  useEffect(
    () => () => {
      if (previousNode.current) {
        previousNode.current.removeEventListener('focusin', handleFocusIn);
        previousNode.current.removeEventListener('focusout', handleFocusOut);
      }
    },
    []
  );

  return { ref: callbackRef, focused };
}
