import { useEffect, useState } from 'react';

export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  rule,
  onChange,
}: {
  value: T;
  defaultValue: T;
  finalValue: T;
  onChange(value: T): void;
  rule: (value: T) => boolean;
}) {
  const initialValue = rule(value) ? value : rule(defaultValue) ? defaultValue : finalValue;
  const [_value, setValue] = useState(initialValue);

  const handleChange = (val: T) => {
    typeof onChange === 'function' && onChange(val);
    setValue(val);
  };

  useEffect(() => {
    if (rule(value)) {
      setValue(value);
    }
  }, [value]);

  return [_value, handleChange] as const;
}
