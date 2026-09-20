import React from 'react';
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
import { getColumnLabel } from '../get-column-label';
import classes from '../DataGrid.module.css';

export type DataGridListViewStylesNames = 'listView' | 'listItem';

export interface DataGridListViewProps
  extends BoxProps, CompoundStylesApiProps<DataGridListViewFactory>, ElementProps<'div'> {}

export type DataGridListViewFactory = Factory<{
  props: DataGridListViewProps;
  ref: HTMLDivElement;
  stylesNames: DataGridListViewStylesNames;
  compound: true;
}>;

export const DataGridListView = factory<DataGridListViewFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'DataGridListView',
    null,
    props
  );
  const ctx = useDataGridContext();
  const rows = ctx.table.getRowModel().rows;

  const defaultRenderItem = (row: any) => (
    <div
      {...ctx.getStyles('listItem', { classNames, styles })}
      key={row.id}
      data-row-id={row.id}
      data-selected={(ctx.withRowSelection && row.getIsSelected()) || undefined}
    >
      {row
        .getVisibleCells()
        .filter((cell: any) => !cell.column.columnDef.meta?.utility)
        .map((cell: any) => (
          <div
            key={cell.id}
            style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}
          >
            <Box component="span" fw={600} fz="sm">
              {getColumnLabel(cell.column)}
            </Box>
            <Box component="span" fz="sm">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Box>
          </div>
        ))}
    </div>
  );

  return (
    <Box {...ctx.getStyles('listView', { className, classNames, style, styles })} {...others}>
      {rows.map((row) =>
        ctx.renderListItem ? (
          <React.Fragment key={row.id}>{ctx.renderListItem({ row })}</React.Fragment>
        ) : (
          defaultRenderItem(row)
        )
      )}
    </Box>
  );
});

DataGridListView.classes = classes;
DataGridListView.displayName = '@mantine/data-grid/DataGridListView';
