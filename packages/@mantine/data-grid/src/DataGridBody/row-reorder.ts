import type { RowData } from '@tanstack/react-table';
import type { DataGridTable } from '../DataGrid.types';

export type RowDropEdge = 'before' | 'after';

export function getVisibleOrder<TData extends RowData>(
  table: DataGridTable<TData>,
  withRowPinning = true
) {
  const coreIds = new Set(table.getCoreRowModel().rows.map((row) => row.id));
  return table
    .getRowModel()
    .rows.filter(
      (row) =>
        row.depth === 0 &&
        !row.getIsGrouped() &&
        !(withRowPinning && row.getIsPinned()) &&
        coreIds.has(row.id)
    )
    .map((row) => row.id);
}

export function canReorderRows(
  visibleOrder: string[],
  sourceRowId: string,
  targetRowId: string,
  edge: RowDropEdge
) {
  const sourceIndex = visibleOrder.indexOf(sourceRowId);
  const targetIndex = visibleOrder.indexOf(targetRowId);
  return !(
    sourceIndex === -1 ||
    targetIndex === -1 ||
    sourceIndex === targetIndex ||
    (edge === 'before' && targetIndex === sourceIndex + 1) ||
    (edge === 'after' && targetIndex === sourceIndex - 1)
  );
}

function getNextVisibleOrder(
  visibleOrder: string[],
  sourceRowId: string,
  targetRowId: string,
  edge: RowDropEdge
): string[] | null {
  if (!canReorderRows(visibleOrder, sourceRowId, targetRowId, edge)) {
    return null;
  }

  const nextVisibleOrder = visibleOrder.filter((id) => id !== sourceRowId);
  const insertIndex = nextVisibleOrder.indexOf(targetRowId) + (edge === 'after' ? 1 : 0);
  nextVisibleOrder.splice(insertIndex, 0, sourceRowId);
  return nextVisibleOrder;
}

export function reorderVisibleRows<TData extends RowData>(
  table: DataGridTable<TData>,
  sourceRowId: string,
  targetRowId: string,
  edge: RowDropEdge = 'before',
  visibleOrder: string[] = getVisibleOrder(table)
): TData[] | null {
  const nextVisibleOrder = getNextVisibleOrder(visibleOrder, sourceRowId, targetRowId, edge);
  if (!nextVisibleOrder) {
    return null;
  }

  const coreRows = table.getCoreRowModel().rows;
  const reordered = coreRows.map((row) => row.original as TData);
  const visibleIds = new Set(visibleOrder);
  const visibleCoreIndices = coreRows.flatMap((row, index) =>
    visibleIds.has(row.id) ? [index] : []
  );
  const originalById = new Map(coreRows.map((row) => [row.id, row.original as TData]));
  visibleCoreIndices.forEach((coreIndex, i) => {
    reordered[coreIndex] = originalById.get(nextVisibleOrder[i])!;
  });

  return reordered;
}
