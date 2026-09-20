import React from 'react';
import { Column } from '@tanstack/react-table';
import {
  ActionIcon,
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Menu,
  MenuProps,
  rem,
  useDirection,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { getReorderNeighbours, moveColumn } from '../DataGridHeader/move-column';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ClearSortIcon,
  EyeOffIcon,
  GroupIcon,
  KebabIcon,
  PinIcon,
  PinOffIcon,
  ResetSizeIcon,
  UngroupIcon,
} from '../icons';
import type { DataGridFeatures } from '../table-features';
import classes from '../DataGrid.module.css';

export type DataGridColumnMenuStylesNames = 'columnMenu';

export interface DataGridColumnMenuProps
  extends BoxProps, CompoundStylesApiProps<DataGridColumnMenuFactory>, ElementProps<'div'> {
  /** Column instance from `@tanstack/react-table` */
  column: Column<DataGridFeatures, any, unknown>;

  /** Props passed to the internal Menu component */
  menuProps?: Partial<MenuProps>;

  /** Additional menu items rendered after the built-in items, separated by a divider */
  children?: React.ReactNode;
}

export type DataGridColumnMenuFactory = Factory<{
  props: DataGridColumnMenuProps;
  ref: HTMLDivElement;
  stylesNames: DataGridColumnMenuStylesNames;
  compound: true;
}>;

const defaultProps = {} satisfies Partial<DataGridColumnMenuProps>;

const kebabVars = () => ({
  root: {
    '--ai-size': `calc(var(--dg-icon-size) + ${rem(4)})`,
    '--ai-radius': 'var(--mantine-radius-sm)',
    '--ai-color': 'var(--mantine-color-text)',
    '--ai-hover': 'var(--dg-hover-color)',
    '--ai-hover-color': 'var(--mantine-color-text)',
  },
});

const stopPropagation = (event: React.SyntheticEvent) => event.stopPropagation();

export const DataGridColumnMenu = factory<DataGridColumnMenuFactory>((props) => {
  const { className, style, classNames, styles, column, menuProps, children, ...others } = useProps(
    'DataGridColumnMenu',
    defaultProps,
    props
  );

  const ctx = useDataGridContext();
  const { labels, table } = ctx;
  const { dir } = useDirection();

  const canSort = ctx.withSorting && column.getCanSort();
  const isSorted = column.getIsSorted();
  const canHide = ctx.withColumnVisibility && column.getCanHide();
  const canPin = ctx.withColumnPinning && column.getCanPin();
  const isPinned = column.getIsPinned();
  const canGroup = ctx.withGrouping && column.getCanGroup();
  const isGrouped = column.getIsGrouped();
  const canResize = ctx.withColumnResizing && column.getCanResize();
  const canMove = ctx.withColumnReorder && !column.columnDef.meta?.utility;
  const neighbours = canMove ? getReorderNeighbours(column, table) : {};
  const leftNeighbour = dir === 'rtl' ? neighbours.next : neighbours.previous;
  const rightNeighbour = dir === 'rtl' ? neighbours.previous : neighbours.next;
  const customItems = ctx.columnMenuItems?.(column);

  const hasSortItems = canSort;
  const hasPlacementItems = canMove || canPin || canHide;
  const hasGroupItems = canGroup || isGrouped || canResize;
  const hasCustomItems = customItems !== undefined && customItems !== null && customItems !== false;
  const hasChildren = children !== undefined && children !== null && children !== false;

  if (!hasSortItems && !hasPlacementItems && !hasGroupItems && !hasCustomItems && !hasChildren) {
    return null;
  }

  const sections: React.ReactNode[] = [];

  if (hasSortItems) {
    sections.push(
      <React.Fragment key="sort">
        <Menu.Item leftSection={<ArrowUpIcon />} onClick={() => column.toggleSorting(false)}>
          {labels.columnMenuSortAsc}
        </Menu.Item>
        <Menu.Item leftSection={<ArrowDownIcon />} onClick={() => column.toggleSorting(true)}>
          {labels.columnMenuSortDesc}
        </Menu.Item>
        {isSorted && (
          <Menu.Item leftSection={<ClearSortIcon />} onClick={() => column.clearSorting()}>
            {labels.columnMenuClearSort}
          </Menu.Item>
        )}
      </React.Fragment>
    );
  }

  if (hasPlacementItems) {
    sections.push(
      <React.Fragment key="placement">
        {canMove && (
          <>
            <Menu.Item
              leftSection={<ArrowLeftIcon />}
              disabled={!leftNeighbour}
              onClick={() =>
                leftNeighbour &&
                moveColumn(table, column.id, leftNeighbour.id, dir === 'rtl' ? 'end' : 'start')
              }
            >
              {labels.columnMenuMoveLeft}
            </Menu.Item>
            <Menu.Item
              leftSection={<ArrowRightIcon />}
              disabled={!rightNeighbour}
              onClick={() =>
                rightNeighbour &&
                moveColumn(table, column.id, rightNeighbour.id, dir === 'rtl' ? 'start' : 'end')
              }
            >
              {labels.columnMenuMoveRight}
            </Menu.Item>
          </>
        )}
        {canPin && isPinned !== 'start' && (
          <Menu.Item leftSection={<PinIcon />} onClick={() => column.pin('start')}>
            {labels.columnMenuPinLeft}
          </Menu.Item>
        )}
        {canPin && isPinned !== 'end' && (
          <Menu.Item leftSection={<PinIcon />} onClick={() => column.pin('end')}>
            {labels.columnMenuPinRight}
          </Menu.Item>
        )}
        {canPin && isPinned && (
          <Menu.Item leftSection={<PinOffIcon />} onClick={() => column.pin(false)}>
            {labels.columnMenuUnpin}
          </Menu.Item>
        )}
        {canHide && (
          <Menu.Item leftSection={<EyeOffIcon />} onClick={() => column.toggleVisibility(false)}>
            {labels.columnMenuHide}
          </Menu.Item>
        )}
      </React.Fragment>
    );
  }

  if (hasGroupItems) {
    sections.push(
      <React.Fragment key="group">
        {canGroup && !isGrouped && (
          <Menu.Item leftSection={<GroupIcon />} onClick={() => column.toggleGrouping()}>
            {labels.columnMenuGroupBy}
          </Menu.Item>
        )}
        {isGrouped && (
          <Menu.Item leftSection={<UngroupIcon />} onClick={() => column.toggleGrouping()}>
            {labels.columnMenuUngroup}
          </Menu.Item>
        )}
        {canResize && (
          <Menu.Item leftSection={<ResetSizeIcon />} onClick={() => column.resetSize()}>
            {labels.columnMenuResetSize}
          </Menu.Item>
        )}
      </React.Fragment>
    );
  }

  if (hasCustomItems) {
    sections.push(<React.Fragment key="custom">{customItems}</React.Fragment>);
  }

  if (hasChildren) {
    sections.push(<React.Fragment key="children">{children}</React.Fragment>);
  }

  return (
    <Box
      {...ctx.getStyles('columnMenu', { className, classNames, style, styles })}
      onPointerDown={stopPropagation}
      onClick={stopPropagation}
      {...others}
    >
      <Menu withinPortal position="bottom-end" {...menuProps}>
        <Menu.Target>
          <ActionIcon variant="subtle" aria-label={labels.columnMenu} vars={kebabVars}>
            <KebabIcon />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Menu.Divider />}
              {section}
            </React.Fragment>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
});

DataGridColumnMenu.classes = classes;
DataGridColumnMenu.displayName = '@mantine/data-grid/DataGridColumnMenu';
