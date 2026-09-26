import { useMemo, useRef, useState } from 'react';
import {
  ColumnOrderState,
  ColumnPinningState,
  GroupingState,
  OnChangeFn,
  RowData,
} from '@tanstack/react-table';
import { MantineSize } from '@mantine/core';
import { useIsomorphicEffect } from '@mantine/hooks';
import type { DataGridColumnDef, DataGridTable } from '../DataGrid.types';
import {
  createUtilityColumns,
  stripUtilityColumnIds,
  stripUtilityPinning,
  getUtilityColumnIds,
  normalizeColumnOrder,
  normalizeColumnPinning,
  UtilityColumnFlags,
} from '../utility-columns/utility-columns';
import type { UseDataGridOptions } from './use-data-grid.types';

interface UseUtilityColumnStateInput<TData extends RowData> {
  options: UseDataGridOptions<TData>;
  flags: UtilityColumnFlags;
  size: MantineSize;
  withColumnPinning: boolean;
  withGrouping: boolean;
  grouping: GroupingState;
  getTable: () => DataGridTable<TData> | null;
}

export interface UtilityColumnState<TData extends RowData> {
  utilityColumns: DataGridColumnDef<TData>[];
  withGroupedReorder: boolean;
  /** Displayed column order passed to the TanStack table state, includes the grid-forced grouped position (grouping + utility columns) */
  tableColumnOrder: ColumnOrderState | undefined;

  /** User column order (internal or controlled) normalized with utility columns but without the grid-forced grouped position, `undefined` when the grid does not normalize the order */
  unforcedColumnOrder: ColumnOrderState | undefined;
  onColumnOrderChange: OnChangeFn<ColumnOrderState> | undefined;
  columnPinning: ColumnPinningState | undefined;
  onColumnPinningChange: OnChangeFn<ColumnPinningState> | undefined;
}

export function useUtilityColumnState<TData extends RowData>({
  options,
  flags,
  size,
  withColumnPinning,
  withGrouping,
  grouping,
  getTable,
}: UseUtilityColumnStateInput<TData>): UtilityColumnState<TData> {
  const tableOptions = options.tableOptions;
  const initialState = tableOptions?.initialState;

  const utilityIds = useMemo(
    () => getUtilityColumnIds(flags),
    [
      flags.withRowReorder,
      flags.withRowSelection,
      flags.withRowExpansion,
      flags.withTreeData,
      flags.withRowNumbers,
    ]
  );
  const utilityColumns = useMemo(
    () => createUtilityColumns<TData>(flags, size),
    [utilityIds, size]
  );

  const [internalColumnOrder, setInternalColumnOrder] = useState<ColumnOrderState>(
    () => initialState?.columnOrder ?? []
  );
  const [internalColumnPinning, setInternalColumnPinning] = useState<ColumnPinningState>(
    () => initialState?.columnPinning ?? { start: [], end: [] }
  );

  const withUtilityOrder = utilityIds.length > 0;
  const withUtilityPinning = withUtilityOrder && withColumnPinning;
  const orderAtom = tableOptions?.atoms?.columnOrder !== undefined;
  const pinningAtom = tableOptions?.atoms?.columnPinning !== undefined;
  const orderControlled =
    options.columnOrder !== undefined ||
    tableOptions?.state?.columnOrder !== undefined ||
    orderAtom;
  const pinningControlled =
    options.columnPinning !== undefined ||
    tableOptions?.state?.columnPinning !== undefined ||
    pinningAtom;

  const [utilityMode, setUtilityMode] = useState({
    order: withUtilityOrder,
    pinning: withUtilityPinning,
  });
  if (utilityMode.order !== withUtilityOrder || utilityMode.pinning !== withUtilityPinning) {
    const table = getTable();
    setUtilityMode({ order: withUtilityOrder, pinning: withUtilityPinning });
    if (table && withUtilityOrder && !utilityMode.order && !orderControlled) {
      setInternalColumnOrder(stripUtilityColumnIds(table.store.state.columnOrder ?? []));
    }
    if (table && withUtilityPinning && !utilityMode.pinning && !pinningControlled) {
      setInternalColumnPinning(
        stripUtilityPinning(table.store.state.columnPinning ?? { start: [], end: [] })
      );
    }
  }

  const wasUtilityOrderRef = useRef(withUtilityOrder);
  useIsomorphicEffect(() => {
    const wasUtilityOrder = wasUtilityOrderRef.current;
    wasUtilityOrderRef.current = withUtilityOrder;
    const table = getTable();
    if (!wasUtilityOrder || withUtilityOrder || !table || orderControlled) {
      return;
    }
    table.setColumnOrder(stripUtilityColumnIds(internalColumnOrder));
  }, [withUtilityOrder]);

  useIsomorphicEffect(() => {
    const table = getTable();
    if (withUtilityPinning || !table || pinningControlled) {
      return;
    }
    const pinning = table.store.state.columnPinning ?? { start: [], end: [] };
    const stripped = stripUtilityPinning(pinning);
    if (stripped !== pinning) {
      table.setColumnPinning(stripped);
    }
  }, [withUtilityPinning]);

  const groupedColumnMode = options.groupedColumnMode ?? 'reorder';
  const withGroupedReorder =
    withGrouping && withUtilityOrder && !orderAtom && groupedColumnMode === 'reorder';

  const controlledColumnOrder = tableOptions?.state?.columnOrder ?? options.columnOrder;
  const controlledColumnPinning = tableOptions?.state?.columnPinning ?? options.columnPinning;
  const normalizeOrder = withUtilityOrder && !orderAtom;
  const normalizePinning = withUtilityPinning && !pinningAtom;
  const baseColumnOrder = controlledColumnOrder ?? internalColumnOrder;
  const unforcedColumnOrder = normalizeOrder
    ? normalizeColumnOrder(baseColumnOrder, utilityIds)
    : undefined;
  const tableColumnOrder = withGroupedReorder
    ? normalizeColumnOrder(baseColumnOrder, utilityIds, grouping)
    : (unforcedColumnOrder ?? controlledColumnOrder);
  const columnPinning = normalizePinning
    ? normalizeColumnPinning(controlledColumnPinning ?? internalColumnPinning, utilityIds)
    : controlledColumnPinning;
  const onColumnOrderChange = normalizeOrder
    ? (options.onColumnOrderChange ?? setInternalColumnOrder)
    : options.onColumnOrderChange;
  const onColumnPinningChange = normalizePinning
    ? (options.onColumnPinningChange ?? setInternalColumnPinning)
    : options.onColumnPinningChange;

  return {
    utilityColumns,
    withGroupedReorder,
    tableColumnOrder,
    unforcedColumnOrder,
    onColumnOrderChange,
    columnPinning,
    onColumnPinningChange,
  };
}
