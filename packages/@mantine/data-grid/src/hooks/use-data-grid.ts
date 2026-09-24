import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  CellSelectionState,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ColumnResizeMode,
  ColumnSizingState,
  ColumnVisibilityState,
  ExpandedState,
  FilterFn,
  GroupingState,
  OnChangeFn,
  PaginationState,
  RowData,
  RowPinningState,
  RowSelectionState,
  SortingState,
  TableOptions,
  Updater,
  useTable,
} from '@tanstack/react-table';
import { type MantineSize, useDirection } from '@mantine/core';
import { useLatestRef } from '@mantine/hooks';
import {
  DATA_GRID_SIZES,
  type DataGridControlSize,
  getControlSize as resolveControlSize,
} from '../data-grid-sizes';
import type { DataGridColumnDef, DataGridRow, DataGridTable } from '../DataGrid.types';
import type {
  DataGridCellStatus,
  DataGridCellStatusPayload,
  DataGridEditCancelPayload,
  DataGridEditingState,
  DataGridEditSaveErrorPayload,
  DataGridEditSavePayload,
  DataGridEditStartPayload,
} from '../editing-feature';
import { createDataGridFeatures, type DataGridFeatures } from '../table-features';
import {
  createUtilityColumns,
  getUtilityColumnIds,
  normalizeColumnOrder,
  normalizeColumnPinning,
} from '../utility-columns/utility-columns';
import { inferFeatureFlags } from './infer-feature-flags';
import { useDeepCompareMemo } from './use-deep-compare-memo';

function defaultSortingDisabled<TData extends RowData>(
  columns: readonly DataGridColumnDef<TData>[]
): DataGridColumnDef<TData>[] {
  return columns.map((col) => ({
    enableSorting: false,
    ...col,
    ...('columns' in col &&
      col.columns && {
        columns: defaultSortingDisabled(col.columns),
      }),
  }));
}

const ACTIONS_COLUMN_DEFAULTS = {
  size: 80,
  enableSorting: false,
  enableColumnFilter: false,
  enableResizing: false,
} as const;

function processActionsColumns<TData extends RowData>(
  columns: readonly DataGridColumnDef<TData>[]
): DataGridColumnDef<TData>[] {
  return columns.map((col) => {
    if ('columns' in col && col.columns) {
      return { ...col, columns: processActionsColumns(col.columns) };
    }

    if (col.meta?.type !== 'actions') {
      return col;
    }

    return {
      ...ACTIONS_COLUMN_DEFAULTS,
      header: '',
      ...col,
      meta: { align: 'end', disableExport: true, ...col.meta },
    };
  });
}

function collectAggregatedColumnIds<TData extends RowData>(
  columns: readonly DataGridColumnDef<TData>[],
  acc: string[] = []
): string[] {
  for (const col of columns) {
    if ('columns' in col && col.columns) {
      collectAggregatedColumnIds(col.columns, acc);
      continue;
    }

    if (col.aggregationFn !== undefined) {
      const accessorKey =
        'accessorKey' in col && col.accessorKey !== undefined
          ? String(col.accessorKey).replaceAll('.', '_')
          : undefined;
      const id = col.id ?? accessorKey ?? (typeof col.header === 'string' ? col.header : undefined);
      if (id) {
        acc.push(id);
      }
    }
  }

  return acc;
}

/** One faceted value returned by `store.getFacetedUniqueValues`, shaped for `Select` and `MultiSelect` `data` */
export interface DataGridFacetedValue {
  /** Stringified cell value, used as the filter value */
  value: string;

  /** Display label, equal to `value` */
  label: string;
}

function isEmptyFilterValue(value: unknown): boolean {
  return value === undefined || value === null || value === '';
}

export interface DataGridStore<TData extends RowData = any> {
  /** The underlying TanStack Table instance */
  table: DataGridTable<TData>;

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

  /** Whether spreadsheet-style cell range selection is enabled */
  withCellSelection: boolean;

