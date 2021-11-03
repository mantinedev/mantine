import React, { useState } from 'react';
import { useMantineTheme, DefaultProps, ClassNames } from '@mantine/styles';
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight, Icon } from 'react-feather';
import { useId } from '@mantine/hooks';
import useStyles from './DualList.styles';
import { Text, TextProps } from '../Text/Text';
import { ActionIcon } from '../ActionIcon';

export type DualListStylesNames = ClassNames<typeof useStyles>;

interface IListItem {
  id: string;
  value: string;
  disabled: boolean;
}

interface ListItemProps extends Omit<TextProps<'div'>, 'onClick'> {
  item: IListItem;
  isSelected: boolean;
  onClick?: (e: React.MouseEvent, item: IListItem) => void;
}

const ListItem = ({ item, isSelected, children, ...props }: ListItemProps) => {
  const { classes, cx } = useStyles();
  const { value, disabled } = item;

  const handleClick = (e: React.MouseEvent) => {
    if (!disabled) {
      props.onClick?.(e, item);
    }
  };

  return (
    <Text
      {...props}
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

interface ListProps {
  position: 'left' | 'right';
  label: string;
  items: IListItem[];
  MoveIcon: JSX.Element;
  MoveAllIcon: JSX.Element;
  onMove: (items: IListItem[]) => void;
  onMoveAll: () => void;
}

const RenderList = ({
  position,
  label,
  items,
  MoveIcon,
  MoveAllIcon,
  onMove,
  onMoveAll,
}: ListProps) => {
  const [selectedItems, setSelectedItems] = useState<IListItem[] | null>(null);
  const [multiSelectionRootIdx, setMultiSelectionRootIdx] = useState<number | null>(null);

  const { classes } = useStyles();

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
    <ActionIcon className={classes.action} onClick={handleMove} disabled={!hasSelectedItems()}>
      {MoveIcon}
    </ActionIcon>
  );

  const RenderMoveAllIcon = () => (
    <ActionIcon className={classes.action} onClick={handleMoveAll} disabled={!hasItems()}>
      {MoveAllIcon}
    </ActionIcon>
  );

  return (
    <div>
      <h3>{label}</h3>
      <div className={classes.list}>
        <div className={classes.actions}>
          {position === 'left' ? <RenderMoveAllIcon /> : <RenderMoveIcon />}
          {position === 'right' ? <RenderMoveAllIcon /> : <RenderMoveIcon />}
        </div>
        <div>
          {items.map((item) => (
            <ListItem item={item} isSelected={itemIsSelected(item)} onClick={handleClickItem} />
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
        position="left"
        label={leftLabel}
        items={availableItems}
        MoveIcon={<RenderIcon icon={ChevronRight} />}
        MoveAllIcon={<RenderIcon icon={ChevronsRight} />}
        onMove={handleMoveAvailable}
        onMoveAll={handleMoveAllAvailable}
      />
      <RenderList
        position="right"
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
