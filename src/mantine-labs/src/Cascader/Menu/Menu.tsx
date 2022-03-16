import { ClassNames, DefaultProps, MantineSize } from '@mantine/core';
import { SelectScrollArea } from '@mantine/core/src/components/Select/SelectScrollArea/SelectScrollArea';
import React, { forwardRef } from 'react';
import { CascaderItem } from '../types';
import { useStyles } from './Menu.styles';

export type CascaderMenuStyles = ClassNames<typeof useStyles>;

export interface CascaderMenuProps extends DefaultProps<CascaderMenuStyles> {
  data: CascaderItem[];
  hovered: number[];
  __staticSelector: string;
  isItemSelected?(itemValue: string, nesting: number): boolean;
  uuid: string;
  itemsRefs?: React.MutableRefObject<Record<number, Record<number, HTMLDivElement>>>;
  onItemHover: React.Dispatch<React.SetStateAction<number[]>>;
  onItemSelect(item: CascaderItem, index: number): void;
  size: MantineSize;
  itemComponent: React.FC<any>;
  menuComponent: React.FC<any>;
  nesting: number;
  maxDropdownHeight: number;
}

export const Menu = forwardRef<HTMLDivElement, CascaderMenuProps>(
  (
    {
      data,
      hovered,
      classNames,
      styles,
      __staticSelector,
      uuid,
      isItemSelected,
      itemsRefs,
      onItemHover,
      onItemSelect,
      size,
      nesting,
      maxDropdownHeight,
      itemComponent: Item,
      menuComponent: MenuComponent,
    }: CascaderMenuProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ size }, { classNames, styles, name: __staticSelector });

    // eslint-disable-next-line no-param-reassign
    if (!itemsRefs.current[nesting]) itemsRefs.current[nesting] = {};

    return (
      <SelectScrollArea style={{ height: maxDropdownHeight }} ref={ref}>
        <MenuComponent
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch',
          }}
        >
          {data.map((item, index) => {
            const selected = isItemSelected(item.value, nesting);
            return (
              <Item
                key={item.value}
                size={size}
                hasChildren={item.children && item.children.length > 0}
                className={cx(classes.item, {
                  [classes.hovered]: !item.disabled && hovered[nesting] === index,
                  [classes.selected]: !item.disabled && selected && hovered[nesting] === index,
                  [classes.disabled]: item.disabled,
                })}
                onMouseEnter={() =>
                  onItemHover(
                    (prev) =>
                      prev.length === nesting
                        ? [...prev, index] // higher nesting level
                        : prev.length - 1 === nesting
                        ? [...prev.slice(0, prev.length - 1), index] // same nesting level
                        : [...prev.slice(0, prev.length - (nesting + 2)), index] // lower nesting level
                  )
                }
                id={`${uuid}-${index}`}
                role="option"
                tabIndex={-1}
                aria-selected={hovered[nesting] === index}
                ref={(node: HTMLDivElement) => {
                  if (itemsRefs && itemsRefs.current) {
                    // eslint-disable-next-line no-param-reassign
                    itemsRefs.current[nesting][index] = node;
                  }
                }}
                onMouseDown={
                  !item.disabled
                    ? (event: React.MouseEvent<HTMLDivElement>) => {
                        event.preventDefault();
                        onItemSelect(item, index);
                      }
                    : null
                }
                disabled={item.disabled}
                {...item}
              />
            );
          })}
        </MenuComponent>
      </SelectScrollArea>
    );
  }
);
