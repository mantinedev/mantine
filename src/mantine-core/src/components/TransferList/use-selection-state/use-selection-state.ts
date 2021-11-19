import { useState } from 'react';

export type Selection = [string[], string[]];

export function useSelectionState(initialSelection: Selection = [[], []]) {
  const [selection, setSelection] = useState<Selection>(initialSelection);

  const handleSelect = (listIndex: 0 | 1, value: string) =>
    setSelection((currentSelection) => {
      const listSelection = currentSelection[listIndex];
      let result = listSelection;

      if (typeof value === 'string') {
        if (listSelection.includes(value)) {
          result = listSelection.filter((item) => item !== value);
        } else {
          result = [...listSelection, value];
        }
      }

      const clone: Selection = [...currentSelection];
      clone[listIndex] = result;
      return clone;
    });

  const handleDeselect = (listIndex: 0 | 1, values: string[]) =>
    setSelection((currentSelection) => {
      const clone: Selection = [...currentSelection];
      clone[listIndex] = currentSelection[listIndex].filter((item) => !values.includes(item));
      return clone;
    });

  const handleDeselectAll = (listIndex: 0 | 1) =>
    setSelection((currentSelection) => {
      const clone: Selection = [...currentSelection];
      clone[listIndex] = [];
      return clone;
    });

  const handlers = {
    select: handleSelect,
    deselect: handleDeselect,
    deselectAll: handleDeselectAll,
  };

  return [selection, handlers] as const;
}
