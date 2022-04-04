import { useRef, useState, useCallback } from 'react';

interface UseUncontrolledInput<T> {
  /** Value for controlled state */
  value?: T;

  /** Initial value for uncontrolled state */
  defaultValue?: T;

  /** Final value for uncontrolled state when value and defaultValue are not provided */
  finalValue?: T;

  /** Controlled state onChange handler */
  onChange?(value: T): void;

  /** Message of error that will be thrown when state is controlled and onChange handler is not a function */
  errorMessage: string;
}

export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  onChange,
  errorMessage,
}: UseUncontrolledInput<T>): [T, (value: T) => void] {
  const controlled = useRef(value !== undefined);
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : finalValue
  );

  const handleControlledChange = useCallback(
    (val: T) => {
      if (typeof onChange !== 'function') {
        throw new Error(errorMessage);
      }

      onChange(val);
    },
    [onChange]
  );

  if (controlled.current) {
    return [value as T, handleControlledChange];
  }

  return [uncontrolledValue as T, setUncontrolledValue];
}
