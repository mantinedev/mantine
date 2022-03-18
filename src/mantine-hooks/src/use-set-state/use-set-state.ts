import { useState } from 'react';

export type UseSetState<T> = readonly [
  T,
  (statePartial: Partial<T> | ((currentState: T) => Partial<T>)) => void
];

export function useSetState<T extends Record<string, any>>(initialState: T): UseSetState<T> {
  const [state, _setState] = useState(initialState);
  const setState = (statePartial: Partial<T> | ((currentState: T) => Partial<T>)) =>
    _setState((current) => ({
      ...current,
      ...(typeof statePartial === 'function' ? statePartial(current) : statePartial),
    }));
  return [state, setState];
}
