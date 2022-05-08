import React, { useState } from 'react';

export interface UseListStateHandler<T> {
  setState: React.Dispatch<React.SetStateAction<T[]>>;
  append: (...items: T[]) => T[];
  prepend: (...items: T[]) => T[];
  insert: (index: number, ...items: T[]) => T[];
  pop: () => T[];
  shift: () => T[];
  apply: (fn: (item: T, index?: number) => T) => T[];
  applyWhere: (
    condition: (item: T, index: number) => boolean,
    fn: (item: T, index?: number) => T
  ) => T[];
  remove: (...indices: number[]) => T[];
  reorder: ({ from, to }: { from: number; to: number }) => T[];
  setItem: (index: number, item: T) => T[];
  setItemProp: <K extends keyof T, U extends T[K]>(index: number, prop: K, value: U) => T[];
}

export type UseListState<T> = [T[], UseListStateHandler<T>];

export function useListState<T>(initialValue: T[] = []): UseListState<T> {
  const [state, setState] = useState(initialValue);

  const append = (...items: T[]): T[] => {
    const newState = [...state, ...items];
    setState(newState);
    return newState;
  };

  const prepend = (...items: T[]): T[] => {
    const newState = [...items, ...state];
    setState(newState);
    return newState;
  };

  const insert = (index: number, ...items: T[]): T[] => {
    const newState = [...state.slice(0, index), ...items, ...state.slice(index)];
    setState(newState);
    return newState;
  };

  const apply = (fn: (item: T, index?: number) => T): T[] => {
    const newState = state.map((item, index) => fn(item, index));
    setState(newState);
    return newState;
  };

  const remove = (...indices: number[]): T[] => {
    const newState = state.filter((_, index) => !indices.includes(index));
    setState(newState);
    return newState;
  };

  const pop = (): T[] => {
    const cloned = [...state];
    cloned.pop();
    setState(cloned);
    return cloned;
  };

  const shift = (): T[] => {
    const cloned = [...state];
    cloned.shift();
    setState(cloned);
    return cloned;
  };

  const reorder = ({ from, to }: { from: number; to: number }): T[] => {
    const cloned = [...state];
    const item = state[from];

    cloned.splice(from, 1);
    cloned.splice(to, 0, item);

    setState(cloned);
    return cloned;
  };

  const setItem = (index: number, item: T): T[] => {
    const cloned = [...state];
    cloned[index] = item;
    setState(cloned);
    return cloned;
  };

  const setItemProp = <K extends keyof T, U extends T[K]>(
    index: number,
    prop: K,
    value: U
  ): T[] => {
    const cloned = [...state];
    cloned[index] = { ...cloned[index], [prop]: value };
    setState(cloned);
    return cloned;
  };

  const applyWhere = (
    condition: (item: T, index: number) => boolean,
    fn: (item: T, index?: number) => T
  ): T[] => {
    const newState = state.map((item, index) => (condition(item, index) ? fn(item, index) : item));
    setState(newState);
    return newState;
  };

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
  ];
}
