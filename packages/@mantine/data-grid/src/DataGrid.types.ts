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
import type { FilterOperator } from './DataGridFilters/filter-operators';
import type { DataGridFeatures } from './table-features';

export interface DataGridColumnMeta<TData extends RowData = any, TValue = unknown> {
  filterVariant?: 'text' | 'select' | 'multiSelect' | 'range' | 'boolean';
  filterOperators?: FilterOperator[];
  filterOptions?: Array<{ value: string; label: string }> | string[];
  filterPlaceholder?: string;
  disableEditing?: boolean;
  disableExport?: boolean;
  aggregationLabel?: string;
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
