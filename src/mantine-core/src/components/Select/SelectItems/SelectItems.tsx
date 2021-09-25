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

    return !item.seperator ? (<Item
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
      elementRef={(node: HTMLDivElement) => {
        if (itemsRefs && itemsRefs.current) {
          // eslint-disable-next-line no-param-reassign
          itemsRefs.current[item.value] = node;
        }
      }}
      onMouseDown={!item.disabled ? (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        onItemSelect(item);
      } : null}
      {...item}
    />) : (
      <div className={classes.seperator} style={_styles.seperator}>
        <Divider
          classNames={{
            label: classes.seperatorLabel,
          }}
          styles={{
            label: { ..._styles.seperatorLabel },
          }}
          label={item.label}
        />
      </div>
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