  /** Whether the row number column is rendered */
  withRowNumbers: boolean;

  /** Ids of columns that explicitly declare an `aggregationFn`, shown in the footer */
  aggregatedColumnIds: string[];

  /** Callback when rows are reordered via drag and drop */
  onRowOrderChange?: (reorderedData: TData[]) => void;

  /** Editing mode, `undefined` when editing is disabled */
  editingMode: 'cell' | 'row' | undefined;

  /** Current editing target with its drafts, `null` while nothing is edited */
  editing: DataGridEditingState | null;

  /** Current grid size, @default 'sm' */
  size: MantineSize;

  /** Update grid size */
  setSize: (size: MantineSize) => void;

  /** Size of chrome controls (toolbar, selection bar, footer) resolved from `size` */
  controlSize: DataGridControlSize;

  /** Current sorting state */
  sorting: SortingState;

  /** Current column filters state */
  columnFilters: ColumnFiltersState;

  /** Update the column filters state with a value or an updater function */
  setColumnFilters: (updater: Updater<ColumnFiltersState>) => void;

  /** Set the filter value of one column, `undefined`, `null` and `''` remove the entry; ignored for columns with `enableColumnFilter: false` */
  setColumnFilter: (columnId: string, value: unknown) => void;

  /** Clear all column filters */
  resetColumnFilters: () => void;

  /** Current filter value of the given column */
  getColumnFilterValue: (columnId: string) => unknown;

  /** Unique values of the given column, sorted, arrays flattened, nulls dropped; empty unless `withFaceting` is set */
  getFacetedUniqueValues: (columnId: string) => DataGridFacetedValue[];

  /** Numeric `[min, max]` of the given column, `undefined` unless `withFaceting` is set */
  getFacetedMinMaxValues: (columnId: string) => [number, number] | undefined;

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
  columnVisibility: ColumnVisibilityState;

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

  /** Current cell selection state */
  cellSelection: CellSelectionState;

  /** Returns current editing target with its drafts, `null` while nothing is edited */
  getEditing: () => DataGridEditingState | null;

  /** Returns current grid size */
  getSize: () => MantineSize;

  /** Returns size of chrome controls (toolbar, selection bar, footer) resolved from `size` */
  getControlSize: () => DataGridControlSize;

  /** Returns current sorting state */
  getSorting: () => SortingState;

  /** Returns current column filters state */
  getColumnFilters: () => ColumnFiltersState;

  /** Returns current global filter value */
  getGlobalFilter: () => any;

  /** Returns current pagination state */
  getPagination: () => PaginationState;

  /** Returns current column sizing state */
  getColumnSizing: () => ColumnSizingState;

  /** Returns current column pinning state */
  getColumnPinning: () => ColumnPinningState;

  /** Returns current column visibility state */
  getColumnVisibility: () => ColumnVisibilityState;

  /** Returns current column order state */
  getColumnOrder: () => ColumnOrderState;

  /** Returns current row selection state */
  getRowSelection: () => RowSelectionState;

  /** Returns current expanded state */
  getExpanded: () => ExpandedState;

  /** Returns current grouping state */
  getGrouping: () => GroupingState;

  /** Returns current row pinning state */
  getRowPinning: () => RowPinningState;

  /** Returns current cell selection state */
  getCellSelection: () => CellSelectionState;

  /** Ref to the scroll container DOM element */
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;

  /** Scroll the grid to bring the row at `index` into view */
  scrollToRow: (index: number) => void;

  /** Scroll the grid horizontally to bring the column at `index` into view */
  scrollToColumn: (index: number) => void;

  /** Return the current scroll position of the grid container */
  getScrollPosition: () => { top: number; left: number };
}

export interface UseDataGridOptions<TData extends RowData> {
  /** Data array to display */
  data: TData[];

  /** Column definitions */
  columns: DataGridColumnDef<TData>[];

