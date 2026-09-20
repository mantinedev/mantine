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
import { formatLabel } from '../format-label';
import classes from '../DataGrid.module.css';

export type DataGridRowCountStylesNames = 'rowCount';

export interface DataGridRowCountProps
  extends BoxProps, CompoundStylesApiProps<DataGridRowCountFactory>, ElementProps<'span'> {}

export type DataGridRowCountFactory = Factory<{
  props: DataGridRowCountProps;
  ref: HTMLSpanElement;
  stylesNames: DataGridRowCountStylesNames;
  compound: true;
}>;

export const DataGridRowCount = factory<DataGridRowCountFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'DataGridRowCount',
    null,
    props
  );

  const ctx = useDataGridContext();
  const count = ctx.table.getCoreRowModel().rows.length;
  const filtered = ctx.table.getFilteredRowModel().rows.length;

  return (
    <Box
      component="span"
      {...ctx.getStyles('rowCount', { className, classNames, style, styles })}
      {...others}
    >
      {filtered === count
        ? formatLabel(ctx.labels.rowCount, { count })
        : formatLabel(ctx.labels.rowCountFiltered, { filtered, count })}
    </Box>
  );
});

DataGridRowCount.classes = classes;
DataGridRowCount.displayName = '@mantine/data-grid/DataGridRowCount';
