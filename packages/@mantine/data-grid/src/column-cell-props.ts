import React from 'react';
import { Column, Header, RowData, Table } from '@tanstack/react-table';
import { getLeafHeaders } from './get-leaf-headers';
import type { DataGridFeatures } from './table-features';

type GridColumn = Column<DataGridFeatures, any, unknown>;
type GridHeader = Header<DataGridFeatures, any, unknown>;

interface PinnedCellProps {
  'data-pinned': 'start' | 'end' | undefined;
  'data-pinned-edge': true | undefined;
  style: React.CSSProperties | undefined;
}

const NOT_PINNED: PinnedCellProps = {
  'data-pinned': undefined,
  'data-pinned-edge': undefined,
  style: undefined,
};

function getPinnedLeavesProps(leaves: GridColumn[], enabled: boolean): PinnedCellProps {
  const first = leaves[0];
  const last = leaves[leaves.length - 1];
  if (!enabled || !first) {
    return NOT_PINNED;
  }

  const position = first.getIsPinned();
  if (!position || leaves.some((leaf) => leaf.getIsPinned() !== position)) {
    return NOT_PINNED;
  }

  const pinnedLeaves = first.table.getPinnedVisibleLeafColumns(position);
  const edge =
    position === 'start'
      ? pinnedLeaves[pinnedLeaves.length - 1]?.id === last.id
      : pinnedLeaves[0]?.id === first.id;
  const offset = position === 'start' ? first.getStart('start') : last.getAfter('end');

  return {
    'data-pinned': position,
    'data-pinned-edge': edge || undefined,
    style: { '--dg-pinned-offset': `${offset}px` } as React.CSSProperties,
  };
}

export function getOrderedVisibleColumns<TData extends RowData>(
  table: Table<DataGridFeatures, TData>
): Column<DataGridFeatures, TData, unknown>[] {
  return [
    ...table.getPinnedVisibleLeafColumns('start'),
    ...table.getPinnedVisibleLeafColumns('center'),
    ...table.getPinnedVisibleLeafColumns('end'),
  ];
}

export function getColumnCellProps(column: GridColumn, withColumnPinning: boolean) {
  const meta = column.columnDef.meta;
  const pinned = getPinnedLeavesProps([column], withColumnPinning);
  return {
    'data-column-id': column.id,
    'data-utility': meta?.utility,
    'data-align': meta?.align,
    'data-actions': meta?.type === 'actions' || undefined,
    'data-pinned': pinned['data-pinned'],
    'data-pinned-edge': pinned['data-pinned-edge'],
    style: pinned.style,
  };
}

export function getPinnedHeaderProps(header: GridHeader, enabled: boolean): PinnedCellProps {
  if (!enabled) {
    return NOT_PINNED;
  }

  const leaves = getLeafHeaders(header)
    .map((leaf) => leaf.column)
    .filter((column) => column.getIsVisible());
  return getPinnedLeavesProps(leaves, enabled);
}

export function getFooterCellProps(header: GridHeader, withColumnPinning: boolean) {
  const meta = header.column.columnDef.meta;
  const isLeaf = !header.isPlaceholder && header.subHeaders.length === 0;
  return {
    'data-column-id': isLeaf ? header.column.id : undefined,
    'data-utility': meta?.utility,
    'data-align': meta?.align,
    ...getPinnedHeaderProps(header, withColumnPinning),
  };
}
