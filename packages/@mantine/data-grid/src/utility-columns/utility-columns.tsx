import { useEffect } from 'react';
import { ColumnOrderState, ColumnPinningState, RowData } from '@tanstack/react-table';
import { Checkbox, MantineSize, Radio } from '@mantine/core';
import { DATA_GRID_SIZES } from '../data-grid-sizes';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridColumnDef, DataGridRow } from '../DataGrid.types';
import { endRowDrag, releaseRowDrag, startRowDrag } from '../DataGridBody/row-drag-source';
import {
  clearSelectionAnchor,
  getGroupSelectableLeafRows,
  handleSelectionControlChange,
} from '../DataGridBody/row-selection';
import { ExpandChevron, GripIcon } from '../icons';

export type DataGridUtilityColumn = 'reorder' | 'select' | 'expand' | 'rowNumber';

/** Ids of the display columns the grid injects for its utility features */
export const UTILITY_COLUMN_IDS = {
  reorder: '__reorder__',
  select: '__select__',
  expand: '__expand__',
  rowNumber: '__rowNumber__',
} as const satisfies Record<DataGridUtilityColumn, string>;

const UTILITY_COLUMN_ORDER: DataGridUtilityColumn[] = ['reorder', 'select', 'expand', 'rowNumber'];

export interface UtilityColumnFlags {
  withRowReorder: boolean;
  withRowSelection: boolean;
  withRowExpansion: boolean;
  withTreeData: boolean;
  withRowNumbers: boolean;
}

function getActiveUtilityColumns(flags: UtilityColumnFlags): DataGridUtilityColumn[] {
  const active: Record<DataGridUtilityColumn, boolean> = {
    reorder: flags.withRowReorder,
    select: flags.withRowSelection,
    expand: flags.withRowExpansion && !flags.withTreeData,
    rowNumber: flags.withRowNumbers,
  };

  return UTILITY_COLUMN_ORDER.filter((name) => active[name]);
}

export function getUtilityColumnIds(flags: UtilityColumnFlags): string[] {
  return getActiveUtilityColumns(flags).map((name) => UTILITY_COLUMN_IDS[name]);
}

const ALL_UTILITY_COLUMN_IDS: string[] = Object.values(UTILITY_COLUMN_IDS);

export function stripUtilityColumnIds(ids: string[]): string[] {
  const next = ids.filter((id) => !ALL_UTILITY_COLUMN_IDS.includes(id));
  return next.length === ids.length ? ids : next;
}

export function stripUtilityPinning(pinning: ColumnPinningState): ColumnPinningState {
  const start = stripUtilityColumnIds(pinning.start ?? []);
  const end = stripUtilityColumnIds(pinning.end ?? []);
  return start === pinning.start && end === pinning.end ? pinning : { start, end };
}

function sameIds(a: string[], b: string[]) {
  return a.length === b.length && a.every((id, index) => id === b[index]);
}

/**
 * Keeps utility columns at the head of the order and, when `groupingIds` is
 * given, moves the grouped columns right after them (the grid's replacement
 * for TanStack's `groupedColumnMode: 'reorder'`, which would otherwise place
 * grouped columns in front of the utility columns).
 */
export function normalizeColumnOrder(
  order: ColumnOrderState,
  utilityIds: string[],
  groupingIds: string[] = []
): ColumnOrderState {
  const missing = order.length === 0 ? [] : utilityIds.filter((id) => !order.includes(id));
  const withUtilities = missing.length > 0 ? [...missing, ...order] : order;
  const grouped = groupingIds.filter((id) => !utilityIds.includes(id));

  if (grouped.length === 0) {
    return withUtilities;
  }

  const utilityHead = withUtilities.filter((id) => utilityIds.includes(id));
  const rest = withUtilities.filter((id) => !utilityIds.includes(id) && !grouped.includes(id));
  const next = [...(utilityHead.length > 0 ? utilityHead : utilityIds), ...grouped, ...rest];
  return sameIds(next, withUtilities) ? withUtilities : next;
}

export function normalizeColumnPinning(
  pinning: ColumnPinningState,
  utilityIds: string[]
): ColumnPinningState {
  const start = [...utilityIds, ...stripUtilityColumnIds(pinning.start)];
  const end = stripUtilityColumnIds(pinning.end);
  return sameIds(start, pinning.start) && sameIds(end, pinning.end) ? pinning : { start, end };
}

const checkboxVars = () => ({ root: { '--checkbox-size': 'var(--dg-control-size)' } });
const radioVars = () => ({ root: { '--radio-size': 'var(--dg-control-size)' } });

function SelectAllHeader() {
  const ctx = useDataGridContext();

  if (ctx.table.options.enableMultiRowSelection === false) {
    return null;
  }

  const checked = ctx.withPagination
    ? ctx.table.getIsAllPageRowsSelected()
    : ctx.table.getIsAllRowsSelected();
  const someSelected = ctx.withPagination
    ? ctx.table.getIsSomePageRowsSelected()
    : ctx.table.getIsSomeRowsSelected();

  return (
    <Checkbox
      checked={checked}
      indeterminate={!checked && someSelected}
      onChange={(event) => {
        const toggleAll = ctx.withPagination
          ? ctx.table.getToggleAllPageRowsSelectedHandler()
          : ctx.table.getToggleAllRowsSelectedHandler();
        toggleAll(event);
        clearSelectionAnchor(ctx.table.store);
      }}
      aria-label={ctx.labels.selectAll}
      vars={checkboxVars}
      {...ctx.getStyles('selectAllCheckbox')}
    />
  );
}

