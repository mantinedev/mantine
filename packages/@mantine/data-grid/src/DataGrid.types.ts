import type { ReactNode } from 'react';
import { Cell, ColumnDef, RowData } from '@tanstack/react-table';

export interface DataGridColumnMeta<TData = unknown, TValue = unknown> {
  filterVariant?: 'text' | 'select' | 'multiSelect' | 'range' | 'boolean';
  filterOptions?: Array<{ value: string; label: string }> | string[];
  filterPlaceholder?: string;
  disableEditing?: boolean;
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
