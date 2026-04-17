import React, { useMemo } from 'react';
import { flexRender } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  Box,
  BoxProps,
  Checkbox,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  rem,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { TextFilter } from '../DataGridFilters';
import classes from '../DataGrid.module.css';

export type DataGridVirtualBodyStylesNames =
  | 'virtualScrollContainer'
  | 'virtualGrid'
  | 'virtualGridHeader'
  | 'virtualRow'
  | 'virtualCell'
  | 'emptyState'
  | 'expandedRow'
  | 'selectionCheckbox'
  | 'selectAllCheckbox'
  | 'expandIcon'
  | 'rowNumber'
  | 'sortIcon'
  | 'headerCell'
  | 'resizeHandle';

export interface DataGridVirtualBodyProps
  extends BoxProps, CompoundStylesApiProps<DataGridVirtualBodyFactory>, ElementProps<'div'> {
  /** Fixed height for the scroll container */
  height?: number | string;

  /** Virtual scroll configuration */
  virtualScrollConfig?: {
    overscan?: number;
    estimateSize?: (index: number) => number;
  };

  /** Ref for the scroll container element */
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;

  /** Scroll event handler */
  onScroll?: React.UIEventHandler<HTMLDivElement>;
}

export type DataGridVirtualBodyFactory = Factory<{
  props: DataGridVirtualBodyProps;
  ref: HTMLDivElement;
  stylesNames: DataGridVirtualBodyStylesNames;
  compound: true;
}>;

function ExpandChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: expanded ? 'rotate(90deg)' : undefined,
        transition: 'transform 150ms ease',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export const DataGridVirtualBody = factory<DataGridVirtualBodyFactory>((props) => {
  const {
    className,
    style,
    classNames,
    styles,
    height,
    virtualScrollConfig,
    scrollContainerRef,
    onScroll,
    ...others
  } = useProps('DataGridVirtualBody', null, props);

  const ctx = useDataGridContext();
  const rows = ctx.table.getRowModel().rows;
  const headerGroups = ctx.table.getHeaderGroups();
  const visibleColumns = ctx.table.getVisibleLeafColumns();

  let totalColumns = visibleColumns.length;
  if (ctx.withRowSelection) {
    totalColumns += 1;
  }
  if (ctx.withRowExpansion) {
    totalColumns += 1;
  }
  if (ctx.withRowNumbers) {
    totalColumns += 1;
  }

  const defaultEstimateSize = () => 36;
  const estimateSize = virtualScrollConfig?.estimateSize ?? defaultEstimateSize;
  const overscan = virtualScrollConfig?.overscan ?? 10;

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollContainerRef?.current ?? null,
    estimateSize,
    overscan,
    measureElement: ctx.withRowExpansion
      ? (element) => element.getBoundingClientRect().height
      : undefined,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  const columnWidthVars = useMemo(() => {
    const vars: Record<string, string> = {};
    visibleColumns.forEach((col, i) => {
      vars[`--dg-col-${i}`] = `${col.getSize()}px`;
    });
    return vars;
  }, [visibleColumns]);

  const renderedRows = useMemo(
    () =>
      virtualItems.map((virtualItem) => {
        const row = rows[virtualItem.index];
        const rowIndex = virtualItem.index;
        const isSelected = ctx.withRowSelection && row.getIsSelected();
        const isStriped = ctx.striped && rowIndex % 2 === 1;
        const isExpanded = ctx.withRowExpansion && row.getIsExpanded() && ctx.renderExpandedRow;

        const handleRowClick = (event: React.MouseEvent) => {
          if (ctx.onRowClick) {
            ctx.onRowClick(row, event);
          }
          if (ctx.expandOnRowClick && ctx.withRowExpansion) {
            row.toggleExpanded();
          }
        };

        const handleRowDoubleClick = ctx.onRowDoubleClick
          ? (event: React.MouseEvent) => {
              ctx.onRowDoubleClick!(row, event);
            }
          : undefined;

        const hasRowClickHandler = !!(ctx.onRowClick || ctx.expandOnRowClick);

        const handleRowKeyDown = hasRowClickHandler
          ? (event: React.KeyboardEvent) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleRowClick(event as unknown as React.MouseEvent);
              }
            }
          : undefined;

        return (
          <div
            key={row.id}
            ref={ctx.withRowExpansion ? virtualizer.measureElement : undefined}
            data-index={virtualItem.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <div
              role="row"
              aria-rowindex={virtualItem.index + 2}
              tabIndex={hasRowClickHandler ? 0 : undefined}
              data-selected={isSelected || undefined}
              data-striped={isStriped || undefined}
              data-hover={ctx.highlightOnHover || undefined}
              onClick={hasRowClickHandler ? handleRowClick : undefined}
              onKeyDown={handleRowKeyDown}
              onDoubleClick={handleRowDoubleClick}
              {...ctx.getStyles('virtualRow', { classNames, styles })}
            >
              {ctx.withRowSelection && (
                <div
                  role="gridcell"
                  aria-colindex={1}
                  {...ctx.getStyles('virtualCell', { classNames, styles })}
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <Checkbox
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    {...ctx.getStyles('selectionCheckbox', { classNames, styles })}
                  />
                </div>
              )}
              {ctx.withRowExpansion && (
                <div
                  role="gridcell"
                  aria-colindex={ctx.withRowSelection ? 2 : 1}
                  {...ctx.getStyles('virtualCell', { classNames, styles })}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      row.toggleExpanded();
                    }}
                    {...ctx.getStyles('expandIcon', { classNames, styles })}
                  >
                    <ExpandChevron expanded={row.getIsExpanded()} />
                  </Box>
                </div>
              )}
              {ctx.withRowNumbers && (
                <div
                  role="gridcell"
                  {...ctx.getStyles('virtualCell', { classNames, styles })}
                  {...ctx.getStyles('rowNumber', { classNames, styles })}
                >
                  {rowIndex + 1}
                </div>
              )}
              {row.getVisibleCells().map((cell, cellIndex) => {
                const isPinned = ctx.withColumnPinning ? cell.column.getIsPinned() : false;
                const cellColIndex =
                  cellIndex +
                  1 +
                  (ctx.withRowSelection ? 1 : 0) +
                  (ctx.withRowExpansion ? 1 : 0) +
                  (ctx.withRowNumbers ? 1 : 0);

                const pinnedStyles = isPinned
                  ? {
                      position: 'sticky' as const,
                      left: isPinned === 'left' ? `${cell.column.getStart('left')}px` : undefined,
                      right:
                        isPinned === 'right' ? `${cell.column.getAfter('right')}px` : undefined,
                      zIndex: 1,
                    }
                  : undefined;

                const handleCellClick = ctx.onCellClick
                  ? (event: React.MouseEvent) => {
                      ctx.onCellClick!(cell, event);
                    }
                  : undefined;

                const handleCellKeyDown = handleCellClick
                  ? (event: React.KeyboardEvent) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleCellClick(event as unknown as React.MouseEvent);
                      }
                    }
                  : undefined;

                return (
                  <div
                    key={cell.id}
                    role="gridcell"
                    aria-colindex={cellColIndex}
                    tabIndex={handleCellClick ? 0 : undefined}
                    data-pinned-left={isPinned === 'left' || undefined}
                    data-pinned-right={isPinned === 'right' || undefined}
                    onClick={handleCellClick}
                    onKeyDown={handleCellKeyDown}
                    {...ctx.getStyles('virtualCell', { classNames, styles })}
                    style={{
                      ...pinnedStyles,
                      width: `var(--dg-col-${cellIndex})`,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                );
              })}
            </div>
            {isExpanded && (
              <div
                role="row"
                aria-rowindex={virtualItem.index + 2}
                {...ctx.getStyles('expandedRow', { classNames, styles })}
              >
                {ctx.renderExpandedRow!({ row })}
              </div>
            )}
          </div>
        );
      }),
    [virtualItems, rows, ctx, classNames, styles]
  );

  return (
    <div
      ref={scrollContainerRef}
      onScroll={onScroll}
      {...ctx.getStyles('virtualScrollContainer', {
        className,
        classNames,
        style: [{ height: height ? rem(height) : undefined, overflow: 'auto' }, style],
        styles,
      })}
      {...others}
    >
      <div
        role="grid"
        aria-rowcount={rows.length + 1}
        aria-colcount={totalColumns}
        {...ctx.getStyles('virtualGrid', { classNames, styles })}
        style={columnWidthVars}
      >
        {headerGroups.map((headerGroup) => (
          <div
            key={headerGroup.id}
            role="row"
            aria-rowindex={1}
            {...ctx.getStyles('virtualGridHeader', { classNames, styles })}
          >
            {ctx.withRowSelection && (
              <div
                role="columnheader"
                aria-colindex={1}
                {...ctx.getStyles('virtualCell', { classNames, styles })}
              >
                <Checkbox
                  checked={ctx.table.getIsAllRowsSelected()}
                  indeterminate={ctx.table.getIsSomeRowsSelected()}
                  onChange={ctx.table.getToggleAllRowsSelectedHandler()}
                  {...ctx.getStyles('selectAllCheckbox', { classNames, styles })}
                />
              </div>
            )}
            {ctx.withRowExpansion && (
              <div
                role="columnheader"
                aria-colindex={ctx.withRowSelection ? 2 : 1}
                {...ctx.getStyles('virtualCell', { classNames, styles })}
              />
            )}
            {ctx.withRowNumbers && (
              <div
                role="columnheader"
                {...ctx.getStyles('virtualCell', { classNames, styles })}
                {...ctx.getStyles('rowNumber', { classNames, styles })}
              >
                #
              </div>
            )}
            {headerGroup.headers.map((header, headerIndex) => {
              const canSort = ctx.withSorting && header.column.getCanSort();
              const sortDirection = header.column.getIsSorted();
              const ariaSort =
                sortDirection === 'asc'
                  ? ('ascending' as const)
                  : sortDirection === 'desc'
                    ? ('descending' as const)
                    : canSort
                      ? ('none' as const)
                      : undefined;

              const isPinned = ctx.withColumnPinning ? header.column.getIsPinned() : false;
              const isResizing = header.column.getIsResizing();

              const pinnedStyles = isPinned
                ? {
                    position: 'sticky' as const,
                    left: isPinned === 'left' ? `${header.column.getStart('left')}px` : undefined,
                    right:
                      isPinned === 'right' ? `${header.column.getAfter('right')}px` : undefined,
                    zIndex: 1,
                  }
                : undefined;

              const colIndex =
                headerIndex +
                1 +
                (ctx.withRowSelection ? 1 : 0) +
                (ctx.withRowExpansion ? 1 : 0) +
                (ctx.withRowNumbers ? 1 : 0);

              return (
                <div
                  key={header.id}
                  role="columnheader"
                  aria-colindex={colIndex}
                  aria-sort={ariaSort}
                  data-sort-asc={sortDirection === 'asc' || undefined}
                  data-sort-desc={sortDirection === 'desc' || undefined}
                  data-pinned-left={isPinned === 'left' || undefined}
                  data-pinned-right={isPinned === 'right' || undefined}
                  data-resizing={isResizing || undefined}
                  {...ctx.getStyles('virtualCell', { classNames, styles })}
                  style={{
                    ...pinnedStyles,
                    width: `var(--dg-col-${headerIndex})`,
                    fontWeight: 'var(--mantine-font-weight-medium)' as any,
                    position: isPinned ? 'sticky' : 'relative',
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <>
                      <Box
                        component="div"
                        {...ctx.getStyles('headerCell', { classNames, styles })}
                        onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                        style={canSort ? { cursor: 'pointer', userSelect: 'none' } : undefined}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort && (
                          <Box
                            component="span"
                            {...ctx.getStyles('sortIcon', { classNames, styles })}
                          >
                            <SortIcon direction={sortDirection} />
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
                </div>
              );
            })}
          </div>
        ))}

        <div style={{ height: totalSize, position: 'relative' }}>
          {rows.length === 0 && ctx.emptyState ? (
            <div
              role="row"
              {...ctx.getStyles('virtualRow', { classNames, styles })}
              style={{ position: 'relative' }}
            >
              <div
                role="gridcell"
                aria-colindex={1}
                {...ctx.getStyles('emptyState', { classNames, styles })}
                style={{ gridColumn: `1 / -1` }}
              >
                {ctx.emptyState}
              </div>
            </div>
          ) : (
            renderedRows
          )}
        </div>
      </div>
    </div>
  );
});

function SortIcon({ direction }: { direction: 'asc' | 'desc' | false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: direction === 'desc' ? 'rotate(180deg)' : undefined,
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <path d="M12 5l0 14" />
      <path d="M18 11l-6-6" />
      <path d="M6 11l6-6" />
    </svg>
  );
}

DataGridVirtualBody.classes = classes;
DataGridVirtualBody.displayName = '@mantine/data-grid/DataGridVirtualBody';
