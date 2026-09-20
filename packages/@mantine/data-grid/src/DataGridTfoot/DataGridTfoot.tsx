import { useMemo } from 'react';
import { flexRender } from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridLabels } from '../labels';
import classes from '../DataGrid.module.css';

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

export type DataGridTfootStylesNames =
  | 'tfoot'
  | 'tr'
  | 'td'
  | 'aggregationCell'
  | 'aggregationLabel'
  | 'aggregationValue';

export interface DataGridTfootProps
  extends BoxProps, CompoundStylesApiProps<DataGridTfootFactory>, ElementProps<'tfoot'> {}

export type DataGridTfootFactory = Factory<{
  props: DataGridTfootProps;
  ref: HTMLTableSectionElement;
  stylesNames: DataGridTfootStylesNames;
  compound: true;
}>;

export const DataGridTfoot = factory<DataGridTfootFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'DataGridTfoot',
    null,
    props
  );

  const ctx = useDataGridContext();

  const aggregatedColumnIds = useMemo(
    () => new Set(ctx.aggregatedColumnIds),
    [ctx.aggregatedColumnIds]
  );
  const filteredRowModel = ctx.table.getFilteredRowModel();
  const aggregationRows = useMemo(
    () =>
      filteredRowModel.flatRows.filter((row) => row.original !== undefined && !row.getIsGrouped()),
    [filteredRowModel]
  );

  return (
    <Box
      component="tfoot"
      {...ctx.getStyles('tfoot', { className, classNames, style, styles })}
      {...others}
    >
      {ctx.table.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id} {...ctx.getStyles('tr', { classNames, styles })}>
          {footerGroup.headers.map((header) => (
            <td
              key={header.id}
              colSpan={header.colSpan}
              data-utility={header.column.columnDef.meta?.utility}
              data-align={header.column.columnDef.meta?.align}
              {...ctx.getStyles('td', { classNames, styles })}
            >
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.footer, header.getContext())}
            </td>
          ))}
        </tr>
      ))}
      {aggregatedColumnIds.size > 0 && (
        <tr {...ctx.getStyles('tr', { classNames, styles })}>
          {ctx.table.getVisibleLeafColumns().map((column) => {
            const hasAggregation = aggregatedColumnIds.has(column.id);
            const meta = column.columnDef.meta;
            const rawValue = hasAggregation
              ? column.getAggregationValue({ rows: aggregationRows })
              : undefined;
            const value = hasAggregation
              ? meta?.formatAggregatedValue
                ? meta.formatAggregatedValue(rawValue, aggregationRows)
                : String(rawValue ?? '')
              : null;
            const aggregationFn = column.columnDef.aggregationFn;
            const labelKey =
              typeof aggregationFn === 'string' ? AGGREGATION_LABEL_KEYS[aggregationFn] : undefined;
            const label = meta?.aggregationLabel ?? (labelKey ? ctx.labels[labelKey] : undefined);
            const tdStyles = ctx.getStyles('td', { classNames, styles });

            return (
              <td
                key={column.id}
                data-utility={meta?.utility}
                data-align={meta?.align}
                data-actions={meta?.type === 'actions' || undefined}
                {...ctx.getStyles('aggregationCell', {
                  classNames,
                  styles,
                  className: tdStyles.className,
                  style: tdStyles.style,
                })}
              >
                {hasAggregation && (
                  <>
                    {label && (
                      <div {...ctx.getStyles('aggregationLabel', { classNames, styles })}>
                        {label}
                      </div>
                    )}
                    <div {...ctx.getStyles('aggregationValue', { classNames, styles })}>
                      {value}
                    </div>
                  </>
                )}
              </td>
            );
          })}
        </tr>
      )}
    </Box>
  );
});

DataGridTfoot.classes = classes;
DataGridTfoot.displayName = '@mantine/data-grid/DataGridTfoot';
