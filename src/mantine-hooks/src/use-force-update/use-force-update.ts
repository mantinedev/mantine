import { useReducer } from 'react';

const reducer = (value: number) => (value + 1) % 1000000;

export function useForceUpdate(): () => void {
  const [, update] = useReducer(reducer, 0);
  return update;
}
