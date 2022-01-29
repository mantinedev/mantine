import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { RenderList, RenderListStylesNames } from './RenderList/RenderList';
import { SelectScrollArea } from '../Select/SelectScrollArea/SelectScrollArea';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { SimpleGrid } from '../SimpleGrid';
import { useSelectionState, Selection } from './use-selection-state/use-selection-state';
import { TransferListData, TransferListItemComponent, TransferListItem } from './types';

export type TransferListStylesNames = RenderListStylesNames;

export interface TransferListProps
  extends DefaultProps<TransferListStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Current value */
  value: TransferListData;

  /** Called when value changes */
  onChange(value: TransferListData): void;

  /** Initial items selection */
  initialSelection?: Selection;

  /** Custom item component */
  itemComponent?: TransferListItemComponent;

  /** Search fields placeholder */
  searchPlaceholder?: string;

  /** Nothing found message */
  nothingFound?: React.ReactNode;

  /** Function to filter search results */
  filter?(query: string, item: TransferListItem): boolean;

  /** Lists titles */
  titles?: [string, string];

  /** List items height */
  listHeight?: number;

  /** Change list component, can be used to add custom scrollbars */
  listComponent?: any;

  /** Breakpoint at which list will collapse to single column layout */
  breakpoint?: MantineNumberSize;

  /** Whether to hide the transfer all button */
  showTransferAll?: boolean;

  /** Limit amount of items showed at a time */
  limit?: number;
}

export function defaultFilter(query: string, item: TransferListItem) {
  return item.label.toLowerCase().trim().includes(query.toLowerCase().trim());
}

export const TransferList = forwardRef<HTMLDivElement, TransferListProps>(
  (
    {
      value,
      onChange,
      itemComponent = DefaultItem,
      searchPlaceholder,
      filter = defaultFilter,
      nothingFound,
      titles = [null, null],
      initialSelection,
      listHeight = 150,
      listComponent = SelectScrollArea,
      showTransferAll = true,
      breakpoint,
      classNames,
      styles,
      limit = Infinity,
      ...others
    }: TransferListProps,
    ref
  ) => {
    const [selection, handlers] = useSelectionState(initialSelection);

    const handleMoveAll = (listIndex: 0 | 1) => {
      const items: TransferListData = Array(2) as any;
      const moveToIndex = listIndex === 0 ? 1 : 0;
      items[listIndex] = [];
      items[moveToIndex] = [...value[moveToIndex], ...value[listIndex]];
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
      items[moveToIndex] = [...transferData.current, ...value[moveToIndex]];
      onChange(items);
      handlers.deselectAll(listIndex);
    };

    const breakpoints = breakpoint ? [{ maxWidth: breakpoint, cols: 1 }] : undefined;
    const sharedListProps = {
      itemComponent,
      listComponent,
      searchPlaceholder,
      filter,
      nothingFound,
      height: listHeight,
      showTransferAll,
      classNames,
      styles,
      limit,
    };

    return (
      <SimpleGrid cols={2} spacing="xl" breakpoints={breakpoints} ref={ref} {...others}>
        <RenderList
          {...sharedListProps}
          data={value[0]}
          selection={selection[0]}
          onSelect={(val) => handlers.select(0, val)}
          onMoveAll={() => handleMoveAll(0)}
          onMove={() => handleMove(0)}
          title={titles[0]}
        />

        <RenderList
          {...sharedListProps}
          data={value[1]}
          selection={selection[1]}
          onSelect={(val) => handlers.select(1, val)}
          onMoveAll={() => handleMoveAll(1)}
          onMove={() => handleMove(1)}
          title={titles[1]}
          reversed
        />
      </SimpleGrid>
    );
  }
);

TransferList.displayName = '@mantine/core/TransferList';
