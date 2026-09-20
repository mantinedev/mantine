import type { Column, Table } from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';

type AnyColumn = Column<DataGridFeatures, any, unknown>;
type AnyTable = Table<DataGridFeatures, any>;

export type ColumnDropEdge = 'start' | 'end';

/** A column can receive a dragged column when both are leaf data columns in the same pin region and header group */
export function isReorderTarget(source: AnyColumn, target: AnyColumn): boolean {
  if (source.id === target.id) {
    return false;
  }

  if (target.columnDef.meta?.utility || target.columns.length > 0) {
    return false;
  }

  if ((source.getIsPinned() || false) !== (target.getIsPinned() || false)) {
    return false;
  }

  return source.parent?.id === target.parent?.id;
}

export function getBaseColumnOrder(table: AnyTable): string[] {
  const order = table.store.state.columnOrder;
  return order.length > 0 ? [...order] : table.getAllLeafColumns().map((column) => column.id);
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

/** Moves `sourceId` before (`start`) or after (`end`) `targetId` and writes the result through the store; pinned columns also reorder their `columnPinning` side, which decides their rendered order */
export function moveColumn(
  table: AnyTable,
  sourceId: string,
  targetId: string,
  edge: ColumnDropEdge
): void {
  const order = moveId(getBaseColumnOrder(table), sourceId, targetId, edge);
  if (!order) {
    return;
  }

  table.setColumnOrder(order);

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

export interface ReorderNeighbours {
  previous?: AnyColumn;
  next?: AnyColumn;
}

/** Visible leaf columns directly before and after `column` that are valid reorder targets */
export function getReorderNeighbours(column: AnyColumn, table: AnyTable): ReorderNeighbours {
  const visible = table.getVisibleLeafColumns();
  const index = visible.findIndex((item) => item.id === column.id);
  if (index === -1) {
    return {};
  }

  const previous = visible[index - 1];
  const next = visible[index + 1];

  return {
    previous: previous && isReorderTarget(column, previous) ? previous : undefined,
    next: next && isReorderTarget(column, next) ? next : undefined,
  };
}
