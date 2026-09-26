import { Row } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { getGroupLabelCell, GroupRowCell } from './group-cell';
import { getGroupRowProps, getTableRowHeightStyle } from './row-interactions';

interface GroupRowProps {
  /** TanStack row instance */
  row: Row<DataGridFeatures, any>;
  /** Zero-based visual row index */
  rowIndex: number;
}

export function GroupRow({ row, rowIndex }: GroupRowProps) {
  const ctx = useDataGridContext();
  const cells = row.getVisibleCells();
  const labelCell = getGroupLabelCell(cells, ctx.withColumnPinning);

  return (
    <tr
      {...getGroupRowProps(ctx, row, rowIndex)}
      {...ctx.getStyles('tr', { style: getTableRowHeightStyle(ctx, row) })}
    >
      {cells.map((cell) => (
        <GroupRowCell key={cell.id} component="td" cell={cell} labelCell={labelCell} />
      ))}
    </tr>
  );
}