function SelectCell({ row }: { row: DataGridRow<any> }) {
  const ctx = useDataGridContext();

  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

  const singleSelection = ctx.table.options.enableMultiRowSelection === false;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleSelectionControlChange(ctx, row, event);

  if (row.getIsGrouped()) {
    const leaves = getGroupSelectableLeafRows(row);
    if (leaves.length === 0) {
      return null;
    }

    const allSelected = leaves.every((leaf) => leaf.getIsSelected());

    return (
      <Checkbox
        checked={allSelected}
        indeterminate={!allSelected && row.getIsSomeSelected()}
        onChange={onChange}
        onClick={stopPropagation}
        aria-label={ctx.labels.selectGroup}
        vars={checkboxVars}
        {...ctx.getStyles('selectionCheckbox')}
      />
    );
  }

  if (!row.getCanSelect()) {
    const Control = singleSelection ? Radio : Checkbox;
    return (
      <Control
        checked={row.getIsSelected()}
        disabled
        readOnly
        onClick={stopPropagation}
        aria-label={ctx.labels.selectRow}
        vars={singleSelection ? radioVars : checkboxVars}
        {...ctx.getStyles('selectionCheckbox')}
      />
    );
  }

  if (singleSelection) {
    return (
      <Radio
        checked={row.getIsSelected()}
        onChange={onChange}
        onClick={stopPropagation}
        aria-label={ctx.labels.selectRow}
        vars={radioVars}
        {...ctx.getStyles('selectionCheckbox')}
      />
    );
  }

  const checked = row.getIsSelected();

  return (
    <Checkbox
      checked={checked}
      indeterminate={!checked && row.getIsSomeSelected()}
      onChange={onChange}
      onClick={stopPropagation}
      aria-label={ctx.labels.selectRow}
      vars={checkboxVars}
      {...ctx.getStyles('selectionCheckbox')}
    />
  );
}

function ExpandCell({ row }: { row: DataGridRow<any> }) {
  const ctx = useDataGridContext();

  if (row.getIsGrouped() || !row.getCanExpand()) {
    return null;
  }

  const expanded = row.getIsExpanded();

  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-label={expanded ? ctx.labels.collapseRow : ctx.labels.expandRow}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        row.toggleExpanded();
      }}
      {...ctx.getStyles('expandIcon')}
    >
      <ExpandChevron expanded={expanded} />
    </button>
  );
}

function RowNumberHeader() {
  const ctx = useDataGridContext();
  return <span {...ctx.getStyles('rowNumber')}>{ctx.labels.rowNumber}</span>;
}

function RowNumberCell({ row }: { row: DataGridRow<any> }) {
  const ctx = useDataGridContext();

  if (row.getIsGrouped()) {
    return null;
  }

  return <span {...ctx.getStyles('rowNumber')}>{ctx.getRowNumber(row)}</span>;
}

function ReorderCell({ row }: { row: DataGridRow<any> }) {
  const ctx = useDataGridContext();
  const tableStore = ctx.table.store;

  useEffect(() => () => releaseRowDrag(tableStore, row.id), [tableStore, row.id]);

  if (!ctx.withRowReorder || (ctx.withRowPinning && row.getIsPinned())) {
    return null;
  }

  return (
    <span
      aria-hidden
      draggable
      title={ctx.labels.dragToReorder}
      onDragStart={(event: React.DragEvent) =>
        startRowDrag(ctx.table.store, row.id, event.dataTransfer)
      }
      onDragEnd={endRowDrag}
      {...ctx.getStyles('dragHandle')}
    >
      <GripIcon />
    </span>
  );
}

const EMPTY_HEADER = () => null;

const UTILITY_COLUMN_BASE = {
  enableSorting: false,
  enableColumnFilter: false,
  enableResizing: false,
  enableHiding: false,
  enablePinning: false,
  enableGrouping: false,
} as const;

/** Builds the display columns for the active utility features at the given size */
export function createUtilityColumns<TData extends RowData>(
  flags: UtilityColumnFlags,
  size: MantineSize
): DataGridColumnDef<TData>[] {
  const sizes = DATA_GRID_SIZES[size];

  const definitions: Record<DataGridUtilityColumn, DataGridColumnDef<TData>> = {
    reorder: {
      ...UTILITY_COLUMN_BASE,
      id: UTILITY_COLUMN_IDS.reorder,
      header: EMPTY_HEADER,
      cell: (info) => <ReorderCell row={info.row as DataGridRow<any>} />,
      size: sizes.utilityColumnWidth,
      meta: { utility: 'reorder', disableExport: true, disableEditing: true },
    },
    select: {
      ...UTILITY_COLUMN_BASE,
      id: UTILITY_COLUMN_IDS.select,
      header: () => <SelectAllHeader />,
      cell: (info) => <SelectCell row={info.row as DataGridRow<any>} />,
      size: sizes.utilityColumnWidth,
      meta: { utility: 'select', disableExport: true, disableEditing: true },
    },
    expand: {
      ...UTILITY_COLUMN_BASE,
      id: UTILITY_COLUMN_IDS.expand,
      header: EMPTY_HEADER,
      cell: (info) => <ExpandCell row={info.row as DataGridRow<any>} />,
      size: sizes.utilityColumnWidth,
      meta: { utility: 'expand', disableExport: true, disableEditing: true },
    },
    rowNumber: {
      ...UTILITY_COLUMN_BASE,
      id: UTILITY_COLUMN_IDS.rowNumber,
      header: () => <RowNumberHeader />,
      cell: (info) => <RowNumberCell row={info.row as DataGridRow<any>} />,
      size: sizes.rowNumberWidth,
      meta: { utility: 'rowNumber', disableExport: true, disableEditing: true },
    },
  };

  return getActiveUtilityColumns(flags).map((name) => definitions[name]);
}
