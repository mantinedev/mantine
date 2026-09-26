import type React from 'react';
import type { Row } from '@tanstack/react-table';
import type { DataGridContextValue } from '../DataGrid.context';
import { GRID_ELEMENT_SELECTOR } from '../hooks/grid-dom';
import type { DataGridFeatures } from '../table-features';
import { handleRowSelectionClick, toggleRowSelection } from './row-selection';

type GridRow = Row<DataGridFeatures, any>;

function canSelectOnClick(ctx: DataGridContextValue, row: GridRow) {
  return ctx.selectOnRowClick && ctx.withRowSelection && row.getCanSelect();
}

function isRowStriped(ctx: DataGridContextValue, row: GridRow) {
  if (!ctx.striped) {
    return false;
  }

  const index = ctx.getRowNumber(row);
  return index !== undefined && index % 2 === (ctx.striped === 'odd' ? 1 : 0);
}

export function hasExpandedPanel(ctx: DataGridContextValue, row: GridRow) {
  return Boolean(
    ctx.withRowExpansion &&
    !ctx.withTreeData &&
    ctx.renderExpandedRow &&
    !row.getIsGrouped() &&
    row.getIsExpanded()
  );
}

export function getTableRowHeightStyle(
  ctx: DataGridContextValue,
  row: GridRow
): React.CSSProperties | undefined {
  const rowHeight = ctx.getRowHeight?.(row);
  return typeof rowHeight === 'number' ? { height: `${rowHeight}px` } : undefined;
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

function getRowTabIndex(ctx: DataGridContextValue, tabStop: boolean) {
  return ctx.withCellSelection ? undefined : tabStop ? 0 : -1;
}

export function getRowProps(
  ctx: DataGridContextValue,
  row: GridRow,
  rowIndex: number,
  tabStop = rowIndex === 0
) {
  const isEditing = ctx.withEditing && row.getIsEditing();
  const isSaving = isEditing && row.getIsSaving();

  return {
    tabIndex: getRowTabIndex(ctx, tabStop),
    'data-row-index': rowIndex,
    'data-row-id': row.id,
    'data-selected': row.getIsSelected() || undefined,
    'data-striped': isRowStriped(ctx, row) || undefined,
    'data-expanded': hasExpandedPanel(ctx, row) || undefined,
    'data-tree-row': ctx.withTreeData || undefined,
    'data-depth': ctx.withTreeData ? row.depth : undefined,
    'data-leaf': (ctx.withTreeData && !row.getCanExpand()) || undefined,
    'data-editing': isEditing || undefined,
    'data-saving': isSaving || undefined,
    'aria-busy': isSaving || undefined,
    onClick: hasRowClickBehavior(ctx)
      ? (event: React.MouseEvent) => handleRowClick(ctx, row, event)
      : undefined,
    onDoubleClick: ctx.onRowDoubleClick
      ? (event: React.MouseEvent) => ctx.onRowDoubleClick!(row, event)
      : undefined,
  };
}

export function getGroupRowProps(
  ctx: DataGridContextValue,
  row: GridRow,
  rowIndex: number,
  tabStop = rowIndex === 0
) {
  return {
    tabIndex: getRowTabIndex(ctx, tabStop),
    'data-group-row': true,
    'data-row-index': rowIndex,
    'data-row-id': row.id,
    'aria-expanded': row.getIsExpanded(),
    onClick: () => row.toggleExpanded(),
  };
}

const ROW_SCOPE_SELECTOR = `${GRID_ELEMENT_SELECTOR}, [data-list-view-scope]`;

interface RowKeyboardScope {
  /** Selector of the navigable rows */
  rowSelector: string;

  /** Selector of the wrapper elements between the scope element and its rows */
  containerSelector: string;
}

function collectScopeRows(parent: Element, scope: RowKeyboardScope, rows: HTMLElement[]) {
  for (const child of Array.from(parent.children)) {
    if (child.matches(scope.rowSelector)) {
      rows.push(child as HTMLElement);
    } else if (child.matches(scope.containerSelector)) {
      collectScopeRows(child, scope, rows);
    }
  }
  return rows;
}

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

  const scopeElement = target.closest<HTMLElement>(ROW_SCOPE_SELECTOR);
  const currentTarget = event.currentTarget;
  if (!scopeElement || !scopeElement.contains(currentTarget)) {
    return;
  }

  const row = ctx.table.getRow(rowId, true);

  switch (event.key) {
    case 'ArrowDown':
    case 'ArrowUp':
    case 'Home':
    case 'End': {
      if (ctx.withCellSelection && !ctx.listView) {
        return;
      }

      event.preventDefault();
      const rows = collectScopeRows(scopeElement, scope, []);
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
        toggleRowSelection(ctx, row, event.shiftKey);
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