  /** Function to derive stable row ID */
  getRowId?: (row: TData, index: number, parent?: DataGridRow<TData>) => string;

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
  globalFilterFn?: FilterFn<DataGridFeatures, TData>;

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

  /** Direction for column resizing, defaults to the `DirectionProvider` direction */
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
  columnVisibility?: ColumnVisibilityState;

  /** Callback when column visibility changes */
  onColumnVisibilityChange?: OnChangeFn<ColumnVisibilityState>;

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
  enableRowSelection?: boolean | ((row: DataGridRow<TData>) => boolean);

  /** Enable multi-row selection, set to `false` for single-select mode */
  enableMultiRowSelection?: boolean | ((row: DataGridRow<TData>) => boolean);

  /** Enable sub-row selection in tree data mode */
  enableSubRowSelection?: boolean | ((row: DataGridRow<TData>) => boolean);

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
  enableRowPinning?: boolean | ((row: DataGridRow<TData>) => boolean);

  /** Keep pinned rows visible through filtering/pagination */
  keepPinnedRows?: boolean;

  /** Enable faceted row models for filter option population */
  withFaceting?: boolean;

  /** Editing mode, enables inline editing when set */
  editingMode?: 'cell' | 'row';

  /** Pointer gesture that starts editing a cell, @default 'doubleClick' */
  editTrigger?: 'click' | 'doubleClick';

  /** Called when a row or cell enters edit mode */
  onEditStart?: (payload: DataGridEditStartPayload<DataGridFeatures, TData>) => void;

  /** Called on commit with the updated row; return a promise to keep the editor open until it settles, reject to keep it open with the drafts */
  onEditSave?: (payload: DataGridEditSavePayload<DataGridFeatures, TData>) => void | Promise<void>;

  /** Called when `onEditSave` throws or rejects */
  onEditSaveError?: (
    error: unknown,
    payload: DataGridEditSaveErrorPayload<DataGridFeatures, TData>
  ) => void;

  /** Called when editing is cancelled */
  onEditCancel?: (payload: DataGridEditCancelPayload<DataGridFeatures, TData>) => void;

  /** Returns the status tint of a body cell: `'dirty'` or `'invalid'` */
  getCellStatus?: (
    payload: DataGridCellStatusPayload<DataGridFeatures, TData>
  ) => DataGridCellStatus;

  /** Controlled editing state */
  editing?: DataGridEditingState | null;

  /** Callback when the editing state changes */
  onEditingChange?: OnChangeFn<DataGridEditingState | null>;

  /** Grid size, controls font size, row height, cell padding and control sizes, @default 'sm' */
  size?: MantineSize;

  /** Callback when size changes */
  onSizeChange?: (size: MantineSize) => void;

  /** Function to extract sub-rows from a row for tree data */
  getSubRows?: (originalRow: TData, index: number) => TData[] | undefined;

  /** Function to determine if a row can be expanded in tree data mode */
  getRowCanExpand?: (row: DataGridRow<TData>) => boolean;

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

  /** Enable spreadsheet-style cell range selection, @default false */
  withCellSelection?: boolean;

  /** Renders a row number column, numbers count data rows continuously across pages, @default false */
  withRowNumbers?: boolean;

  /** Controlled cell selection state */
  cellSelection?: CellSelectionState;

  /** Callback when cell selection changes */
  onCellSelectionChange?: OnChangeFn<CellSelectionState>;

  /** Additional TanStack Table options */
  tableOptions?: Partial<TableOptions<DataGridFeatures, TData>>;
}

