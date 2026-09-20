import React, { useCallback } from 'react';
import { flexRender, Row } from '@tanstack/react-table';
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
import type { DataGridFeatures } from '../table-features';
import { GroupLabel } from './DataGridGroupCell';
import { handleRowClick, handleRowKeyDown, hasRowClickBehavior } from './row-interactions';
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

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) =>
      handleRowKeyDown(event, ctx, {
        scopeSelector: '[data-list-view-scope]',
        rowSelector: '[data-row-id]',
      }),
    [ctx]
  );

  const renderDefaultContent = (row: Row<DataGridFeatures, any>) =>
    row
      .getVisibleCells()
      .filter((cell) => !cell.column.columnDef.meta?.utility)
      .map((cell) => (
        <div key={cell.id} data-list-field>
          <span data-list-label>{getColumnLabel(cell.column)}</span>
          <span data-list-value>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
        </div>
      ));

  return (
    <Box
      data-list-view-scope
      onKeyDown={handleKeyDown}
      {...ctx.getStyles('listView', { className, classNames, style, styles })}
      {...others}
    >
      {rows.map((row, index) => {
        const isGroupRow = ctx.withGrouping && row.getIsGrouped();
        return (
          <div
            key={row.id}
            tabIndex={index === 0 ? 0 : -1}
            data-row-id={row.id}
            data-row-index={index}
            data-group-row={isGroupRow || undefined}
            aria-expanded={isGroupRow ? row.getIsExpanded() : undefined}
            data-selected={(!isGroupRow && row.getIsSelected()) || undefined}
            onClick={
              isGroupRow
                ? () => row.toggleExpanded()
                : hasRowClickBehavior(ctx)
                  ? (event) => handleRowClick(ctx, row, event)
                  : undefined
            }
            {...ctx.getStyles('listItem', { classNames, styles })}
          >
            {isGroupRow ? (
              <GroupLabel row={row} />
            ) : ctx.renderListItem ? (
              ctx.renderListItem({ row })
            ) : (
              renderDefaultContent(row)
            )}
          </div>
        );
      })}
    </Box>
  );
});

DataGridListView.classes = classes;
DataGridListView.displayName = '@mantine/data-grid/DataGridListView';
