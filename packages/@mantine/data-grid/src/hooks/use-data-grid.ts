import { useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ColumnResizeMode,
  ColumnSizingState,
  ExpandedState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  GroupingState,
  OnChangeFn,
  PaginationState,
  Row,
  RowPinningState,
  RowSelectionState,
  SortingState,
  Table as ReactTable,
  TableOptions,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import type { DataGridDensity } from '../DataGrid.context';
import { inferFeatureFlags } from './infer-feature-flags';

function defaultSortingDisabled<TData>(columns: ColumnDef<TData, any>[]): ColumnDef<TData, any>[] {
  return columns.map((col) => ({
    enableSorting: false,
    ...col,
    ...((col as any).columns && {
      columns: defaultSortingDisabled((col as any).columns),
    }),
  }));
}

export interface DataGridStore<TData = any> {
  /** The underlying TanStack Table instance */
  table: ReactTable<TData>;

  /** Whether sorting is enabled */
  withSorting: boolean;

  /** Whether column filtering is enabled */
  withFiltering: boolean;

  /** Whether global filter is enabled */
  withGlobalFilter: boolean;

  /** Whether pagination is enabled */
  withPagination: boolean;

  /** Whether column resizing is enabled */
  withColumnResizing: boolean;

  /** Whether column pinning is enabled */
  withColumnPinning: boolean;

  /** Whether column visibility toggle is enabled */
  withColumnVisibility: boolean;

  /** Whether column reorder via drag and drop is enabled */
  withColumnReorder: boolean;

  /** Whether row selection with checkboxes is enabled */
  withRowSelection: boolean;

  /** Whether row expansion is enabled */
  withRowExpansion: boolean;

  /** Whether row grouping is enabled */
  withGrouping: boolean;

  /** Whether row pinning is enabled */
  withRowPinning: boolean;

  /** Whether inline cell/row editing is enabled */
  withEditing: boolean;

  /** Editing mode, `undefined` when editing is disabled */
  editingMode: 'cell' | 'row' | undefined;

  /** Current grid density */
  density: DataGridDensity;

  /** Update grid density */
  setDensity: (density: DataGridDensity) => void;

  /** Current sorting state */
  sorting: SortingState;

  /** Current column filters state */
  columnFilters: ColumnFiltersState;

  /** Current global filter value */
  globalFilter: any;

  /** Current pagination state */
  pagination: PaginationState;

  /** Current column sizing state */
  columnSizing: ColumnSizingState;

  /** Current column pinning state */
  columnPinning: ColumnPinningState;

  /** Current column visibility state */
  columnVisibility: VisibilityState;

  /** Current column order state */
  columnOrder: ColumnOrderState;

  /** Current row selection state */
  rowSelection: RowSelectionState;

  /** Current expanded state */
  expanded: ExpandedState;

  /** Current grouping state */
  grouping: GroupingState;

  /** Current row pinning state */
  rowPinning: RowPinningState;
}

export interface UseDataGridOptions<TData> {
  /** Data array to display */
  data: TData[];

  /** Column definitions */
  columns: ColumnDef<TData, any>[];

  /** Function to derive stable row ID */
  getRowId?: (row: TData, index: number, parent?: Row<TData>) => string;

  /** Enable sorting, inferred from columns with `enableSorting: true` */
  withSorting?: boolean;

  /** Controlled sorting state */
  sorting?: SortingState;

  /** Callback when sorting changes */
  onSortingChange?: OnChangeFn<SortingState>;

  /** When true, sorting is handled externally (server-side) */
  manualSorting?: boolean;

  /** Enable column filtering, inferred from controlled state */
  withFiltering?: boolean;

  /** Controlled column filters state */
  columnFilters?: ColumnFiltersState;

  /** Callback when column filters change */
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;

  /** When true, filtering is handled externally (server-side) */
  manualFiltering?: boolean;

  /** Enable global filter, inferred from controlled state */
  withGlobalFilter?: boolean;

  /** Controlled global filter value */
  globalFilter?: any;

  /** Callback when global filter changes */
  onGlobalFilterChange?: OnChangeFn<any>;

  /** Enable pagination, inferred from controlled state */
  withPagination?: boolean;

  /** Controlled pagination state */
  pagination?: PaginationState;

  /** Callback when pagination changes */
  onPaginationChange?: OnChangeFn<PaginationState>;

  /** When true, pagination is handled externally (server-side) */
  manualPagination?: boolean;

  /** Total row count for server-side pagination */
  rowCount?: number;

  /** Default page size, @default 10 */
  pageSize?: number;

  /** Enable column resizing, inferred from controlled state */
  withColumnResizing?: boolean;

  /** Column resize mode, @default 'onEnd' */
  columnResizeMode?: ColumnResizeMode;

  /** Controlled column sizing state */
  columnSizing?: ColumnSizingState;

  /** Callback when column sizing changes */
  onColumnSizingChange?: OnChangeFn<ColumnSizingState>;

  /** Enable column pinning, inferred from controlled state */
  withColumnPinning?: boolean;

  /** Controlled column pinning state */
  columnPinning?: ColumnPinningState;

  /** Callback when column pinning changes */
  onColumnPinningChange?: OnChangeFn<ColumnPinningState>;

  /** Enable column visibility toggle, inferred from controlled state */
  withColumnVisibility?: boolean;

  /** Controlled column visibility state */
  columnVisibility?: VisibilityState;

  /** Callback when column visibility changes */
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;

  /** Enable column reorder via drag and drop, inferred from controlled state */
  withColumnReorder?: boolean;

  /** Controlled column order state */
  columnOrder?: ColumnOrderState;

  /** Callback when column order changes */
  onColumnOrderChange?: OnChangeFn<ColumnOrderState>;

  /** Enable row selection, inferred from controlled state */
  withRowSelection?: boolean;

  /** Controlled row selection state */
  rowSelection?: RowSelectionState;

  /** Callback when row selection changes */
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;

  /** Enable row expansion, inferred from controlled state */
  withRowExpansion?: boolean;

  /** Controlled expanded state */
  expanded?: ExpandedState;

  /** Callback when expanded state changes */
  onExpandedChange?: OnChangeFn<ExpandedState>;

  /** Enable row grouping, inferred from controlled state */
  withGrouping?: boolean;

  /** Controlled grouping state */
  grouping?: GroupingState;

  /** Callback when grouping changes */
  onGroupingChange?: OnChangeFn<GroupingState>;

  /** Enable row pinning, inferred from controlled state */
  withRowPinning?: boolean;

  /** Controlled row pinning state */
  rowPinning?: RowPinningState;

  /** Callback when row pinning changes */
  onRowPinningChange?: OnChangeFn<RowPinningState>;

  /** Enable row pinning per row, or a function to control per-row */
  enableRowPinning?: boolean | ((row: Row<TData>) => boolean);

  /** Keep pinned rows visible through filtering/pagination */
  keepPinnedRows?: boolean;

  /** Editing mode, enables inline editing when set */
  editingMode?: 'cell' | 'row';

  /** Grid density, @default 'default' */
  density?: DataGridDensity;

  /** Callback when density changes */
  onDensityChange?: (density: DataGridDensity) => void;

  /** Additional TanStack Table options */
  tableOptions?: Partial<TableOptions<TData>>;
}

export function useDataGrid<TData>(options: UseDataGridOptions<TData>): DataGridStore<TData> {
  const { data, columns, getRowId, tableOptions } = options;

  const {
    withSorting,
    withFiltering,
    withGlobalFilter,
    withPagination,
    withColumnResizing,
    withColumnPinning,
    withColumnVisibility,
    withColumnReorder,
    withRowSelection,
    withRowExpansion,
    withGrouping,
    withRowPinning,
    withEditing,
  } = inferFeatureFlags(options);

  // Density state (Mantine-specific, not part of TanStack)
  const [densityState, setDensityState] = useState<DataGridDensity>(options.density ?? 'default');
  const density = options.density ?? densityState;
  const setDensity = options.onDensityChange ?? setDensityState;

  // When sorting is enabled, default columns to non-sortable (opt-in per column)
  const processedColumns = withSorting ? defaultSortingDisabled(columns) : columns;

  // Build controlled state object from provided values
  const controlledState = {
    ...(options.sorting !== undefined && { sorting: options.sorting }),
    ...(options.columnFilters !== undefined && { columnFilters: options.columnFilters }),
    ...(options.globalFilter !== undefined && { globalFilter: options.globalFilter }),
    ...(options.pagination !== undefined && { pagination: options.pagination }),
    ...(options.columnSizing !== undefined && { columnSizing: options.columnSizing }),
    ...(options.columnPinning !== undefined && { columnPinning: options.columnPinning }),
    ...(options.columnVisibility !== undefined && { columnVisibility: options.columnVisibility }),
    ...(options.columnOrder !== undefined && { columnOrder: options.columnOrder }),
    ...(options.rowSelection !== undefined && { rowSelection: options.rowSelection }),
    ...(options.expanded !== undefined && { expanded: options.expanded }),
    ...(options.grouping !== undefined && { grouping: options.grouping }),
    ...(options.rowPinning !== undefined && { rowPinning: options.rowPinning }),
  };

  // Build change handlers
  const handlers = {
    ...(options.onSortingChange && { onSortingChange: options.onSortingChange }),
    ...(options.onColumnFiltersChange && { onColumnFiltersChange: options.onColumnFiltersChange }),
    ...(options.onGlobalFilterChange && { onGlobalFilterChange: options.onGlobalFilterChange }),
    ...(options.onPaginationChange && { onPaginationChange: options.onPaginationChange }),
    ...(options.onColumnSizingChange && { onColumnSizingChange: options.onColumnSizingChange }),
    ...(options.onColumnPinningChange && { onColumnPinningChange: options.onColumnPinningChange }),
    ...(options.onColumnVisibilityChange && {
      onColumnVisibilityChange: options.onColumnVisibilityChange,
    }),
    ...(options.onColumnOrderChange && { onColumnOrderChange: options.onColumnOrderChange }),
    ...(options.onRowSelectionChange && { onRowSelectionChange: options.onRowSelectionChange }),
    ...(options.onExpandedChange && { onExpandedChange: options.onExpandedChange }),
    ...(options.onGroupingChange && { onGroupingChange: options.onGroupingChange }),
    ...(options.onRowPinningChange && { onRowPinningChange: options.onRowPinningChange }),
  };

  // Build TanStack Table config
  const tableConfig: TableOptions<TData> = {
    data,
    columns: processedColumns,
    getRowId,
    getCoreRowModel: getCoreRowModel(),

    // Row models (enabled per feature)
    ...(withSorting && {
      getSortedRowModel: getSortedRowModel(),
      manualSorting: options.manualSorting,
    }),
    ...((withFiltering || withGlobalFilter) && {
      getFilteredRowModel: getFilteredRowModel(),
    }),
    ...(withFiltering && { manualFiltering: options.manualFiltering }),
    ...(withPagination && {
      getPaginationRowModel: getPaginationRowModel(),
      manualPagination: options.manualPagination,
      ...(options.rowCount !== undefined && { rowCount: options.rowCount }),
    }),
    ...(withColumnResizing && {
      enableColumnResizing: true,
      columnResizeMode: options.columnResizeMode ?? 'onEnd',
    }),
    ...(withColumnPinning && { enableColumnPinning: true }),
    ...(withRowPinning && {
      enableRowPinning: options.enableRowPinning ?? true,
      keepPinnedRows: options.keepPinnedRows,
    }),
    ...(withRowSelection && { enableRowSelection: true }),
    ...((withRowExpansion || withGrouping) && {
      getExpandedRowModel: getExpandedRowModel(),
    }),
    ...(withGrouping && { getGroupedRowModel: getGroupedRowModel() }),

    // Controlled state and handlers
    ...(Object.keys(controlledState).length > 0 && { state: controlledState }),
    ...handlers,

    ...tableOptions,
    ...(withPagination && {
      initialState: {
        ...tableOptions?.initialState,
        pagination: { pageIndex: 0, pageSize: options.pageSize ?? 10 },
      },
    }),
  };

  const table = useReactTable(tableConfig);
  const state = table.getState();

  return {
    table,
    withSorting,
    withFiltering,
    withGlobalFilter,
    withPagination,
    withColumnResizing,
    withColumnPinning,
    withColumnVisibility,
    withColumnReorder,
    withRowSelection,
    withRowExpansion,
    withGrouping,
    withRowPinning,
    withEditing,
    editingMode: options.editingMode,
    density,
    setDensity,
    sorting: state.sorting,
    columnFilters: state.columnFilters,
    globalFilter: state.globalFilter,
    pagination: state.pagination,
    columnSizing: state.columnSizing,
    columnPinning: state.columnPinning,
    columnVisibility: state.columnVisibility,
    columnOrder: state.columnOrder,
    rowSelection: state.rowSelection,
    expanded: state.expanded,
    grouping: state.grouping,
    rowPinning: state.rowPinning,
  };
}
