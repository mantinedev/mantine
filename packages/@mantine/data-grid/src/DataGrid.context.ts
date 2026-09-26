import React from 'react';
import { Cell, Column, Row, Table as ReactTable } from '@tanstack/react-table';
import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { DataGridFactory } from './DataGrid';
import type { DataGridEmptyStatePayload } from './DataGrid.types';
import type { RowSections } from './DataGridBody/row-sections';
import type { DataGridHeaderInteractions } from './DataGridHeader/use-header-interactions';
import type { DataGridStore } from './hooks';
import { DataGridLabels } from './labels';
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
  withGlobalFilter: boolean;
  withPagination: boolean;
  withColumnResizing: boolean;
  withColumnPinning: boolean;
  withColumnVisibility: boolean;
  withColumnReorder: boolean;
  withRowSelection: boolean;
  withRowExpansion: boolean;
  striped: 'odd' | 'even' | false;
  getRowNumber: (row: Row<DataGridFeatures, any>) => number | undefined;
  withRowVirtualization: boolean;
  withColumnVirtualization: boolean;
  withGrouping: boolean;
  withRowPinning: boolean;
  /** Rendered rows split into top pinned, center and bottom pinned sections */
  rowSections: RowSections<any>;
  withEditing: boolean;
  withTreeData: boolean;
  withRowReorder: boolean;
  withCellSelection: boolean;
  aggregatedColumnIds: string[];
  onRowOrderChange?: (reorderedData: any[]) => void;
  tableLayout: 'fixed' | 'auto';
  expandOnRowClick: boolean;
  editingMode: 'cell' | 'row' | undefined;
  labels: DataGridLabels;
  renderExpandedRow?: (props: { row: Row<DataGridFeatures, any> }) => React.ReactNode;
  emptyState?: React.ReactNode | ((payload: DataGridEmptyStatePayload<any>) => React.ReactNode);
  onRowClick?: (row: Row<DataGridFeatures, any>, event: React.MouseEvent) => void;
  onRowDoubleClick?: (row: Row<DataGridFeatures, any>, event: React.MouseEvent) => void;
  onCellClick?: (cell: Cell<DataGridFeatures, any, unknown>, event: React.MouseEvent) => void;
  editTrigger: 'click' | 'doubleClick';
  selectOnRowClick: boolean;
  listView: false | 'cards' | 'flat';
  renderListItem?: (props: { row: Row<DataGridFeatures, any> }) => React.ReactNode;
  withColumnMenu: boolean;
  columnMenuItems?: (column: Column<DataGridFeatures, any, unknown>) => React.ReactNode;
  headerInteractions: DataGridHeaderInteractions;
  toolbarHidden: boolean;
  withTreeLines: boolean;
  theadRef: (node: HTMLElement | null) => void;
  loading: boolean;
  skeletonRowCount: number;
  withSkeletonRows: boolean;
}

export const [DataGridProvider, useDataGridContext] = createSafeContext<DataGridContextValue>(
  'DataGrid component was not found in the tree'
);
