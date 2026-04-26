import React, { useMemo } from 'react';
import { flexRender, Header } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  Box,
  BoxProps,
  Checkbox,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Radio,
  rem,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { FilterDispatcher } from '../DataGridFilters';
import { DefaultUnsortedIcon, ExpandChevron, GripIcon, SortIcon } from '../icons';
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
  | 'resizeHandle'
  | 'dragHandle';

export interface DataGridVirtualBodyProps
  extends BoxProps, CompoundStylesApiProps<DataGridVirtualBodyFactory>, ElementProps<'div'> {
  /** Fixed height for the scroll container */
  height?: number | string;

  /** Virtual scroll configuration */
  virtualScrollConfig?: {
    overscan?: number;
    estimateSize?: (index: number) => number;
  };

  /** Virtual column configuration */
  virtualColumnConfig?: {
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

export const DataGridVirtualBody = factory<DataGridVirtualBodyFactory>((props) => {
  const {
    className,
    style,
    classNames,
    styles,
    height,
    virtualScrollConfig,
    virtualColumnConfig,
    scrollContainerRef,
    onScroll,
    ...others
  } = useProps('DataGridVirtualBody', null, props);

  const ctx = useDataGridContext();
  const rows = ctx.table.getRowModel().rows;
  const headerGroups = ctx.table.getHeaderGroups();
  const visibleColumns = ctx.table.getVisibleLeafColumns();

  const withColumnVirt = ctx.withColumnVirtualization;
  const withRowVirt = ctx.withVirtualization;

  let totalColumns = visibleColumns.length;
  if (ctx.withRowReorder) {
    totalColumns += 1;
  }
  if (ctx.withRowSelection) {
    totalColumns += 1;
  }
  if (ctx.withRowExpansion && !ctx.withTreeData) {
    totalColumns += 1;
  }
  if (ctx.withRowNumbers) {
    totalColumns += 1;
  }

  const defaultEstimateSize = () => 36;
  const estimateSize = virtualScrollConfig?.estimateSize ?? defaultEstimateSize;
  const overscan = virtualScrollConfig?.overscan ?? 10;

  const rowVirtualizer = useVirtualizer({
    count: withRowVirt ? rows.length : 0,
    getScrollElement: () => scrollContainerRef?.current ?? null,
    estimateSize,
    overscan,
    measureElement: ctx.withRowExpansion
      ? (element) => element.getBoundingClientRect().height
      : undefined,
  });

  const columnVirtualizer = useVirtualizer({
    count: withColumnVirt ? visibleColumns.length : 0,
    getScrollElement: () => scrollContainerRef?.current ?? null,
    estimateSize: virtualColumnConfig?.estimateSize ?? ((index) => visibleColumns[index].getSize()),
    horizontal: true,
    overscan: virtualColumnConfig?.overscan ?? 3,
  });

  const virtualRowItems = withRowVirt ? rowVirtualizer.getVirtualItems() : null;
  const totalRowSize = withRowVirt ? rowVirtualizer.getTotalSize() : 0;
  const virtualColumnItems = withColumnVirt ? columnVirtualizer.getVirtualItems() : null;
  const totalColumnSize = withColumnVirt ? columnVirtualizer.getTotalSize() : 0;

  const allCellsPinned = useMemo(() => {
    if (!withColumnVirt || !ctx.withColumnPinning) {
      return { left: [] as number[], right: [] as number[] };
    }
    const left: number[] = [];
    const right: number[] = [];
    visibleColumns.forEach((col, index) => {
      const pinned = col.getIsPinned();
      if (pinned === 'left') {
        left.push(index);
      } else if (pinned === 'right') {
        right.push(index);
      }
    });
    return { left, right };
  }, [withColumnVirt, ctx.withColumnPinning, visibleColumns]);

  const pinnedColumnIndexSet = useMemo(() => {
    const set = new Set<number>();
    allCellsPinned.left.forEach((i) => set.add(i));
    allCellsPinned.right.forEach((i) => set.add(i));
    return set;
  }, [allCellsPinned]);

  const leftPinnedWidth = useMemo(() => {
    if (!withColumnVirt || !ctx.withColumnPinning) {
      return 0;
    }
    let width = 0;
    allCellsPinned.left.forEach((idx) => {
      width += visibleColumns[idx]?.getSize() ?? 0;
    });
    return width;
  }, [withColumnVirt, ctx.withColumnPinning, allCellsPinned, visibleColumns]);

  const pinnedColumnsWidth = useMemo(() => {
    if (!withColumnVirt || !ctx.withColumnPinning) {
      return 0;
    }
    let width = leftPinnedWidth;
    allCellsPinned.right.forEach((idx) => {
      width += visibleColumns[idx]?.getSize() ?? 0;
    });
    return width;
  }, [withColumnVirt, ctx.withColumnPinning, leftPinnedWidth, allCellsPinned, visibleColumns]);

  const columnWidthVars = useMemo(() => {
    const vars: Record<string, string> = {};
    visibleColumns.forEach((col, i) => {
      vars[`--dg-col-${i}`] = `${col.getSize()}px`;
    });
    return vars;
  }, [visibleColumns]);

  const extraColOffset =
    (ctx.withRowReorder ? 1 : 0) +
    (ctx.withRowSelection ? 1 : 0) +
    (ctx.withRowExpansion && !ctx.withTreeData ? 1 : 0) +
    (ctx.withRowNumbers ? 1 : 0);

  function renderCellContent(
    row: ReturnType<(typeof rows)[number]['getVisibleCells']> extends (infer C)[] ? C : never,
    cellIndex: number,
    rowObj: (typeof rows)[number]
  ) {
    const isPinned = ctx.withColumnPinning ? row.column.getIsPinned() : false;
    const cellColIndex = cellIndex + 1 + extraColOffset;

    const pinnedStyles = isPinned
      ? {
          position: 'sticky' as const,
          left: isPinned === 'left' ? `${row.column.getStart('left')}px` : undefined,
          right: isPinned === 'right' ? `${row.column.getAfter('right')}px` : undefined,
          zIndex: 1,
        }
      : undefined;

    const handleCellClick = ctx.onCellClick
      ? (event: React.MouseEvent) => {
          ctx.onCellClick!(row, event);
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

    const isTreeFirstCell = ctx.withTreeData && cellIndex === 0;

    return (
      <div
        key={row.id}
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
        {isTreeFirstCell ? (
          <Box
            {...ctx.getStyles('treeIndent', { classNames, styles })}
            style={{ paddingLeft: rowObj.depth * 20 }}
          >
            {ctx.withRowExpansion && rowObj.getCanExpand() ? (
              <Box
                component="button"
                type="button"
                aria-expanded={rowObj.getIsExpanded()}
                aria-label={rowObj.getIsExpanded() ? 'Collapse row' : 'Expand row'}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  rowObj.toggleExpanded();
                }}
                {...ctx.getStyles('treeToggle', { classNames, styles })}
              >
                <ExpandChevron expanded={rowObj.getIsExpanded()} />
              </Box>
            ) : null}
            {flexRender(row.column.columnDef.cell, row.getContext())}
          </Box>
        ) : (
          flexRender(row.column.columnDef.cell, row.getContext())
        )}
      </div>
    );
  }

  function renderVirtualizedCells(
    row: (typeof rows)[number],
    cells: ReturnType<typeof row.getVisibleCells>
  ) {
    const leftPinned = allCellsPinned.left.map((idx) => renderCellContent(cells[idx], idx, row));
    const virtualCells = virtualColumnItems!.filter(
      (item) => !pinnedColumnIndexSet.has(item.index)
    );
    const middle = (
      <div
        key="__virtual-col-spacer"
        style={{
          display: 'flex',
          position: 'relative',
          width: totalColumnSize - pinnedColumnsWidth,
          flexShrink: 0,
        }}
      >
        {virtualCells.map((virtualCol) => {
          const cell = cells[virtualCol.index];
          return (
            <div
              key={cell.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                transform: `translateX(${virtualCol.start - leftPinnedWidth}px)`,
              }}
            >
              {renderCellContent(cell, virtualCol.index, row)}
            </div>
          );
        })}
      </div>
    );
    const rightPinned = allCellsPinned.right.map((idx) => renderCellContent(cells[idx], idx, row));
    return (
      <>
        {leftPinned}
        {middle}
        {rightPinned}
      </>
    );
  }

  function renderAllCells(
    row: (typeof rows)[number],
    cells: ReturnType<typeof row.getVisibleCells>
  ) {
    return cells.map((cell, cellIndex) => renderCellContent(cell, cellIndex, row));
  }

  function renderRowContent(row: (typeof rows)[number], rowIndex: number) {
    const isSelected = ctx.withRowSelection && row.getIsSelected();
    const isStriped = ctx.striped && rowIndex % 2 === 1;
    const isExpanded =
      ctx.withRowExpansion && !ctx.withTreeData && row.getIsExpanded() && ctx.renderExpandedRow;

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

    const cells = row.getVisibleCells();

    return (
      <>
        <div
          role="row"
          aria-rowindex={rowIndex + 2}
          tabIndex={hasRowClickHandler ? 0 : undefined}
          data-selected={isSelected || undefined}
          data-striped={isStriped || undefined}
          data-hover={ctx.highlightOnHover || undefined}
          onClick={hasRowClickHandler ? handleRowClick : undefined}
          onKeyDown={handleRowKeyDown}
          onDoubleClick={handleRowDoubleClick}
          {...ctx.getStyles('virtualRow', { classNames, styles })}
        >
          {ctx.withRowReorder && (
            <div
              role="gridcell"
              {...ctx.getStyles('virtualCell', { classNames, styles })}
              {...ctx.getStyles('dragHandle', { classNames, styles })}
            >
              <GripIcon />
            </div>
          )}
          {ctx.withRowSelection && (
            <div
              role="gridcell"
              aria-colindex={1}
              {...ctx.getStyles('virtualCell', { classNames, styles })}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {row.getCanSelect() &&
                (ctx.table.options.enableMultiRowSelection === false ? (
                  <Radio
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    {...ctx.getStyles('selectionCheckbox', { classNames, styles })}
                  />
                ) : (
                  <Checkbox
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    {...ctx.getStyles('selectionCheckbox', { classNames, styles })}
                  />
                ))}
            </div>
          )}
          {ctx.withRowExpansion && !ctx.withTreeData && (
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
          {withColumnVirt ? renderVirtualizedCells(row, cells) : renderAllCells(row, cells)}
        </div>
        {isExpanded && (
          <div
            role="row"
            aria-rowindex={rowIndex + 2}
            {...ctx.getStyles('expandedRow', { classNames, styles })}
          >
            {ctx.renderExpandedRow!({ row })}
          </div>
        )}
      </>
    );
  }

  const renderedRows = useMemo(() => {
    if (withRowVirt && virtualRowItems) {
      return virtualRowItems.map((virtualItem) => {
        const row = rows[virtualItem.index];
        return (
          <div
            key={row.id}
            ref={ctx.withRowExpansion ? rowVirtualizer.measureElement : undefined}
            data-index={virtualItem.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderRowContent(row, virtualItem.index)}
          </div>
        );
      });
    }

    return rows.map((row, rowIndex) => <div key={row.id}>{renderRowContent(row, rowIndex)}</div>);
  }, [withRowVirt, virtualRowItems, virtualColumnItems, rows, ctx, classNames, styles]);

  function renderHeaderCell(header: Header<any, unknown>, headerIndex: number) {
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
          right: isPinned === 'right' ? `${header.column.getAfter('right')}px` : undefined,
          zIndex: 1,
        }
      : undefined;

    const colIndex = headerIndex + 1 + extraColOffset;

    return (
      <div
        key={header.id}
        role="columnheader"
        aria-colindex={colIndex}
        aria-sort={ariaSort}
        data-sort-asc={sortDirection === 'asc' || undefined}
        data-sort-desc={sortDirection === 'desc' || undefined}
        data-sortable={canSort || undefined}
        data-pinned-left={isPinned === 'left' || undefined}
        data-pinned-right={isPinned === 'right' || undefined}
        data-resizing={isResizing || undefined}
        {...ctx.getStyles('virtualCell', { classNames, styles })}
        style={{
          ...pinnedStyles,
          width:
            header.colSpan > 1
              ? header.getLeafHeaders().reduce((sum, leaf) => sum + leaf.getSize(), 0)
              : `var(--dg-col-${headerIndex})`,
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
                <Box component="span" {...ctx.getStyles('sortIcon', { classNames, styles })}>
                  {sortDirection
                    ? (ctx.sortedIcon ?? <SortIcon size={14} />)
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
      </div>
    );
  }

  function renderVirtualizedHeaders(headers: Header<any, unknown>[], isLeafRow: boolean) {
    if (isLeafRow) {
      const leftPinned = allCellsPinned.left.map((idx) => renderHeaderCell(headers[idx], idx));
      const virtualHeaders = virtualColumnItems!.filter(
        (item) => !pinnedColumnIndexSet.has(item.index)
      );
      const middle = (
        <div
          key="__virtual-header-spacer"
          style={{
            display: 'flex',
            position: 'relative',
            width: totalColumnSize - pinnedColumnsWidth,
            flexShrink: 0,
          }}
        >
          {virtualHeaders.map((virtualCol) => (
            <div
              key={headers[virtualCol.index].id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                transform: `translateX(${virtualCol.start - leftPinnedWidth}px)`,
              }}
            >
              {renderHeaderCell(headers[virtualCol.index], virtualCol.index)}
            </div>
          ))}
        </div>
      );
      const rightPinned = allCellsPinned.right.map((idx) => renderHeaderCell(headers[idx], idx));
      return (
        <>
          {leftPinned}
          {middle}
          {rightPinned}
        </>
      );
    }

    const visibleLeafIndexSet = new Set(virtualColumnItems!.map((item) => item.index));
    const visibleHeaders = headers.filter((header) => {
      const leafColumns = header.getLeafHeaders();
      return leafColumns.some((leaf) => {
        const leafIndex = visibleColumns.findIndex((col) => col.id === leaf.column.id);
        return leafIndex !== -1 && visibleLeafIndexSet.has(leafIndex);
      });
    });

    return (
      <>{visibleHeaders.map((header, headerIndex) => renderHeaderCell(header, headerIndex))}</>
    );
  }

  const bodyContent = withRowVirt ? (
    <div style={{ height: totalRowSize, position: 'relative' }}>
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
  ) : (
    <div>
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
            {ctx.withRowReorder && (
              <div role="columnheader" {...ctx.getStyles('virtualCell', { classNames, styles })} />
            )}
            {ctx.withRowSelection && ctx.table.options.enableMultiRowSelection !== false && (
              <div
                role="columnheader"
                aria-colindex={1}
                {...ctx.getStyles('virtualCell', { classNames, styles })}
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
              </div>
            )}
            {ctx.withRowSelection && ctx.table.options.enableMultiRowSelection === false && (
              <div
                role="columnheader"
                aria-colindex={1}
                {...ctx.getStyles('virtualCell', { classNames, styles })}
              />
            )}
            {ctx.withRowExpansion && !ctx.withTreeData && (
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
            {withColumnVirt
              ? renderVirtualizedHeaders(
                  headerGroup.headers,
                  headerGroups[headerGroups.length - 1].id === headerGroup.id
                )
              : headerGroup.headers.map((header, headerIndex) =>
                  renderHeaderCell(header, headerIndex)
                )}
          </div>
        ))}

        {bodyContent}
      </div>
    </div>
  );
});

DataGridVirtualBody.classes = classes;
DataGridVirtualBody.displayName = '@mantine/data-grid/DataGridVirtualBody';
