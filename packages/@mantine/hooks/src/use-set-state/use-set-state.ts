import { useCallback, useState } from 'react';

export type UseSetStateCallback<T> = (
  state: Partial<T> | ((currentState: T) => Partial<T>)
) => void;

export type UseSetStateReturnValue<T> = [T, UseSetStateCallback<T>];

export function useSetState<T extends Record<string, any>>(
  initialState: T
): UseSetStateReturnValue<T> {
  const [state, setState] = useState(initialState);

  const _setState: UseSetStateCallback<T> = useCallback(
    (statePartial) =>
      setState((current) => ({
        ...current,
        ...(typeof statePartial === 'function' ? statePartial(current) : statePartial),
      })),
    []
  );

  return [state, _setState];
}

export namespace useSetState {
  export type Callback<T> = UseSetStateCallback<T>;
  export type ReturnValue<T> = UseSetStateReturnValue<T>;
}
