import React, { forwardRef, useState } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  ClassNames,
  MantineSize,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
  Search as SearchIcon,
  Icon,
} from 'react-feather';
import { useDidUpdate, useId } from '@mantine/hooks';
import useStyles, { getIconSize } from './DualList.styles';
import { Text, TextProps } from '../Text';
import { ActionIcon } from '../ActionIcon';
import { Title } from '../Title';
import { Paper } from '../Paper';
import { TextInput, TextInputProps } from '../TextInput';

export type DualListStylesNames = ClassNames<typeof useStyles>;

interface IListItem {
  id: string;
  value: string;
  disabled: boolean;
}

interface ListItemProps extends Omit<TextProps<'div'>, 'onClick'> {
  size: MantineSize;
  item: IListItem;
  isSelected: boolean;
  onClick?: (e: React.MouseEvent, item: IListItem) => void;
}

const ListItem = ({ size, item, isSelected, children, ...props }: ListItemProps) => {
  const { classes, cx } = useStyles({ size });
  const { value, disabled } = item;

  const handleClick = (e: React.MouseEvent) => {
    if (!disabled) {
      props.onClick?.(e, item);
    }
  };

  return (
    <Text
      {...props}
      size={size}
      className={cx(props.className, classes.item, {
        [classes.selectedItem]: isSelected,
        [classes.disabled]: disabled,
      })}
      onClick={handleClick}
    >
      {value}
    </Text>
  );
};

interface IListProps {
  emptyPlaceholder: string;
  position: 'left' | 'right';
  label: string;
  items: IListItem[];
  size: MantineSize;
  showSearchBar?: boolean;
  searchBarProps?: TextInputProps;
  searchItems?: (items: IListItem[], search: string) => IListItem[];
  MoveIcon: JSX.Element;
  MoveAllIcon: JSX.Element;
  onMove: (items: IListItem[]) => void;
  onMoveAll: () => void;
}

type ListProps<C extends React.ElementType> = PolymorphicComponentProps<C, IListProps>;
type ListComponent = <C extends React.ElementType>(props: ListProps<C>) => React.ReactElement;

const RenderList: ListComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      emptyPlaceholder,
      component,
      position,
      label,
      items,
      size,
      showSearchBar = true,
      searchBarProps,
      searchItems,
      MoveIcon,
      MoveAllIcon,
      onMove,
      onMoveAll,
      ...props
    }: ListProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [selectedItems, setSelectedItems] = useState<IListItem[] | null>(null);
    const [multiSelectionRootIdx, setMultiSelectionRootIdx] = useState<number | null>(null);
    const [search, setSearch] = useState<string>('');

    const { classes, cx } = useStyles({ size });

    const theme = useMantineTheme();

    const Element = component || 'div';

    const hasItems = (): boolean => items && items.length > 0;
    const hasSelectedItems = (): boolean => selectedItems && selectedItems.length > 0;
    const itemIsSelected = (item: IListItem): boolean => selectedItems?.includes(item);

    const clearSelection = () => {
      setSelectedItems(null);
      setMultiSelectionRootIdx(null);
    };

    const handleMove = () => {
      if (selectedItems) {
        onMove(selectedItems);
        clearSelection();
      }
    };

    const handleMoveAll = () => {
      onMoveAll();
      clearSelection();
    };

    const handleClickItem = (e: React.MouseEvent, item: IListItem) => {
      const clickedItemIdx = items.findIndex((_item) => _item.id === item.id);

      if (!(multiSelectionRootIdx != null && e.shiftKey)) {
        setMultiSelectionRootIdx(clickedItemIdx);
      }

      if (hasSelectedItems()) {
        if (e.shiftKey) {
          const start = Math.min(multiSelectionRootIdx, clickedItemIdx);
          const end = Math.max(multiSelectionRootIdx, clickedItemIdx) + 1;
          const newSelection = items.slice(start, end);

          setSelectedItems(newSelection);
        } else if (e.ctrlKey) {
          if (itemIsSelected(item)) {
            setSelectedItems(selectedItems.filter((_item) => _item.id !== item.id));
          } else {
            setSelectedItems([...selectedItems, item]);
          }
        } else {
          setSelectedItems([item]);
        }
      } else {
        setSelectedItems([item]);
      }
    };

    const RenderMoveIcon = () => (
      <ActionIcon
        className={classes.action}
        onClick={handleMove}
        disabled={!hasSelectedItems()}
        aria-label="Move selected items"
      >
        {MoveIcon}
      </ActionIcon>
    );

    // TODO: Should MoveAll move _all_ items or only those shown (filtered)
    const RenderMoveAllIcon = () => (
      <ActionIcon
        className={classes.action}
        onClick={handleMoveAll}
        disabled={!hasItems()}
        aria-label="Move all items"
      >
        {MoveAllIcon}
      </ActionIcon>
    );

    const filterItems = () => {
      if (!showSearchBar) return items;
      if (searchItems) return searchItems(items, search);

      return items.filter((item) => item.value.toLowerCase().includes(search));
    };

    const RenderItems = () => {
      const filtered = filterItems();

      if (filtered.length === 0) {
        return (
          <Text className={cx(classes.item, classes.disabled)} size={size}>
            {emptyPlaceholder}
          </Text>
        );
      }

      return (
        <>
          {filtered.map((item) => (
            <ListItem
              size={size}
              item={item}
              isSelected={itemIsSelected(item)}
              onClick={handleClickItem}
            />
          ))}
        </>
      );
    };

    return (
      <div>
        <Title order={4}>{label}</Title>
        <div className={classes.listContainer}>
          <div className={classes.flex}>
            {position === 'left' ? <RenderMoveAllIcon /> : <RenderMoveIcon />}
            {position === 'right' ? <RenderMoveAllIcon /> : <RenderMoveIcon />}
          </div>
          {showSearchBar && (
            <TextInput
              placeholder="Search..."
              rightSection={<SearchIcon size={getIconSize({ theme, size })} />}
              size={size}
              {...searchBarProps}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              styles={(_theme) => ({
                input: {
                  borderRadius: 0,
                  border: `1px solid ${_theme.colors.gray[3]}`,
                },
              })}
            />
          )}
          <Element {...props} ref={ref} className={cx(classes.list, props.className)}>
            <RenderItems />
          </Element>
        </div>
      </div>
    );
  }
);

