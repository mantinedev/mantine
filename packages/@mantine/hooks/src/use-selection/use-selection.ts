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

export function useSelection<T>(data: T[], initialSelection?: T[]): [T[], SelectionHandlers<T>] {
  const [selected, setSelected] = useState<Set<T>>(new Set(initialSelection || []));

  const select = useCallback((item: T) => {
    setSelected((prev) => {
      if (prev.has(item)) {
        return prev;
      }
      const next = new Set(prev);
      next.add(item);
      return next;
    });
  }, []);

  const deselect = useCallback((item: T) => {
    setSelected((prev) => {
      if (!prev.has(item)) {
        return prev;
      }
      const next = new Set(prev);
      next.delete(item);
      return next;
    });
  }, []);

  const toggle = useCallback((item: T) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  }, []);

  const isAllSelected = useCallback(
    () => data.length > 0 && data.every((item) => selected.has(item)),
    [data, selected]
  );

  const isSomeSelected = useCallback(
    () => data.length > 0 && selected.size > 0 && !isAllSelected(),
    [data, selected, isAllSelected]
  );

  const setSelection = useCallback((items: T[]) => setSelected(new Set(items)), []);

  const resetSelection = useCallback(() => {
    setSelected((prev) => {
      if (prev.size === 0) {
        return prev;
      }
      return new Set();
    });
  }, []);

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
}
