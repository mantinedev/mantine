import React, { forwardRef, RefObject, useState } from 'react';
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
import { Checkbox } from '../Checkbox';

export type DualListStylesNames = ClassNames<typeof useStyles>;

export interface IListItem {
  id: string;
  value: string;
  disabled: boolean;
}

interface ListItemProps extends Omit<TextProps<'div'>, 'onClick'> {
  size: MantineSize;
  item: IListItem;
  isSelected: boolean;
  hasCheckbox: boolean;
  onClick?: (e: React.MouseEvent, item: IListItem) => void;
  onCheckboxChange?: (e: React.ChangeEvent, item: IListItem) => void;
}

const ListItem = ({
  size,
  hasCheckbox,
  item,
  isSelected,
  className,
  classNames,
  styles,
  children,
  onClick,
  onCheckboxChange,
  ...others
}: ListItemProps) => {
  const { classes, cx } = useStyles({ size }, { classNames, styles, name: 'DualListItem' });
  const { value, disabled } = item;

  const handleClick = (e: React.MouseEvent) => {
    if (!disabled) {
      onClick?.(e, item);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent) => {
    if (!disabled) {
      onCheckboxChange?.(e, item);
    }
  };

  const computedClassName = cx(className, classes.item, {
    [classes.selectedItem]: isSelected,
    [classes.disabled]: disabled,
  });

  const sharedProps = { size, styles, className: computedClassName };

  return hasCheckbox ? (
    <Checkbox
      {...sharedProps}
      styles={{
        ...styles,
        label: {
          width: '100%',
        },
      }}
      checked={isSelected}
      label={value}
      onChange={handleCheckboxChange}
    />
  ) : (
    <Text {...others} {...sharedProps} onClick={handleClick}>
      {value}
    </Text>
  );
};

interface IListProps {
  checkboxes: boolean;
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
}

type ListProps<C extends React.ElementType> = PolymorphicComponentProps<C, IListProps>;
type ListComponent = <C extends React.ElementType>(props: ListProps<C>) => React.ReactElement;

const RenderList: ListComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      emptyPlaceholder,
      component,
      checkboxes,
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
      classNames,
      style,
      styles,
      ...others
    }: ListProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [selectedItems, setSelectedItems] = useState<IListItem[]>([]);
    const [multiSelectionRootIdx, setMultiSelectionRootIdx] = useState<number | null>(null);
    const [search, setSearch] = useState<string>('');

    const stylesProps = { styles, classNames };

    const { classes, cx } = useStyles({ size }, { ...stylesProps, name: 'DualList' });

    const theme = useMantineTheme();

    const Element = component || 'div';

    const filterItems = (): IListItem[] => {
      if (searchItems) return searchItems(items, search);
      if (!showSearchBar) return items;

      return items.filter((item) => item.value.toLowerCase().includes(search));
    };

    const hasMovableItems = (): boolean => filterItems().some((item) => item.disabled === false);
    const hasSelectedItems = (): boolean => selectedItems.length > 0;
    const itemIsSelected = (item: IListItem): boolean =>
      hasSelectedItems() && selectedItems.includes(item);

    const clearSelection = () => {
      setSelectedItems([]);
      setMultiSelectionRootIdx(null);
    };

    const handleMove = () => {
      if (selectedItems) {
        onMove(selectedItems);
        clearSelection();
      }
    };

    const handleMoveAll = () => {
      onMove(filterItems().filter((item) => item.disabled === false));
      clearSelection();
    };

    const handleClickItem = (e: React.MouseEvent, item: IListItem) => {
      const filteredItems = filterItems().filter((_item) => _item.disabled === false);
      const clickedItemIdx = filteredItems.findIndex((_item) => _item.id === item.id);

      if (!(multiSelectionRootIdx != null && e.shiftKey)) {
        setMultiSelectionRootIdx(clickedItemIdx);
      }

      if (hasSelectedItems()) {
        if (e.shiftKey) {
          const start = Math.min(multiSelectionRootIdx, clickedItemIdx);
          const end = Math.max(multiSelectionRootIdx, clickedItemIdx) + 1;
          const newSelection = filteredItems
            .slice(start, end)
            .filter((_item) => _item.disabled === false);

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

    const handleClickCheckboxItem = (e: React.ChangeEvent, item: IListItem) => {
      if (itemIsSelected(item)) {
        setSelectedItems(selectedItems.filter((_item) => _item.id !== item.id));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    };

    const RenderMoveIcon = () => (
      <ActionIcon
        className={classes.action}
        onClick={handleMove}
        disabled={!hasSelectedItems()}
        aria-label="Move selected items"
        tabIndex={0}
      >
        {MoveIcon}
      </ActionIcon>
    );

    const RenderMoveAllIcon = () => (
      <ActionIcon
        className={classes.action}
        onClick={handleMoveAll}
        disabled={!hasMovableItems()}
        aria-label="Move all items"
      >
        {MoveAllIcon}
      </ActionIcon>
    );

    const RenderItems = () => {
      const filtered = filterItems();

      if (filtered.length === 0) {
        return (
          <Text className={cx(classes.item, classes.empty, classes.disabled)} size={size}>
            {emptyPlaceholder}
          </Text>
        );
      }

      return (
        <>
          {filtered.map((item) => (
            <ListItem
              key={item.id}
              hasCheckbox={checkboxes}
              size={size}
              item={item}
              isSelected={itemIsSelected(item)}
              onClick={handleClickItem}
              onCheckboxChange={handleClickCheckboxItem}
              style={style}
              {...stylesProps}
            />
          ))}
        </>
      );
    };

    return (
      <div className={classes.listRoot} style={style}>
        <Title order={4} className={classes.listTitle}>
          {label}
        </Title>
        <div className={classes.listContainer}>
          <div className={classes.actions}>
            {position === 'left' ? <RenderMoveAllIcon /> : <RenderMoveIcon />}
            {position === 'right' ? <RenderMoveAllIcon /> : <RenderMoveIcon />}
          </div>
          {showSearchBar && (
            <TextInput
              placeholder="Search..."
              rightSection={<SearchIcon size={getIconSize({ theme, size })} />}
              size={size}
              value={search}
              {...searchBarProps}
              className={cx(classes.searchBar, searchBarProps?.className)}
              onChange={(e) => setSearch(e.target.value)}
              styles={(_theme) => ({
                input: {
                  borderRadius: 0,
                  border: `1px solid ${_theme.colors.gray[3]}`,
                },
              })}
            />
          )}
          <Element {...others} ref={ref} className={cx(classes.list, others.className)}>
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

export interface DualListProps extends DefaultProps<DualListStylesNames> {
  /** Items shown in the available (left) list */
  available: (IListItem | string)[];

  /** Whether the items are prefixes with a checkbox */
  checkboxes?: boolean;

  /** Placeholder to be shown when a list is empty */
  emptyPlaceholder?: string;

  /** Placeholder to be shown in the left list when it is empty */
  leftEmptyPlaceholder?: string;

  /** Label of the left list */
  leftLabel?: string;

  /** Props passed to search bar of left list */
  leftSearchBarProps?: TextInputProps;

  /** ref to left list element */
  leftListRef?: RefObject<HTMLElement>;

  /** Component to use for left list */
  listComponent?: React.ElementType;

  /** Called when data changes (moves between lists). */
  onChange?: (data: DualListData) => void;

  /** Placeholder to be shown in the right list when it is empty */
  rightEmptyPlaceholder?: string;

  /** Label of the right list */
  rightLabel?: string;

  /** Props passed to search bar of right list */
  rightSearchBarProps?: TextInputProps;

  /** ref to right list element */
  rightListRef?: RefObject<HTMLElement>;

  /** Predefined DualList size */
  size?: MantineSize;

  /** Optional function to customise which elements are shown */
  searchItems?: (items: IListItem[], search: string) => IListItem[];

  /** Whether the left search bar is shown */
  showLeftSearchBar?: boolean;

  /** Whether the right search bar is shown */
  showRightSearchBar?: boolean;

  /** Items shown in the selected (right) list */
  selected: (IListItem | string)[];
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
  checkboxes = false,
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
  leftListRef,
  rightListRef,
  listComponent,
  searchItems,
  available,
  selected,
  onChange,
  style,
  classNames,
  styles,
  ...others
}: DualListProps) => {
  const [data, setData] = useState<DualListData>({
    available: initializeItems(available),
    selected: initializeItems(selected),
  });

  const stylesProps = { classNames, styles };

  const { classes, cx } = useStyles({ size }, { ...stylesProps, name: 'DualListList' });

  const theme = useMantineTheme();

  const ListElement = listComponent || 'div';

  const handleMoveAvailable = (items: IListItem[]) => {
    setData({
      available: data.available.filter((item) => !items.includes(item)),
      selected: [...data.selected, ...items],
    });
  };

  const handleMoveSelected = (items: IListItem[]) => {
    setData({
      available: [...data.available, ...items],
      selected: data.selected.filter((item) => !items.includes(item)),
    });
  };

  useDidUpdate(() => onChange?.(data), [data]);

  const RenderIcon = ({ icon: IconComponent }: { icon: Icon }) => (
    <IconComponent size={getIconSize({ theme, size })} />
  );

  return (
    <Paper padding={size} {...others} className={cx(classes.root, className)} style={style}>
      <RenderList
        component={ListElement}
        checkboxes={checkboxes}
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
        ref={leftListRef}
        {...stylesProps}
      />
      <RenderList
        component={ListElement}
        checkboxes={checkboxes}
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
        ref={rightListRef}
        {...stylesProps}
      />
    </Paper>
  );
};

DualList.displayName = '@mantine/core/DualList';
