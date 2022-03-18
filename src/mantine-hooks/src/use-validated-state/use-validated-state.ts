import { useState } from 'react';

export type UseValidatedState<T> = readonly [
  {
    readonly value: T;
    readonly lastValidValue: T;
    readonly valid: boolean;
  },
  (val: T) => void
];

export function useValidatedState<T>(
  initialValue: T,
  validation: (value: T) => boolean
): UseValidatedState<T> {
  const [value, setValue] = useState<T>(initialValue);
  const [lastValidValue, setLastValidValue] = useState<T>(
    validation(initialValue) ? initialValue : undefined
  );
  const [valid, setValid] = useState<boolean>(validation(initialValue));

  const onChange = (val: T) => {
    if (validation(val)) {
      setLastValidValue(val);
      setValid(true);
    } else {
      setValid(false);
    }

    setValue(val);
  };

  return [{ value, lastValidValue, valid }, onChange];
}
