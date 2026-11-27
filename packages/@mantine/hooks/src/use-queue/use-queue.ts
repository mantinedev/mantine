import { useMemo, useState } from 'react';

export interface UseQueueOptions<T> {
  /** Initial values to be added to the queue */
  initialValues?: T[];

  /** Maximum number of items in the state */
  limit: number;
}

export interface UseQueueReturnValue<T> {
  /** Array of items in the queue */
  queue: T[];

  /** Array of items in the state */
  state: T[];

  /** Function to add items to state or queue */
  add: (...items: T[]) => void;

  /** Function to apply updates to current items */
  update: (fn: (state: T[]) => T[]) => void;

  /** Function to clear the queue */
  cleanQueue: () => void;
}

export function useQueue<T>({
  initialValues = [],
  limit,
}: UseQueueOptions<T>): UseQueueReturnValue<T> {
  const [items, setItems] = useState<T[]>(() => [...initialValues]);
  const [state, queue] = useMemo(() => [items.slice(0, limit), items.slice(limit)], [items, limit]);

  const add = (...newItems: T[]) => setItems((current) => [...current, ...newItems]);

  const update = (fn: (values: T[]) => T[]) => setItems((current) => [...fn([...current])]);

  const cleanQueue = () => setItems((current) => current.slice(0, limit));

  return {
    state,
    queue,
    add,
    update,
    cleanQueue,
  };
}

export namespace useQueue {
  export type Options<T> = UseQueueOptions<T>;
  export type ReturnValue<T> = UseQueueReturnValue<T>;
}
