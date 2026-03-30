import { useCallback, useState } from 'react';
import { useDidUpdate } from '../use-did-update/use-did-update';

export interface UseSelectionInput<T> {
  /** The array of items to select from */
  data: T[];

  /** The initial selection, empty array by default */
  defaultSelection?: T[];

  /** If true, selection is reset when data changes */
  resetSelectionOnDataChange?: boolean;
}

export interface UseSelectionHandlers<T> {
  /** Add an item to the selection */
  select: (selected: T) => void;

  /** Remove an item from the selection */
  deselect: (deselected: T) => void;

  /** Toggle an item's selection state */
  toggle: (toggled: T) => void;

  /** Returns true if all items from the `data` are selected */
  isAllSelected: () => boolean;

  /** Returns true if at least one item from the `data` is selected */
  isSomeSelected: () => boolean;

  /** Set the selection to a specific array of items */
  setSelection: (selection: T[]) => void;

  /** Clear all selections */
  resetSelection: () => void;
}

export type UseSelectionReturnValue<T> = readonly [T[], UseSelectionHandlers<T>];

export function useSelection<T>(input: UseSelectionInput<T>): UseSelectionReturnValue<T> {
  const [selectionSet, setSelectionSet] = useState<Set<T>>(new Set(input.defaultSelection || []));

  useDidUpdate(() => {
    if (input.resetSelectionOnDataChange) {
      setSelectionSet(new Set());
    }
  }, [input.data, input.resetSelectionOnDataChange]);

  const select = useCallback((selected: T) => {
    setSelectionSet((state) => {
      if (!state.has(selected)) {
        const newSet = new Set(state);
        newSet.add(selected);
        return newSet;
      }
      return state;
    });
  }, []);

  const deselect = useCallback((deselected: T) => {
    setSelectionSet((state) => {
      if (state.has(deselected)) {
        const newSet = new Set(state);
        newSet.delete(deselected);
        return newSet;
      }
      return state;
    });
  }, []);

  const toggle = useCallback((toggled: T) => {
    setSelectionSet((state) => {
      const newSet = new Set(state);
      if (state.has(toggled)) {
        newSet.delete(toggled);
      } else {
        newSet.add(toggled);
      }
      return newSet;
    });
  }, []);

  const resetSelection = useCallback(() => {
    setSelectionSet(new Set());
  }, []);

  const setSelection = useCallback((selection: T[]) => {
    setSelectionSet(new Set(selection));
  }, []);

  const isAllSelected = useCallback(() => {
    if (input.data.length === 0) {
      return false;
    }
    return input.data.every((item) => selectionSet.has(item));
  }, [selectionSet, input.data]);

  const isSomeSelected = useCallback(() => {
    return input.data.some((item) => selectionSet.has(item));
  }, [selectionSet, input.data]);

  return [
    Array.from(selectionSet),
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

export namespace useSelection {
  export type Input<T> = UseSelectionInput<T>;
  export type Handlers<T> = UseSelectionHandlers<T>;
  export type ReturnValue<T> = UseSelectionReturnValue<T>;
}
