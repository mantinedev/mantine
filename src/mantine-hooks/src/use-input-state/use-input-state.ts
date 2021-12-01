import React, { useState } from 'react';

export function useInputState<T>(initialState: T) {
  const [value, setValue] = useState(initialState);

  const handleChange = (val: T | React.ChangeEvent<any> | ((current: T) => T)) => {
    if (!val) {
      setValue(val as T);
    } else if (typeof val === 'function') {
      setValue(val);
    } else if (typeof val === 'object' && 'nativeEvent' in val) {
      const { currentTarget } = val;

      if (currentTarget.type === 'checkbox') {
        setValue((currentTarget as any).checked as any);
      } else {
        setValue(currentTarget.value as any);
      }
    } else {
      setValue(val);
    }
  };

  return [value, handleChange] as const;
}
