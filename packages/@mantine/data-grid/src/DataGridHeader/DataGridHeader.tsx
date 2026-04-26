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
import { TextFilter } from '../DataGridFilters';
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

function DefaultSortedIcon() {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      style={{ display: 'block' }}
    >
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DefaultUnsortedIcon() {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      style={{ display: 'block' }}
    >
      <path
        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
          {ctx.withRowSelection && (
            <Box component="th" {...ctx.getStyles('th', { classNames, styles })}>
              <Checkbox
                checked={ctx.table.getIsAllRowsSelected()}
                indeterminate={ctx.table.getIsSomeRowsSelected()}
                onChange={ctx.table.getToggleAllRowsSelectedHandler()}
                {...ctx.getStyles('selectAllCheckbox', { classNames, styles })}
              />
            </Box>
          )}
          {ctx.withRowExpansion && (
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
                      <TextFilter column={header.column} />
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
