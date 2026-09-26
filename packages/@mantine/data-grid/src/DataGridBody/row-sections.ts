import type { Row, RowData, Table } from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';

export interface RowSections<TData extends RowData> {
  /** Rows pinned to the top, empty when row pinning is disabled */
  top: Row<DataGridFeatures, TData>[];
  /** Unpinned rows, or every row of the row model when row pinning is disabled */
  center: Row<DataGridFeatures, TData>[];
  /** Rows pinned to the bottom, empty when row pinning is disabled */
  bottom: Row<DataGridFeatures, TData>[];
}

export function getRowSections<TData extends RowData>(
  table: Table<DataGridFeatures, TData>,
  withRowPinning: boolean
): RowSections<TData> {
  if (!withRowPinning) {
    return { top: [], center: table.getRowModel().rows, bottom: [] };
  }

  return { top: table.getTopRows(), center: table.getCenterRows(), bottom: table.getBottomRows() };
}

export function getRowSectionsCount(sections: RowSections<any>) {
  return sections.top.length + sections.center.length + sections.bottom.length;
}

export function flattenRowSections<TData extends RowData>(
  sections: RowSections<TData>
): Row<DataGridFeatures, TData>[] {
  return sections.top.length === 0 && sections.bottom.length === 0
    ? sections.center
    : [...sections.top, ...sections.center, ...sections.bottom];
}
