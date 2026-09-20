import React, { useCallback, useMemo } from 'react';
import { Cell, Header } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  rem,
  useProps,
} from '@mantine/core';
import { getRowHeightEstimate } from '../data-grid-sizes';
import { useDataGridContext } from '../DataGrid.context';
import {
  DataGridHeaderCellContent,
  getHeaderCellAttributes,
} from '../DataGridHeader/DataGridHeaderCell';
import { getPinnedStyles } from '../get-pinned-styles';
import type { DataGridFeatures } from '../table-features';
import { getGroupLabelCellId } from './DataGridGroupCell';
import { DataGridVirtualCell } from './DataGridVirtualCell';
import {
  handleRowClick,
  handleRowKeyDown,
  hasExpandedPanel,
  hasRowClickBehavior,
  isRowStriped,
} from './row-interactions';
import classes from '../DataGrid.module.css';

export type DataGridVirtualBodyStylesNames =
  | 'virtualScrollContainer'
  | 'virtualGrid'
  | 'virtualGridHeader'
  | 'virtualRow'
  | 'virtualCell'
  | 'emptyState'
  | 'expandedRow'
  | 'sortIcon'
  | 'headerCell'
  | 'headerLabel'
  | 'resizeHandle'
  | 'treeIndent'
  | 'treeToggle'
  | 'treeLabel';

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

  const totalColumns = visibleColumns.length;
  const firstDataColumnIndex = visibleColumns.findIndex(
    (column) => !column.columnDef.meta?.utility
  );

  const overscan = virtualScrollConfig?.overscan ?? 10;

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) =>
      handleRowKeyDown(event, ctx, {
        scopeSelector: '[role="grid"]',
        rowSelector: '[role="row"][data-row-id]',
      }),
    [ctx]
  );

  const hasAutoHeight = useMemo(
    () => ctx.getRowHeight != null && rows.some((row) => ctx.getRowHeight!(row) === 'auto'),
    [ctx.getRowHeight, rows]
  );

  const estimateSize = (index: number) =>
    getRowHeightEstimate(
      {
        estimateSize: virtualScrollConfig?.estimateSize,
        getRowHeight: ctx.getRowHeight,
        estimateRowHeight: ctx.estimateRowHeight,
        size: ctx.store.size,
      },
      rows[index],
      index
    );

  const rowVirtualizer = useVirtualizer({
    count: withRowVirt ? rows.length : 0,
    getScrollElement: () => scrollContainerRef?.current ?? null,
    estimateSize,
    overscan,
    measureElement:
      ctx.withRowExpansion || hasAutoHeight
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
      if (pinned === 'start') {
        left.push(index);
      } else if (pinned === 'end') {
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

  function renderCellContent(
    cell: Cell<DataGridFeatures, any, unknown>,
    cellIndex: number,
    rowObj: (typeof rows)[number],
    groupLabelCellId?: string
  ) {
    return (
      <DataGridVirtualCell
        key={cell.id}
        cell={cell}
        cellIndex={cellIndex}
        row={rowObj}
        isTreeFirstCell={ctx.withTreeData && cellIndex === firstDataColumnIndex}
        groupLabelCellId={groupLabelCellId}
        classNames={classNames}
        styles={styles}
      />
    );
  }

  function renderVirtualizedCells(
    row: (typeof rows)[number],
    cells: ReturnType<typeof row.getVisibleCells>,
    groupLabelCellId?: string
  ) {
    const leftPinned = allCellsPinned.left.map((idx) =>
      renderCellContent(cells[idx], idx, row, groupLabelCellId)
    );
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
              {renderCellContent(cell, virtualCol.index, row, groupLabelCellId)}
            </div>
          );
        })}
      </div>
    );
    const rightPinned = allCellsPinned.right.map((idx) =>
      renderCellContent(cells[idx], idx, row, groupLabelCellId)
    );
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
    cells: ReturnType<typeof row.getVisibleCells>,
    groupLabelCellId?: string
  ) {
    return cells.map((cell, cellIndex) =>
      renderCellContent(cell, cellIndex, row, groupLabelCellId)
    );
  }

  function renderGroupRowContent(row: (typeof rows)[number], rowIndex: number) {
    const cells = row.getVisibleCells();
    const labelCellId = getGroupLabelCellId(cells);

    return (
      <div
        role="row"
        aria-rowindex={rowIndex + 2}
        aria-expanded={row.getIsExpanded()}
        tabIndex={ctx.withCellSelection ? undefined : rowIndex === 0 ? 0 : -1}
        data-group-row
        data-row-index={rowIndex}
        data-row-id={row.id}
        onClick={() => row.toggleExpanded()}
        {...ctx.getStyles('virtualRow', { classNames, styles })}
      >
        {withColumnVirt
          ? renderVirtualizedCells(row, cells, labelCellId)
          : renderAllCells(row, cells, labelCellId)}
      </div>
    );
  }

  function renderRowContent(row: (typeof rows)[number], rowIndex: number) {
    if (ctx.withGrouping && row.getIsGrouped()) {
      return renderGroupRowContent(row, rowIndex);
    }

    const isSelected = row.getIsSelected();
    const isStriped = isRowStriped(ctx, row);
    const isExpanded = hasExpandedPanel(ctx, row);

    const handleRowDoubleClick = ctx.onRowDoubleClick
      ? (event: React.MouseEvent) => {
          ctx.onRowDoubleClick!(row, event);
        }
      : undefined;

    const cells = row.getVisibleCells();

    return (
      <>
        <div
          role="row"
          aria-rowindex={rowIndex + 2}
          tabIndex={ctx.withCellSelection ? undefined : rowIndex === 0 ? 0 : -1}
          data-row-index={rowIndex}
          data-row-id={row.id}
          data-selected={isSelected || undefined}
          data-striped={isStriped || undefined}
          data-expanded={isExpanded || undefined}
          data-tree-row={ctx.withTreeData || undefined}
          data-depth={ctx.withTreeData ? row.depth : undefined}
          data-leaf={(ctx.withTreeData && !row.getCanExpand()) || undefined}
          onClick={
            hasRowClickBehavior(ctx) ? (event) => handleRowClick(ctx, row, event) : undefined
          }
          onDoubleClick={handleRowDoubleClick}
          {...ctx.getStyles('virtualRow', { classNames, styles })}
        >
          {withColumnVirt ? renderVirtualizedCells(row, cells) : renderAllCells(row, cells)}
        </div>
        {isExpanded && (
          <div
            role="row"
            aria-rowindex={rowIndex + 2}
            data-expanded-row
            {...ctx.getStyles('virtualRow', { classNames, styles })}
          >
            {visibleColumns.map((column, index) =>
              column.columnDef.meta?.utility ? (
                <div
                  key={column.id}
                  role="gridcell"
                  aria-colindex={index + 1}
                  data-utility={column.columnDef.meta.utility}
                  data-pinned-left={
                    (ctx.withColumnPinning && column.getIsPinned() === 'start') || undefined
                  }
                  {...ctx.getStyles('virtualCell', { classNames, styles })}
                  style={{
                    ...(ctx.withColumnPinning ? getPinnedStyles(column) : undefined),
                    width: `var(--dg-col-${index})`,
                  }}
                />
              ) : null
            )}
            <div
              role="gridcell"
              aria-colindex={firstDataColumnIndex + 1}
              {...ctx.getStyles('expandedRow', { classNames, styles })}
            >
              {ctx.renderExpandedRow!({ row })}
            </div>
          </div>
        )}
      </>
    );
  }

  const renderedRows =
    withRowVirt && virtualRowItems
      ? virtualRowItems.map((virtualItem) => {
          const row = rows[virtualItem.index];
          return (
            <div
              key={row.id}
              ref={
                ctx.withRowExpansion || hasAutoHeight ? rowVirtualizer.measureElement : undefined
              }
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
        })
      : rows.map((row, rowIndex) => <div key={row.id}>{renderRowContent(row, rowIndex)}</div>);

  function renderHeaderCell(
    header: Header<DataGridFeatures, any, unknown>,
    headerIndex: number,
    isLast: boolean
  ) {
    const isPinned = ctx.withColumnPinning ? header.column.getIsPinned() : false;
    const pinnedStyles = ctx.withColumnPinning ? getPinnedStyles(header.column) : undefined;

    return (
      <div
        key={header.id}
        ref={ctx.headerInteractions.registerHeaderCell(header)}
        role="columnheader"
        aria-colindex={headerIndex + 1}
        {...getHeaderCellAttributes(header, ctx)}
        data-pinned-left={isPinned === 'start' || undefined}
        data-pinned-right={isPinned === 'end' || undefined}
        {...ctx.getStyles('virtualCell', { classNames, styles })}
        style={{
          ...pinnedStyles,
          width:
            header.colSpan > 1
              ? header.getLeafHeaders().reduce((sum, leaf) => sum + leaf.getSize(), 0)
              : `var(--dg-col-${headerIndex})`,
          position: isPinned ? 'sticky' : 'relative',
        }}
        {...ctx.headerInteractions.getReorderHandlers(header)}
      >
        <DataGridHeaderCellContent
          header={header}
          isLast={isLast}
          classNames={classNames}
          styles={styles}
        />
      </div>
    );
  }

  function renderVirtualizedHeaders(
    headers: Header<DataGridFeatures, any, unknown>[],
    isLeafRow: boolean
  ) {
    const lastIndex = headers.length - 1;

    if (isLeafRow) {
      const leftPinned = allCellsPinned.left.map((idx) =>
        renderHeaderCell(headers[idx], idx, idx === lastIndex)
      );
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
              {renderHeaderCell(
                headers[virtualCol.index],
                virtualCol.index,
                virtualCol.index === lastIndex
              )}
            </div>
          ))}
        </div>
      );
      const rightPinned = allCellsPinned.right.map((idx) =>
        renderHeaderCell(headers[idx], idx, idx === lastIndex)
      );
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
      <>
        {visibleHeaders.map((header, headerIndex) =>
          renderHeaderCell(header, headerIndex, header === headers[lastIndex])
        )}
      </>
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
        onKeyDown={handleKeyDown}
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
            {withColumnVirt
              ? renderVirtualizedHeaders(
                  headerGroup.headers,
                  headerGroups[headerGroups.length - 1].id === headerGroup.id
                )
              : headerGroup.headers.map((header, headerIndex) =>
                  renderHeaderCell(
                    header,
                    headerIndex,
                    headerIndex === headerGroup.headers.length - 1
                  )
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
