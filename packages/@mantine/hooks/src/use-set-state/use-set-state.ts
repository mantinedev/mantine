import { useCallback, useState } from 'react';

export function useSetState<T extends Record<string, any>>(initialState: T) {
  const [state, setState] = useState(initialState);

  const _setState = useCallback(
    (statePartial: Partial<T> | ((currentState: T) => Partial<T>)) =>
      setState((current) => ({
        ...current,
        ...(typeof statePartial === 'function' ? statePartial(current) : statePartial),
      })),
    []
  );

  return [state, _setState] as const;
}
