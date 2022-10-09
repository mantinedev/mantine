import { DefaultProps, MantineSize } from '@mantine/styles';
import React from 'react';
import { getItem } from '../getItem';
import { CascaderItemsList } from '../CascaderItemsList/CascaderItemsList';
import { CascaderItem } from '../types';

export interface CascaderItemsProps extends DefaultProps {
  data: CascaderItem[];
  hovered: number[];
  isItemSelected?(itemValue: string, nesting: number): boolean;
  uuid: string;
  itemsRefs?: React.MutableRefObject<HTMLElement[][]>;
  menuRefs?: React.MutableRefObject<HTMLDivElement[]>;
  onItemHover: React.Dispatch<React.SetStateAction<number[]>>;
  onItemSelect(item: CascaderItem, index: number): void;
  size: MantineSize;
  expandOnHover: boolean;
  maxDropdownHeight: number;
  menuComponent: React.FC<any>;
  itemComponent: React.FC<any>;
  nothingFound: React.ReactNode;
  __staticSelector: string;
}

export function CascaderItems({
  data,
  hovered,
  classNames,
  styles,
  uuid,
  itemsRefs,
  menuRefs,
  isItemSelected,
  onItemHover,
  maxDropdownHeight,
  onItemSelect,
  expandOnHover,
  size,
  menuComponent,
  itemComponent,
  nothingFound,
  __staticSelector,
}: CascaderItemsProps) {
  return (
    <>
      <CascaderItemsList
        data={data}
        hovered={hovered}
        classNames={classNames}
        styles={styles}
        isItemSelected={isItemSelected}
        uuid={uuid}
        __staticSelector={__staticSelector}
        onItemHover={onItemHover}
        onItemSelect={onItemSelect}
        expandOnHover={expandOnHover}
        itemsRefs={itemsRefs}
        itemComponent={itemComponent}
        size={size}
        nesting={0}
        ref={(node) => {
          // eslint-disable-next-line no-param-reassign
          menuRefs.current[0] = node;
        }}
        menuComponent={menuComponent}
        maxDropdownHeight={maxDropdownHeight}
      />
      {data.length > 0
        ? (expandOnHover ? hovered : hovered.slice(0, hovered.length - 1))?.map((selected, i) => {
            const hoveredItem = getItem(data, i, hovered);
            if (!hoveredItem?.children) return <></>;
            return (
              <CascaderItemsList
                key={`${uuid}-menu-${i + 1}`}
                data={hoveredItem.children}
                hovered={hovered}
                classNames={classNames}
                styles={styles}
                isItemSelected={isItemSelected}
                uuid={uuid}
                __staticSelector={__staticSelector}
                onItemHover={onItemHover}
                onItemSelect={onItemSelect}
                expandOnHover={expandOnHover}
                itemsRefs={itemsRefs}
                itemComponent={itemComponent}
                size={size}
                nesting={i + 1}
                ref={(node) => {
                  // eslint-disable-next-line no-param-reassign
                  menuRefs.current[i + 1] = node;
                }}
                maxDropdownHeight={maxDropdownHeight}
                menuComponent={menuComponent}
              />
            );
          })
        : nothingFound}
    </>
  );
}
