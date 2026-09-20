import type { ColumnOrderState, ColumnPinningState, RowData } from '@tanstack/react-table';
import { Checkbox, MantineSize, Radio } from '@mantine/core';
import { DATA_GRID_SIZES } from '../data-grid-sizes';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridColumnDef, DataGridRow } from '../DataGrid.types';
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

export function normalizeColumnOrder(
  order: ColumnOrderState,
  utilityIds: string[]
): ColumnOrderState {
  if (order.length === 0) {
    return order;
  }

  const missing = utilityIds.filter((id) => !order.includes(id));
  return missing.length > 0 ? [...missing, ...order] : order;
}

function sameIds(a: string[], b: string[]) {
  return a.length === b.length && a.every((id, index) => id === b[index]);
}

export function normalizeColumnPinning(
  pinning: ColumnPinningState,
  utilityIds: string[]
): ColumnPinningState {
  const start = [...utilityIds, ...pinning.start.filter((id) => !utilityIds.includes(id))];
  const end = pinning.end.filter((id) => !utilityIds.includes(id));
  return sameIds(start, pinning.start) && sameIds(end, pinning.end) ? pinning : { start, end };
}

const checkboxVars = () => ({ root: { '--checkbox-size': 'var(--dg-control-size)' } });
const radioVars = () => ({ root: { '--radio-size': 'var(--dg-control-size)' } });

function SelectAllHeader() {
  const ctx = useDataGridContext();

  if (ctx.table.options.enableMultiRowSelection === false) {
    return null;
  }

  return (
    <Checkbox
      checked={
        ctx.withPagination ? ctx.table.getIsAllPageRowsSelected() : ctx.table.getIsAllRowsSelected()
      }
      indeterminate={
        ctx.withPagination
          ? ctx.table.getIsSomePageRowsSelected()
          : ctx.table.getIsSomeRowsSelected()
      }
      onChange={
        ctx.withPagination
          ? ctx.table.getToggleAllPageRowsSelectedHandler()
          : ctx.table.getToggleAllRowsSelectedHandler()
      }
      aria-label={ctx.labels.selectAll}
      vars={checkboxVars}
      {...ctx.getStyles('selectAllCheckbox')}
    />
  );
}

function SelectCell({ row }: { row: DataGridRow<any> }) {
  const ctx = useDataGridContext();

  if (!row.getCanSelect()) {
    return null;
  }

  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();

  if (ctx.table.options.enableMultiRowSelection === false) {
    return (
      <Radio
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
        onClick={stopPropagation}
        aria-label={ctx.labels.selectRow}
        vars={radioVars}
        {...ctx.getStyles('selectionCheckbox')}
      />
    );
  }

  return (
    <Checkbox
      checked={row.getIsSelected()}
      onChange={row.getToggleSelectedHandler()}
      onClick={stopPropagation}
      aria-label={ctx.labels.selectRow}
      vars={checkboxVars}
      {...ctx.getStyles('selectionCheckbox')}
    />
  );
}

function ExpandCell({ row }: { row: DataGridRow<any> }) {
  const ctx = useDataGridContext();

  if (!row.getCanExpand()) {
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

  if (!ctx.withRowReorder) {
    return null;
  }

  return (
    <span
      role="button"
      tabIndex={-1}
      draggable
      aria-label={ctx.labels.dragToReorder}
      onDragStart={(event: React.DragEvent) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', row.id);
      }}
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
