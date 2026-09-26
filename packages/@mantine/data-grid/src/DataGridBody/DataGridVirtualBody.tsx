import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Row } from '@tanstack/react-table';
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';
import { rem } from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { getOrderedVisibleColumns } from '../column-cell-props';
import { getRowHeightEstimate } from '../data-grid-sizes';
import { useDataGridContext } from '../DataGrid.context';
import { VirtualHeader } from '../DataGridHeader/virtual-header';
import { useTfootModel } from '../DataGridTfoot/tfoot-model';
import { VirtualTfoot } from '../DataGridTfoot/virtual-tfoot';
import { registerRowScroller } from '../hooks/row-scroller';
import type { DataGridFeatures } from '../table-features';
import { resolveEmptyState, SkeletonRows } from './body-states';
import { handleRowKeyDown, hasExpandedPanel } from './row-interactions';
import { getCellSelectionEntryId } from './use-cell-selection';
import { useVirtualColumns } from './use-virtual-columns';
import { VirtualRow } from './virtual-row';

interface DataGridVirtualBodyProps {
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
  /** Scroll event handler */
  onScroll?: React.UIEventHandler<HTMLDivElement>;
  ref?: React.Ref<HTMLDivElement>;
}

type AnyRow = Row<DataGridFeatures, any>;

function useHasAutoRowHeight(
  getRowHeight: ((row: AnyRow) => number | 'auto') | undefined,
  rows: AnyRow[],
  virtualItems: VirtualItem[]
) {
  const latch = useRef({ getRowHeight, rows, found: false });
  if (latch.current.getRowHeight !== getRowHeight || latch.current.rows !== rows) {
    latch.current = { getRowHeight, rows, found: false };
  }
  if (!latch.current.found && getRowHeight != null) {
    latch.current.found = virtualItems.some(
      (item) => rows[item.index] && getRowHeight(rows[item.index]) === 'auto'
    );
  }
  return latch.current.found;
}

