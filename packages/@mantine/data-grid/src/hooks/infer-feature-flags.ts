import type { ColumnDef } from '@tanstack/react-table';
import type { UseDataGridOptions } from './use-data-grid';

function isDefined(...values: unknown[]): boolean {
  return values.some((v) => v !== undefined);
}

function hasEnableSorting(columns: ColumnDef<any, any>[]): boolean {
  return columns.some(
    (col) =>
      (col as any).enableSorting === true ||
      ((col as any).columns && hasEnableSorting((col as any).columns))
  );
}

export interface DataGridFeatureFlags {
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
  withGrouping: boolean;
  withRowPinning: boolean;
  withEditing: boolean;
  withFaceting: boolean;
  withTreeData: boolean;
  withRowReorder: boolean;
}

export function inferFeatureFlags<TData>(options: UseDataGridOptions<TData>): DataGridFeatureFlags {
  const withTreeData = options.getSubRows !== undefined;
  const withGrouping =
    options.withGrouping ?? isDefined(options.grouping, options.onGroupingChange);
  const withRowReorder =
    withTreeData || withGrouping
      ? false
      : (options.withRowReorder ?? isDefined(options.onRowOrderChange));

  return {
    withSorting: withRowReorder
      ? false
      : (options.withSorting ?? hasEnableSorting(options.columns)),
    withFiltering:
      options.withFiltering ?? isDefined(options.columnFilters, options.onColumnFiltersChange),
    withGlobalFilter:
      options.withGlobalFilter ?? isDefined(options.globalFilter, options.onGlobalFilterChange),
    withPagination:
      options.withPagination ?? isDefined(options.pagination, options.onPaginationChange),
    withColumnResizing:
      options.withColumnResizing ??
      isDefined(options.columnSizing, options.onColumnSizingChange, options.columnResizeMode),
    withColumnPinning:
      options.withColumnPinning ?? isDefined(options.columnPinning, options.onColumnPinningChange),
    withColumnVisibility:
      options.withColumnVisibility ??
      isDefined(options.columnVisibility, options.onColumnVisibilityChange),
    withColumnReorder:
      options.withColumnReorder ?? isDefined(options.columnOrder, options.onColumnOrderChange),
    withRowSelection:
      options.withRowSelection ?? isDefined(options.rowSelection, options.onRowSelectionChange),
    withRowExpansion:
      options.withRowExpansion ??
      (isDefined(options.expanded, options.onExpandedChange) || withTreeData),
    withGrouping,
    withRowPinning:
      options.withRowPinning ??
      isDefined(options.rowPinning, options.onRowPinningChange, options.enableRowPinning),
    withEditing: options.editingMode !== undefined,
    withFaceting: options.withFaceting ?? false,
    withTreeData,
    withRowReorder,
  };
}
