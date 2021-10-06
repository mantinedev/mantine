import React from 'react';
import { mergeStyles, DefaultProps, MantineSize, ClassNames } from '@mantine/styles';
import { Text } from '../../Text/Text';
import { Divider } from '../../Divider/Divider';
import { SelectItem } from '../types';
import useStyles from './SelectItems.styles';

export type SelectItemsStylesNames = ClassNames<typeof useStyles>;

interface SelectItemsProps extends DefaultProps<SelectItemsStylesNames> {
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
  const { classes, cx } = useStyles({ size }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);
  const ungroupedItems: React.ReactElement<any>[] = [];
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
        style={{
          ..._styles.item,
          ...(hovered === index && !item.disabled ? _styles.hovered : null),
          ...(selected && !item.disabled ? _styles.selected : null),
          ...(item.disabled ? _styles.disabled : null),
        }}
        onMouseEnter={() => onItemHover(index)}
        id={`${uuid}-${index}`}
        role="option"
        tabIndex={-1}
        aria-selected={hovered === index}
        ref={(node: HTMLDivElement) => {
          if (itemsRefs && itemsRefs.current) {
            // eslint-disable-next-line no-param-reassign
            itemsRefs.current[item.value] = node;
          }
        }}
        onMouseDown={!item.disabled ? (event: React.MouseEvent<HTMLDivElement>) => {
          event.preventDefault();
          onItemSelect(item);
        } : null}
        disabled={item.disabled}
        {...item}
      />
      );
  };

  const createSeperator = (label?: string) => (
    <div className={classes.seperator} style={_styles.seperator} key={label}>
      <Divider
        classNames={{
          label: classes.seperatorLabel,
        }}
        styles={{
          label: { ..._styles.seperatorLabel },
        }}
        label={label}
      />
    </div>
  );

  let groupName = null;
  data.forEach((item, index) => {
    if (item.creatable) creatableDataIndex = index;
    else if (!item.group) ungroupedItems.push(constructItemComponent(item, index));
    else {
      if (groupName !== item.group) {
        groupName = item.group;
        groupedItems.push(createSeperator(groupName));
      }
      groupedItems.push(constructItemComponent(item, index));
    }
  });

  if (creatable) {
    const creatableDataItem = data[creatableDataIndex];
    const selected = typeof isItemSelected === 'function' ? isItemSelected(data[creatableDataIndex].value) : false;
    ungroupedItems.push(
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
        style={{
          ..._styles.item,
          ...(hovered === creatableDataIndex ? _styles.hovered : null),
          ...(selected ? _styles.selected : null),
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

  if (groupedItems.length > 0 && ungroupedItems.length > 0) {
    ungroupedItems.unshift(createSeperator());
  }

  return groupedItems.length > 0 || ungroupedItems.length > 0 ? (
    <>
      {groupedItems}
      {ungroupedItems}
    </>
  ) : (
    <Text size={size} className={classes.nothingFound} style={_styles.nothingFound}>
      {nothingFound}
    </Text>
  );
}

SelectItems.displayName = '@mantine/core/SelectItems';
