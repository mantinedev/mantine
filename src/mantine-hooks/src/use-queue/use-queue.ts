import { useState } from 'react';

export interface UseQueue<T> {
  state: T[];
  queue: T[];
  add: (...items: T[]) => void;
  update: (fn: (state: T[]) => T[]) => void;
  cleanQueue: () => void;
}

export function useQueue<T>({
  initialValues = [],
  limit,
}: {
  initialValues?: T[];
  limit: number;
}): UseQueue<T> {
  const [{ state, queue }, setState] = useState({
    state: initialValues.slice(0, limit),
    queue: initialValues.slice(limit),
  });

  const add = (...items: T[]) =>
    setState((current) => {
      const results = [...current.state, ...current.queue, ...items];

      return {
        state: results.slice(0, limit),
        queue: results.slice(limit),
      };
    });

  const update = (fn: (state: T[]) => T[]) =>
    setState((current) => {
      const results = fn([...current.state, ...current.queue]);

      return {
        state: results.slice(0, limit),
        queue: results.slice(limit),
      };
    });

  const cleanQueue = () => setState((current) => ({ state: current.state, queue: [] }));

  return {
    state,
    queue,
    add,
    update,
    cleanQueue,
  };
}
