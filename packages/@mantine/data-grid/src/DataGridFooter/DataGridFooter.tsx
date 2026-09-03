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
import { getExtraColumnsCount } from '../get-extra-columns-count/get-extra-columns-count';
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

  const extraColCount = getExtraColumnsCount({
    withRowReorder: ctx.withRowReorder,
    withRowSelection: ctx.withRowSelection,
    withRowExpansion: ctx.withRowExpansion,
    withTreeData: ctx.withTreeData,
    withRowNumbers: ctx.withRowNumbers,
  });

  return (
    <Box
      component="tfoot"
      {...ctx.getStyles('tfoot', { className, classNames, style, styles })}
      {...others}
    >
      {ctx.table.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id} {...ctx.getStyles('tr', { classNames, styles })}>
          {ctx.withRowReorder && <td {...ctx.getStyles('td', { classNames, styles })} />}
          {ctx.withRowSelection && <td {...ctx.getStyles('td', { classNames, styles })} />}
          {ctx.withRowExpansion && !ctx.withTreeData && (
            <td {...ctx.getStyles('td', { classNames, styles })} />
          )}
          {ctx.withRowNumbers && <td {...ctx.getStyles('td', { classNames, styles })} />}
          {footerGroup.headers.map((header) => (
            <td
              key={header.id}
              colSpan={header.colSpan}
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
          {Array.from({ length: extraColCount }).map((_, i) => (
            <td key={`extra-${i}`} {...ctx.getStyles('td', { classNames, styles })} />
          ))}
          {ctx.table.getVisibleLeafColumns().map((column) => {
            const hasAggregation = aggregatedColumnIds.has(column.id);
            const value = hasAggregation
              ? column.getAggregationValue({ rows: ctx.table.getFilteredRowModel().rows })
              : undefined;
            const label = column.columnDef.meta?.aggregationLabel;

            return (
              <td
                key={column.id}
                {...ctx.getStyles('td', { classNames, styles })}
                {...ctx.getStyles('aggregationCell', { classNames, styles })}
              >
                {hasAggregation ? (label ? `${label}: ${value ?? ''}` : String(value ?? '')) : null}
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
