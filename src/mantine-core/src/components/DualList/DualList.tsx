import React, { useState } from 'react';
import { useMantineTheme, DefaultProps, ClassNames } from '@mantine/styles';
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight, Icon } from 'react-feather';
import { useId } from '@mantine/hooks';
import useStyles from './DualList.styles';
import { Text, TextProps } from '../Text/Text';

export type DualListStylesNames = ClassNames<typeof useStyles>;

interface IListItem {
  id: string;
  value: string;
  disabled: boolean; // TODO: Handle disabled items
}

interface ListItemProps extends TextProps<'div'> {
  item: IListItem;
  isSelected: boolean;
}

const ListItem = ({ item, isSelected, children, ...props }: ListItemProps) => {
  const { classes, cx } = useStyles();

  return (
    <Text
      className={cx(classes.item, {
        [classes.selectedItem]: isSelected,
      })}
      {...props}
    >
      {item.value}
    </Text>
  );
};

interface ListProps {
  label: string;
  items: IListItem[];
  MoveIcon: JSX.Element;
  MoveAllIcon: JSX.Element;
  onMove: (items: IListItem[]) => void;
  onMoveAll: () => void;
}

const RenderList = ({ label, items, MoveIcon, MoveAllIcon, onMove, onMoveAll }: ListProps) => {
  const [selectedItems, setSelectedItems] = useState<IListItem[] | null>(null);
  const [multiSelectionRootIdx, setMultiSelectionRootIdx] = useState<number | null>(null);

  const { classes } = useStyles();

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

    const hasSelectedItems = selectedItems && selectedItems.length > 0;
    if (hasSelectedItems) {
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

  return (
    <div>
      <h3>{label}</h3>
      <div className={classes.list}>
        <div className={classes.actions}>
          <Text className={classes.action} onClick={handleMove}>
            {MoveIcon}
          </Text>
          <Text className={classes.action} onClick={handleMoveAll}>
            {MoveAllIcon}
          </Text>
        </div>
        <div>
          {items.map((item) => (
            <ListItem
              item={item}
              isSelected={itemIsSelected(item)}
              onClick={(e) => handleClickItem(e, item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export interface DualListProps extends DefaultProps {
  leftLabel?: string;
  rightLabel?: string;
  available: (IListItem | string)[];
  selected: (IListItem | string)[];
}

const initializeItems = (items: (IListItem | string)[]): IListItem[] =>
  items.map((item) => {
    if (typeof item === 'string') {
      return { id: useId(), value: item, disabled: false };
    }
    return item as IListItem;
  });

// TODO: properly respect theme

export function DualList({
  className,
  style,
  classNames,
  styles,
  leftLabel = 'Available',
  rightLabel = 'Selected',
  available,
  selected,
  ...others
}: DualListProps) {
  const [availableItems, setAvailableItems] = useState<IListItem[]>(initializeItems(available));
  const [selectedItems, setSelectedItems] = useState<IListItem[]>(initializeItems(selected));
  const { classes } = useStyles();

  const theme = useMantineTheme();

  const handleMoveAvailable = (items: IListItem[]) => {
    setSelectedItems([...selectedItems, ...items]);
    setAvailableItems(availableItems.filter((item) => !items.includes(item)));
  };

  const handleMoveAllAvailable = () => handleMoveAvailable(availableItems);

  const handleMoveSelected = (items: IListItem[]) => {
    setAvailableItems([...availableItems, ...items]);
    setSelectedItems(selectedItems.filter((item) => !items.includes(item)));
  };

  const handleMoveAllSelected = () => handleMoveSelected(selectedItems);

  const RenderIcon = ({ icon: IconComponent }: { icon: Icon }) => (
    <IconComponent width={theme.fontSizes.md} height={theme.fontSizes.md} />
  );

  return (
    <div className={classes.container}>
      <RenderList
        label={leftLabel}
        items={availableItems}
        MoveIcon={<RenderIcon icon={ChevronRight} />}
        MoveAllIcon={<RenderIcon icon={ChevronsRight} />}
        onMove={handleMoveAvailable}
        onMoveAll={handleMoveAllAvailable}
      />
      <RenderList
        label={rightLabel}
        items={selectedItems}
        MoveIcon={<RenderIcon icon={ChevronLeft} />}
        MoveAllIcon={<RenderIcon icon={ChevronsLeft} />}
        onMove={handleMoveSelected}
        onMoveAll={handleMoveAllSelected}
      />
    </div>
  );
}

DualList.displayName = '@mantine/core/DualList';
