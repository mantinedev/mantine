import { useCallback, useMemo, useState } from 'react';

export interface UseStateHistoryHandlers<T> {
  set: (value: T) => void;
  back: (steps?: number) => void;
  forward: (steps?: number) => void;
  reset: () => void;
}

export interface StateHistory<T> {
  history: T[];
  current: number;
}

export function useStateHistory<T>(
  initialValue: T
): [T, UseStateHistoryHandlers<T>, StateHistory<T>] {
  const [state, setState] = useState<StateHistory<T>>({
    history: [initialValue],
    current: 0,
  });

  const set = useCallback(
    (val: T) =>
      setState((currentState) => {
        const nextState = [...currentState.history.slice(0, currentState.current + 1), val];
        return {
          history: nextState,
          current: nextState.length - 1,
        };
      }),
    []
  );

  const back = useCallback(
    (steps = 1) =>
      setState((currentState) => ({
        history: currentState.history,
        current: Math.max(0, currentState.current - steps),
      })),
    []
  );

  const forward = useCallback(
    (steps = 1) =>
      setState((currentState) => ({
        history: currentState.history,
        current: Math.min(currentState.history.length - 1, currentState.current + steps),
      })),
    []
  );

  const reset = useCallback(() => {
    setState({ history: [initialValue], current: 0 });
  }, [initialValue]);

  const handlers = useMemo(() => ({ back, forward, reset, set }), [back, forward, reset, set]);

  return [state.history[state.current], handlers, state];
}
