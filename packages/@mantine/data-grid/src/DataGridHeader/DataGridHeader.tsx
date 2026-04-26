import React, { useCallback, useRef } from 'react';
import { flexRender, Header } from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  Checkbox,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { FilterDispatcher } from '../DataGridFilters';
import { DefaultSortedIcon, DefaultUnsortedIcon } from '../icons';
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

function getPinnedStyles(header: Header<any, unknown>) {
  const isPinned = header.column.getIsPinned();
  if (!isPinned) {
    return undefined;
  }

  return {
    position: 'sticky' as const,
    left: isPinned === 'left' ? `${header.column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${header.column.getAfter('right')}px` : undefined,
    zIndex: 1,
  };
}

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
        ctx.table.getState().columnOrder.length > 0
          ? ctx.table.getState().columnOrder
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
        <Box component="tr" key={headerGroup.id} {...ctx.getStyles('tr', { classNames, styles })}>
          {ctx.withRowReorder && (
            <Box component="th" {...ctx.getStyles('th', { classNames, styles })} />
          )}
          {ctx.withRowSelection && ctx.table.options.enableMultiRowSelection !== false && (
            <Box component="th" {...ctx.getStyles('th', { classNames, styles })}>
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
            </Box>
          )}
          {ctx.withRowSelection && ctx.table.options.enableMultiRowSelection === false && (
            <Box component="th" {...ctx.getStyles('th', { classNames, styles })} />
          )}
          {ctx.withRowExpansion && !ctx.withTreeData && (
            <Box component="th" {...ctx.getStyles('th', { classNames, styles })} />
          )}
          {ctx.withRowNumbers && (
            <Box
              component="th"
              {...ctx.getStyles('th', { classNames, styles })}
              {...ctx.getStyles('rowNumber', { classNames, styles })}
            >
              #
            </Box>
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
            const pinnedStyles = ctx.withColumnPinning ? getPinnedStyles(header) : undefined;
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
              <Box
                component="th"
                key={header.id}
                colSpan={header.colSpan}
                aria-sort={ariaSort}
                data-sort-asc={sortDirection === 'asc' || undefined}
                data-sort-desc={sortDirection === 'desc' || undefined}
                data-sortable={canSort || undefined}
                data-pinned-left={isPinned === 'left' || undefined}
                data-pinned-right={isPinned === 'right' || undefined}
                data-resizing={isResizing || undefined}
                {...ctx.getStyles('th', { classNames, styles })}
                style={{
                  ...pinnedStyles,
                  width: ctx.withColumnResizing ? header.getSize() : undefined,
                }}
                {...reorderProps}
              >
                {header.isPlaceholder ? null : (
                  <>
                    <Box
                      component="div"
                      {...ctx.getStyles('headerCell', { classNames, styles })}
                      onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {canSort && (
                        <Box
                          component="span"
                          {...ctx.getStyles('sortIcon', { classNames, styles })}
                        >
                          {sortDirection
                            ? (ctx.sortedIcon ?? <DefaultSortedIcon />)
                            : (ctx.unsortedIcon ?? <DefaultUnsortedIcon />)}
                        </Box>
                      )}
                    </Box>
                    {ctx.withFiltering && header.column.getCanFilter() && (
                      <FilterDispatcher column={header.column} />
                    )}
                  </>
                )}
                {ctx.withColumnResizing && header.column.getCanResize() && (
                  <Box
                    component="div"
                    {...ctx.getStyles('resizeHandle', { classNames, styles })}
                    onPointerDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    data-resizing={isResizing || undefined}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
});

DataGridHeader.classes = classes;
DataGridHeader.displayName = '@mantine/data-grid/DataGridHeader';
