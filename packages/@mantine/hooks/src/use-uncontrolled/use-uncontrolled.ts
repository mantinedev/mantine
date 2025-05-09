import { useState } from 'react';

export interface UseUncontrolledOptions<T> {
  /** Value for controlled state */
  value?: T;

  /** Initial value for uncontrolled state */
  defaultValue?: T;

  /** Final value for uncontrolled state when value and defaultValue are not provided */
  finalValue?: T;

  /** Controlled state onChange handler */
  onChange?: (value: T, ...payload: any[]) => void;
}

export type UseUncontrolledReturnValue<T> = [
  /** Current value */
  T,

  /** Handler to update the state, passes `value` and `payload` to `onChange` */
  (value: T, ...payload: any[]) => void,

  /** True if the state is controlled, false if uncontrolled */
  boolean,
];

export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  onChange = () => {},
}: UseUncontrolledOptions<T>): UseUncontrolledReturnValue<T> {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : finalValue
  );

  const handleUncontrolledChange = (val: T, ...payload: any[]) => {
    setUncontrolledValue(val);
    onChange?.(val, ...payload);
  };

  if (value !== undefined) {
    return [value as T, onChange, true];
  }

  return [uncontrolledValue as T, handleUncontrolledChange, false];
}
