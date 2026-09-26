import { useCallback, useMemo, useRef, useState } from 'react';
import { GroupingState, RowData, useTable } from '@tanstack/react-table';
import { type MantineSize, useDirection } from '@mantine/core';
import { useIsomorphicEffect, useLatestRef } from '@mantine/hooks';
import { getOrderedVisibleColumns } from '../column-cell-props';
import { DATA_GRID_SIZES, getControlSize as resolveControlSize } from '../data-grid-sizes';
import type { DataGridColumnDef, DataGridTable } from '../DataGrid.types';
import { isEmptyFilterValue } from '../filters/is-empty-filter-value';
import { hasUnknownPageCount } from '../has-unknown-page-count';
import {
  buildTableOptions,
  getControlledState,
  getDefaultTableOptions,
  resetRemovedOptions,
} from './build-table-options';
import { getColumnScrollLeft, getRowScrollTop } from './grid-dom';
import { inferFeatureFlags } from './infer-feature-flags';
import { collectAggregatedColumnIds, prepareColumns } from './prepare-columns';
import { getRowScroller } from './row-scroller';
import type {
  DataGridFacetedValue,
  DataGridStore,
  UseDataGridOptions,
} from './use-data-grid.types';
import { useDeepCompareMemo } from './use-deep-compare-memo';
import { useUtilityColumnState } from './use-utility-column-state';

function getCurrentGrouping<TData extends RowData>(
  options: UseDataGridOptions<TData>,
  table: DataGridTable<TData> | null
): GroupingState {
  const tableOptions = options.tableOptions;
  return (
    options.grouping ??
    tableOptions?.atoms?.grouping?.get() ??
    tableOptions?.state?.grouping ??
    table?.store.state.grouping ??
    tableOptions?.initialState?.grouping ??
    []
  );
}

export function useDataGrid<TData extends RowData>(
  options: UseDataGridOptions<TData>
): DataGridStore<TData> {
  const { dir } = useDirection();
  const flags = inferFeatureFlags(options);
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
  } = flags;

  const [sizeState, setSizeState] = useState<MantineSize>(options.size ?? 'sm');
  const size = options.size ?? sizeState;
  const setSize = options.onSizeChange ?? setSizeState;
  const controlSize = resolveControlSize(size);

  const withRowNumbers = options.withRowNumbers ?? false;
  const tableRef = useRef<DataGridTable<TData> | null>(null);
  const utility = useUtilityColumnState({
    options,
    flags: { withRowReorder, withRowSelection, withRowExpansion, withTreeData, withRowNumbers },
    size,
    withColumnPinning,
    withGrouping,
    grouping: getCurrentGrouping(options, tableRef.current),
    getTable: () => tableRef.current,
  });

  const columns = useMemo<DataGridColumnDef<TData>[]>(
    () =>
      prepareColumns({
        columns: options.columns,
        utilityColumns: utility.utilityColumns,
        withSorting,
      }),
    [options.columns, utility.utilityColumns, withSorting]
  );

  const controlledState = useDeepCompareMemo(getControlledState(options, utility));

  const defaultTableOptionsRef = useRef<Record<string, unknown> | null>(null);
  const table = useTable(
    resetRemovedOptions(
      buildTableOptions({ options, flags, columns, controlledState, utility, dir }),
      tableRef.current?.options,
      () => (defaultTableOptionsRef.current ??= getDefaultTableOptions(tableRef.current!))
    )
  );
  tableRef.current = table;
  const unforcedColumnOrder = useDeepCompareMemo(utility.unforcedColumnOrder);
  const state = table.store.state;
  const columnOrder = unforcedColumnOrder ?? state.columnOrder;
  const groupedColumnsFirst =
    withGrouping &&
    (utility.withGroupedReorder || (table.options.groupedColumnMode ?? 'reorder') === 'reorder');

  const paginationEnabledRef = useRef(withPagination);
  const pageSizeRef = useRef(options.pageSize);
  useIsomorphicEffect(() => {
    const wasEnabled = paginationEnabledRef.current;
    const previousPageSize = pageSizeRef.current;
    paginationEnabledRef.current = withPagination;
    pageSizeRef.current = options.pageSize;
    if (
      !withPagination ||
      options.pageSize === undefined ||
      options.pagination !== undefined ||
      options.tableOptions?.state?.pagination !== undefined ||
      options.tableOptions?.atoms?.pagination !== undefined
    ) {
      return;
    }
    if (!wasEnabled) {
      table.setPagination({ pageIndex: 0, pageSize: options.pageSize });
    } else if (options.pageSize !== previousPageSize) {
      table.setPageSize(options.pageSize);
    }
  }, [withPagination, options.pageSize]);

  const pageCount = withPagination ? table.getPageCount() : 0;
  const currentPageIndex = state.pagination?.pageIndex ?? 0;
  const withUnknownPageCount = hasUnknownPageCount(table);
  useIsomorphicEffect(() => {
    if (!withUnknownPageCount && pageCount > 0 && currentPageIndex > pageCount - 1) {
      table.setPageIndex(pageCount - 1);
    }
  }, [pageCount, currentPageIndex, withUnknownPageCount]);

  const aggregatedColumnIds = useMemo(
    () => collectAggregatedColumnIds(options.columns),
    [options.columns]
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const latestState = useLatestRef({
    state,
    columnOrder,
    size,
    controlSize,
    dir,
    withColumnPinning,
  });

  const scrollToRow = useCallback((index: number) => {
    const rowScroller = getRowScroller(tableRef.current!.store);
    if (rowScroller) {
      rowScroller(index);
      return;
    }
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }
    const top = getRowScrollTop(
      container,
      index,
      tableRef.current!.getRowModel().rows[index]?.id,
      DATA_GRID_SIZES[latestState.current.size].rowHeight
    );
    if (top !== null) {
      container.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const scrollToColumn = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }
    const currentTable = tableRef.current!;
    const pinningEnabled = latestState.current.withColumnPinning;
    const startColumns = pinningEnabled ? currentTable.getPinnedVisibleLeafColumns('start') : [];
    const visibleColumns = getOrderedVisibleColumns(currentTable);
    const target = visibleColumns[index];
    if (pinningEnabled && target?.getIsPinned()) {
      return;
    }
    const left = getColumnScrollLeft(
      container,
      index,
      {
        offset: target
          ? visibleColumns.slice(0, index).reduce((sum, column) => sum + column.getSize(), 0)
          : undefined,
        stickyStart: startColumns.reduce((sum, column) => sum + column.getSize(), 0),
      },
      latestState.current.dir
    );
    if (left !== null) {
      container.scrollTo({ left, behavior: 'smooth' });
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
  const getColumnOrder = useCallback(() => latestState.current.columnOrder, []);
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
    groupedColumnsFirst,
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
    columnOrder,
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
