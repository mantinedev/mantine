import { useState } from 'react';

export function useStateValidator<T>(
  initialValue: T | null | undefined,
  validator: (val: T | null | undefined) => boolean
) {
  const isValid = validator(initialValue);
  const [valid, setValid] = useState<boolean>(isValid);
  const [value, setValue] = useState<T | null | undefined>(initialValue);

  const handleChange = (nextValue: T | null | undefined | ((prevValue: T) => T)) => {
    let newValue: any = nextValue;
    if (nextValue instanceof Function) {
      newValue = nextValue(value);
    }
    setValue(newValue);
    setValid(validator(newValue));
  };

  return [value, handleChange, valid] as const;
}
