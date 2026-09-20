import type { ReactNode } from 'react';
import {
  Cell,
  Column,
  ColumnDef,
  ColumnHelper,
  createColumnHelper,
  FilterFn,
  Row,
  RowData,
  SortFn,
  Table as ReactTable,
} from '@tanstack/react-table';
import type { DataGridFeatures } from './table-features';
import type { DataGridUtilityColumn } from './utility-columns/utility-columns';

export interface DataGridColumnMeta<TData extends RowData = any, TValue = unknown> {
  /** Human-readable column label used by the column visibility menu, list view and export, falls back to a string `header`, then the column id */
  label?: string;

  /** Horizontal alignment of header, body and footer cells, `end` also enables tabular figures, @default 'start' */
  align?: 'start' | 'center' | 'end';

  /** `'actions'` marks a user display column that holds row action buttons: 80px wide, end-aligned, not sortable, filterable, resizable or exported */
  type?: 'actions';

  /** Set by the grid on its injected utility columns (reorder, select, expand, rowNumber), read-only */
  utility?: DataGridUtilityColumn;

  /** Hides the column menu for this column when `withColumnMenu` is set */
  disableColumnMenu?: boolean;

  disableEditing?: boolean;
  disableExport?: boolean;
  aggregationLabel?: string;

  /** Formats the aggregated value rendered in the totals row, defaults to `String(value)` */
  formatAggregatedValue?: (value: unknown, rows: Row<DataGridFeatures, TData>[]) => ReactNode;

  editComponent?: (props: {
    value: unknown;
    onChange: (value: unknown) => void;
    onSave: () => void;
    onCancel: () => void;
    cell: Cell<DataGridFeatures, TData, TValue>;
  }) => ReactNode;
}

/** Column definition bound to the feature set DataGrid registers */
export type DataGridColumnDef<TData extends RowData, TValue = any> = ColumnDef<
  DataGridFeatures,
  TData,
  TValue
>;

/** Table instance bound to the feature set DataGrid registers */
export type DataGridTable<TData extends RowData> = ReactTable<DataGridFeatures, TData>;

/** Row bound to the feature set DataGrid registers */
export type DataGridRow<TData extends RowData> = Row<DataGridFeatures, TData>;

/** Cell bound to the feature set DataGrid registers */
export type DataGridCell<TData extends RowData, TValue = unknown> = Cell<
  DataGridFeatures,
  TData,
  TValue
>;

/** Column bound to the feature set DataGrid registers */
export type DataGridColumn<TData extends RowData, TValue = unknown> = Column<
  DataGridFeatures,
  TData,
  TValue
>;

/** Column filter function bound to the feature set DataGrid registers */
export type DataGridFilterFn<TData extends RowData = any> = FilterFn<DataGridFeatures, TData>;

/** Sorting function bound to the feature set DataGrid registers */
export type DataGridSortFn<TData extends RowData = any> = SortFn<DataGridFeatures, TData>;

/**
 * Creates a column helper already bound to the DataGrid feature set, so column
 * definitions do not have to thread the features generic themselves.
 */
export function createDataGridColumnHelper<TData extends RowData>(): ColumnHelper<
  DataGridFeatures,
  TData
> {
  return createColumnHelper<DataGridFeatures, TData>();
}
