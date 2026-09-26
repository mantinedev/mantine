import type { RowData, Table, TableFeature, TableOptions, TableState } from '@tanstack/react-table';
import { filterProps } from '@mantine/core';
import type { DataGridColumnDef, DataGridRow } from '../DataGrid.types';
import { dataGridFeatures, type DataGridFeatures } from '../table-features';
import type { DataGridFeatureFlags } from './infer-feature-flags';
import type { UseDataGridOptions } from './use-data-grid.types';
import type { UtilityColumnState } from './use-utility-column-state';

type UtilityOverrides<TData extends RowData> = Omit<
  UtilityColumnState<TData>,
  'utilityColumns' | 'unforcedColumnOrder'
>;

type RowPredicate<TData extends RowData> = boolean | ((row: DataGridRow<TData>) => boolean);

function resolveRowPredicate<TData extends RowData>(
  predicate: RowPredicate<TData>,
  row: DataGridRow<TData>
) {
  return typeof predicate === 'function' ? predicate(row) : predicate;
}

function excludeGroupRows<TData extends RowData>(predicate: RowPredicate<TData>) {
  return (row: DataGridRow<TData>) => !row.getIsGrouped() && resolveRowPredicate(predicate, row);
}

function includeGroupRows<TData extends RowData>(predicate: RowPredicate<TData>) {
  return (row: DataGridRow<TData>) => row.getIsGrouped() || resolveRowPredicate(predicate, row);
}

function getRowSelectionOptions<TData extends RowData>(
  options: UseDataGridOptions<TData>,
  withGrouping: boolean
) {
  return {
    enableRowSelection: withGrouping
      ? excludeGroupRows(options.enableRowSelection ?? true)
      : (options.enableRowSelection ?? true),
    enableMultiRowSelection:
      withGrouping && typeof options.enableMultiRowSelection === 'function'
        ? includeGroupRows(options.enableMultiRowSelection)
        : options.enableMultiRowSelection,
    enableSubRowSelection:
      withGrouping && options.enableSubRowSelection !== undefined
        ? includeGroupRows(options.enableSubRowSelection)
        : options.enableSubRowSelection,
  };
}

export function getControlledState<TData extends RowData>(
  options: UseDataGridOptions<TData>,
  utility: UtilityOverrides<TData>
): Partial<TableState<DataGridFeatures>> {
  const state = filterProps<Partial<TableState<DataGridFeatures>>>({
    sorting: options.sorting,
    columnFilters: options.columnFilters,
    globalFilter: options.globalFilter,
    pagination: options.pagination,
    columnSizing: options.columnSizing,
    columnPinning: utility.columnPinning,
    columnVisibility: options.columnVisibility,
    columnOrder: utility.tableColumnOrder,
    rowSelection: options.rowSelection,
    expanded: options.expanded,
    grouping: options.grouping,
    rowPinning: options.rowPinning,
    cellSelection: options.cellSelection,
    editing: options.editing,
  });

  const tableOptionsState = options.tableOptions?.state;
  if (!tableOptionsState) {
    return state;
  }

  return {
    ...state,
    ...tableOptionsState,
    ...filterProps({
      columnOrder: utility.tableColumnOrder,
      columnPinning: utility.columnPinning,
    }),
  };
}

interface BuildTableOptionsInput<TData extends RowData> {
  options: UseDataGridOptions<TData>;
  flags: DataGridFeatureFlags;
  columns: DataGridColumnDef<TData>[];
  controlledState: Partial<TableState<DataGridFeatures>>;
  utility: UtilityOverrides<TData>;
  dir: 'ltr' | 'rtl';
}

