import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, mergeStyles, MantineSize } from '../../../theme';
import { Text } from '../../Text/Text';
import { SelectItem } from '../types';
import useStyles from './SelectItems.styles';

export type SelectItemsStylesNames = keyof ReturnType<typeof useStyles>;

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
  themeOverride,
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
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);

  const items = data.map((item, index) => {
    const selected = isItemSelected(item.value);

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
