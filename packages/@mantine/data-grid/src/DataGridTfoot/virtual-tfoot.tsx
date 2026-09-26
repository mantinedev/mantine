import type { Column } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import type { VirtualColumns } from '../DataGridBody/use-virtual-columns';
import type { DataGridFeatures } from '../table-features';
import { AggregationCell, FooterCell } from './footer-cells';
import type { TfootModel } from './tfoot-model';

interface VirtualTfootProps {
  model: TfootModel;
  visibleColumns: Column<DataGridFeatures, any, unknown>[];
  columns: VirtualColumns;
  ariaRowIndex: number;
}

export function VirtualTfoot({ model, visibleColumns, columns, ariaRowIndex }: VirtualTfootProps) {
  const ctx = useDataGridContext();

  if (model.rowCount === 0) {
    return null;
  }

  const renderAggregationCell = (index: number) => (
    <AggregationCell
      key={visibleColumns[index].id}
      component="div"
      role="gridcell"
      aria-colindex={index + 1}
      column={visibleColumns[index]}
      model={model}
      style={{ width: `var(--dg-col-${index})` }}
    />
  );

  return (
    <div role="rowgroup" data-virtual-tfoot {...ctx.getStyles('tfoot')}>
      {model.footerGroups.map((footerGroup, groupIndex) => (
        <div
          key={footerGroup.id}
          role="row"
          aria-rowindex={ariaRowIndex + groupIndex}
          {...ctx.getStyles('tr')}
        >
          {columns.renderHeaderRow(footerGroup.headers, (header, span) => (
            <FooterCell
              key={header.id}
              component="div"
              role="gridcell"
              aria-colindex={span.first + 1}
              aria-colspan={span.colSpan > 1 ? span.colSpan : undefined}
              header={header}
              style={{ width: span.width }}
            />
          ))}
        </div>
      ))}
      {model.withAggregation && (
        <div
          role="row"
          aria-rowindex={ariaRowIndex + model.footerGroups.length}
          {...ctx.getStyles('tr')}
        >
          {columns.renderColumns(renderAggregationCell)}
        </div>
      )}
    </div>
  );
}
