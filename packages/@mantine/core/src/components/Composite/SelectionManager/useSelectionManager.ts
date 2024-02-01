import { useMemo } from 'react';
import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import { CompositeSelectionState } from '../Composite.types';
import { FocusManager } from '../FocusManager/FocusManager';
import { SelectionManager, SelectionOptions } from './SelectionManager';

export const useSelectionManager = (
  focusManager: FocusManager,
  options: SelectionOptions,
  selectionState?: CompositeSelectionState
) => {
  const [selectedKeys, changeSelectedKeys] = useUncontrolled({ ...selectionState, finalValue: [] });

  const selectionManager = useMemo<SelectionManager>(
    () =>
      new SelectionManager(
        focusManager,
        {
          initialSelections: selectedKeys as number[],
          onSelectionChange: changeSelectedKeys,
        },
        options
      ),
    [focusManager, options]
  );

  useDidUpdate(() => {
    selectionManager.setSelections(selectedKeys);
  }, [selectedKeys]);

  return [selectedKeys, selectionManager] as const;
};
