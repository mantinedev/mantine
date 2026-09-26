import { useCallback, useMemo } from 'react';
import type { Row } from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';

type AnyRow = Row<DataGridFeatures, any>;

interface UseRowNumbersInput {
  enabled: boolean;
  rows: AnyRow[];
  prePaginationRows: AnyRow[] | null;
  paginateExpandedRows: boolean;
  withPagination: boolean;
  withRowPinning: boolean;
  withGrouping: boolean;
  pageIndex: number;
  pageSize: number;
}

function isNumberedRow(row: AnyRow, withRowPinning: boolean) {
  return !row.getIsGrouped() && !(withRowPinning && row.getIsPinned());
}

function countNumberedRows(row: AnyRow, withRowPinning: boolean, expand: boolean): number {
  let count = isNumberedRow(row, withRowPinning) ? 1 : 0;
  if (expand && row.subRows.length > 0 && row.getIsExpanded()) {
    for (const subRow of row.subRows) {
      count += countNumberedRows(subRow, withRowPinning, expand);
    }
  }
  return count;
}

function getPageStart({
  prePaginationRows,
  paginateExpandedRows,
  withPagination,
  withRowPinning,
  withGrouping,
  pageIndex,
  pageSize,
}: Omit<UseRowNumbersInput, 'rows' | 'enabled'>) {
  if (!withPagination) {
    return 0;
  }
  if (!prePaginationRows) {
    return pageIndex * pageSize;
  }
  const end = Math.min(pageIndex * pageSize, prePaginationRows.length);
  if (paginateExpandedRows && !withRowPinning && !withGrouping) {
    return end;
  }
  let count = 0;
  for (let index = 0; index < end; index += 1) {
    count += countNumberedRows(prePaginationRows[index], withRowPinning, !paginateExpandedRows);
  }
  return count;
}

const noRowNumber = (_row: AnyRow): number | undefined => undefined;

export function useRowNumbers({
  enabled,
  rows,
  prePaginationRows,
  paginateExpandedRows,
  withPagination,
  withRowPinning,
  withGrouping,
  pageIndex,
  pageSize,
}: UseRowNumbersInput) {
  const rowNumbers = useMemo(() => {
    if (!enabled) {
      return null;
    }
    const numbers = new Map<string, number>();
    let current = getPageStart({
      prePaginationRows,
      paginateExpandedRows,
      withPagination,
      withRowPinning,
      withGrouping,
      pageIndex,
      pageSize,
    });
    for (const row of rows) {
      if (!row.getIsGrouped()) {
        current += 1;
        numbers.set(row.id, current);
      }
    }
    return numbers;
  }, [
    enabled,
    rows,
    prePaginationRows,
    paginateExpandedRows,
    withPagination,
    withRowPinning,
    withGrouping,
    pageIndex,
    pageSize,
  ]);

  const getRowNumber = useCallback((row: AnyRow) => rowNumbers?.get(row.id), [rowNumbers]);

  return rowNumbers ? getRowNumber : noRowNumber;
}
