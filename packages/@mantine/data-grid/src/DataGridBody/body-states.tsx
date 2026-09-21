import React from 'react';
import { ClassNames, Skeleton, Styles } from '@mantine/core';
import { DataGridContextValue, useDataGridContext } from '../DataGrid.context';

/** Resolves the `emptyState` prop, calling the function form with the row counts and filter state */
export function resolveEmptyState(ctx: DataGridContextValue): React.ReactNode {
  const { emptyState, table } = ctx;
  if (typeof emptyState !== 'function') {
    return emptyState;
  }

  const state = table.store.state;
  const globalFilter = state.globalFilter;
  const isFiltered =
    (state.columnFilters?.length ?? 0) > 0 ||
    (globalFilter !== undefined && globalFilter !== null && globalFilter !== '');

  return emptyState({
    rowCount: table.options.rowCount ?? table.getCoreRowModel().rows.length,
    filteredRowCount: table.getFilteredRowModel().rows.length,
    isFiltered,
    table,
  });
}

/** Number of skeleton rows: the page size under pagination, otherwise `skeletonRowCount` */
export function getSkeletonRowCount(ctx: DataGridContextValue) {
  return ctx.withPagination ? ctx.store.pagination.pageSize : ctx.skeletonRowCount;
}

export function getSkeletonWidth(rowIndex: number, columnIndex: number) {
  return `${40 + ((rowIndex * 37 + columnIndex * 53) % 50)}%`;
}

interface SkeletonBarProps {
  rowIndex: number;
  columnIndex: number;
  classNames?: ClassNames<any>;
  styles?: Styles<any>;
}

/** One skeleton bar inside a skeleton cell */
export function SkeletonBar({ rowIndex, columnIndex, classNames, styles }: SkeletonBarProps) {
  const ctx = useDataGridContext();
  return (
    <Skeleton
      height="calc(var(--dg-font-size) - 1px)"
      width={getSkeletonWidth(rowIndex, columnIndex)}
      radius="sm"
      {...ctx.getStyles('skeleton', { classNames, styles })}
    />
  );
}
