import type React from 'react';
import { flexRender, type Column, type Header } from '@tanstack/react-table';
import { getColumnCellProps, getFooterCellProps } from '../column-cell-props';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridLabels } from '../labels';
import type { DataGridFeatures } from '../table-features';
import type { TfootModel } from './tfoot-model';

const AGGREGATION_LABEL_KEYS: Record<string, keyof DataGridLabels> = {
  sum: 'aggregationSum',
  count: 'aggregationCount',
  mean: 'aggregationMean',
  min: 'aggregationMin',
  max: 'aggregationMax',
  median: 'aggregationMedian',
  unique: 'aggregationUnique',
  uniqueCount: 'aggregationUniqueCount',
  extent: 'aggregationExtent',
};

interface AggregationCellContentProps {
  column: Column<DataGridFeatures, any, unknown>;
  model: TfootModel;
}

function AggregationCellContent({ column, model }: AggregationCellContentProps) {
  const ctx = useDataGridContext();
  if (!model.aggregatedColumnIds.has(column.id)) {
    return null;
  }

  const meta = column.columnDef.meta;
  const value = model.aggregationValues.get(column.id);
  const aggregationFn = column.columnDef.aggregationFn;
  const labelKey =
    typeof aggregationFn === 'string' ? AGGREGATION_LABEL_KEYS[aggregationFn] : undefined;
  const label = meta?.aggregationLabel ?? (labelKey ? ctx.labels[labelKey] : undefined);

  return (
    <>
      {label && <div {...ctx.getStyles('aggregationLabel')}>{label}</div>}
      <div {...ctx.getStyles('aggregationValue')}>{value}</div>
    </>
  );
}

interface FooterCellBaseProps {
  component: 'td' | 'div';
  role?: string;
  colSpan?: number;
  'aria-colindex'?: number;
  'aria-colspan'?: number;
  style?: React.CSSProperties;
}

interface FooterCellProps extends FooterCellBaseProps {
  header: Header<DataGridFeatures, any, unknown>;
}

export function FooterCell({ component: Component, header, style, ...others }: FooterCellProps) {
  const ctx = useDataGridContext();
  const { style: footerStyle, ...cellProps } = getFooterCellProps(header, ctx.withColumnPinning);

  return (
    <Component
      {...others}
      {...cellProps}
      {...ctx.getStyles(Component === 'td' ? 'td' : 'virtualCell', {
        style: [footerStyle, style],
      })}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.footer, header.getContext())}
    </Component>
  );
}

interface AggregationCellProps extends FooterCellBaseProps {
  column: Column<DataGridFeatures, any, unknown>;
  model: TfootModel;
}

export function AggregationCell({
  component: Component,
  column,
  model,
  style,
  ...others
}: AggregationCellProps) {
  const ctx = useDataGridContext();
  const { style: columnStyle, ...columnProps } = getColumnCellProps(column, ctx.withColumnPinning);
  const cellStyles = ctx.getStyles(Component === 'td' ? 'td' : 'virtualCell');

  return (
    <Component
      {...others}
      {...columnProps}
      {...ctx.getStyles('aggregationCell', {
        className: cellStyles.className,
        style: [cellStyles.style, columnStyle, style],
      })}
    >
      <AggregationCellContent column={column} model={model} />
    </Component>
  );
}
