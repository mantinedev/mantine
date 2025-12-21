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
    [onFocus, _setFocused]
  );

  const handleFocusOut = useCallback(
    (event: FocusEvent) => {
      if (focusedRef.current && !containsRelatedTarget(event)) {
        _setFocused(false);
        onBlur?.(event);
      }
    },
    [onBlur, _setFocused]
  );

  const nodeRef = useRef<T | null>(null);

  const callbackRef: React.RefCallback<T | null> = useCallback((node) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) {
      return;
    }

    node.addEventListener('focusin', handleFocusIn);
    node.addEventListener('focusout', handleFocusOut);

    return () => {
      node.removeEventListener('focusin', handleFocusIn);
      node.removeEventListener('focusout', handleFocusOut);
    };
  }, [handleFocusIn, handleFocusOut]);

  return { ref: callbackRef, focused };
}
