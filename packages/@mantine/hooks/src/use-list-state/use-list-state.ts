import { useCallback, useMemo, useState } from 'react';

export interface UseListStateHandlers<T> {
  setState: React.Dispatch<React.SetStateAction<T[]>>;
  append: (...items: T[]) => void;
  prepend: (...items: T[]) => void;
  insert: (index: number, ...items: T[]) => void;
  pop: () => void;
  shift: () => void;
  apply: (fn: (item: T, index?: number) => T) => void;
  applyWhere: (
    condition: (item: T, index: number) => boolean,
    fn: (item: T, index?: number) => T
  ) => void;
  remove: (...indices: number[]) => void;
  reorder: ({ from, to }: { from: number; to: number }) => void;
  swap: ({ from, to }: { from: number; to: number }) => void;
  setItem: (index: number, item: T) => void;
  setItemProp: <K extends keyof T, U extends T[K]>(index: number, prop: K, value: U) => void;
  filter: (fn: (item: T, i: number) => boolean) => void;
}

export type UseListStateReturnValue<T> = [T[], UseListStateHandlers<T>];

export function useListState<T>(initialValue: T[] | (() => T[]) = []): UseListStateReturnValue<T> {
  const [state, setState] = useState(initialValue);

  const append = useCallback((...items: T[]) => setState((current) => [...current, ...items]), []);

  const prepend = useCallback((...items: T[]) => setState((current) => [...items, ...current]), []);

  const insert = useCallback(
    (index: number, ...items: T[]) =>
      setState((current) => [...current.slice(0, index), ...items, ...current.slice(index)]),
    []
  );

  const apply = useCallback(
    (fn: (item: T, index?: number) => T) =>
      setState((current) => current.map((item, index) => fn(item, index))),
    []
  );

  const remove = useCallback(
    (...indices: number[]) =>
      setState((current) => current.filter((_, index) => !indices.includes(index))),
    []
  );

  const pop = useCallback(
    () =>
      setState((current) => {
        const cloned = [...current];
        cloned.pop();
        return cloned;
      }),
    []
  );

  const shift = useCallback(
    () =>
      setState((current) => {
        const cloned = [...current];
        cloned.shift();
        return cloned;
      }),
    []
  );

  const reorder = useCallback(
    ({ from, to }: { from: number; to: number }) =>
      setState((current) => {
        const cloned = [...current];
        const item = current[from];

        cloned.splice(from, 1);
        cloned.splice(to, 0, item);

        return cloned;
      }),
    []
  );

  const swap = useCallback(
    ({ from, to }: { from: number; to: number }) =>
      setState((current) => {
        const cloned = [...current];
        const fromItem = cloned[from];
        const toItem = cloned[to];

        cloned.splice(to, 1, fromItem);
        cloned.splice(from, 1, toItem);

        return cloned;
      }),
    []
  );

  const setItem = useCallback(
    (index: number, item: T) =>
      setState((current) => {
        const cloned = [...current];
        cloned[index] = item;
        return cloned;
      }),
    []
  );

  const setItemProp = useCallback(
    <K extends keyof T, U extends T[K]>(index: number, prop: K, value: U) =>
      setState((current) => {
        const cloned = [...current];
        cloned[index] = { ...cloned[index], [prop]: value };
        return cloned;
      }),
    []
  );

  const applyWhere = useCallback(
    (condition: (item: T, index: number) => boolean, fn: (item: T, index?: number) => T) =>
      setState((current) =>
        current.map((item, index) => (condition(item, index) ? fn(item, index) : item))
      ),
    []
  );

  const filter = useCallback((fn: (item: T, i: number) => boolean) => {
    setState((current) => current.filter(fn));
  }, []);

  const handlers = useMemo(
    () => ({
      setState,
      append,
      prepend,
      insert,
      pop,
      shift,
      apply,
      applyWhere,
      remove,
      reorder,
      swap,
      setItem,
      setItemProp,
      filter,
    }),
    []
  );

  return [state, handlers];
}
