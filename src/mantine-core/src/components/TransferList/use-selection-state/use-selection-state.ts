import { useState } from 'react';

type Selection = [string[], string[]];

export function useSelectionState() {
  const [selection, setSelection] = useState<Selection>([[], []]);

  const handleSelect = (listIndex: 0 | 1, value: string | string[]) =>
    setSelection((currentSelection) => {
      const listSelection = currentSelection[listIndex];
      let result = listSelection;

      if (typeof value === 'string') {
        if (listSelection.includes(value)) {
          result = listSelection.filter((item) => item !== value);
        } else {
          result = [...listSelection, value];
        }
      } else {
        result = [...new Set([...listSelection, ...value])];
      }

      const clone: Selection = [...currentSelection];
      clone[listIndex] = result;
      return clone;
    });

  return [selection, handleSelect] as const;
}
