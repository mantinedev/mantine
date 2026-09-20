import React from 'react';
import { Cell, Column, Row, Table as ReactTable } from '@tanstack/react-table';
import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { DataGridFactory } from './DataGrid';
import type { DataGridHeaderInteractions } from './DataGridHeader/use-header-interactions';
import type { DataGridStore } from './hooks';
import type { DataGridLabels } from './labels';
import type { DataGridFeatures } from './table-features';

export interface DataGridContextValue {
  getStyles: GetStylesApi<DataGridFactory>;
  store: DataGridStore;
  table: ReactTable<DataGridFeatures, any>;
  getRowHeight?: (row: Row<DataGridFeatures, any>) => number | 'auto';
  estimateRowHeight?: number;
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
  striped: 'odd' | 'even' | false;
  withRowNumbers: boolean;
  getRowNumber: (row: Row<DataGridFeatures, any>) => number | undefined;
  withVirtualization: boolean;
  withColumnVirtualization: boolean;
  withGrouping: boolean;
  withRowPinning: boolean;
  withEditing: boolean;
  withFaceting: boolean;
  withTreeData: boolean;
  withRowReorder: boolean;
  withCellSelection: boolean;
  aggregatedColumnIds: string[];
  onRowOrderChange?: (reorderedData: any[]) => void;
  tableLayout: 'fixed' | 'auto';
  stickyHeader: boolean;
  expandOnRowClick: boolean;
  editingMode: 'cell' | 'row' | undefined;
  labels: DataGridLabels;
  renderExpandedRow?: (props: { row: Row<DataGridFeatures, any> }) => React.ReactNode;
  emptyState?: React.ReactNode;
  onRowClick?: (row: Row<DataGridFeatures, any>, event: React.MouseEvent) => void;
  onRowDoubleClick?: (row: Row<DataGridFeatures, any>, event: React.MouseEvent) => void;
  onCellClick?: (cell: Cell<DataGridFeatures, any, unknown>, event: React.MouseEvent) => void;
  onCellEdit?: (props: {
    row: Row<DataGridFeatures, any>;
    columnId: string;
    value: unknown;
  }) => void;
  onRowEdit?: (props: { row: Row<DataGridFeatures, any>; values: Record<string, unknown> }) => void;
  editTrigger: 'click' | 'doubleClick';
  processRowUpdate?: (newRow: any, oldRow: any) => Promise<any>;
  onProcessRowUpdateError?: (error: unknown) => void;
  selectOnRowClick: boolean;
  listView: false | 'cards' | 'flat';
  renderListItem?: (props: { row: Row<DataGridFeatures, any> }) => React.ReactNode;
  sortIndicator: 'hover' | 'always';
  sortIndicatorPosition: 'trailing' | 'inline';
  withColumnMenu: boolean;
  columnMenuItems?: (column: Column<DataGridFeatures, any, unknown>) => React.ReactNode;
  headerInteractions: DataGridHeaderInteractions;
  toolbarHidden: boolean;
  withTintedGroupRows: boolean;
  withTreeLines: boolean;
  withTintedExpandedRows: boolean;
}

export const [DataGridProvider, useDataGridContext] = createSafeContext<DataGridContextValue>(
  'DataGrid component was not found in the tree'
);
