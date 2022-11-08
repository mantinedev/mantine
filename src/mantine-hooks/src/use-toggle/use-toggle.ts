import { useReducer } from 'react';
import { isFunction } from '../utils';

export function useToggle<T = boolean>(options: readonly T[] = [false, true] as any) {
  const [[option], toggle] = useReducer((state: T[], action: React.SetStateAction<T>) => {
    const value = isFunction(action) ? action(state[0]) : action;
    const index = Math.abs(state.indexOf(value));

    return state.slice(index).concat(state.slice(0, index));
  }, options as T[]);

  return [option, toggle as (value?: React.SetStateAction<T>) => void] as const;
}
