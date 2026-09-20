import React from 'react';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import { getColumnLabel } from '../get-column-label';
import { ExpandChevron } from '../icons';
import type { DataGridFeatures } from '../table-features';

type GridCell = Cell<DataGridFeatures, any, unknown>;
type GridRow = Row<DataGridFeatures, any>;

/** Id of the cell that carries the group label: the grouping column's cell when visible, else the first visible data cell */
export function getGroupLabelCellId(cells: GridCell[]): string | undefined {
  const groupedCell = cells.find((cell) => cell.getIsGrouped());
  const labelCell = groupedCell ?? cells.find((cell) => !cell.column.columnDef.meta?.utility);
  return labelCell?.id;
}

export function toggleGroupRowKey(event: React.KeyboardEvent, row: GridRow) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    row.toggleExpanded();
  }
}

/** `<column label>: <value> (<count>)`, the value rendered through the grouping column's `cell` when it is a function */
export function GroupLabel({
  row,
  fallbackColumn,
}: {
  row: GridRow;
  fallbackColumn?: GridCell['column'];
}) {
  const ctx = useDataGridContext();
  const groupingColumnId = row.groupingColumnId;
  const groupingColumn = groupingColumnId ? ctx.table.getColumn(groupingColumnId) : undefined;
  const groupingCell = row.getAllCells().find((c) => c.column.id === groupingColumnId);
  const cellDef = groupingColumn?.columnDef.cell;
  const value =
    typeof cellDef === 'function' && groupingCell
      ? flexRender(cellDef, groupingCell.getContext())
      : String(row.groupingValue ?? '');
  const labelColumn = groupingColumn ?? fallbackColumn;

  return (
    <span data-group-label>
      <span>{labelColumn ? getColumnLabel(labelColumn) : groupingColumnId}: </span>
      <span data-group-value>{value}</span>
      <span> ({row.getLeafRows().length})</span>
    </span>
  );
}

interface GroupCellContentProps {
  cell: GridCell;
  isLabelCell: boolean;
  classNames: any;
  styles: any;
}

export function GroupCellContent({ cell, isLabelCell, classNames, styles }: GroupCellContentProps) {
  const ctx = useDataGridContext();
  const row = cell.row;
  const columnDef = cell.column.columnDef;

  if (columnDef.meta?.utility) {
    return <>{flexRender(columnDef.cell, cell.getContext())}</>;
  }

  if (isLabelCell) {
    return (
      <div {...ctx.getStyles('groupHeader', { classNames, styles })}>
        <span aria-hidden {...ctx.getStyles('groupToggle', { classNames, styles })}>
          <ExpandChevron expanded={row.getIsExpanded()} />
        </span>
        <GroupLabel row={row} fallbackColumn={cell.column} />
      </div>
    );
  }

  if (cell.getIsPlaceholder() || !columnDef.aggregatedCell) {
    return null;
  }

  return <>{flexRender(columnDef.aggregatedCell, cell.getContext())}</>;
}
