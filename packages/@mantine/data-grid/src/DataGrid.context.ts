import { Cell, Row, Table as ReactTable } from '@tanstack/react-table';
import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { DataGridFactory } from './DataGrid';
import type { DataGridLocalization } from './localization';

export type DataGridDensity = 'compact' | 'default' | 'comfortable';

export interface DataGridContextValue {
  getStyles: GetStylesApi<DataGridFactory>;
  table: ReactTable<any>;
  withSorting: boolean;
  withFiltering: boolean;
  withGlobalFilter: boolean;
  withPagination: boolean;
  withColumnResizing: boolean;
  withColumnPinning: boolean;
  withColumnVisibility: boolean;
  withColumnReorder: boolean;
  withRowSelection: boolean;
  withRowExpansion: boolean;
  striped: boolean;
  highlightOnHover: boolean;
  withRowNumbers: boolean;
  withVirtualization: boolean;
  withGrouping: boolean;
  withEditing: boolean;
  stickyHeader: boolean;
  expandOnRowClick: boolean;
  editingMode: 'cell' | 'row';
  density: DataGridDensity;
  onDensityChange: (density: DataGridDensity) => void;
  localization: DataGridLocalization;
  renderExpandedRow?: (props: { row: Row<any> }) => React.ReactNode;
  emptyState?: React.ReactNode;
  onRowClick?: (row: Row<any>, event: React.MouseEvent) => void;
  onRowDoubleClick?: (row: Row<any>, event: React.MouseEvent) => void;
  onCellClick?: (cell: Cell<any, unknown>, event: React.MouseEvent) => void;
  onCellEdit?: (props: { row: Row<any>; columnId: string; value: unknown }) => void;
  onRowEdit?: (props: { row: Row<any>; values: Record<string, unknown> }) => void;
}

export const [DataGridProvider, useDataGridContext] = createSafeContext<DataGridContextValue>(
  'DataGrid component was not found in the tree'
);
