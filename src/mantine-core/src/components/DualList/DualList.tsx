import React, { useState } from 'react';
import { useMantineTheme, DefaultProps, ClassNames } from '@mantine/styles';
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight, Icon } from 'react-feather';
import useStyles from './DualList.styles';
import { Text, TextProps } from '../Text/Text';

export type DualListStylesNames = ClassNames<typeof useStyles>;

interface ListItemProps extends TextProps<'div'> {
  isSelected: boolean;
}

const ListItem = ({ isSelected, children, ...props }: ListItemProps) => {
  const { classes, cx } = useStyles();

  return (
    <Text
      className={cx(classes.item, {
        [classes.selectedItem]: isSelected,
      })}
      {...props}
    >
      {children}
    </Text>
  );
};

interface ListProps {
  label: string;
  items: string[];
  MoveIcon: JSX.Element;
  MoveAllIcon: JSX.Element;
  onMove: (items: string[]) => void;
  onMoveAll: () => void;
}

const RenderList = ({ label, items, MoveIcon, MoveAllIcon, onMove, onMoveAll }: ListProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { classes } = useStyles();

  // TODO: onMove multiple items
  const handleMove = () => {
    if (selectedItem) {
      onMove([selectedItem]);
      setSelectedItem(null);
    }
  };

  const handleMoveAll = () => {
    onMoveAll();
    setSelectedItem(null);
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
            <ListItem isSelected={item === selectedItem} onClick={() => setSelectedItem(item)}>
              {item}
            </ListItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export interface DualListProps extends DefaultProps {
  leftLabel?: string;
  rightLabel?: string;
  available: string[];
  selected: string[];
}

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
  const [availableItems, setAvailableItems] = useState<string[]>(available);
  const [selectedItems, setSelectedItems] = useState<string[]>(selected);
  const { classes } = useStyles();

  const theme = useMantineTheme();

  const handleMoveAvailable = (items: string[]) => {
    setSelectedItems([...selectedItems, ...items]);
    setAvailableItems(availableItems.filter((item) => !items.includes(item)));
  };

  const handleMoveAllAvailable = () => handleMoveAvailable(availableItems);

  const handleMoveSelected = (items: string[]) => {
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
