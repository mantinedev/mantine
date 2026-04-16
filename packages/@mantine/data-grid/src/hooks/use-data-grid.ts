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
  RowSelectionState,
  SortingState,
  TableOptions,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';

export interface UseDataGridOptions<TData> {
  /** Data array to display */
  data: TData[];

  /** Column definitions */
  columns: ColumnDef<TData, any>[];

  /** Function to derive stable row ID */
  getRowId?: (row: TData, index: number, parent?: Row<TData>) => string;

  /** Enable sorting, @default true */
  withSorting?: boolean;

  /** Controlled sorting state */
  sorting?: SortingState;

  /** Callback when sorting changes */
  onSortingChange?: OnChangeFn<SortingState>;

  /** When true, sorting is handled externally (server-side) */
  manualSorting?: boolean;

  /** Enable column filtering, @default false */
  withFiltering?: boolean;

  /** Controlled column filters state */
  columnFilters?: ColumnFiltersState;

  /** Callback when column filters change */
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;

  /** When true, filtering is handled externally (server-side) */
  manualFiltering?: boolean;

  /** Enable global filter, @default false */
  withGlobalFilter?: boolean;

  /** Controlled global filter value */
  globalFilter?: any;

  /** Callback when global filter changes */
  onGlobalFilterChange?: OnChangeFn<any>;

  /** Enable pagination, @default false */
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

  /** Enable column resizing, @default false */
  withColumnResizing?: boolean;

  /** Column resize mode, @default 'onEnd' */
  columnResizeMode?: ColumnResizeMode;

  /** Controlled column sizing state */
  columnSizing?: ColumnSizingState;

  /** Callback when column sizing changes */
  onColumnSizingChange?: OnChangeFn<ColumnSizingState>;

  /** Enable column pinning, @default false */
  withColumnPinning?: boolean;

  /** Controlled column pinning state */
  columnPinning?: ColumnPinningState;

  /** Callback when column pinning changes */
  onColumnPinningChange?: OnChangeFn<ColumnPinningState>;

  /** Enable column visibility toggle, @default false */
  withColumnVisibility?: boolean;

  /** Controlled column visibility state */
  columnVisibility?: VisibilityState;

  /** Callback when column visibility changes */
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;

  /** Enable column reorder via drag and drop, @default false */
  withColumnReorder?: boolean;

  /** Controlled column order state */
  columnOrder?: ColumnOrderState;

  /** Callback when column order changes */
  onColumnOrderChange?: OnChangeFn<ColumnOrderState>;

  /** Enable row selection, @default false */
  withRowSelection?: boolean;

  /** Controlled row selection state */
  rowSelection?: RowSelectionState;

  /** Callback when row selection changes */
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;

  /** Enable row expansion, @default false */
  withRowExpansion?: boolean;

  /** Controlled expanded state */
  expanded?: ExpandedState;

  /** Callback when expanded state changes */
  onExpandedChange?: OnChangeFn<ExpandedState>;

  /** Enable row grouping, @default false */
  withGrouping?: boolean;

  /** Controlled grouping state */
  grouping?: GroupingState;

  /** Callback when grouping changes */
  onGroupingChange?: OnChangeFn<GroupingState>;

  /** Additional TanStack Table options */
  tableOptions?: Partial<TableOptions<TData>>;
}

