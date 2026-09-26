import React from 'react';
import type { Column } from '@tanstack/react-table';
import { Skeleton } from '@mantine/core';
import { getColumnCellProps } from '../column-cell-props';
import { DataGridContextValue, useDataGridContext } from '../DataGrid.context';
import { isEmptyFilterValue } from '../filters/is-empty-filter-value';
import type { DataGridFeatures } from '../table-features';

type GridColumn = Column<DataGridFeatures, any, unknown>;

export function resolveEmptyState(ctx: DataGridContextValue): React.ReactNode {
  const { emptyState, table } = ctx;
  if (typeof emptyState !== 'function') {
    return emptyState;
  }

  const state = table.store.state;
  const isFiltered =
    (state.columnFilters?.length ?? 0) > 0 || !isEmptyFilterValue(state.globalFilter);

  return emptyState({
    rowCount: table.options.rowCount ?? table.getCoreRowModel().rows.length,
    filteredRowCount: table.getFilteredRowModel().rows.length,
    isFiltered,
    table,
  });
}

function getSkeletonRowCount(ctx: DataGridContextValue) {
  return ctx.withPagination ? ctx.store.pagination.pageSize : ctx.skeletonRowCount;
}

function getSkeletonWidth(rowIndex: number, columnIndex: number) {
  return `${40 + ((rowIndex * 37 + columnIndex * 53) % 50)}%`;
}

interface SkeletonBarProps {
  rowIndex: number;
  columnIndex: number;
}

function SkeletonBar({ rowIndex, columnIndex }: SkeletonBarProps) {
  const ctx = useDataGridContext();
  return (
    <Skeleton
      height="calc(var(--dg-font-size) - 1px)"
      width={getSkeletonWidth(rowIndex, columnIndex)}
      radius="sm"
      {...ctx.getStyles('skeleton')}
    />
  );
}

interface ColumnCellProps {
  virtual: boolean;
  column: GridColumn;
  columnIndex: number;
  children?: React.ReactNode;
}

function ColumnCell({ virtual, column, columnIndex, children }: ColumnCellProps) {
  const ctx = useDataGridContext();
  const { style, ...columnProps } = getColumnCellProps(column, ctx.withColumnPinning);

  if (!virtual) {
    return (
      <td {...columnProps} {...ctx.getStyles('td', { style })}>
        {children}
      </td>
    );
  }

  return (
    <div
      role="gridcell"
      aria-colindex={columnIndex + 1}
      {...columnProps}
      {...ctx.getStyles('virtualCell', {
        style: [style, { width: `var(--dg-col-${columnIndex})` }],
      })}
    >
      {children}
    </div>
  );
}

interface ColumnCellsProps {
  virtual: boolean;
  columns: GridColumn[];
}

interface SkeletonRowsProps extends ColumnCellsProps {
  renderColumns?: (renderColumn: (columnIndex: number) => React.ReactElement) => React.ReactNode;
}

export function SkeletonRows({ virtual, columns, renderColumns }: SkeletonRowsProps) {
  const ctx = useDataGridContext();
  return Array.from({ length: getSkeletonRowCount(ctx) }, (_, rowIndex) => {
    const renderCell = (columnIndex: number) => {
      const column = columns[columnIndex];
      return (
        <ColumnCell key={column.id} virtual={virtual} column={column} columnIndex={columnIndex}>
          {!column.columnDef.meta?.utility && (
            <SkeletonBar rowIndex={rowIndex} columnIndex={columnIndex} />
          )}
        </ColumnCell>
      );
    };
    const cells = renderColumns
      ? renderColumns(renderCell)
      : columns.map((_, columnIndex) => renderCell(columnIndex));

    return virtual ? (
      <div key={rowIndex} role="row" aria-hidden data-skeleton-row {...ctx.getStyles('virtualRow')}>
        {cells}
      </div>
    ) : (
      <tr key={rowIndex} aria-hidden data-skeleton-row {...ctx.getStyles('tr')}>
        {cells}
      </tr>
    );
  });
}

export function getDataColumnCount(columns: GridColumn[]) {
  return columns.filter((column) => !column.columnDef.meta?.utility).length;
}

export function ExpandedRowUtilityCells({ virtual, columns }: ColumnCellsProps) {
  return columns.map((column, columnIndex) =>
    column.columnDef.meta?.utility ? (
      <ColumnCell key={column.id} virtual={virtual} column={column} columnIndex={columnIndex} />
    ) : null
  );
}
