import { useRef, useState, useEffect } from 'react';

interface UseFocusWithinOptions {
  onFocus?(event: FocusEvent): void;
  onBlur?(event: FocusEvent): void;
}

export function useFocusWithin<T extends HTMLElement = any>({
  onBlur,
  onFocus,
}: UseFocusWithinOptions = {}): { ref: React.MutableRefObject<T>; focused: boolean } {
  const ref = useRef<T>();
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('focusin', (event) => {
        setFocused(true);
        onFocus?.(event);
      });

      ref.current.addEventListener('focusout', (event) => {
        setFocused(false);
        onBlur?.(event);
      });
    }
  }, []);

  return { ref, focused };
}
