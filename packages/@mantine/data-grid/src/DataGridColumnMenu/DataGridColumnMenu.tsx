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
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import classes from '../DataGrid.module.css';

export type DataGridColumnMenuStylesNames = 'columnMenu';

export interface DataGridColumnMenuProps
  extends BoxProps, CompoundStylesApiProps<DataGridColumnMenuFactory>, ElementProps<'div'> {
  /** Column instance from @tanstack/react-table */
  column: Column<any, unknown>;
}

export type DataGridColumnMenuFactory = Factory<{
  props: DataGridColumnMenuProps;
  ref: HTMLDivElement;
  stylesNames: DataGridColumnMenuStylesNames;
  compound: true;
}>;

function KebabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      style={{ display: 'block' }}
    >
      <circle cx="8" cy="3" r="1.5" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="8" cy="13" r="1.5" />
    </svg>
  );
}

const defaultProps = {} satisfies Partial<DataGridColumnMenuProps>;

export const DataGridColumnMenu = factory<DataGridColumnMenuFactory>((props) => {
  const { className, style, classNames, styles, column, ...others } = useProps(
    'DataGridColumnMenu',
    defaultProps,
    props
  );

  const ctx = useDataGridContext();
  const { localization } = ctx;

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
      <Menu.Item onClick={() => column.toggleSorting(false)}>
        {localization.columnMenuSortAsc}
      </Menu.Item>
      <Menu.Item onClick={() => column.toggleSorting(true)}>
        {localization.columnMenuSortDesc}
      </Menu.Item>
      {isSorted && (
        <Menu.Item onClick={() => column.clearSorting()}>
          {localization.columnMenuClearSort}
        </Menu.Item>
      )}
    </>
  ) : null;

  const pinItems = canPin ? (
    <>
      {isPinned !== 'left' && (
        <Menu.Item onClick={() => column.pin('left')}>{localization.columnMenuPinLeft}</Menu.Item>
      )}
      {isPinned !== 'right' && (
        <Menu.Item onClick={() => column.pin('right')}>{localization.columnMenuPinRight}</Menu.Item>
      )}
      {isPinned && (
        <Menu.Item onClick={() => column.pin(false)}>{localization.columnMenuUnpin}</Menu.Item>
      )}
    </>
  ) : null;

  const visibilityItems = canHide ? (
    <Menu.Item onClick={() => column.toggleVisibility(false)}>
      {localization.columnMenuHide}
    </Menu.Item>
  ) : null;

  const groupItems = (
    <>
      {canGroup && !isGrouped && (
        <Menu.Item onClick={() => column.toggleGrouping()}>
          {localization.columnMenuGroupBy}
        </Menu.Item>
      )}
      {isGrouped && (
        <Menu.Item onClick={() => column.toggleGrouping()}>
          {localization.columnMenuUngroup}
        </Menu.Item>
      )}
    </>
  );

  const resizeItems = canResize ? (
    <Menu.Item onClick={() => column.resetSize()}>{localization.columnMenuResetSize}</Menu.Item>
  ) : null;

  const needsDividerAfterSort = hasSortItems && (hasVisibilityItems || hasPinItems);
  const needsDividerAfterPinning =
    (hasVisibilityItems || hasPinItems) && (hasGroupItems || hasResizeItems);

  return (
    <Box {...ctx.getStyles('columnMenu', { className, classNames, style, styles })} {...others}>
      <Menu withinPortal position="bottom-end">
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
