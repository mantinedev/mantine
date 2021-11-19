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
  data: TransferListData;
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
  data,
  onChange,
  itemComponent = DefaultItem,
  searchPlaceholder,
  filter = defaultFilter,
  nothingFound,
  className,
  titles = ['', ''],
  initialSelection,
  ...others
}: TransferListProps) {
  const { classes, cx } = useStyles();
  const [selection, handlers] = useSelectionState(initialSelection);

  return (
    <div className={cx(classes.root, className)} {...others}>
      <RenderList
        data={data[0]}
        selection={selection[0]}
        onSelect={(value) => handlers.select(0, value)}
        itemComponent={itemComponent}
        searchPlaceholder={searchPlaceholder}
        filter={filter}
        nothingFound={nothingFound}
        title={titles[0]}
      />

      <Space w="xl" />

      <RenderList
        data={data[1]}
        selection={selection[1]}
        onSelect={(value) => handlers.select(1, value)}
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