export function DataGridVirtualBody({
  height,
  virtualScrollConfig,
  virtualColumnConfig,
  onScroll,
  ref,
}: DataGridVirtualBodyProps) {
  const ctx = useDataGridContext();
  const scrollContainerRef = ctx.store.scrollContainerRef;
  const rows = ctx.table.getRowModel().rows;
  const headerRowCount = ctx.table.getHeaderGroups().length;
  const tfootModel = useTfootModel();
  const startColumns = ctx.table.getPinnedVisibleLeafColumns('start');
  const centerColumns = ctx.table.getPinnedVisibleLeafColumns('center');
  const endColumns = ctx.table.getPinnedVisibleLeafColumns('end');
  const visibleColumns = useMemo(
    () => getOrderedVisibleColumns(ctx.table),
    [startColumns, centerColumns, endColumns]
  );

  const totalColumns = visibleColumns.length;
  const firstDataColumnIndex = visibleColumns.findIndex(
    (column) => !column.columnDef.meta?.utility
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) =>
    handleRowKeyDown(event, ctx, {
      rowSelector: '[role="row"][data-row-id]',
      containerSelector: 'div:not([role])',
    });

  const getItemKey = useCallback((index: number) => rows[index].id, [rows]);

  const rowVirtualizer = useVirtualizer({
    count: ctx.withRowVirtualization ? rows.length : 0,
    getItemKey,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: (index: number) =>
      getRowHeightEstimate(
        {
          estimateSize: virtualScrollConfig?.estimateSize,
          getRowHeight: ctx.getRowHeight,
          estimateRowHeight: ctx.estimateRowHeight,
          size: ctx.store.size,
        },
        rows[index],
        index
      ),
    overscan: virtualScrollConfig?.overscan ?? 10,
    measureElement: (element) => element.getBoundingClientRect().height,
  });

  const virtualItems = ctx.withRowVirtualization ? rowVirtualizer.getVirtualItems() : [];
  const hasAutoRowHeight = useHasAutoRowHeight(ctx.getRowHeight, rows, virtualItems);
  const measureRows =
    ctx.withRowExpansion ||
    virtualScrollConfig?.estimateSize != null ||
    ctx.estimateRowHeight != null ||
    hasAutoRowHeight;

  useDidUpdate(() => {
    rowVirtualizer.measure();
    if (measureRows) {
      rowVirtualizer.elementsCache.forEach((element) => {
        if (element.isConnected) {
          rowVirtualizer.measureElement(element);
        }
      });
    }
  }, [
    ctx.store.size,
    ctx.getRowHeight,
    ctx.estimateRowHeight,
    virtualScrollConfig?.estimateSize,
    measureRows,
  ]);

  const tableStore = ctx.table.store;

  useEffect(() => {
    if (!ctx.withRowVirtualization) {
      return undefined;
    }

    return registerRowScroller(tableStore, (index: number) =>
      rowVirtualizer.scrollToIndex(index, { align: 'start' })
    );
  }, [ctx.withRowVirtualization, rowVirtualizer, tableStore]);

  const expandedState = ctx.table.store.state.expanded;
  const withExpandedPanels = ctx.renderExpandedRow != null;
  const panelsBefore = useMemo(() => {
    if (!ctx.withRowExpansion) {
      return null;
    }

    const counts: number[] = [];
    let total = 0;
    rows.forEach((row) => {
      counts.push(total);
      if (hasExpandedPanel(ctx, row)) {
        total += 1;
      }
    });
    counts.push(total);
    return counts;
  }, [rows, ctx.withRowExpansion, withExpandedPanels, ctx.withTreeData, expandedState]);
  const totalPanels = panelsBefore?.[rows.length] ?? 0;

  const columnSizing = ctx.table.store.state.columnSizing;
  const columns = useVirtualColumns({
    enabled: ctx.withColumnVirtualization,
    withColumnPinning: ctx.withColumnPinning,
    visibleColumns,
    columnSizing,
    scrollContainerRef,
    config: virtualColumnConfig,
  });

  const columnWidthVars = useMemo(() => {
    const vars: Record<string, string> = {};
    visibleColumns.forEach((col, i) => {
      vars[`--dg-col-${i}`] = `${col.getSize()}px`;
    });
    return vars;
  }, [visibleColumns, columnSizing]);

  const visibleStartIndex = rowVirtualizer.range?.startIndex;
  const tabStopIndex = virtualItems.some((item) => item.index === visibleStartIndex)
    ? visibleStartIndex!
    : (virtualItems[0]?.index ?? 0);

  const renderedRowList = ctx.withRowVirtualization
    ? virtualItems.map((item) => rows[item.index]).filter(Boolean)
    : rows;
  const columnIndexById = useMemo(
    () => new Map(visibleColumns.map((column, index) => [column.id, index])),
    [visibleColumns]
  );
  const selectionEntryId = getCellSelectionEntryId(
    ctx,
    renderedRowList,
    ctx.withRowVirtualization ? renderedRowList.indexOf(rows[tabStopIndex]) : 0,
    (cell) => columns.isColumnRendered(columnIndexById.get(cell.column.id) ?? -1)
  );

  const renderRow = (rowIndex: number) => (
    <VirtualRow
      row={rows[rowIndex]}
      rowIndex={rowIndex}
      tabStop={rowIndex === tabStopIndex}
      ariaRowIndex={headerRowCount + rowIndex + 1 + (panelsBefore?.[rowIndex] ?? 0)}
      visibleColumns={visibleColumns}
      firstDataColumnIndex={firstDataColumnIndex}
      columns={columns}
      selectionEntryId={selectionEntryId}
    />
  );

  const renderedRows = ctx.withRowVirtualization
    ? virtualItems.map((virtualItem) => (
        <div
          key={virtualItem.key}
          ref={measureRows ? rowVirtualizer.measureElement : undefined}
          data-index={virtualItem.index}
          data-last-row={virtualItem.index === rows.length - 1 || undefined}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: `translateY(${virtualItem.start}px)`,
          }}
        >
          {renderRow(virtualItem.index)}
        </div>
      ))
    : rows.map((row, rowIndex) => (
        <div key={row.id} data-last-row={rowIndex === rows.length - 1 || undefined}>
          {renderRow(rowIndex)}
        </div>
      ));

  const emptyStateContent = !ctx.loading && rows.length === 0 ? resolveEmptyState(ctx) : null;
  const emptyRowCount = !ctx.withSkeletonRows && emptyStateContent != null ? 1 : 0;

  const bodyContent = ctx.withSkeletonRows ? (
    <div>
      <SkeletonRows virtual columns={visibleColumns} renderColumns={columns.renderColumns} />
    </div>
  ) : emptyStateContent != null ? (
    <div
      role="row"
      aria-rowindex={headerRowCount + 1}
      data-empty-row
      {...ctx.getStyles('virtualRow')}
    >
      <div
        role="gridcell"
        aria-colindex={1}
        aria-colspan={totalColumns}
        {...ctx.getStyles('emptyState')}
      >
        {emptyStateContent}
      </div>
    </div>
  ) : ctx.withRowVirtualization ? (
    <div style={{ height: rowVirtualizer.getTotalSize(), position: 'relative' }}>
      {renderedRows}
    </div>
  ) : (
    <div>{renderedRows}</div>
  );

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      data-dg-scroll
      {...ctx.getStyles('virtualScrollContainer', {
        style: { height: height ? rem(height) : undefined, overflow: 'auto' },
      })}
    >
      <div
        role="grid"
        aria-rowcount={
          headerRowCount + rows.length + totalPanels + emptyRowCount + tfootModel.rowCount
        }
        aria-colcount={totalColumns}
        aria-busy={ctx.loading || undefined}
        onKeyDown={handleKeyDown}
        {...ctx.getStyles('virtualGrid', { style: columnWidthVars })}
      >
        <VirtualHeader columns={columns} />

        {bodyContent}

        <VirtualTfoot
          model={tfootModel}
          visibleColumns={visibleColumns}
          columns={columns}
          ariaRowIndex={headerRowCount + rows.length + totalPanels + emptyRowCount + 1}
        />
      </div>
    </div>
  );
}
