import { useState } from 'react';

export type UseToggle<T> = readonly [T, (value?: React.SetStateAction<T>) => void];

export function useToggle<T>(initialValue: T, options: [T, T]): UseToggle<T> {
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

  return [state, toggle];
}

export function useBooleanToggle(initialValue = false) {
  return useToggle(initialValue, [true, false]);
}
