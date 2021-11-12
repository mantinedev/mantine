import { useState } from 'react';

export function useListState<T>(initialValue: T[] = []) {
  const [state, setState] = useState(initialValue);

  const append = (...items: T[]) => setState((current) => [...current, ...items]);
  const prepend = (...items: T[]) => setState((current) => [...items, ...current]);

  const insert = (index: number, ...items: T[]) =>
    setState((current) => [...current.slice(0, index), ...items, ...current.slice(index)]);

  const apply = (fn: (item: T, index?: number) => T) =>
    setState((current) => current.map((item, index) => fn(item, index)));

  const remove = (...indices: number[]) =>
    setState((current) => current.filter((_, index) => !indices.includes(index)));

  const pop = () =>
    setState((current) => {
      const cloned = [...current];
      cloned.pop();
      return cloned;
    });

  const shift = () =>
    setState((current) => {
      const cloned = [...current];
      cloned.shift();
      return cloned;
    });

  const reorder = ({ from, to }: { from: number; to: number }) =>
    setState((current) => {
      const cloned = [...current];
      const item = current[from];

      cloned.splice(from, 1);
      cloned.splice(to, 0, item);

      return cloned;
    });

  const setItem = (index: number, item: T) =>
    setState((current) => {
      const cloned = [...current];
      cloned[index] = item;
      return cloned;
    });

  const setItemProp = <K extends keyof T, U extends T[K]>(index: number, prop: K, value: U) =>
    setState((current) => {
      const cloned = [...current];
      cloned[index] = { ...cloned[index], [prop]: value };
      return cloned;
    });

  const applyWhere = (
    condition: (item: T, index?: number) => boolean,
    fn: (item: T, index?: number) => T
  ) => setState((current) => current.map((item) => (condition(item) ? fn(item) : item)));

  return [
    state,
    {
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
      setItem,
      setItemProp,
    },
  ] as const;
}
