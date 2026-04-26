import type { ReactNode } from 'react';
import { Cell, Column, ColumnDef, Row, RowData } from '@tanstack/react-table';
import type { FilterOperator } from './DataGridFilters/filter-operators';

export interface DataGridColumnMeta<TData = unknown, TValue = unknown> {
  filterVariant?: 'text' | 'select' | 'multiSelect' | 'range' | 'boolean';
  filterOperators?: FilterOperator[];
  filterOptions?: Array<{ value: string; label: string }> | string[];
  filterPlaceholder?: string;
  disableEditing?: boolean;
  disableExport?: boolean;
  colSpan?: number | ((props: { row: Row<TData>; column: Column<TData, TValue> }) => number);
  rowSpan?: boolean;
  aggregationFn?:
    | 'sum'
    | 'min'
    | 'max'
    | 'mean'
    | 'median'
    | 'count'
    | 'uniqueCount'
    | ((values: unknown[]) => unknown);
  aggregationLabel?: string;
  editComponent?: (props: {
    value: unknown;
    onChange: (value: unknown) => void;
    onSave: () => void;
    onCancel: () => void;
    cell: Cell<TData, TValue>;
  }) => ReactNode;
}

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> extends DataGridColumnMeta<TData, TValue> {}
}

export type DataGridColumnDef<TData> = ColumnDef<TData, unknown>;