export interface DualListData {
  available: IListItem[];
  selected: IListItem[];
}

export interface DualListProps extends DefaultProps {
  listComponent?: React.ElementType;
  size?: MantineSize;
  searchItems?: (items: IListItem[], search: string) => IListItem[];
  leftLabel?: string;
  rightLabel?: string;
  showLeftSearchBar?: boolean;
  showRightSearchBar?: boolean;
  leftSearchBarProps?: TextInputProps;
  rightSearchBarProps?: TextInputProps;
  emptyPlaceholder?: string;
  leftEmptyPlaceholder?: string;
  rightEmptyPlaceholder?: string;
  available: (IListItem | string)[];
  selected: (IListItem | string)[];
  onChange?: (data: DualListData) => void;
}
type DualListComponent = (props: DualListProps) => React.ReactElement;

const initializeItems = (items: (IListItem | string)[]): IListItem[] =>
  items.map((item) => {
    if (typeof item === 'string') {
      return { id: useId(), value: item, disabled: false };
    }
    return item as IListItem;
  });

export const DualList: DualListComponent & { displayName?: string } = ({
  className,
  size = 'md',
  emptyPlaceholder = 'No items found...',
  leftEmptyPlaceholder = emptyPlaceholder,
  rightEmptyPlaceholder = emptyPlaceholder,
  leftLabel = 'Available',
  rightLabel = 'Selected',
  showLeftSearchBar = true,
  showRightSearchBar = true,
  leftSearchBarProps,
  rightSearchBarProps,
  listComponent,
  searchItems,
  available,
  selected,
  onChange,
  ...props
}: DualListProps) => {
  const [data, setData] = useState<DualListData>({
    available: initializeItems(available),
    selected: initializeItems(selected),
  });

  const { classes, cx } = useStyles({ size });

  const theme = useMantineTheme();

  const ListElement = listComponent || 'div';

  const handleMoveAvailable = (items: IListItem[]) => {
    setData({
      available: data.available.filter((item) => !items.includes(item)),
      selected: [...data.selected, ...items],
    });
  };

  const handleMoveAllAvailable = () => handleMoveAvailable(data.available);

  const handleMoveSelected = (items: IListItem[]) => {
    setData({
      available: [...data.available, ...items],
      selected: data.selected.filter((item) => !items.includes(item)),
    });
  };

  const handleMoveAllSelected = () => handleMoveSelected(data.selected);

  useDidUpdate(() => onChange?.(data), [data]);

  const RenderIcon = ({ icon: IconComponent }: { icon: Icon }) => (
    <IconComponent size={getIconSize({ theme, size })} />
  );

  return (
    <Paper padding={size} className={cx(classes.flex, className)} {...props}>
      <RenderList
        component={ListElement}
        emptyPlaceholder={leftEmptyPlaceholder}
        position="left"
        label={leftLabel}
        items={data.available}
        size={size}
        showSearchBar={showLeftSearchBar}
        searchBarProps={leftSearchBarProps}
        searchItems={searchItems}
        MoveIcon={<RenderIcon icon={ChevronRight} />}
        MoveAllIcon={<RenderIcon icon={ChevronsRight} />}
        onMove={handleMoveAvailable}
        onMoveAll={handleMoveAllAvailable}
      />
      <RenderList
        component={ListElement}
        emptyPlaceholder={rightEmptyPlaceholder}
        position="right"
        label={rightLabel}
        items={data.selected}
        size={size}
        showSearchBar={showRightSearchBar}
        searchBarProps={rightSearchBarProps}
        searchItems={searchItems}
        MoveIcon={<RenderIcon icon={ChevronLeft} />}
        MoveAllIcon={<RenderIcon icon={ChevronsLeft} />}
        onMove={handleMoveSelected}
        onMoveAll={handleMoveAllSelected}
      />
    </Paper>
  );
};

DualList.displayName = '@mantine/core/DualList';
