import { useEffect, useRef, useState } from 'react';

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
}: UseFocusWithinOptions = {}): { ref: React.RefObject<T>; focused: boolean } {
  const ref = useRef<T>(null);
  const [focused, setFocused] = useState(false);
  const focusedRef = useRef(false);

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

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('focusin', handleFocusIn);
      node.addEventListener('focusout', handleFocusOut);

      return () => {
        node?.removeEventListener('focusin', handleFocusIn);
        node?.removeEventListener('focusout', handleFocusOut);
      };
    }

    return undefined;
  }, [handleFocusIn, handleFocusOut]);

  return { ref: ref as React.RefObject<T>, focused };
}
