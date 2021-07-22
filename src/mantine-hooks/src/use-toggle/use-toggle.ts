import { useState } from 'react';

export function useToggle<T>(initialValue: T, options: [T, T]) {
  const [state, setState] = useState(initialValue);

  const toggle = (value?: React.SetStateAction<T>) => {
    if (typeof value !== 'undefined') {
      setState(value);
    } else {
      setState((current) => {
        if (current === options[0]) {
          return options[1];
        }

        return options[0];
      });
    }
  };

  return [state, toggle] as const;
}

export function useBooleanToggle(initialValue = false) {
  return useToggle(initialValue, [true, false]);
}
