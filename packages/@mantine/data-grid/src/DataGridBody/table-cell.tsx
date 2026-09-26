import { Cell } from '@tanstack/react-table';
import { getColumnCellProps } from '../column-cell-props';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { useBodyCell } from './use-body-cell';

interface TableCellProps {
  /** TanStack cell instance */
  cell: Cell<DataGridFeatures, any, unknown>;
  /** Whether this is the first data cell of a tree data row, which renders the tree indent and toggle */
  isTreeCell: boolean;
  /** Number of columns this cell should span */
  colSpan?: number;
  /** Number of rows this cell should span */
  rowSpan?: number;
  /** Whether this cell is the keyboard entry point of the cell selection grid while no cell is focused */
  isSelectionEntry: boolean;
}

export function TableCell({
  cell,
  isTreeCell,
  colSpan,
  rowSpan,
  isSelectionEntry,
}: TableCellProps) {
  const ctx = useDataGridContext();
  const { style, ...columnProps } = getColumnCellProps(cell.column, ctx.withColumnPinning);
  const bodyCell = useBodyCell<HTMLTableCellElement>(cell, { isTreeCell, isSelectionEntry });

  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      {...columnProps}
      ref={bodyCell.ref}
      {...bodyCell.props}
      {...ctx.getStyles('td', { style })}
    >
      {bodyCell.content}
    </td>
  );
}
