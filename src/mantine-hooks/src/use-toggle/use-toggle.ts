import { useState } from 'react';

export function useToggle<T = boolean>(options: readonly [T, T] = [false, true] as any) {
  const [state, setState] = useState(options[0]);

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
