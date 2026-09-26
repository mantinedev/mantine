import React from 'react';
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
} from '@tanstack/react-table';
import { MantineSize } from '@mantine/core';
import type { DataGridControlSize } from '../data-grid-sizes';
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
import type { DataGridFeatures } from '../table-features';

/** One faceted value returned by `store.getFacetedUniqueValues`, shaped for `Select` and `MultiSelect` `data` */
export interface DataGridFacetedValue {
  /** Stringified cell value, used as the filter value */
  value: string;

  /** Display label, equal to `value` */
  label: string;
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

  /** Whether grouped columns are forced to the start of the column order (by `groupedColumnMode: 'reorder'` or by the grid when utility columns are present), such columns cannot be reordered */
  groupedColumnsFirst: boolean;

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

  /** Current column order state, without the display-only position of grouped columns kept first by the grid */
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

  /** Returns current column order state, without the display-only position of grouped columns kept first by the grid */
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

  /** Scroll the grid to bring the row at `index` of `table.getRowModel().rows` into view, rows pinned to a sticky section are always visible and are not scrolled to */
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

  /** When true, first click on any column header sorts descending. By default, text columns sort ascending and numeric columns descending first */
  sortDescFirst?: boolean;

  /** Allows sorting by multiple columns with `Shift` + click @default true */
  enableMultiSort?: boolean;

  /** Maximum number of columns that can be sorted simultaneously */
  maxMultiSortColCount?: number;

  /** Enable column filtering, inferred from columns with `enableColumnFilter: true` or `filterFn`; controlled `columnFilters` alone do not enable it */
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

  /** Page size of uncontrolled pagination; later changes are applied to the current pagination state, keeping the first row of the current page visible, @default 10 */
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
