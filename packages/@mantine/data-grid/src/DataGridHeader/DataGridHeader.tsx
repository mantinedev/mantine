import React, { useCallback, useRef } from 'react';
import { flexRender } from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  Checkbox,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  rem,
  UnstyledButton,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { FilterDispatcher } from '../DataGridFilters';
import { getPinnedStyles } from '../get-pinned-styles';
import { DefaultUnsortedIcon, SortIcon } from '../icons';
import classes from '../DataGrid.module.css';

export type DataGridHeaderStylesNames =
  | 'thead'
  | 'tr'
  | 'th'
  | 'headerCell'
  | 'sortIcon'
  | 'resizeHandle'
  | 'selectAllCheckbox'
  | 'rowNumber';

export interface DataGridHeaderProps
  extends BoxProps, CompoundStylesApiProps<DataGridHeaderFactory>, ElementProps<'thead'> {}

export type DataGridHeaderFactory = Factory<{
  props: DataGridHeaderProps;
  ref: HTMLTableSectionElement;
  stylesNames: DataGridHeaderStylesNames;
  compound: true;
}>;

export const DataGridHeader = factory<DataGridHeaderFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'DataGridHeader',
    null,
    props
  );

  const ctx = useDataGridContext();
  const dragColumnRef = useRef<string | null>(null);

  const handleDragStart = useCallback((e: React.DragEvent, columnId: string) => {
    dragColumnRef.current = columnId;
    e.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, targetColumnId: string) => {
      e.preventDefault();
      const sourceColumnId = dragColumnRef.current;
      if (!sourceColumnId || sourceColumnId === targetColumnId) {
        return;
      }

      const currentOrder =
        ctx.table.store.state.columnOrder.length > 0
          ? ctx.table.store.state.columnOrder
          : ctx.table.getAllLeafColumns().map((c) => c.id);

      const sourceIndex = currentOrder.indexOf(sourceColumnId);
      const targetIndex = currentOrder.indexOf(targetColumnId);
      if (sourceIndex === -1 || targetIndex === -1) {
        return;
      }

      const newOrder = [...currentOrder];
      newOrder.splice(sourceIndex, 1);
      newOrder.splice(targetIndex, 0, sourceColumnId);
      ctx.table.setColumnOrder(newOrder);
      dragColumnRef.current = null;
    },
    [ctx.table]
  );

  return (
    <Box
      component="thead"
      {...ctx.getStyles('thead', { className, classNames, style, styles })}
      {...others}
    >
      {ctx.table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} {...ctx.getStyles('tr', { classNames, styles })}>
          {ctx.withRowReorder && (
            <th
              {...ctx.getStyles('th', { classNames, styles })}
              style={ctx.tableLayout === 'fixed' ? { width: rem(40) } : undefined}
            />
          )}
          {ctx.withRowSelection && ctx.table.options.enableMultiRowSelection !== false && (
            <th
              {...ctx.getStyles('th', { classNames, styles })}
              style={ctx.tableLayout === 'fixed' ? { width: rem(40) } : undefined}
            >
              <Checkbox
                checked={
                  ctx.withPagination
                    ? ctx.table.getIsAllPageRowsSelected()
                    : ctx.table.getIsAllRowsSelected()
                }
                indeterminate={
                  ctx.withPagination
                    ? ctx.table.getIsSomePageRowsSelected()
                    : ctx.table.getIsSomeRowsSelected()
                }
                onChange={
                  ctx.withPagination
                    ? ctx.table.getToggleAllPageRowsSelectedHandler()
                    : ctx.table.getToggleAllRowsSelectedHandler()
                }
                {...ctx.getStyles('selectAllCheckbox', { classNames, styles })}
              />
            </th>
          )}
          {ctx.withRowSelection && ctx.table.options.enableMultiRowSelection === false && (
            <th
              {...ctx.getStyles('th', { classNames, styles })}
              style={ctx.tableLayout === 'fixed' ? { width: rem(40) } : undefined}
            />
          )}
          {ctx.withRowExpansion && !ctx.withTreeData && (
            <th
              {...ctx.getStyles('th', { classNames, styles })}
              style={ctx.tableLayout === 'fixed' ? { width: rem(40) } : undefined}
            />
          )}
          {ctx.withRowNumbers && (
            <th
              {...ctx.getStyles('th', { classNames, styles })}
              {...ctx.getStyles('rowNumber', { classNames, styles })}
              style={ctx.tableLayout === 'fixed' ? { width: rem(48) } : undefined}
            >
              #
            </th>
          )}
          {headerGroup.headers.map((header) => {
            const canSort = ctx.withSorting && header.column.getCanSort();
            const sortDirection = header.column.getIsSorted();
            const ariaSort =
              sortDirection === 'asc'
                ? 'ascending'
                : sortDirection === 'desc'
                  ? 'descending'
                  : canSort
                    ? 'none'
                    : undefined;

            const isPinned = ctx.withColumnPinning ? header.column.getIsPinned() : false;
            const pinnedStyles = ctx.withColumnPinning ? getPinnedStyles(header.column) : undefined;
            const isResizing = header.column.getIsResizing();

            const reorderProps = ctx.withColumnReorder
              ? {
                  draggable: true,
                  onDragStart: (e: React.DragEvent) => handleDragStart(e, header.column.id),
                  onDragOver: handleDragOver,
                  onDrop: (e: React.DragEvent) => handleDrop(e, header.column.id),
                }
              : {};

            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                aria-sort={ariaSort}
                data-sort-asc={sortDirection === 'asc' || undefined}
                data-sort-desc={sortDirection === 'desc' || undefined}
                data-sortable={canSort || undefined}
                data-pinned-left={isPinned === 'start' || undefined}
                data-pinned-right={isPinned === 'end' || undefined}
                data-resizing={isResizing || undefined}
                {...ctx.getStyles('th', { classNames, styles })}
                style={{
                  ...pinnedStyles,
                  width:
                    ctx.withColumnResizing || ctx.tableLayout === 'fixed'
                      ? header.getSize()
                      : undefined,
                }}
                {...reorderProps}
              >
                {header.isPlaceholder ? null : (
                  <>
                    {canSort ? (
                      <UnstyledButton
                        onClick={header.column.getToggleSortingHandler()}
                        {...ctx.getStyles('headerCell', { classNames, styles })}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <span {...ctx.getStyles('sortIcon', { classNames, styles })}>
                          {sortDirection
                            ? (ctx.sortedIcon ?? <SortIcon size={12} />)
                            : (ctx.unsortedIcon ?? <DefaultUnsortedIcon />)}
                        </span>
                      </UnstyledButton>
                    ) : (
                      <div {...ctx.getStyles('headerCell', { classNames, styles })}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    )}
                    {ctx.withFiltering && !ctx.headerFilters && header.column.getCanFilter() && (
                      <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <FilterDispatcher column={header.column} />
                      </div>
                    )}
                  </>
                )}
                {ctx.withColumnResizing && header.column.getCanResize() && (
                  <div
                    {...ctx.getStyles('resizeHandle', { classNames, styles })}
                    onPointerDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    data-resizing={isResizing || undefined}
                  />
                )}
              </th>
            );
          })}
        </tr>
      ))}
      {ctx.headerFilters && ctx.withFiltering && (
        <tr {...ctx.getStyles('tr', { classNames, styles })}>
          {ctx.withRowReorder && <th {...ctx.getStyles('th', { classNames, styles })} />}
          {ctx.withRowSelection && <th {...ctx.getStyles('th', { classNames, styles })} />}
          {ctx.withRowExpansion && !ctx.withTreeData && (
            <th {...ctx.getStyles('th', { classNames, styles })} />
          )}
          {ctx.withRowNumbers && <th {...ctx.getStyles('th', { classNames, styles })} />}
          {ctx.table.getVisibleLeafColumns().map((column) => {
            const isPinned = ctx.withColumnPinning ? column.getIsPinned() : false;
            const pinnedStyle = ctx.withColumnPinning ? getPinnedStyles(column) : undefined;

            return (
              <th
                key={column.id}
                data-pinned-left={isPinned === 'start' || undefined}
                data-pinned-right={isPinned === 'end' || undefined}
                {...ctx.getStyles('th', { classNames, styles })}
                style={{
                  ...pinnedStyle,
                  width:
                    ctx.withColumnResizing || ctx.tableLayout === 'fixed'
                      ? column.getSize()
                      : undefined,
                }}
              >
                {column.getCanFilter() ? <FilterDispatcher column={column} /> : null}
              </th>
            );
          })}
        </tr>
      )}
    </Box>
  );
});

DataGridHeader.classes = classes;
DataGridHeader.displayName = '@mantine/data-grid/DataGridHeader';
