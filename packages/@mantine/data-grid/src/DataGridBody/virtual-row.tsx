import React from 'react';
import { Column, Row } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { ExpandedRowUtilityCells, getDataColumnCount } from './body-states';
import { getGroupLabelCell, GroupRowCell } from './group-cell';
import { getGroupRowProps, getRowProps, hasExpandedPanel } from './row-interactions';
import type { VirtualColumns } from './use-virtual-columns';
import { VirtualCell } from './virtual-cell';

type GridRow = Row<DataGridFeatures, any>;

interface VirtualRowProps {
  row: GridRow;
  rowIndex: number;
  tabStop: boolean;
  ariaRowIndex: number;
  visibleColumns: Column<DataGridFeatures, any, unknown>[];
  firstDataColumnIndex: number;
  columns: VirtualColumns;
  selectionEntryId: string | undefined;
}

export function VirtualRow({
  row,
  rowIndex,
  tabStop,
  ariaRowIndex,
  visibleColumns,
  firstDataColumnIndex,
  columns,
  selectionEntryId,
}: VirtualRowProps) {
  const ctx = useDataGridContext();
  const cells = row.getVisibleCells();
  const isGroupRow = ctx.withGrouping && row.getIsGrouped();
  const rowHeight = ctx.getRowHeight?.(row);
  const rowStyle =
    typeof rowHeight === 'number'
      ? ({ '--dg-row-height': `${rowHeight}px` } as React.CSSProperties)
      : undefined;
  const autoHeight = rowHeight === 'auto' || undefined;

  if (isGroupRow) {
    const labelCell = getGroupLabelCell(cells, ctx.withColumnPinning);
    return (
      <div
        role="row"
        aria-rowindex={ariaRowIndex}
        data-auto-height={autoHeight}
        {...getGroupRowProps(ctx, row, rowIndex, tabStop)}
        {...ctx.getStyles('virtualRow', { style: rowStyle })}
      >
        {columns.renderColumns((cellIndex) => (
          <GroupRowCell
            key={cells[cellIndex].id}
            component="div"
            role="gridcell"
            aria-colindex={cellIndex + 1}
            cell={cells[cellIndex]}
            labelCell={labelCell}
            style={{ width: `var(--dg-col-${cellIndex})` }}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div
        role="row"
        aria-rowindex={ariaRowIndex}
        data-auto-height={autoHeight}
        {...getRowProps(ctx, row, rowIndex, tabStop)}
        {...ctx.getStyles('virtualRow', { style: rowStyle })}
      >
        {columns.renderColumns((cellIndex) => (
          <VirtualCell
            key={cells[cellIndex].id}
            cell={cells[cellIndex]}
            cellIndex={cellIndex}
            isTreeCell={ctx.withTreeData && cellIndex === firstDataColumnIndex}
            isSelectionEntry={cells[cellIndex].id === selectionEntryId}
          />
        ))}
      </div>
      {hasExpandedPanel(ctx, row) && (
        <div
          role="row"
          aria-rowindex={ariaRowIndex + 1}
          data-expanded-row
          {...ctx.getStyles('virtualRow')}
        >
          <ExpandedRowUtilityCells virtual columns={visibleColumns} />
          <div
            role="gridcell"
            aria-colindex={firstDataColumnIndex + 1}
            aria-colspan={getDataColumnCount(visibleColumns)}
            {...ctx.getStyles('expandedRow')}
          >
            {ctx.renderExpandedRow!({ row })}
          </div>
        </div>
      )}
    </>
  );
}
