import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { RenderList } from './RenderList/RenderList';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { useSelectionState } from './use-selection-state/use-selection-state';
import { TransferListData, TransferListItemComponent } from './types';

export interface TransferListProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  data: TransferListData;
  onChange(value: TransferListData): void;
  itemComponent?: TransferListItemComponent;
}

export function TransferList({
  data,
  onChange,
  itemComponent = DefaultItem,
  ...others
}: TransferListProps) {
  const [selection, setSelection] = useSelectionState();

  return (
    <div {...others}>
      <RenderList
        data={data[0]}
        selection={selection[0]}
        onSelect={(value) => setSelection(0, value)}
        itemComponent={itemComponent}
      />

      <div>Controls</div>

      <RenderList
        data={data[1]}
        selection={selection[1]}
        onSelect={(value) => setSelection(1, value)}
        itemComponent={itemComponent}
      />
    </div>
  );
}
