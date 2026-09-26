import React from 'react';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { UnstyledButton } from '@mantine/core';
import { getColumnCellProps } from '../column-cell-props';
import { useDataGridContext } from '../DataGrid.context';
import { collectLeafColumnDefIds, type ColumnDefIdSource } from '../get-column-def-id';
import { getColumnLabel } from '../get-column-label';
import { ExpandChevron } from '../icons';
import type { DataGridFeatures } from '../table-features';

type GridCell = Cell<DataGridFeatures, any, unknown>;
type GridRow = Row<DataGridFeatures, any>;

interface ColumnDefLike extends ColumnDefIdSource {
  aggregatedCell?: unknown;
}

const customAggregatedCellCache = new WeakMap<readonly ColumnDefLike[], Set<string>>();

function getCustomAggregatedCellIds(columns: readonly ColumnDefLike[]) {
  let ids = customAggregatedCellCache.get(columns);
  if (!ids) {
    ids = new Set(collectLeafColumnDefIds(columns, (def) => !!def.aggregatedCell));
    customAggregatedCellCache.set(columns, ids);
  }
  return ids;
}

function getGroupLabelIndex(cells: GridCell[]) {
  const groupedIndex = cells.findIndex((cell) => cell.getIsGrouped());
  return groupedIndex !== -1
    ? groupedIndex
    : cells.findIndex((cell) => !cell.column.columnDef.meta?.utility);
}

function getGroupLabelWidth(
  cells: GridCell[],
  labelIndex: number,
  withColumnPinning: boolean | undefined
): number | undefined {
  const isPinned = (cell: GridCell) => !!withColumnPinning && !!cell.column.getIsPinned();

  if (isPinned(cells[labelIndex])) {
    return undefined;
  }

  const customAggregatedCellIds = getCustomAggregatedCellIds(
    cells[labelIndex].column.table.options.columns as readonly ColumnDefLike[]
  );
  const hasContent = (cell: GridCell) =>
    !cell.getIsPlaceholder() &&
    (customAggregatedCellIds.has(cell.column.id) || cell.getValue() != null);

  let width = cells[labelIndex].column.getSize();
  for (let index = labelIndex + 1; index < cells.length; index += 1) {
    const cell = cells[index];
    if (hasContent(cell) || cell.column.columnDef.meta?.utility || isPinned(cell)) {
      break;
    }
    width += cell.column.getSize();
  }

  return width;
}

export interface GroupLabelCell {
  /** Id of the cell that renders the group label */
  id: string | undefined;
  /** Spill-over width style of the label cell, `undefined` when the label does not spill over */
  style: React.CSSProperties | undefined;
}

export function getGroupLabelCell(
  cells: GridCell[],
  withColumnPinning: boolean | undefined
): GroupLabelCell {
  const labelIndex = getGroupLabelIndex(cells);
  if (labelIndex === -1) {
    return { id: undefined, style: undefined };
  }

  const width = getGroupLabelWidth(cells, labelIndex, withColumnPinning);
  return {
    id: cells[labelIndex].id,
    style:
      width === undefined
        ? undefined
        : ({ '--dg-group-label-width': `${width}px` } as React.CSSProperties),
  };
}

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
      <span> ({row.getLeafRows().filter((leaf) => !leaf.getIsGrouped()).length})</span>
    </span>
  );
}

function GroupHeader({ row, children }: { row: GridRow; children: React.ReactNode }) {
  const ctx = useDataGridContext();
  if (!ctx.withCellSelection) {
    return <div {...ctx.getStyles('groupHeader')}>{children}</div>;
  }

  return (
    <UnstyledButton aria-expanded={row.getIsExpanded()} {...ctx.getStyles('groupHeader')}>
      {children}
    </UnstyledButton>
  );
}

interface GroupCellContentProps {
  cell: GridCell;
  isLabelCell: boolean;
}

function GroupCellContent({ cell, isLabelCell }: GroupCellContentProps) {
  const ctx = useDataGridContext();
  const row = cell.row;
  const columnDef = cell.column.columnDef;

  if (columnDef.meta?.utility) {
    return <>{flexRender(columnDef.cell, cell.getContext())}</>;
  }

  if (isLabelCell) {
    return (
      <GroupHeader row={row}>
        <span aria-hidden {...ctx.getStyles('groupToggle')}>
          <ExpandChevron expanded={row.getIsExpanded()} />
        </span>
        <GroupLabel row={row} fallbackColumn={cell.column} />
      </GroupHeader>
    );
  }

  if (cell.getIsPlaceholder() || !columnDef.aggregatedCell) {
    return null;
  }

  return <>{flexRender(columnDef.aggregatedCell, cell.getContext())}</>;
}

interface GroupRowCellProps {
  component: 'td' | 'div';
  cell: GridCell;
  labelCell: GroupLabelCell;
  role?: string;
  'aria-colindex'?: number;
  style?: React.CSSProperties;
}

export function GroupRowCell({
  component: Component,
  cell,
  labelCell,
  style,
  ...others
}: GroupRowCellProps) {
  const ctx = useDataGridContext();
  const isLabelCell = cell.id === labelCell.id;
  const labelStyle = isLabelCell ? labelCell.style : undefined;
  const { style: columnStyle, ...columnProps } = getColumnCellProps(
    cell.column,
    ctx.withColumnPinning
  );

  return (
    <Component
      {...others}
      {...columnProps}
      data-group-label-cell={labelStyle ? true : undefined}
      {...ctx.getStyles(Component === 'td' ? 'td' : 'virtualCell', {
        style: [columnStyle, style, labelStyle],
      })}
    >
      <GroupCellContent cell={cell} isLabelCell={isLabelCell} />
    </Component>
  );
}
