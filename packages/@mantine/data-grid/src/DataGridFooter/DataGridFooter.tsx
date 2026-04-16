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

  return (
    <Box
      component="tfoot"
      {...ctx.getStyles('tfoot', { className, classNames, style, styles })}
      {...others}
    >
      {ctx.table.getFooterGroups().map((footerGroup) => (
        <Box component="tr" key={footerGroup.id} {...ctx.getStyles('tr', { classNames, styles })}>
          {ctx.withRowSelection && (
            <Box component="td" {...ctx.getStyles('td', { classNames, styles })} />
          )}
          {ctx.withRowExpansion && (
            <Box component="td" {...ctx.getStyles('td', { classNames, styles })} />
          )}
          {ctx.withRowNumbers && (
            <Box component="td" {...ctx.getStyles('td', { classNames, styles })} />
          )}
          {footerGroup.headers.map((header) => (
            <Box
              component="td"
              key={header.id}
              colSpan={header.colSpan}
              {...ctx.getStyles('td', { classNames, styles })}
            >
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.footer, header.getContext())}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
});

DataGridFooter.classes = classes;
DataGridFooter.displayName = '@mantine/data-grid/DataGridFooter';
