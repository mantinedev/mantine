import React, { useCallback, useRef, useState } from 'react';
import {
  type BuiltInFilterFn,
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ColumnResizeMode,
  ColumnSizingState,
  ExpandedState,
  FilterFn,
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
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
import { createOperatorFilterFn as createOperatorFilterFnLocal } from '../DataGridFilters/filter-operators';
import { inferFeatureFlags } from './infer-feature-flags';
import { useDeepCompareMemo } from './use-deep-compare-memo';

function defaultSortingDisabled<TData>(columns: ColumnDef<TData, any>[]): ColumnDef<TData, any>[] {
  return columns.map((col) => ({
    enableSorting: false,
    ...col,
    ...('columns' in col &&
      col.columns && {
        columns: defaultSortingDisabled(col.columns),
      }),
  }));
}

function defaultFilteringDisabled<TData>(
  columns: ColumnDef<TData, any>[]
): ColumnDef<TData, any>[] {
  return columns.map((col) => ({
    enableColumnFilter:
      col.meta?.filterVariant !== undefined ||
      col.meta?.filterOperators !== undefined ||
      col.filterFn !== undefined,
    ...col,
    ...('columns' in col &&
      col.columns && {
        columns: defaultFilteringDisabled(col.columns),
      }),
  }));
}

const FILTER_VARIANT_TO_FN = {
  range: 'inNumberRange',
  multiSelect: 'arrIncludesSome',
  select: 'equals',
  boolean: 'equals',
} as const satisfies Record<string, BuiltInFilterFn>;

function processFilterColumns<TData>(columns: ColumnDef<TData, any>[]): ColumnDef<TData, any>[] {
  return columns.map((col) => {
    const variant = col.meta?.filterVariant;
    const operators = col.meta?.filterOperators;
    const defaultFilterFn =
      variant && variant in FILTER_VARIANT_TO_FN
        ? FILTER_VARIANT_TO_FN[variant as keyof typeof FILTER_VARIANT_TO_FN]
        : undefined;
    let operatorFilterFn: FilterFn<TData> | undefined;
    if (operators && operators.length > 0 && !col.filterFn) {
      operatorFilterFn = createOperatorFilterFnLocal(operators);
    }
    return {
      ...(operatorFilterFn ? { filterFn: operatorFilterFn } : {}),
      ...(defaultFilterFn && !col.filterFn && !operatorFilterFn
        ? { filterFn: defaultFilterFn }
        : {}),
      ...col,
      ...('columns' in col &&
        col.columns && {
          columns: processFilterColumns(col.columns),
        }),
    };
  });
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

  /** Whether faceted row models are enabled */
  withFaceting: boolean;

  /** Whether tree data (sub-rows) is enabled */
  withTreeData: boolean;

  /** Whether row drag-and-drop reordering is enabled */
  withRowReorder: boolean;

  /** Callback when rows are reordered via drag and drop */
  onRowOrderChange?: (reorderedData: TData[]) => void;

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

  /** Update the global filter value */
  setGlobalFilter: (value: any) => void;

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

  /** Ref to the scroll container DOM element */
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;

  /** Scroll the grid to bring the row at `index` into view */
  scrollToRow: (index: number) => void;

  /** Scroll the grid horizontally to bring the column at `index` into view */
  scrollToColumn: (index: number) => void;

  /** Return the current scroll position of the grid container */
  getScrollPosition: () => { top: number; left: number };
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

  /** When false, removes the third "unsorted" click state from the sort cycle */
  enableSortingRemoval?: boolean;

  /** When true, first click on a column header sorts descending instead of ascending */
  sortDescFirst?: boolean;

  /** When true, allows sorting by multiple columns simultaneously */
  enableMultiSort?: boolean;

  /** Maximum number of columns that can be sorted simultaneously */
  maxMultiSortColCount?: number;

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

  /** Custom filter function for global filter */
  globalFilterFn?: FilterFn<TData>;

  /** Controlled pagination state */
  pagination?: PaginationState;

  /** Callback when pagination changes */
  onPaginationChange?: OnChangeFn<PaginationState>;

  /** When true, pagination is handled externally (server-side) */
  manualPagination?: boolean;

  /** Total row count for server-side pagination */
  rowCount?: number;

  /** Total page count for server-side pagination, alternative to `rowCount` */
  pageCount?: number;

  /** When false, prevents automatic page index reset when filters or sorting change */
  autoResetPageIndex?: boolean;

  /** Default page size, @default 10 */
  pageSize?: number;

  /** Enable column resizing, inferred from controlled state */
  withColumnResizing?: boolean;

  /** Column resize mode, @default 'onEnd' */
  columnResizeMode?: ColumnResizeMode;

  /** Direction for column resizing, useful for RTL layouts */
  columnResizeDirection?: 'ltr' | 'rtl';

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

  /** Enable row selection per row, or a function to control per-row */
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);

  /** Enable multi-row selection, set to `false` for single-select mode */
  enableMultiRowSelection?: boolean | ((row: Row<TData>) => boolean);

  /** Enable sub-row selection in tree data mode */
  enableSubRowSelection?: boolean | ((row: Row<TData>) => boolean);

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

  /** Controls how grouped columns are displayed: 'reorder' moves them to the front, 'remove' hides them, false leaves them in place */
  groupedColumnMode?: 'reorder' | 'remove' | false;

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

  /** Enable faceted row models for filter option population */
  withFaceting?: boolean;

  /** Editing mode, enables inline editing when set */
  editingMode?: 'cell' | 'row';

  /** Grid density, @default 'default' */
  density?: DataGridDensity;

  /** Callback when density changes */
  onDensityChange?: (density: DataGridDensity) => void;

  /** Function to extract sub-rows from a row for tree data */
  getSubRows?: (originalRow: TData, index: number) => TData[] | undefined;

  /** Function to determine if a row can be expanded in tree data mode */
  getRowCanExpand?: (row: Row<TData>) => boolean;

  /** Whether expanded rows should be paginated, @default true */
  paginateExpandedRows?: boolean;

  /** Whether to filter from leaf rows upward in tree data mode */
  filterFromLeafRows?: boolean;

  /** Maximum depth to filter leaf rows in tree data mode */
  maxLeafRowFilterDepth?: number;

  /** When true, expanding is handled externally (server-side) */
  manualExpanding?: boolean;

  /** Enable row drag-and-drop reordering, inferred from `onRowOrderChange` */
  withRowReorder?: boolean;

  /** Callback when rows are reordered via drag and drop */
  onRowOrderChange?: (reorderedData: TData[]) => void;

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
    withFaceting,
    withTreeData,
    withRowReorder,
  } = inferFeatureFlags(options);

  // Density state (Mantine-specific, not part of TanStack)
  const [densityState, setDensityState] = useState<DataGridDensity>(options.density ?? 'default');
  const density = options.density ?? densityState;
  const setDensity = options.onDensityChange ?? setDensityState;

  const sortProcessed = withSorting ? defaultSortingDisabled(columns) : columns;
  const filterProcessed = withFiltering ? defaultFilteringDisabled(sortProcessed) : sortProcessed;
  const processedColumns = withFiltering ? processFilterColumns(filterProcessed) : filterProcessed;

  // Build controlled state object from provided values.
  // useDeepCompareMemo stabilizes the reference so TanStack memos don't
  // recompute when the values are structurally identical (e.g. inline arrays).
  const controlledState = useDeepCompareMemo({
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
  });

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
      ...(options.enableSortingRemoval !== undefined && {
        enableSortingRemoval: options.enableSortingRemoval,
      }),
      ...(options.sortDescFirst !== undefined && { sortDescFirst: options.sortDescFirst }),
      ...(options.enableMultiSort !== undefined && { enableMultiSort: options.enableMultiSort }),
      ...(options.maxMultiSortColCount !== undefined && {
        maxMultiSortColCount: options.maxMultiSortColCount,
      }),
    }),
    ...((withFiltering || withGlobalFilter) && {
      getFilteredRowModel: getFilteredRowModel(),
    }),
    ...(options.globalFilterFn && { globalFilterFn: options.globalFilterFn }),
    ...(withFiltering && { manualFiltering: options.manualFiltering }),
    ...(withPagination && {
      getPaginationRowModel: getPaginationRowModel(),
      manualPagination: options.manualPagination,
      ...(options.rowCount !== undefined && { rowCount: options.rowCount }),
      ...(options.pageCount !== undefined && { pageCount: options.pageCount }),
      ...(options.autoResetPageIndex !== undefined && {
        autoResetPageIndex: options.autoResetPageIndex,
      }),
    }),
    ...(withColumnResizing && {
      enableColumnResizing: true,
      columnResizeMode: options.columnResizeMode ?? 'onEnd',
      ...(options.columnResizeDirection !== undefined && {
        columnResizeDirection: options.columnResizeDirection,
      }),
    }),
    ...(withColumnPinning && { enableColumnPinning: true }),
    ...(withRowPinning && {
      enableRowPinning: options.enableRowPinning ?? true,
      keepPinnedRows: options.keepPinnedRows,
    }),
    ...(withRowSelection && {
      enableRowSelection: options.enableRowSelection ?? true,
      ...(options.enableMultiRowSelection !== undefined && {
        enableMultiRowSelection: options.enableMultiRowSelection,
      }),
      ...(options.enableSubRowSelection !== undefined && {
        enableSubRowSelection: options.enableSubRowSelection,
      }),
    }),
    ...((withRowExpansion || withGrouping || withTreeData) && {
      getExpandedRowModel: getExpandedRowModel(),
    }),
    ...(withGrouping && {
      getGroupedRowModel: getGroupedRowModel(),
      autoResetExpanded: false,
      ...(options.groupedColumnMode !== undefined && {
        groupedColumnMode: options.groupedColumnMode,
      }),
    }),
    ...(options.getSubRows && { getSubRows: options.getSubRows }),
    ...(options.getRowCanExpand && { getRowCanExpand: options.getRowCanExpand }),
    ...(options.paginateExpandedRows !== undefined && {
      paginateExpandedRows: options.paginateExpandedRows,
    }),
    ...(options.filterFromLeafRows !== undefined && {
      filterFromLeafRows: options.filterFromLeafRows,
    }),
    ...(options.maxLeafRowFilterDepth !== undefined && {
      maxLeafRowFilterDepth: options.maxLeafRowFilterDepth,
    }),
    ...(options.manualExpanding !== undefined && { manualExpanding: options.manualExpanding }),
    ...(withFaceting && {
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      getFacetedMinMaxValues: getFacetedMinMaxValues(),
    }),

    // Controlled state and handlers
    ...(Object.keys(controlledState).length > 0 && { state: controlledState }),
    ...handlers,

    ...tableOptions,
    ...(withPagination && {
      initialState: {
        ...tableOptions?.initialState,
        pagination: {
          pageIndex: 0,
          pageSize: options.pageSize ?? 10,
          ...tableOptions?.initialState?.pagination,
        },
      },
    }),
  };

  const table = useReactTable(tableConfig);
  const state = table.getState();

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToRow = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }
    const rowHeight = parseInt(
      getComputedStyle(container).getPropertyValue('--dg-row-height') || '36',
      10
    );
    container.scrollTo({ top: index * rowHeight, behavior: 'smooth' });
  }, []);

  const scrollToColumn = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }
    const cells = container.querySelectorAll('thead th');
    const cell = cells[index] as HTMLElement | undefined;
    if (cell) {
      container.scrollTo({ left: cell.offsetLeft, behavior: 'smooth' });
    }
  }, []);

  const getScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return { top: 0, left: 0 };
    }
    return { top: container.scrollTop, left: container.scrollLeft };
  }, []);

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
    withFaceting,
    withTreeData,
    withRowReorder,
    onRowOrderChange: options.onRowOrderChange,
    editingMode: options.editingMode,
    density,
    setDensity,
    sorting: state.sorting,
    columnFilters: state.columnFilters,
    globalFilter: state.globalFilter,
    setGlobalFilter: table.setGlobalFilter,
    pagination: state.pagination,
    columnSizing: state.columnSizing,
    columnPinning: state.columnPinning,
    columnVisibility: state.columnVisibility,
    columnOrder: state.columnOrder,
    rowSelection: state.rowSelection,
    expanded: state.expanded,
    grouping: state.grouping,
    rowPinning: state.rowPinning,
    scrollContainerRef,
    scrollToRow,
    scrollToColumn,
    getScrollPosition,
  };
}
