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
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { KebabIcon } from '../icons';
import type { DataGridFeatures } from '../table-features';
import classes from '../DataGrid.module.css';

export type DataGridColumnMenuStylesNames = 'columnMenu';

export interface DataGridColumnMenuProps
  extends BoxProps, CompoundStylesApiProps<DataGridColumnMenuFactory>, ElementProps<'div'> {
  /** Column instance from @tanstack/react-table */
  column: Column<DataGridFeatures, any, unknown>;

  /** Props passed to the internal Menu component */
  menuProps?: Partial<MenuProps>;
}

export type DataGridColumnMenuFactory = Factory<{
  props: DataGridColumnMenuProps;
  ref: HTMLDivElement;
  stylesNames: DataGridColumnMenuStylesNames;
  compound: true;
}>;

const defaultProps = {} satisfies Partial<DataGridColumnMenuProps>;

export const DataGridColumnMenu = factory<DataGridColumnMenuFactory>((props) => {
  const { className, style, classNames, styles, column, menuProps, ...others } = useProps(
    'DataGridColumnMenu',
    defaultProps,
    props
  );

  const ctx = useDataGridContext();
  const { labels } = ctx;

  const canSort = ctx.withSorting && column.getCanSort();
  const isSorted = column.getIsSorted();
  const canHide = ctx.withColumnVisibility && column.getCanHide();
  const canPin = ctx.withColumnPinning && column.getCanPin();
  const isPinned = column.getIsPinned();
  const canGroup = ctx.withGrouping && column.getCanGroup();
  const isGrouped = column.getIsGrouped();
  const canResize = ctx.withColumnResizing && column.getCanResize();

  const hasSortItems = canSort;
  const hasVisibilityItems = canHide;
  const hasPinItems = canPin;
  const hasGroupItems = canGroup || isGrouped;
  const hasResizeItems = canResize;

  const hasAnyItem =
    hasSortItems || hasVisibilityItems || hasPinItems || hasGroupItems || hasResizeItems;

  if (!hasAnyItem) {
    return null;
  }

  const sortItems = canSort ? (
    <>
      <Menu.Item onClick={() => column.toggleSorting(false)}>{labels.columnMenuSortAsc}</Menu.Item>
      <Menu.Item onClick={() => column.toggleSorting(true)}>{labels.columnMenuSortDesc}</Menu.Item>
      {isSorted && (
        <Menu.Item onClick={() => column.clearSorting()}>{labels.columnMenuClearSort}</Menu.Item>
      )}
    </>
  ) : null;

  const pinItems = canPin ? (
    <>
      {isPinned !== 'start' && (
        <Menu.Item onClick={() => column.pin('start')}>{labels.columnMenuPinLeft}</Menu.Item>
      )}
      {isPinned !== 'end' && (
        <Menu.Item onClick={() => column.pin('end')}>{labels.columnMenuPinRight}</Menu.Item>
      )}
      {isPinned && (
        <Menu.Item onClick={() => column.pin(false)}>{labels.columnMenuUnpin}</Menu.Item>
      )}
    </>
  ) : null;

  const visibilityItems = canHide ? (
    <Menu.Item onClick={() => column.toggleVisibility(false)}>{labels.columnMenuHide}</Menu.Item>
  ) : null;

  const groupItems = (
    <>
      {canGroup && !isGrouped && (
        <Menu.Item onClick={() => column.toggleGrouping()}>{labels.columnMenuGroupBy}</Menu.Item>
      )}
      {isGrouped && (
        <Menu.Item onClick={() => column.toggleGrouping()}>{labels.columnMenuUngroup}</Menu.Item>
      )}
    </>
  );

  const resizeItems = canResize ? (
    <Menu.Item onClick={() => column.resetSize()}>{labels.columnMenuResetSize}</Menu.Item>
  ) : null;

  const needsDividerAfterSort = hasSortItems && (hasVisibilityItems || hasPinItems);
  const needsDividerAfterPinning =
    (hasVisibilityItems || hasPinItems) && (hasGroupItems || hasResizeItems);

  return (
    <Box {...ctx.getStyles('columnMenu', { className, classNames, style, styles })} {...others}>
      <Menu withinPortal position="bottom-end" {...menuProps}>
        <Menu.Target>
          <ActionIcon variant="subtle" size="sm" aria-label="Column menu">
            <KebabIcon />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          {sortItems}
          {needsDividerAfterSort && <Menu.Divider />}
          {visibilityItems}
          {pinItems}
          {needsDividerAfterPinning && <Menu.Divider />}
          {groupItems}
          {resizeItems}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
});

DataGridColumnMenu.classes = classes;
DataGridColumnMenu.displayName = '@mantine/data-grid/DataGridColumnMenu';
