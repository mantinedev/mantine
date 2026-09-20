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
import classes from '../DataGrid.module.css';

export type DataGridFooterStylesNames = 'tfoot' | 'tr' | 'td';

export interface DataGridFooterProps
  extends BoxProps, CompoundStylesApiProps<DataGridFooterFactory>, ElementProps<'tfoot'> {}

export type DataGridFooterFactory = Factory<{
  props: DataGridFooterProps;
  ref: HTMLTableSectionElement;
  stylesNames: DataGridFooterStylesNames;
  compound: true;
}>;

export const DataGridFooter = factory<DataGridFooterFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'DataGridFooter',
    null,
    props
  );

  const ctx = useDataGridContext();

  const aggregatedColumnIds = useMemo(
    () => new Set(ctx.aggregatedColumnIds),
    [ctx.aggregatedColumnIds]
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
            const rows = ctx.table.getFilteredRowModel().rows;
            const rawValue = hasAggregation ? column.getAggregationValue({ rows }) : undefined;
            const format = column.columnDef.meta?.formatAggregatedValue;
            const value = hasAggregation
              ? format
                ? format(rawValue, rows)
                : String(rawValue ?? '')
              : null;
            const label = column.columnDef.meta?.aggregationLabel;

            return (
              <td
                key={column.id}
                data-utility={column.columnDef.meta?.utility}
                data-align={column.columnDef.meta?.align}
                data-actions={column.columnDef.meta?.type === 'actions' || undefined}
                {...ctx.getStyles('td', { classNames, styles })}
                {...ctx.getStyles('aggregationCell', { classNames, styles })}
              >
                {hasAggregation ? (
                  label ? (
                    <>
                      {label}: {value}
                    </>
                  ) : (
                    value
                  )
                ) : null}
              </td>
            );
          })}
        </tr>
      )}
    </Box>
  );
});

DataGridFooter.classes = classes;
DataGridFooter.displayName = '@mantine/data-grid/DataGridFooter';
