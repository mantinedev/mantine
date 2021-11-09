import { useState } from 'react';

export function useSetState<T extends Record<string, any>>(initialState: T) {
  const [state, _setState] = useState(initialState);
  const setState = (statePartial: Partial<T>) =>
    _setState((current) => ({ ...current, ...statePartial }));
  return [state, setState] as const;
}
