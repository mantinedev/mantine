import { useCallback, useInsertionEffect, useRef, useState } from 'react';
import { useFormFieldValue } from '../use-form-field/use-form-field';

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

  /** Handler to update the state, passes `value` and `payload` to `onChange`, has the same identity for the lifetime of the component */
  (value: T, ...payload: any[]) => void,

  /** True if the state is controlled, false if uncontrolled */
  boolean,
];

export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  onChange,
}: UseUncontrolledOptions<T>): UseUncontrolledReturnValue<T> {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : finalValue
  );

  const field = useFormFieldValue<T>(onChange);
  const controlled = field.subscribed || value !== undefined;
  const latest = useRef({ onChange, controlled });

  // Insertion effects run before all layout and passive effects of the commit (children included),
  // so a child effect that calls setValue already sees this commit's onChange. Assigning during
  // render is unsafe (discarded renders), useLayoutEffect/useEffect run after child effects.
  useInsertionEffect(() => {
    latest.current = { onChange, controlled };
  });

  const setValue = useCallback((val: T, ...payload: any[]) => {
    if (!latest.current.controlled) {
      setUncontrolledValue(val);
    }

    latest.current.onChange?.(val, ...payload);
  }, []);

  if (field.subscribed) {
    const fallbackValue = defaultValue !== undefined ? defaultValue : finalValue;
    return [(field.value !== undefined ? field.value : fallbackValue) as T, setValue, true];
  }

  if (value !== undefined) {
    return [value as T, setValue, true];
  }

  return [uncontrolledValue as T, setValue, false];
}

export namespace useUncontrolled {
  export type Options<T> = UseUncontrolledOptions<T>;
  export type ReturnValue<T> = UseUncontrolledReturnValue<T>;
}
