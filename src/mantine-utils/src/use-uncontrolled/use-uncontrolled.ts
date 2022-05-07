import { useRef, useState } from 'react';
import { noop } from '../noop/noop';

interface UseUncontrolledInput<T> {
  /** Value for controlled state */
  value?: T;

  /** Initial value for uncontrolled state */
  defaultValue?: T;

  /** Final value for uncontrolled state when value and defaultValue are not provided */
  finalValue?: T;

  /** Controlled state onChange handler */
  onChange?(value: T): void;
}

export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  onChange = noop,
}: UseUncontrolledInput<T>): [T, (value: T) => void] {
  const controlled = useRef(value !== undefined);
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : finalValue
  );

  if (controlled.current) {
    return [value as T, onChange];
  }

  return [uncontrolledValue as T, setUncontrolledValue];
}
