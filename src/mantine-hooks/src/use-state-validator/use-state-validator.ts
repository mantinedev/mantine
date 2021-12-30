import { useState } from 'react';

export function useStateValidator<T>(
  initialValue: T | null | undefined,
  validator: (val: T | null | undefined) => boolean
) {
  let isValid = validator(initialValue);
  const [valid, setValid] = useState<boolean>(isValid);
  const [value, setValue] = useState<T | null | undefined>(isValid ? initialValue : undefined);

  const handleChange = (nextValue: T | null) => {
    isValid = validator(nextValue);
    if (isValid) setValue(nextValue);
    setValid(isValid);
  };

  return [value, handleChange, valid] as const;
}
