import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Group,
  Text,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import classes from '../DataGrid.module.css';

export type DataGridStatusBarStylesNames = 'statusBar' | 'statusBarInfo';

export interface DataGridStatusBarProps
  extends BoxProps, CompoundStylesApiProps<DataGridStatusBarFactory>, ElementProps<'div'> {}

export type DataGridStatusBarFactory = Factory<{
  props: DataGridStatusBarProps;
  ref: HTMLDivElement;
  stylesNames: DataGridStatusBarStylesNames;
  compound: true;
}>;

function formatLocalized(template: string, count: number): string {
  return template.replace('{count}', String(count));
}

export const DataGridStatusBar = factory<DataGridStatusBarFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'DataGridStatusBar',
    null,
    props
  );

  const ctx = useDataGridContext();
  const { table, labels } = ctx;

  const totalRows = table.getCoreRowModel().rows.length;
  const filteredRows = table.getFilteredRowModel().rows.length;
  const isFiltered = ctx.withFiltering || ctx.withGlobalFilter;
  const hasFiltersApplied = isFiltered && filteredRows !== totalRows;

  const selectedCount = ctx.withRowSelection
    ? Object.keys(table.store.state.rowSelection || {}).length
    : 0;

  return (
    <Box {...ctx.getStyles('statusBar', { className, classNames, style, styles })} {...others}>
      <Group gap="md">
        <Text size="sm" c="dimmed" {...ctx.getStyles('statusBarInfo', { classNames, styles })}>
          {formatLocalized(labels.statusBarTotalRows, totalRows)}
        </Text>
        {hasFiltersApplied && (
          <Text size="sm" c="dimmed" {...ctx.getStyles('statusBarInfo', { classNames, styles })}>
            {formatLocalized(labels.statusBarFilteredRows, filteredRows)}
          </Text>
        )}
        {ctx.withRowSelection && selectedCount > 0 && (
          <Text size="sm" c="dimmed" {...ctx.getStyles('statusBarInfo', { classNames, styles })}>
            {formatLocalized(labels.statusBarSelectedRows, selectedCount)}
          </Text>
        )}
      </Group>
    </Box>
  );
});

DataGridStatusBar.classes = classes;
DataGridStatusBar.displayName = '@mantine/data-grid/DataGridStatusBar';
