import React from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { Text } from '../../Text/Text';
import { Divider } from '../../Divider/Divider';
import { SelectItem } from '../types';
import useStyles from './SelectItems.styles';

export type SelectItemsStylesNames = Selectors<typeof useStyles>;

export interface SelectItemsProps extends DefaultProps<SelectItemsStylesNames> {
  data: SelectItem[];
  hovered: number;
  __staticSelector: string;
  isItemSelected?(itemValue: string): boolean;
  uuid: string;
  itemsRefs?: React.MutableRefObject<Record<string, HTMLDivElement>>;
  onItemHover(index: number): void;
  onItemSelect(item: SelectItem): void;
  size: MantineSize;
  itemComponent: React.FC<any>;
  nothingFound?: React.ReactNode;
  creatable?: boolean;
  createLabel?: React.ReactNode;
}

export function SelectItems({
  data,
  hovered,
  classNames,
  styles,
  isItemSelected,
  uuid,
  __staticSelector,
  onItemHover,
  onItemSelect,
  itemsRefs,
  itemComponent: Item,
  size,
  nothingFound,
  creatable,
  createLabel,
}: SelectItemsProps) {
  const { classes, cx } = useStyles({ size }, { classNames, styles, name: __staticSelector });
  const unGroupedItems: React.ReactElement<any>[] = [];
  const groupedItems: React.ReactElement<any>[] = [];
  let creatableDataIndex = null;

  const constructItemComponent = (item: SelectItem, index: number) => {
    const selected = typeof isItemSelected === 'function' ? isItemSelected(item.value) : false;
    return (
      <Item
        key={item.value}
        className={cx(classes.item, {
          [classes.hovered]: !item.disabled && hovered === index,
          [classes.selected]: !item.disabled && selected,
          [classes.disabled]: item.disabled,
        })}
        onMouseEnter={() => onItemHover(index)}
        id={`${uuid}-${index}`}
        role="option"
        data-ignore-outside-clicks
        tabIndex={-1}
        aria-selected={hovered === index}
        ref={(node: HTMLDivElement) => {
          if (itemsRefs && itemsRefs.current) {
            // eslint-disable-next-line no-param-reassign
            itemsRefs.current[item.value] = node;
          }
        }}
        onMouseDown={
          !item.disabled
            ? (event: React.MouseEvent<HTMLDivElement>) => {
                event.preventDefault();
                onItemSelect(item);
              }
            : null
        }
        disabled={item.disabled}
        {...item}
      />
    );
  };

  let groupName = null;
  data.forEach((item, index) => {
    if (item.creatable) {
      creatableDataIndex = index;
    } else if (!item.group) {
      unGroupedItems.push(constructItemComponent(item, index));
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        groupedItems.push(
          <div className={classes.separator} key={`__mantine-divider-${index}`}>
            <Divider classNames={{ label: classes.separatorLabel }} label={item.group} />
          </div>
        );
      }
      groupedItems.push(constructItemComponent(item, index));
    }
  });

  if (creatable) {
    const creatableDataItem = data[creatableDataIndex];
    const selected =
      typeof isItemSelected === 'function' ? isItemSelected(data[creatableDataIndex].value) : false;
    unGroupedItems.push(
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        key={creatableDataItem.value}
        className={cx(classes.item, {
          [classes.hovered]: hovered === creatableDataIndex,
          [classes.selected]: selected,
        })}
        onMouseEnter={() => onItemHover(creatableDataIndex)}
        onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
          event.preventDefault();
          onItemSelect(creatableDataItem);
        }}
        tabIndex={-1}
        ref={(node: HTMLDivElement) => {
          if (itemsRefs && itemsRefs.current) {
            // eslint-disable-next-line no-param-reassign
            itemsRefs.current[creatableDataItem.value] = node;
          }
        }}
      >
        {createLabel}
      </div>
    );
  }

  if (groupedItems.length > 0 && unGroupedItems.length > 0) {
    unGroupedItems.unshift(
      <div className={classes.separator}>
        <Divider />
      </div>
    );
  }

  return groupedItems.length > 0 || unGroupedItems.length > 0 ? (
    <>
      {groupedItems}
      {unGroupedItems}
    </>
  ) : (
    <Text size={size} className={classes.nothingFound}>
      {nothingFound}
    </Text>
  );
}

SelectItems.displayName = '@mantine/core/SelectItems';
