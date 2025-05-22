import { useCallback, useMemo, useState } from 'react';

export const useSelection = <T>(data: Readonly<T[]>) => {
  const [selection, setSelection] = useState<Readonly<T[]>>([]);

  const select = useCallback(
    (selected: T) => {
      setSelection((state) => {
        if (!state.includes(selected)) {
          return [...state, selected];
        }

        return state;
      });
    },
    [setSelection]
  );

  const deselect = useCallback(
    (deselected: T) => {
      setSelection((state) => {
        if (state.includes(deselected)) {
          return state.filter((v) => v !== deselected);
        }

        return state;
      });
    },
    [setSelection]
  );

  const toggle = useCallback(
    (toggled: T) => {
      setSelection((state) => {
        if (!state.includes(toggled)) {
          return [...state, toggled];
        }

        return state.filter((value) => value !== toggled);
      });
    },
    [setSelection]
  );

  const resetSelection = useCallback(() => {
    setSelection([]);
  }, [setSelection]);

  const isAllSelected = useMemo(() => {
    if (data.length === 0) {
      return false;
    }

    return selection.length === data.length;
  }, [selection, data]);

  const isSomeSelected = useMemo(() => {
    return selection.length > 0;
  }, [selection]);

  return [
    selection,
    {
      select,
      deselect,
      toggle,
      isAllSelected,
      isSomeSelected,
      setSelection,
      resetSelection,
    },
  ] as const;
};
