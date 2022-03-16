import { ClassNames, DefaultProps, MantineSize } from '@mantine/core';
import { mergeRefs } from '@mantine/hooks';
import React from 'react';
import { getItem } from '../getItem';
import { Menu } from '../Menu/Menu';
import { CascaderItem } from '../types';
import { useStyles } from './CascaderMenus.styles';

type CascaderMenusStyles = ClassNames<typeof useStyles>;

export interface CascaderMenusProps extends DefaultProps<CascaderMenusStyles> {
  data: CascaderItem[];
  hovered: number[];
  __staticSelector: string;
  isItemSelected?(itemValue: string, nesting: number): boolean;
  uuid: string;
  itemsRefs?: React.MutableRefObject<Record<number, Record<number, HTMLDivElement>>>;
  menuRefs?: React.MutableRefObject<Record<number, HTMLDivElement>>;
  scrollableRef: React.MutableRefObject<null>;
  onItemHover: React.Dispatch<React.SetStateAction<number[]>>;
  onItemSelect(item: CascaderItem, index: number): void;
  size: MantineSize;
  expandOnHover: boolean;
  maxDropdownHeight: number;
  menuComponent: React.FC<any>;
  itemComponent: React.FC<any>;
}

export function CascaderMenus({
  data,
  hovered,
  classNames,
  styles,
  __staticSelector,
  uuid,
  itemsRefs,
  menuRefs,
  scrollableRef,
  isItemSelected,
  onItemHover,
  maxDropdownHeight,
  onItemSelect,
  expandOnHover,
  size,
  menuComponent,
  itemComponent,
}: CascaderMenusProps) {
  const { classes, cx } = useStyles({ size }, { classNames, styles, name: __staticSelector });

  return (
    <>
      <Menu
        data={data}
        hovered={hovered}
        classNames={classNames}
        styles={styles}
        isItemSelected={isItemSelected}
        uuid={uuid}
        __staticSelector="Cascader"
        onItemHover={onItemHover}
        onItemSelect={onItemSelect}
        itemsRefs={itemsRefs}
        itemComponent={itemComponent}
        size={size}
        nesting={0}
        ref={mergeRefs({ current: menuRefs.current[0] }, scrollableRef)}
        menuComponent={menuComponent}
        maxDropdownHeight={maxDropdownHeight}
      />
      {(expandOnHover ? hovered : hovered.slice(0, hovered.length - 1))?.map((selected, i) => {
        const hoveredItem = getItem(data, i, hovered);
        if (!hoveredItem?.children) return <></>;
        return (
          <Menu
            data={hoveredItem.children}
            hovered={hovered}
            classNames={classNames}
            styles={styles}
            isItemSelected={isItemSelected}
            uuid={uuid}
            __staticSelector="Cascader"
            onItemHover={onItemHover}
            onItemSelect={onItemSelect}
            itemsRefs={itemsRefs}
            itemComponent={itemComponent}
            size={size}
            nesting={i + 1}
            ref={mergeRefs({ current: menuRefs.current[i + 1] }, scrollableRef)}
            maxDropdownHeight={maxDropdownHeight}
            menuComponent={menuComponent}
          />
        );
      })}
    </>
  );
}
