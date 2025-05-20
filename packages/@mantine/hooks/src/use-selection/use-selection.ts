import { useCallback, useState } from 'react';


interface SelectionHandlers<T> {
  select: (item: T) => void;
  deselect: (item: T) => void;
  toggle: (item: T) => void;
  isAllSelected: () => boolean;
  isSomeSelected: () => boolean;
  setSelection: (items: T[]) => void;
  resetSelection: () => void;
}

export const useSelection = <T>(data: T[]): [T[], SelectionHandlers<T>] => {
  const [selected, setSelected] = useState<Set<T>>(new Set());

  const select = useCallback((item: T) => {
    setSelected((prev) => new Set(prev).add(item));
  }, []);

  const deselect = useCallback((item: T) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(item);
      return next;
    });
  }, []);

  const toggle = useCallback((item: T) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(item) ? next.delete(item) : next.add(item);
      return next;
    });
  }, []);

  const isAllSelected = useCallback(
    () => data.length > 0 && data.every((item) => selected.has(item)),
    [data, selected]
  );

  const isSomeSelected = useCallback(
    () => data.some((item) => selected.has(item)),
    [data, selected]
  );

  const setSelection = useCallback((items: T[]) => setSelected(new Set(items)), []);

  const resetSelection = useCallback(() => setSelected(new Set()), []);

  return [
    Array.from(selected),
    {
      select,
      deselect,
      toggle,
      isAllSelected,
      isSomeSelected,
      setSelection,
      resetSelection,
    },
  ];
};
