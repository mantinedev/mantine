import { useState } from 'react';

export function useValidState<T>(
  validation: (value: T) => boolean,
  initialValue?: T
): readonly [validValue: T, setValue: (value: T) => void, value: T] {
  const [lastValue, setLastValue] = useState<T>(initialValue);
  const [lastValid, setLastValid] = useState<T>(initialValue);

  const setValue = (value: T) => {
    if (validation(value)) {
      setLastValid(value);
    }
    setLastValue(value);
  };

  return [lastValid, setValue, lastValue] as const;
}
