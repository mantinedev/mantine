import { Cell, Row, Table as ReactTable } from '@tanstack/react-table';
import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { DataGridFactory } from './DataGrid';
import type { DataGridStore } from './hooks';
import type { DataGridLabels } from './labels';

export type DataGridDensity = 'compact' | 'default' | 'comfortable';

export interface DataGridContextValue {
  getStyles: GetStylesApi<DataGridFactory>;
  store: DataGridStore;
  table: ReactTable<any>;
  withSorting: boolean;
  sortedIcon: React.ReactNode | undefined;
  unsortedIcon: React.ReactNode | undefined;
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
  withColumnVirtualization: boolean;
  withGrouping: boolean;
  withRowPinning: boolean;
  withEditing: boolean;
  withFaceting: boolean;
  withTreeData: boolean;
  withRowReorder: boolean;
  onRowOrderChange?: (reorderedData: any[]) => void;
  stickyHeader: boolean;
  expandOnRowClick: boolean;
  editingMode: 'cell' | 'row' | undefined;
  density: DataGridDensity;
  onDensityChange: (density: DataGridDensity) => void;
  labels: DataGridLabels;
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
