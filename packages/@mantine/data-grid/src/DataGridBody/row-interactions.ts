import type React from 'react';
import type { Row } from '@tanstack/react-table';
import type { DataGridContextValue } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';

type GridRow = Row<DataGridFeatures, any>;

interface SelectionModifiers {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
}

export function selectRowRange(ctx: DataGridContextValue, row: GridRow) {
  const rows = ctx.table.getRowModel().rows;
  const selected = ctx.table.getSelectedRowModel().rows;
  const lastSelected = selected.length > 0 ? selected[selected.length - 1] : null;

  if (!lastSelected) {
    row.toggleSelected(true);
    return;
  }

  const startIdx = rows.findIndex((r) => r.id === lastSelected.id);
  const endIdx = rows.findIndex((r) => r.id === row.id);
  const [from, to] = startIdx < endIdx ? [startIdx, endIdx] : [endIdx, startIdx];
  const updates: Record<string, true> = {};
  for (let i = from; i <= to; i++) {
    if (rows[i].getCanSelect()) {
      updates[rows[i].id] = true;
    }
  }
  ctx.table.setRowSelection((prev) => ({ ...prev, ...updates }));
}

function canSelectOnClick(ctx: DataGridContextValue, row: GridRow) {
  return ctx.selectOnRowClick && ctx.withRowSelection && row.getCanSelect();
}

export function handleRowSelectionClick(
  ctx: DataGridContextValue,
  row: GridRow,
  event: SelectionModifiers
) {
  if (event.shiftKey) {
    selectRowRange(ctx, row);
  } else if (event.metaKey || event.ctrlKey) {
    row.toggleSelected();
  } else {
    ctx.table.setRowSelection({ [row.id]: true });
  }
}

/** Whether the row is striped, from the data-row index shared with row numbers */
export function isRowStriped(ctx: DataGridContextValue, row: GridRow) {
  if (!ctx.striped) {
    return false;
  }

  const index = ctx.getRowNumber(row);
  return index !== undefined && index % 2 === (ctx.striped === 'odd' ? 1 : 0);
}

/** Whether the row renders an expansion panel below it */
export function hasExpandedPanel(ctx: DataGridContextValue, row: GridRow) {
  return Boolean(
    ctx.withRowExpansion &&
    !ctx.withTreeData &&
    ctx.renderExpandedRow &&
    !row.getIsGrouped() &&
    row.getIsExpanded()
  );
}

export function hasRowClickBehavior(ctx: DataGridContextValue) {
  return Boolean(ctx.onRowClick || ctx.expandOnRowClick || ctx.selectOnRowClick);
}

export function handleRowClick(ctx: DataGridContextValue, row: GridRow, event: React.MouseEvent) {
  ctx.onRowClick?.(row, event);

  if (ctx.expandOnRowClick && ctx.withRowExpansion && row.getCanExpand()) {
    row.toggleExpanded();
  }

  if (canSelectOnClick(ctx, row)) {
    handleRowSelectionClick(ctx, row, event);
  }
}

export interface RowKeyboardScope {
  /** Selector of the element that contains every navigable row of this body */
  scopeSelector: string;

  /** Selector of the navigable rows inside the scope */
  rowSelector: string;
}

/**
 * Keyboard handler of the row focus model, attached to a body container.
 * Only reacts to events dispatched on a row element itself (not on controls
 * inside it) and only within the body the handler belongs to.
 */
export function handleRowKeyDown(
  event: React.KeyboardEvent<HTMLElement>,
  ctx: DataGridContextValue,
  scope: RowKeyboardScope
) {
  const target = event.target as HTMLElement;
  const rowId = target.getAttribute('data-row-id');
  if (rowId === null) {
    return;
  }

  const scopeElement = target.closest<HTMLElement>(scope.scopeSelector);
  const currentTarget = event.currentTarget;
  if (!scopeElement || (scopeElement !== currentTarget && !scopeElement.contains(currentTarget))) {
    return;
  }

  const row = ctx.table.getRow(rowId, true);

  switch (event.key) {
    case 'ArrowDown':
    case 'ArrowUp':
    case 'Home':
    case 'End': {
      if (ctx.withCellSelection) {
        return;
      }

      event.preventDefault();
      const rows = Array.from(scopeElement.querySelectorAll<HTMLElement>(scope.rowSelector));
      const currentIndex = rows.indexOf(target);
      const nextIndex =
        event.key === 'ArrowDown'
          ? currentIndex + 1
          : event.key === 'ArrowUp'
            ? currentIndex - 1
            : event.key === 'Home'
              ? 0
              : rows.length - 1;
      rows[nextIndex]?.focus();
      return;
    }

    case 'F2':
    case 'Enter': {
      if (row.getIsGrouped()) {
        if (event.key === 'Enter') {
          event.preventDefault();
          row.toggleExpanded();
        }
        return;
      }

      if (!ctx.listView && ctx.withEditing && row.getCanEdit()) {
        event.preventDefault();
        row.startEditing();
        return;
      }

      if (event.key === 'F2') {
        return;
      }

      ctx.onRowClick?.(row, event as unknown as React.MouseEvent);
      if (ctx.withRowExpansion && row.getCanExpand()) {
        event.preventDefault();
        row.toggleExpanded();
      }
      return;
    }

    case ' ': {
      if (row.getIsGrouped()) {
        event.preventDefault();
        row.toggleExpanded();
        return;
      }

      if (canSelectOnClick(ctx, row)) {
        event.preventDefault();
        if (event.shiftKey) {
          selectRowRange(ctx, row);
        } else {
          row.toggleSelected();
        }
      }
      return;
    }

    case 'Escape': {
      target.blur();
      break;
    }

    default:
  }
}
