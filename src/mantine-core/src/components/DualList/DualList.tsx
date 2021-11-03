import React, { useState } from 'react';
import { useMantineTheme, DefaultProps, ClassNames } from '@mantine/styles';
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight, Icon } from 'react-feather';
import { useDidUpdate, useId } from '@mantine/hooks';
import useStyles from './DualList.styles';
import { Text, TextProps } from '../Text';
import { ActionIcon } from '../ActionIcon';
import { Title } from '../Title';
import { Paper } from '../Paper';

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
      <Title order={4}>{label}</Title>
      <div className={classes.list}>
        <div className={classes.flex}>
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

export interface DualListData {
  available: IListItem[];
  selected: IListItem[];
}

export interface DualListProps extends DefaultProps {
  leftLabel?: string;
  rightLabel?: string;
  available: (IListItem | string)[];
  selected: (IListItem | string)[];
  onChange?: (data: DualListData) => void;
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
  onChange,
  ...others
}: DualListProps) {
  const [data, setData] = useState<DualListData>({
    available: initializeItems(available),
    selected: initializeItems(selected),
  });

  const { classes } = useStyles();

  const theme = useMantineTheme();

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
    <IconComponent width={theme.fontSizes.md} height={theme.fontSizes.md} />
  );

  return (
    <Paper padding="md" className={classes.flex}>
      <RenderList
        position="left"
        label={leftLabel}
        items={data.available}
        MoveIcon={<RenderIcon icon={ChevronRight} />}
        MoveAllIcon={<RenderIcon icon={ChevronsRight} />}
        onMove={handleMoveAvailable}
        onMoveAll={handleMoveAllAvailable}
      />
      <RenderList
        position="right"
        label={rightLabel}
        items={data.selected}
        MoveIcon={<RenderIcon icon={ChevronLeft} />}
        MoveAllIcon={<RenderIcon icon={ChevronsLeft} />}
        onMove={handleMoveSelected}
        onMoveAll={handleMoveAllSelected}
      />
    </Paper>
  );
}

DualList.displayName = '@mantine/core/DualList';
