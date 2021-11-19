import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Space } from '../Space';
import { RenderList } from './RenderList/RenderList';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { useSelectionState, Selection } from './use-selection-state/use-selection-state';
import { TransferListData, TransferListItemComponent, TransferListItem } from './types';
import useStyles from './TransferList.styles';

export interface TransferListProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  value: TransferListData;
  onChange(value: TransferListData): void;
  initialSelection?: Selection;
  itemComponent?: TransferListItemComponent;
  searchPlaceholder?: string;
  nothingFound?: React.ReactNode;
  filter?(query: string, item: TransferListItem): boolean;
  titles?: [string, string];
}

export function defaultFilter(query: string, item: TransferListItem) {
  return item.label.toLowerCase().trim().includes(query.toLowerCase().trim());
}

export function TransferList({
  value,
  onChange,
  itemComponent = DefaultItem,
  searchPlaceholder,
  filter = defaultFilter,
  nothingFound,
  className,
  titles = [null, null],
  initialSelection,
  ...others
}: TransferListProps) {
  const { classes, cx } = useStyles();
  const [selection, handlers] = useSelectionState(initialSelection);

  const handleMoveAll = (listIndex: 0 | 1) => {
    const items: TransferListData = Array(2) as any;
    const moveToIndex = listIndex === 0 ? 1 : 0;
    items[listIndex] = [];
    items[moveToIndex] = [...value[listIndex], ...value[moveToIndex]];
    onChange(items);
    handlers.deselectAll(listIndex);
  };

  const handleMove = (listIndex: 0 | 1) => {
    const moveToIndex = listIndex === 0 ? 1 : 0;
    const items: TransferListData = Array(2) as any;
    const transferData = value[listIndex].reduce(
      (acc, item) => {
        if (!selection[listIndex].includes(item.value)) {
          acc.filtered.push(item);
        } else {
          acc.current.push(item);
        }
        return acc;
      },
      { filtered: [], current: [] }
    );
    items[listIndex] = transferData.filtered;
    items[moveToIndex] = [...value[moveToIndex], ...transferData.current];
    onChange(items);
    handlers.deselectAll(listIndex);
  };

  return (
    <div className={cx(classes.root, className)} {...others}>
      <RenderList
        data={value[0]}
        selection={selection[0]}
        onSelect={(val) => handlers.select(0, val)}
        onMoveAll={() => handleMoveAll(0)}
        onMove={() => handleMove(0)}
        itemComponent={itemComponent}
        searchPlaceholder={searchPlaceholder}
        filter={filter}
        nothingFound={nothingFound}
        title={titles[0]}
      />

      <Space w="xl" />

      <RenderList
        data={value[1]}
        selection={selection[1]}
        onSelect={(val) => handlers.select(1, val)}
        onMoveAll={() => handleMoveAll(1)}
        onMove={() => handleMove(1)}
        itemComponent={itemComponent}
        searchPlaceholder={searchPlaceholder}
        filter={filter}
        nothingFound={nothingFound}
        title={titles[1]}
        reversed
      />
    </div>
  );
}
