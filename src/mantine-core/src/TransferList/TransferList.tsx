import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { useUncontrolled } from '@mantine/hooks';
import { RenderList, RenderListStylesNames } from './RenderList/RenderList';
import { SelectScrollArea } from '../Select/SelectScrollArea/SelectScrollArea';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { SimpleGrid } from '../SimpleGrid';
import { useSelectionState, Selection } from './use-selection-state/use-selection-state';
import { TransferListData, TransferListItemComponent, TransferListItem } from './types';

export type TransferListStylesNames = RenderListStylesNames;

export interface TransferListProps
  extends DefaultProps<TransferListStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange' | 'placeholder'> {
  variant?: string;

  /** Current value */
  value: TransferListData;

  /** Called when value changes */
  onChange(value: TransferListData): void;

  /** Initial items selection */
  initialSelection?: Selection;

  /** Custom item component */
  itemComponent?: TransferListItemComponent;

  /** Controlled search queries */
  searchValues?: [string, string];

  /** Called when one of the search queries changes */
  onSearch?(value: [string, string]): void;

  /** Search fields placeholder */
  searchPlaceholder?: string | [string, string];

  /** Nothing found message */
  nothingFound?: React.ReactNode | [React.ReactNode, React.ReactNode];

  /** Displayed when a list is empty and there is no search query */
  placeholder?: React.ReactNode | [React.ReactNode, React.ReactNode];

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

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Whether to hide the transfer all button */
  showTransferAll?: boolean;

  /** Limit amount of items showed at a time */
  limit?: number;

  /** Change icon used for the transfer selected control */
  transferIcon?: React.FunctionComponent<{ reversed: boolean }>;

  /** Change icon used for the transfer all control */
  transferAllIcon?: React.FunctionComponent<{ reversed: boolean }>;

  /** Whether to transfer only items matching {@link filter} when clicking the transfer all control */
  transferAllMatchingFilter?: boolean;
}

export function defaultFilter(query: string, item: TransferListItem) {
  return item.label.toLowerCase().trim().includes(query.toLowerCase().trim());
}

const defaultProps: Partial<TransferListProps> = {
  itemComponent: DefaultItem,
  filter: defaultFilter,
  titles: [null, null],
  placeholder: [null, null],
  listHeight: 150,
  listComponent: SelectScrollArea,
  showTransferAll: true,
  limit: Infinity,
  transferAllMatchingFilter: false,
};

export const TransferList = forwardRef<HTMLDivElement, TransferListProps>((props, ref) => {
  const {
    value,
    onChange,
    itemComponent,
    searchPlaceholder,
    searchValues,
    onSearch,
    filter,
    nothingFound,
    placeholder,
    titles,
    initialSelection,
    listHeight,
    listComponent,
    showTransferAll,
    breakpoint,
    radius,
    classNames,
    styles,
    limit,
    unstyled,
    transferIcon,
    transferAllIcon,
    variant,
    transferAllMatchingFilter,
    ...others
  } = useComponentDefaultProps('TransferList', defaultProps, props);

  const [selection, handlers] = useSelectionState(initialSelection);
  const [search, handleSearch] = useUncontrolled({
    value: searchValues,
    defaultValue: ['', ''],
    finalValue: ['', ''],
    onChange: onSearch,
  });

  const handleMoveAll = (listIndex: 0 | 1) => {
    const items: TransferListData = Array(2) as any;
    const moveToIndex = listIndex === 0 ? 1 : 0;

    if (transferAllMatchingFilter) {
      const query = search[listIndex];
      const shownItems = value[listIndex].filter((item) => filter(query, item)).slice(0, limit);
      const hiddenItems = value[listIndex].filter((item) => !filter(query, item));

      items[listIndex] = hiddenItems;
      items[moveToIndex] = [...value[moveToIndex], ...shownItems];
    } else {
      items[listIndex] = [];
      items[moveToIndex] = [...value[moveToIndex], ...value[listIndex]];
    }

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

  const breakpoints = breakpoint ? [{ maxWidth: breakpoint, cols: 1 }] : [];
  const sharedListProps = {
    itemComponent,
    listComponent,
    transferIcon,
    transferAllIcon,
    filter,
    height: listHeight,
    showTransferAll,
    classNames,
    styles,
    limit,
    radius,
  };

  return (
    <SimpleGrid
      cols={2}
      spacing="xl"
      breakpoints={breakpoints}
      ref={ref}
      unstyled={unstyled}
      {...others}
    >
      <RenderList
        {...sharedListProps}
        data={value[0]}
        selection={selection[0]}
        onSelect={(val) => handlers.select(0, val)}
        onMoveAll={() => handleMoveAll(0)}
        onMove={() => handleMove(0)}
        title={titles[0]}
        placeholder={Array.isArray(placeholder) ? placeholder[0] : placeholder}
        searchPlaceholder={
          Array.isArray(searchPlaceholder) ? searchPlaceholder[0] : searchPlaceholder
        }
        nothingFound={Array.isArray(nothingFound) ? nothingFound[0] : nothingFound}
        query={search[0]}
        onSearch={(query) => handleSearch([query, search[1]])}
        unstyled={unstyled}
        variant={variant}
        transferAllMatchingFilter={transferAllMatchingFilter}
      />

      <RenderList
        {...sharedListProps}
        data={value[1]}
        selection={selection[1]}
        onSelect={(val) => handlers.select(1, val)}
        onMoveAll={() => handleMoveAll(1)}
        onMove={() => handleMove(1)}
        title={titles[1]}
        placeholder={Array.isArray(placeholder) ? placeholder[1] : placeholder}
        searchPlaceholder={
          Array.isArray(searchPlaceholder) ? searchPlaceholder[1] : searchPlaceholder
        }
        nothingFound={Array.isArray(nothingFound) ? nothingFound[1] : nothingFound}
        query={search[1]}
        onSearch={(query) => handleSearch([search[0], query])}
        reversed
        unstyled={unstyled}
        variant={variant}
        transferAllMatchingFilter={transferAllMatchingFilter}
      />
    </SimpleGrid>
  );
});

TransferList.displayName = '@mantine/core/TransferList';
