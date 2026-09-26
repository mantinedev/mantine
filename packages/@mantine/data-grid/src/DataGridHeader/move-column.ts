import type { Column, Table } from '@tanstack/react-table';
import { getOrderedVisibleColumns } from '../column-cell-props';
import type { DataGridFeatures } from '../table-features';

type AnyColumn = Column<DataGridFeatures, any, unknown>;
type AnyTable = Table<DataGridFeatures, any>;

export type ColumnDropEdge = 'start' | 'end';

export function canReorderColumn(column: AnyColumn, groupedColumnsFirst: boolean): boolean {
  return !column.columnDef.meta?.utility && !(groupedColumnsFirst && column.getIsGrouped());
}

export function isReorderTarget(
  source: AnyColumn,
  target: AnyColumn,
  groupedColumnsFirst: boolean
): boolean {
  if (source.id === target.id || target.columns.length > 0) {
    return false;
  }

  if (
    !canReorderColumn(source, groupedColumnsFirst) ||
    !canReorderColumn(target, groupedColumnsFirst)
  ) {
    return false;
  }

  if ((source.getIsPinned() || false) !== (target.getIsPinned() || false)) {
    return false;
  }

  return source.parent?.id === target.parent?.id;
}

function getBaseColumnOrder(table: AnyTable, order: string[]): string[] {
  const listed = new Set(order);
  const missing = table
    .getAllFlatColumns()
    .filter(
      (column) =>
        column.columns.length === 0 && !column.columnDef.meta?.utility && !listed.has(column.id)
    )
    .map((column) => column.id);
  return [...order, ...missing];
}

function moveId(ids: string[], sourceId: string, targetId: string, edge: ColumnDropEdge) {
  const next = [...ids];
  const sourceIndex = next.indexOf(sourceId);
  if (sourceIndex === -1) {
    return null;
  }

  next.splice(sourceIndex, 1);
  const targetIndex = next.indexOf(targetId);
  if (targetIndex === -1) {
    return null;
  }

  next.splice(edge === 'start' ? targetIndex : targetIndex + 1, 0, sourceId);
  return next;
}

export function moveColumn(
  table: AnyTable,
  sourceId: string,
  targetId: string,
  edge: ColumnDropEdge
): void {
  table.setColumnOrder(
    (current) =>
      moveId(getBaseColumnOrder(table, current ?? []), sourceId, targetId, edge) ?? current
  );

  const pinnedSide = table.getColumn(sourceId)?.getIsPinned();
  if (!pinnedSide) {
    return;
  }

  const pinning = table.store.state.columnPinning;
  const side = moveId(pinning[pinnedSide], sourceId, targetId, edge);
  if (side) {
    table.setColumnPinning({ ...pinning, [pinnedSide]: side });
  }
}

interface ReorderNeighbours {
  previous?: AnyColumn;
  next?: AnyColumn;
}

export function getReorderNeighbours(
  column: AnyColumn,
  table: AnyTable,
  groupedColumnsFirst: boolean
): ReorderNeighbours {
  const visible = getOrderedVisibleColumns(table);
  const index = visible.findIndex((item) => item.id === column.id);
  if (index === -1) {
    return {};
  }

  const previous = visible[index - 1];
  const next = visible[index + 1];

  return {
    previous:
      previous && isReorderTarget(column, previous, groupedColumnsFirst) ? previous : undefined,
    next: next && isReorderTarget(column, next, groupedColumnsFirst) ? next : undefined,
  };
}
