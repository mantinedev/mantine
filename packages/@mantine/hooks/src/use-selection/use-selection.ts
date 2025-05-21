import { useCallback, useState } from 'react';

type SelectionHandlers<T> = {
  select: (item: T) => void;
  deselect: (item: T) => void;
  toggle: (item: T) => void;
  isAllSelected: () => boolean;
  isSomeSelected: () => boolean;
  setSelection: (items: T[]) => void;
  resetSelection: () => void;
};

export const useSelection = <T>(
  data: T[],
  initialSelection: T[] = [] // Added initialSelection
): [T[], SelectionHandlers<T>] => {
  const [selected, setSelected] = useState<Set<T>>(new Set(initialSelection)); // Use initialSelection

  const select = useCallback((item: T) => {
    setSelected((prev) => {
      if (prev.has(item)) { // If item is already selected
        return prev; // Return previous Set instance to avoid unnecessary re-render
      }
      const next = new Set(prev);
      next.add(item);
      return next;
    });
  }, []);

  const deselect = useCallback((item: T) => {
    setSelected((prev) => {
      if (!prev.has(item)) { // If item is not in the selection
        return prev; // Return previous Set instance
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
    () => selected.size > 0 && !isAllSelected(), // Updated logic
    [selected, isAllSelected] // isAllSelected is a dependency
  );

  const setSelection = useCallback((items: T[]) => {
    setSelected(new Set(items));
  }, []);

  const resetSelection = useCallback(() => {
    setSelected((prev) => {
      if (prev.size === 0) { // If already empty
        return prev; // Return previous Set instance
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
};
