import { Cell } from '@tanstack/react-table';
import { getColumnCellProps } from '../column-cell-props';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { useBodyCell } from './use-body-cell';

interface VirtualCellProps {
  cell: Cell<DataGridFeatures, any, unknown>;
  cellIndex: number;
  isTreeCell: boolean;
  isSelectionEntry: boolean;
}

export function VirtualCell({ cell, cellIndex, isTreeCell, isSelectionEntry }: VirtualCellProps) {
  const ctx = useDataGridContext();
  const { style, ...columnProps } = getColumnCellProps(cell.column, ctx.withColumnPinning);
  const bodyCell = useBodyCell<HTMLDivElement>(cell, { isTreeCell, isSelectionEntry });

  return (
    <div
      role="gridcell"
      aria-colindex={cellIndex + 1}
      {...columnProps}
      ref={bodyCell.ref}
      {...bodyCell.props}
      {...ctx.getStyles('virtualCell', { style: [style, { width: `var(--dg-col-${cellIndex})` }] })}
    >
      {bodyCell.content}
    </div>
  );
}
