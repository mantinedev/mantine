import { getOrderedVisibleColumns } from '../column-cell-props';
import { useDataGridContext } from '../DataGrid.context';
import { AggregationCell, FooterCell } from './footer-cells';
import { useTfootModel } from './tfoot-model';

export function DataGridTfoot() {
  const ctx = useDataGridContext();
  const model = useTfootModel();

  if (model.rowCount === 0) {
    return null;
  }

  return (
    <tfoot {...ctx.getStyles('tfoot')}>
      {model.footerGroups.map((footerGroup) => (
        <tr key={footerGroup.id} {...ctx.getStyles('tr')}>
          {footerGroup.headers.map((header) => (
            <FooterCell key={header.id} component="td" header={header} colSpan={header.colSpan} />
          ))}
        </tr>
      ))}
      {model.withAggregation && (
        <tr {...ctx.getStyles('tr')}>
          {getOrderedVisibleColumns(ctx.table).map((column) => (
            <AggregationCell key={column.id} component="td" column={column} model={model} />
          ))}
        </tr>
      )}
    </tfoot>
  );
}
