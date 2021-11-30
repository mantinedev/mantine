import React, { useState } from 'react';

export function useInputState<T>(initialState: T) {
  const [value, setValue] = useState(initialState);

  const handleChange = (
    val: T | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | Event
  ) => {
    if (!val) {
      setValue(val as T);
    } else if ('nativeEvent' in val) {
      const { currentTarget } = val;

      if (currentTarget.type === 'checkbox' || currentTarget.type === 'radio') {
        setValue((currentTarget as any).checked as any);
      } else {
        setValue(currentTarget.value as any);
      }
    } else if (val instanceof Event) {
      const target = val.target as EventTarget & HTMLInputElement;

      if (target.type === 'checkbox' || target.type === 'radio') {
        setValue(target.checked as any);
      } else {
        setValue(target.value as any);
      }
    } else {
      setValue(val);
    }
  };

  return [value, handleChange] as const;
}