export function useDataGrid<TData>(options: UseDataGridOptions<TData>) {
  const {
    data,
    columns,
    getRowId,
    withSorting = true,
    sorting,
    onSortingChange,
    manualSorting,
    withFiltering = false,
    columnFilters,
    onColumnFiltersChange,
    manualFiltering,
    withGlobalFilter = false,
    globalFilter,
    onGlobalFilterChange,
    withPagination = false,
    pagination,
    onPaginationChange,
    manualPagination,
    rowCount,
    pageSize = 10,
    withColumnResizing = false,
    columnResizeMode = 'onEnd',
    columnSizing,
    onColumnSizingChange,
    withColumnPinning = false,
    columnPinning,
    onColumnPinningChange,
    withColumnVisibility = false,
    columnVisibility,
    onColumnVisibilityChange,
    withColumnReorder = false,
    columnOrder,
    onColumnOrderChange,
    withRowSelection = false,
    rowSelection,
    onRowSelectionChange,
    withRowExpansion = false,
    expanded,
    onExpandedChange,
    withGrouping = false,
    grouping,
    onGroupingChange,
    tableOptions,
  } = options;

  const tableConfig: TableOptions<TData> = {
    data,
    columns,
    getRowId,
    getCoreRowModel: getCoreRowModel(),
    ...tableOptions,
  };

  if (withSorting) {
    tableConfig.getSortedRowModel = getSortedRowModel();
    tableConfig.manualSorting = manualSorting;
    if (sorting !== undefined) {
      tableConfig.state = { ...tableConfig.state, sorting };
    }
    if (onSortingChange) {
      tableConfig.onSortingChange = onSortingChange;
    }
  }

  if (withFiltering) {
    tableConfig.getFilteredRowModel = getFilteredRowModel();
    tableConfig.manualFiltering = manualFiltering;
    if (columnFilters !== undefined) {
      tableConfig.state = { ...tableConfig.state, columnFilters };
    }
    if (onColumnFiltersChange) {
      tableConfig.onColumnFiltersChange = onColumnFiltersChange;
    }
  }

  if (withGlobalFilter) {
    if (!withFiltering) {
      tableConfig.getFilteredRowModel = getFilteredRowModel();
    }
    if (globalFilter !== undefined) {
      tableConfig.state = { ...tableConfig.state, globalFilter };
    }
    if (onGlobalFilterChange) {
      tableConfig.onGlobalFilterChange = onGlobalFilterChange;
    }
  }

  if (withPagination) {
    tableConfig.getPaginationRowModel = getPaginationRowModel();
    tableConfig.manualPagination = manualPagination;
    tableConfig.initialState = {
      ...tableConfig.initialState,
      pagination: { pageIndex: 0, pageSize },
    };
    if (rowCount !== undefined) {
      tableConfig.rowCount = rowCount;
    }
    if (pagination !== undefined) {
      tableConfig.state = { ...tableConfig.state, pagination };
    }
    if (onPaginationChange) {
      tableConfig.onPaginationChange = onPaginationChange;
    }
  }

  if (withColumnResizing) {
    tableConfig.enableColumnResizing = true;
    tableConfig.columnResizeMode = columnResizeMode;
    if (columnSizing !== undefined) {
      tableConfig.state = { ...tableConfig.state, columnSizing };
    }
    if (onColumnSizingChange) {
      tableConfig.onColumnSizingChange = onColumnSizingChange;
    }
  }

  if (withColumnPinning) {
    tableConfig.enablePinning = true;
    if (columnPinning !== undefined) {
      tableConfig.state = { ...tableConfig.state, columnPinning };
    }
    if (onColumnPinningChange) {
      tableConfig.onColumnPinningChange = onColumnPinningChange;
    }
  }

  if (withColumnVisibility) {
    if (columnVisibility !== undefined) {
      tableConfig.state = { ...tableConfig.state, columnVisibility };
    }
    if (onColumnVisibilityChange) {
      tableConfig.onColumnVisibilityChange = onColumnVisibilityChange;
    }
  }

  if (withColumnReorder) {
    if (columnOrder !== undefined) {
      tableConfig.state = { ...tableConfig.state, columnOrder };
    }
    if (onColumnOrderChange) {
      tableConfig.onColumnOrderChange = onColumnOrderChange;
    }
  }

  if (withRowSelection) {
    tableConfig.enableRowSelection = true;
    if (rowSelection !== undefined) {
      tableConfig.state = { ...tableConfig.state, rowSelection };
    }
    if (onRowSelectionChange) {
      tableConfig.onRowSelectionChange = onRowSelectionChange;
    }
  }

  if (withRowExpansion) {
    tableConfig.getExpandedRowModel = getExpandedRowModel();
    if (expanded !== undefined) {
      tableConfig.state = { ...tableConfig.state, expanded };
    }
    if (onExpandedChange) {
      tableConfig.onExpandedChange = onExpandedChange;
    }
  }

  if (withGrouping) {
    tableConfig.getGroupedRowModel = getGroupedRowModel();
    if (!withRowExpansion) {
      tableConfig.getExpandedRowModel = getExpandedRowModel();
    }
    if (grouping !== undefined) {
      tableConfig.state = { ...tableConfig.state, grouping };
    }
    if (onGroupingChange) {
      tableConfig.onGroupingChange = onGroupingChange;
    }
  }

  const table = useReactTable(tableConfig);

  return table;
}
