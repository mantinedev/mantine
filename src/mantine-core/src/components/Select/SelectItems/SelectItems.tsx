import React from 'react';
import { mergeStyles, DefaultProps, MantineSize } from '@mantine/styles';

import { Text } from '../../Text/Text';
import { SelectItem } from '../types';
import useStyles from './SelectItems.styles';

export type SelectItemsStylesNames = keyof ReturnType<typeof useStyles>['classes'];

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
}: SelectItemsProps) {
  const { classes, cx } = useStyles({ size }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);

  const items = data.map((item, index) => {
    const selected = typeof isItemSelected === 'function' ? isItemSelected(item.value) : false;

    return (
      <Item
        key={item.value}
        className={cx(classes.item, {
          [classes.hovered]: hovered === index,
          [classes.selected]: selected,
        })}
        style={{
          ..._styles.item,
          ...(hovered === index ? _styles.hovered : null),
          ...(selected ? _styles.selected : null),
        }}
        onMouseEnter={() => onItemHover(index)}
        id={`${uuid}-${index}`}
        role="option"
        tabIndex={-1}
        aria-selected={hovered === index}
        elementRef={(node: HTMLDivElement) => {
          if (itemsRefs && itemsRefs.current) {
            // eslint-disable-next-line no-param-reassign
            itemsRefs.current[item.value] = node;
          }
        }}
        onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
          event.preventDefault();
          onItemSelect(item);
        }}
        {...item}
      />
    );
  });

  return items.length > 0 ? (
    <>{items}</>
  ) : (
    <Text size={size} className={classes.nothingFound} style={_styles.nothingFound}>
      {nothingFound}
    </Text>
  );
}

SelectItems.displayName = '@mantine/core/SelectItems';