export function useDataGrid<TData extends RowData>(
  options: UseDataGridOptions<TData>
): DataGridStore<TData> {
  const { data, columns, getRowId, tableOptions } = options;
  const { dir } = useDirection();

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
    withCellSelection,
  } = inferFeatureFlags(options);

  const features = useMemo(
    () =>
      createDataGridFeatures({
        withSorting,
        withFiltering,
        withGlobalFilter,
        withPagination,
        withRowExpansion,
        withGrouping,
        withTreeData,
        withFaceting,
      }),
    [
      withSorting,
      withFiltering,
      withGlobalFilter,
      withPagination,
      withRowExpansion,
      withGrouping,
      withTreeData,
      withFaceting,
    ]
  );

  const [sizeState, setSizeState] = useState<MantineSize>(options.size ?? 'sm');
  const size = options.size ?? sizeState;
  const setSize = options.onSizeChange ?? setSizeState;
  const controlSize = resolveControlSize(size);

  const withRowNumbers = options.withRowNumbers ?? false;
  const utilityFlags = {
    withRowReorder,
    withRowSelection,
    withRowExpansion,
    withTreeData,
    withRowNumbers,
  };
  const utilityIds = useMemo(
    () => getUtilityColumnIds(utilityFlags),
    [withRowReorder, withRowSelection, withRowExpansion, withTreeData, withRowNumbers]
  );
  const utilityColumns = useMemo(
    () => createUtilityColumns<TData>(utilityFlags, size),
    [utilityIds, size]
  );

  const sortProcessed = withSorting ? defaultSortingDisabled(columns) : columns;
  const dataColumns = processActionsColumns(sortProcessed);
  const processedColumns =
    utilityIds.length > 0 ? [...utilityColumns, ...dataColumns] : dataColumns;

  const [internalColumnOrder, setInternalColumnOrder] = useState<ColumnOrderState>(
    () => tableOptions?.initialState?.columnOrder ?? []
  );
  const [internalColumnPinning, setInternalColumnPinning] = useState<ColumnPinningState>(
    () => tableOptions?.initialState?.columnPinning ?? { start: [], end: [] }
  );
  const withUtilityOrder = utilityIds.length > 0;
  const withUtilityPinning = utilityIds.length > 0 && withColumnPinning;
  const groupedColumnMode = options.groupedColumnMode ?? 'reorder';
  const withGroupedReorder = withGrouping && withUtilityOrder && groupedColumnMode === 'reorder';
  const tableRef = useRef<DataGridTable<TData> | null>(null);
  const currentGrouping = withGroupedReorder
    ? (options.grouping ??
      tableRef.current?.store.state.grouping ??
      tableOptions?.initialState?.grouping ??
      [])
    : [];
  const columnOrder = withUtilityOrder
    ? normalizeColumnOrder(
        options.columnOrder ?? internalColumnOrder,
        utilityIds,
        withGroupedReorder ? currentGrouping : []
      )
    : options.columnOrder;
  const columnPinning = withUtilityPinning
    ? normalizeColumnPinning(options.columnPinning ?? internalColumnPinning, utilityIds)
    : options.columnPinning;
  const onColumnOrderChange: OnChangeFn<ColumnOrderState> | undefined = withUtilityOrder
    ? (options.onColumnOrderChange ?? setInternalColumnOrder)
    : options.onColumnOrderChange;
  const onColumnPinningChange: OnChangeFn<ColumnPinningState> | undefined = withUtilityPinning
    ? (options.onColumnPinningChange ?? setInternalColumnPinning)
    : options.onColumnPinningChange;

  // Build controlled state object from provided values.
  // useDeepCompareMemo stabilizes the reference so TanStack memos don't
  // recompute when the values are structurally identical (e.g. inline arrays).
  const controlledState = useDeepCompareMemo({
    ...(options.sorting !== undefined && { sorting: options.sorting }),
    ...(options.columnFilters !== undefined && { columnFilters: options.columnFilters }),
    ...(options.globalFilter !== undefined && { globalFilter: options.globalFilter }),
    ...(options.pagination !== undefined && { pagination: options.pagination }),
    ...(options.columnSizing !== undefined && { columnSizing: options.columnSizing }),
    ...(columnPinning !== undefined && { columnPinning }),
    ...(options.columnVisibility !== undefined && { columnVisibility: options.columnVisibility }),
    ...(columnOrder !== undefined && { columnOrder }),
    ...(options.rowSelection !== undefined && { rowSelection: options.rowSelection }),
    ...(options.expanded !== undefined && { expanded: options.expanded }),
    ...(options.grouping !== undefined && { grouping: options.grouping }),
    ...(options.rowPinning !== undefined && { rowPinning: options.rowPinning }),
    ...(options.cellSelection !== undefined && { cellSelection: options.cellSelection }),
    ...(options.editing !== undefined && { editing: options.editing }),
  });

  // Build change handlers
  const handlers = {
    ...(options.onSortingChange && { onSortingChange: options.onSortingChange }),
    ...(options.onColumnFiltersChange && { onColumnFiltersChange: options.onColumnFiltersChange }),
    ...(options.onGlobalFilterChange && { onGlobalFilterChange: options.onGlobalFilterChange }),
    ...(options.onPaginationChange && { onPaginationChange: options.onPaginationChange }),
    ...(options.onColumnSizingChange && { onColumnSizingChange: options.onColumnSizingChange }),
    ...(onColumnPinningChange && { onColumnPinningChange }),
    ...(options.onColumnVisibilityChange && {
      onColumnVisibilityChange: options.onColumnVisibilityChange,
    }),
    ...(onColumnOrderChange && { onColumnOrderChange }),
    ...(options.onRowSelectionChange && { onRowSelectionChange: options.onRowSelectionChange }),
    ...(options.onExpandedChange && { onExpandedChange: options.onExpandedChange }),
    ...(options.onGroupingChange && { onGroupingChange: options.onGroupingChange }),
    ...(options.onRowPinningChange && { onRowPinningChange: options.onRowPinningChange }),
    ...(options.onCellSelectionChange && {
      onCellSelectionChange: options.onCellSelectionChange,
    }),
    ...(options.onEditingChange && { onEditingChange: options.onEditingChange }),
  };

  // Build TanStack Table config
  const tableConfig: TableOptions<DataGridFeatures, TData> = {
    data,
    columns: processedColumns,
    getRowId,
    features,

    ...(withSorting && {
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
    ...(options.globalFilterFn && { globalFilterFn: options.globalFilterFn }),
    ...(withFiltering && { manualFiltering: options.manualFiltering }),
    ...(withPagination && {
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
      columnResizeDirection: options.columnResizeDirection ?? dir,
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
    ...(withGrouping && {
      autoResetExpanded: false,
      ...(withGroupedReorder
        ? { groupedColumnMode: false as const }
        : options.groupedColumnMode !== undefined && {
            groupedColumnMode: options.groupedColumnMode,
          }),
    }),
    ...(options.getSubRows && { getSubRows: options.getSubRows }),
    ...(options.getRowCanExpand
      ? { getRowCanExpand: options.getRowCanExpand }
      : withRowExpansion && !withTreeData
        ? { getRowCanExpand: () => true }
        : {}),
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
    enableCellSelection: withCellSelection ? (cell) => !cell.row.getIsGrouped() : false,
    ...(withEditing && {
      editingMode: options.editingMode,
      editTrigger: options.editTrigger,
      onEditStart: options.onEditStart,
      onEditSave: options.onEditSave,
      onEditSaveError: options.onEditSaveError,
      onEditCancel: options.onEditCancel,
    }),
    ...(options.getCellStatus && { getCellStatus: options.getCellStatus }),

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

  const table = useTable(tableConfig);
  tableRef.current = table;
  const state = table.store.state;

  const aggregatedColumnIds = useMemo(() => collectAggregatedColumnIds(columns), [columns]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToRow = useCallback(
    (index: number) => {
      const container = scrollContainerRef.current;
      if (!container) {
        return;
      }
      container.scrollTo({ top: index * DATA_GRID_SIZES[size].rowHeight, behavior: 'smooth' });
    },
    [size]
  );

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

  const setColumnFilter = (columnId: string, value: unknown) => {
    const column = table.getColumn(columnId);
    if (column && !column.getCanFilter()) {
      return;
    }

    table.setColumnFilters((old) => {
      const filters = old ?? [];
      if (isEmptyFilterValue(value)) {
        return filters.filter((filter) => filter.id !== columnId);
      }

      const index = filters.findIndex((filter) => filter.id === columnId);
      if (index === -1) {
        return [...filters, { id: columnId, value }];
      }

      return filters.map((filter) => (filter.id === columnId ? { id: columnId, value } : filter));
    });
  };

  const getColumnFilterValue = (columnId: string) =>
    state.columnFilters.find((filter) => filter.id === columnId)?.value;

  const getFacetedUniqueValues = (columnId: string): DataGridFacetedValue[] => {
    const column = withFaceting ? table.getColumn(columnId) : undefined;
    if (!column) {
      return [];
    }

    const unique = new Set<string>();
    for (const key of column.getFacetedUniqueValues().keys()) {
      const values = Array.isArray(key) ? key : [key];
      for (const item of values) {
        if (item !== null && item !== undefined) {
          unique.add(String(item));
        }
      }
    }

    return Array.from(unique)
      .sort()
      .map((value) => ({ value, label: value }));
  };

  const getFacetedMinMaxValues = (columnId: string) => {
    const column = withFaceting ? table.getColumn(columnId) : undefined;
    return column?.getFacetedMinMaxValues();
  };

  const latestState = useLatestRef({ state, size, controlSize });

  const getEditing = useCallback(() => latestState.current.state.editing, []);
  const getSize = useCallback(() => latestState.current.size, []);
  const getControlSize = useCallback(() => latestState.current.controlSize, []);
  const getSorting = useCallback(() => latestState.current.state.sorting, []);
  const getColumnFilters = useCallback(() => latestState.current.state.columnFilters, []);
  const getGlobalFilter = useCallback(() => latestState.current.state.globalFilter, []);
  const getPagination = useCallback(() => latestState.current.state.pagination, []);
  const getColumnSizing = useCallback(() => latestState.current.state.columnSizing, []);
  const getColumnPinning = useCallback(() => latestState.current.state.columnPinning, []);
  const getColumnVisibility = useCallback(() => latestState.current.state.columnVisibility, []);
  const getColumnOrder = useCallback(() => latestState.current.state.columnOrder, []);
  const getRowSelection = useCallback(() => latestState.current.state.rowSelection, []);
  const getExpanded = useCallback(() => latestState.current.state.expanded, []);
  const getGrouping = useCallback(() => latestState.current.state.grouping, []);
  const getRowPinning = useCallback(() => latestState.current.state.rowPinning, []);
  const getCellSelection = useCallback(() => latestState.current.state.cellSelection, []);

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
    withCellSelection,
    withRowNumbers,
    aggregatedColumnIds,
    onRowOrderChange: options.onRowOrderChange,
    editingMode: options.editingMode,
    editing: state.editing,
    size,
    setSize,
    controlSize,
    sorting: state.sorting,
    columnFilters: state.columnFilters,
    setColumnFilters: table.setColumnFilters,
    setColumnFilter,
    resetColumnFilters: () => table.resetColumnFilters(),
    getColumnFilterValue,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
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
    cellSelection: state.cellSelection,
    getEditing,
    getSize,
    getControlSize,
    getSorting,
    getColumnFilters,
    getGlobalFilter,
    getPagination,
    getColumnSizing,
    getColumnPinning,
    getColumnVisibility,
    getColumnOrder,
    getRowSelection,
    getExpanded,
    getGrouping,
    getRowPinning,
    getCellSelection,
    scrollContainerRef,
    scrollToRow,
    scrollToColumn,
    getScrollPosition,
  };
}