export function buildTableOptions<TData extends RowData>({
  options,
  flags,
  columns,
  controlledState,
  utility,
  dir,
}: BuildTableOptionsInput<TData>): TableOptions<DataGridFeatures, TData> {
  const { tableOptions } = options;

  const tableConfig: TableOptions<DataGridFeatures, TData> = {
    data: options.data,
    columns,
    getRowId: options.getRowId,
    features: dataGridFeatures,

    manualSorting: !flags.withSorting || options.manualSorting,
    manualFiltering: !(flags.withFiltering || flags.withGlobalFilter) || options.manualFiltering,
    manualGrouping: !flags.withGrouping,
    manualExpanding:
      !(flags.withRowExpansion || flags.withGrouping || flags.withTreeData) ||
      options.manualExpanding,
    manualPagination: !flags.withPagination || options.manualPagination,

    ...(flags.withSorting && {
      enableSortingRemoval: options.enableSortingRemoval,
      sortDescFirst: options.sortDescFirst,
      enableMultiSort: options.enableMultiSort,
      maxMultiSortColCount: options.maxMultiSortColCount,
    }),
    ...(options.globalFilterFn && { globalFilterFn: options.globalFilterFn }),
    ...(flags.withPagination && {
      rowCount: options.rowCount,
      pageCount: options.pageCount,
      autoResetPageIndex: options.autoResetPageIndex,
    }),
    ...(flags.withColumnResizing && {
      enableColumnResizing: true,
      columnResizeMode: options.columnResizeMode ?? 'onEnd',
      columnResizeDirection: options.columnResizeDirection ?? dir,
    }),
    ...(flags.withColumnPinning && { enableColumnPinning: true }),
    ...(flags.withRowPinning && {
      enableRowPinning: options.enableRowPinning ?? true,
      keepPinnedRows: options.keepPinnedRows,
    }),
    ...(flags.withRowSelection && getRowSelectionOptions(options, flags.withGrouping)),
    ...(flags.withGrouping && {
      autoResetExpanded: false,
      groupedColumnMode: utility.withGroupedReorder ? false : options.groupedColumnMode,
    }),
    ...(options.getSubRows && { getSubRows: options.getSubRows }),
    ...(options.getRowCanExpand
      ? { getRowCanExpand: options.getRowCanExpand }
      : flags.withRowExpansion && !flags.withTreeData
        ? { getRowCanExpand: () => true }
        : {}),
    paginateExpandedRows: options.paginateExpandedRows,
    filterFromLeafRows: options.filterFromLeafRows,
    maxLeafRowFilterDepth: options.maxLeafRowFilterDepth,
    enableCellSelection: flags.withCellSelection ? (cell) => !cell.row.getIsGrouped() : false,
    ...(flags.withEditing && {
      editingMode: options.editingMode,
      editTrigger: options.editTrigger,
      onEditStart: options.onEditStart,
      onEditSave: options.onEditSave,
      onEditSaveError: options.onEditSaveError,
      onEditCancel: options.onEditCancel,
    }),
    ...(options.getCellStatus && { getCellStatus: options.getCellStatus }),

    onSortingChange: options.onSortingChange,
    onColumnFiltersChange: options.onColumnFiltersChange,
    onGlobalFilterChange: options.onGlobalFilterChange,
    onPaginationChange: options.onPaginationChange,
    onColumnSizingChange: options.onColumnSizingChange,
    onColumnPinningChange: utility.onColumnPinningChange,
    onColumnVisibilityChange: options.onColumnVisibilityChange,
    onColumnOrderChange: utility.onColumnOrderChange,
    onRowSelectionChange: options.onRowSelectionChange,
    onExpandedChange: options.onExpandedChange,
    onGroupingChange: options.onGroupingChange,
    onRowPinningChange: options.onRowPinningChange,
    onCellSelectionChange: options.onCellSelectionChange,
    onEditingChange: options.onEditingChange,

    ...tableOptions,
    ...(Object.keys(controlledState).length > 0 && { state: controlledState }),
    ...(flags.withPagination && {
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

  return filterProps(tableConfig) as TableOptions<DataGridFeatures, TData>;
}

export function getDefaultTableOptions<TData extends RowData>(
  table: Table<DataGridFeatures, TData>
): Record<string, unknown> {
  const defaults: Record<string, unknown> = {};
  for (const feature of Object.values(table._features)) {
    Object.assign(defaults, (feature as TableFeature).getDefaultTableOptions?.(table));
  }
  return defaults;
}

export function resetRemovedOptions<TData extends RowData>(
  nextOptions: TableOptions<DataGridFeatures, TData>,
  previousOptions: object | undefined,
  getDefaults: () => Record<string, unknown>
): TableOptions<DataGridFeatures, TData> {
  if (!previousOptions) {
    return nextOptions;
  }
  const result: Record<string, unknown> = { ...nextOptions };
  let defaults: Record<string, unknown> | null = null;
  for (const key of Object.keys(previousOptions)) {
    if (!(key in result)) {
      defaults ??= getDefaults();
      result[key] = defaults[key];
    }
  }
  return result as unknown as TableOptions<DataGridFeatures, TData>;
}
