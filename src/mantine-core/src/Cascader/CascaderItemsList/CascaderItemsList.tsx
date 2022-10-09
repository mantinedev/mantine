import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { SelectScrollArea } from '../../Select/SelectScrollArea/SelectScrollArea';
import { CascaderItem } from '../types';
import { useStyles } from './CascaderItemsList.styles';

export type CascaderMenuStyles = Selectors<typeof useStyles>;

export interface CascaderMenuProps extends DefaultProps<CascaderMenuStyles> {
  data: CascaderItem[];
  hovered: number[];
  __staticSelector: string;
  isItemSelected?(itemValue: string, nesting: number): boolean;
  uuid: string;
  itemsRefs?: React.MutableRefObject<HTMLElement[][]>;
  onItemHover: React.Dispatch<React.SetStateAction<number[]>>;
  onItemSelect(item: CascaderItem, index: number): void;
  expandOnHover: boolean;
  size: MantineSize;
  itemComponent: React.FC<any>;
  menuComponent: React.FC<any>;
  nesting: number;
  maxDropdownHeight: number;
}

export const CascaderItemsList = forwardRef<HTMLDivElement, CascaderMenuProps>(
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
      expandOnHover,
      size,
      nesting,
      maxDropdownHeight,
      itemComponent: Item,
      menuComponent: MenuComponent,
    }: CascaderMenuProps,
    ref
  ) => {
    const { classes } = useStyles({ size }, { classNames, styles, name: __staticSelector });

    // eslint-disable-next-line no-param-reassign
    if (!itemsRefs.current[nesting]) itemsRefs.current[nesting] = [];

    return (
      <SelectScrollArea style={{ maxHeight: maxDropdownHeight, width: 'auto' }} ref={ref}>
        <MenuComponent
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          aria-activedescendant={`${uuid}-menu-${nesting}-item-${hovered[nesting]}`}
        >
          {data.map((item, index) => {
            const selected = isItemSelected(item.value, nesting);
            const isHovered = hovered[nesting] === index;
            const hasChildren = item.children && item.children.length > 0;
            return (
              <Item
                key={item.value}
                size={size}
                hasChildren={hasChildren}
                className={classes.item}
                data-disabled={item.disabled || undefined}
                data-hovered={(!item.disabled && isHovered) || undefined}
                data-selected={(!item.disabled && selected) || undefined}
                onMouseEnter={() => {
                  onItemHover(
                    (prev) =>
                      prev.length === nesting
                        ? [...prev, index] // higher nesting level
                        : [...prev.slice(0, nesting), index] // lower or same nesting level
                  );
                  if (expandOnHover && hasChildren) {
                    // selects item if it has no children (expand on hover)
                    onItemSelect(item, index);
                  }
                }}
                id={`${uuid}-menu-${nesting}-item-${index}`}
                aria-owns={
                  hasChildren && selected
                    ? item.children.map((_, i) => `${uuid}-menu-${nesting + 1}-item-${i}`).join(' ')
                    : undefined
                }
                role="treeitem"
                tabIndex={-1}
                aria-selected={hovered[nesting] === index}
                aria-expanded={hasChildren ? selected : undefined}
                aria-level={nesting + 1}
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
                aria-disabled={item.disabled}
                {...item}
              />
            );
          })}
        </MenuComponent>
      </SelectScrollArea>
    );
  }
);
