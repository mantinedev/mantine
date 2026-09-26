import React from 'react';
import { Row } from '@tanstack/react-table';
import type { DataGridContextValue } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { flattenRowSections } from './row-sections';

type GridRow = Row<DataGridFeatures, any>;

interface SelectionModifiers {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
}

const anchors = new WeakMap<object, string>();

export function clearSelectionAnchor(store: object) {
  anchors.delete(store);
}

function getRangeAnchorIndex(ctx: DataGridContextValue, rowIndexById: Map<string, number>) {
  const anchorId = anchors.get(ctx.table.store);
  const anchorIndex = anchorId === undefined ? undefined : rowIndexById.get(anchorId);
  if (anchorIndex !== undefined) {
    return anchorIndex;
  }

  const selected = ctx.table.getSelectedRowModel().rows;
  for (let i = selected.length - 1; i >= 0; i--) {
    const index = rowIndexById.get(selected[i].id);
    if (index !== undefined) {
      return index;
    }
  }
  return -1;
}

function toggleWithAnchor(ctx: DataGridContextValue, row: GridRow, value?: boolean) {
  row.toggleSelected(value);
  anchors.set(ctx.table.store, row.id);
}

function selectRowRange(ctx: DataGridContextValue, row: GridRow, value: boolean) {
  const rows = flattenRowSections(ctx.rowSections);
  const rowIndexById = new Map<string, number>();
  rows.forEach((r, index) => rowIndexById.set(r.id, index));
  const endIdx = rowIndexById.get(row.id) ?? -1;
  const startIdx = getRangeAnchorIndex(ctx, rowIndexById);

  if (startIdx === -1 || endIdx === -1) {
    toggleWithAnchor(ctx, row, value);
    return;
  }

  const [from, to] = startIdx < endIdx ? [startIdx, endIdx] : [endIdx, startIdx];
  const rangeRows: GridRow[] = [];
  for (let i = from; i <= to; i++) {
    if (isMultiSelectableDataRow(rows[i])) {
      rangeRows.push(rows[i]);
    }
  }

  ctx.table.setRowSelection((prev) => {
    const next = { ...prev };
    rangeRows.forEach((rangeRow) => setRowSelected(next, rangeRow, value));
    return next;
  });
}

function setRowSelected(selection: Record<string, boolean>, row: GridRow, value: boolean) {
  if (!value) {
    delete selection[row.id];
  } else if (row.getCanSelect()) {
    selection[row.id] = true;
  }

  if (row.subRows.length > 0 && row.getCanSelectSubRows()) {
    row.subRows.forEach((subRow) => setRowSelected(selection, subRow, value));
  }
}

function isMultiSelectableDataRow(row: GridRow) {
  return !row.getIsGrouped() && row.getCanSelect() && row.getCanMultiSelect();
}

export function getGroupSelectableLeafRows(row: GridRow) {
  return row.getLeafRows().filter(isMultiSelectableDataRow);
}

function toggleGroupSelection(ctx: DataGridContextValue, row: GridRow, value?: boolean) {
  const leaves = getGroupSelectableLeafRows(row);
  const selected = value ?? !leaves.every((leaf) => leaf.getIsSelected());

  ctx.table.setRowSelection((prev) => {
    const next = { ...prev };
    leaves.forEach((leaf) => {
      if (selected) {
        next[leaf.id] = true;
      } else {
        delete next[leaf.id];
      }
    });
    return next;
  });
  anchors.set(ctx.table.store, row.id);
}

function isRangeSelection(row: GridRow, shiftKey: boolean) {
  return shiftKey && !row.getIsGrouped() && row.getCanMultiSelect();
}

export function toggleRowSelection(
  ctx: DataGridContextValue,
  row: GridRow,
  shiftKey: boolean,
  value?: boolean
) {
  if (row.getIsGrouped()) {
    toggleGroupSelection(ctx, row, value);
    return;
  }

  if (isRangeSelection(row, shiftKey)) {
    selectRowRange(ctx, row, value ?? true);
    return;
  }

  toggleWithAnchor(ctx, row, value);
}

export function handleSelectionControlChange(
  ctx: DataGridContextValue,
  row: GridRow,
  event: React.ChangeEvent<HTMLInputElement>
) {
  const shiftKey = (event.nativeEvent as Partial<MouseEvent>).shiftKey === true;
  toggleRowSelection(ctx, row, shiftKey, event.currentTarget.checked);
}

export function handleRowSelectionClick(
  ctx: DataGridContextValue,
  row: GridRow,
  event: SelectionModifiers
) {
  if (isRangeSelection(row, event.shiftKey) || event.metaKey || event.ctrlKey) {
    toggleRowSelection(ctx, row, event.shiftKey);
    return;
  }

  ctx.table.setRowSelection({ [row.id]: true });
  anchors.set(ctx.table.store, row.id);
}
