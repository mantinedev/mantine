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

  /** Excludes the column from cell and row editing */
  disableEditing?: boolean;

  /** Excludes the column from every export format and from `DataGrid.ExportButton` */
  disableExport?: boolean;

  /** Label rendered above the aggregated value in the totals row, replaces the label derived from a string `aggregationFn` */
  aggregationLabel?: string;

  /** Formats the aggregated value rendered in the totals row, defaults to `String(value)` */
  formatAggregatedValue?: (value: unknown, rows: Row<DataGridFeatures, TData>[]) => ReactNode;

  /** Renders a custom editor instead of the default text input while the cell is edited */
  editComponent?: (props: DataGridEditComponentProps<TData, TValue>) => ReactNode;

  /** Validates a draft value, a non-empty return marks the editor invalid and blocks the save */
  validate?: (value: unknown, row: Row<DataGridFeatures, TData>) => ReactNode | null | undefined;
}

export interface DataGridEditComponentProps<TData extends RowData = any, TValue = unknown> {
  /** Current draft value */
  value: unknown;

  /** Updates the draft value */
  onChange: (value: unknown) => void;

  /** Commits the drafts of the editing target */
  onSave: () => void;

  /** Leaves edit mode and drops the drafts */
  onCancel: () => void;

  /** Validation message of the current draft, `undefined` when valid */
  error: ReactNode | undefined;

  /** Cell being edited */
  cell: Cell<DataGridFeatures, TData, TValue>;
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

/** Payload of the `emptyState` function form */
export interface DataGridEmptyStatePayload<TData extends RowData = any> {
  /** Total number of rows before filtering, `rowCount` from `useDataGrid` when set */
  rowCount: number;

  /** Number of rows left after column and global filters */
  filteredRowCount: number;

  /** Whether a column filter or the global filter is active */
  isFiltered: boolean;

  /** The underlying table instance */
  table: DataGridTable<TData>;
}
