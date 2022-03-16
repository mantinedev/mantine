import { ClassNames, DefaultProps, MantineSize } from '@mantine/core';
import React from 'react';
import { CascaderItem } from '../types';
import { useStyles } from './DefaultMenu.styles';

export type CascaderMenuStyles = ClassNames<typeof useStyles>;

export interface CascaderMenuProps extends DefaultProps<CascaderMenuStyles> {
  data: CascaderItem[];
  hovered: number;
  __staticSelector: string;
  isItemSelected?(itemValue: string, nesting: number): boolean;
  uuid: string;
  itemsRefs?: React.MutableRefObject<Record<string, HTMLDivElement>>;
  onItemHover: React.Dispatch<React.SetStateAction<number[]>>;
  onItemSelect(item: CascaderItem, index: number): void;
  size: MantineSize;
  itemComponent: React.FC<any>;
  nesting: number;
}

export function DefaultMenu({
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
  itemComponent: Item,
}: CascaderMenuProps) {
  const { classes, cx } = useStyles({ size }, { classNames, styles, name: __staticSelector });

  return (
    <div>
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
                    onItemSelect(item, index);
                  }
                : null
            }
            disabled={item.disabled}
            {...item}
          />
        );
      })}
    </div>
  );
}
