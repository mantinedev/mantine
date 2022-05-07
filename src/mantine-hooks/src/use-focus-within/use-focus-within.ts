import { useRef, useState, useEffect } from 'react';

export interface UseFocusWithinOptions {
  onFocus?(event: FocusEvent): void;
  onBlur?(event: FocusEvent): void;
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
}: UseFocusWithinOptions = {}): { ref: React.MutableRefObject<T>; focused: boolean } {
  const ref = useRef<T>();
  const [focused, _setFocused] = useState(false);
  const focusedRef = useRef(false);
  const setFocused = (value: boolean) => {
    _setFocused(value);
    focusedRef.current = value;
  };

  const handleFocusIn = (event: FocusEvent) => {
    if (!focusedRef.current) {
      setFocused(true);
      onFocus?.(event);
    }
  };

  const handleFocusOut = (event: FocusEvent) => {
    if (focusedRef.current && !containsRelatedTarget(event)) {
      setFocused(false);
      onBlur?.(event);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('focusin', handleFocusIn);
      ref.current.addEventListener('focusout', handleFocusOut);

      return () => {
        ref.current?.removeEventListener('focusin', handleFocusIn);
        ref.current?.removeEventListener('focusout', handleFocusOut);
      };
    }

    return undefined;
  }, []);

  return { ref, focused };
}
