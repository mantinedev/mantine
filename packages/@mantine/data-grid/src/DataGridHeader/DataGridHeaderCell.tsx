import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { ClassNames, Styles, UnstyledButton } from '@mantine/core';
import { DataGridContextValue, useDataGridContext } from '../DataGrid.context';
import { DataGridColumnMenu } from '../DataGridColumnMenu/DataGridColumnMenu';
import { DefaultUnsortedIcon, SortIcon } from '../icons';
import type { DataGridHeaderInstance } from './use-header-interactions';

export function isGroupHeader(header: DataGridHeaderInstance) {
  return !header.isPlaceholder && header.column.columns.length > 0;
}

function getCanSort(header: DataGridHeaderInstance, ctx: DataGridContextValue) {
  return (
    ctx.withSorting && !header.isPlaceholder && !isGroupHeader(header) && header.column.getCanSort()
  );
}

/** Data and aria attributes shared by table and virtual header cells */
export function getHeaderCellAttributes(header: DataGridHeaderInstance, ctx: DataGridContextValue) {
  const { column } = header;
  const group = isGroupHeader(header);
  const canSort = getCanSort(header, ctx);
  const sortDirection = canSort ? column.getIsSorted() : false;
  const meta = column.columnDef.meta;
  const ariaSort =
    sortDirection === 'asc'
      ? ('ascending' as const)
      : sortDirection === 'desc'
        ? ('descending' as const)
        : canSort
          ? ('none' as const)
          : undefined;

  return {
    'aria-sort': ariaSort,
    'data-sort-asc': sortDirection === 'asc' || undefined,
    'data-sort-desc': sortDirection === 'desc' || undefined,
    'data-sortable': canSort || undefined,
    'data-resizing': column.getIsResizing() || undefined,
    'data-dragging':
      (!group && !header.isPlaceholder && ctx.headerInteractions.draggingColumnId === column.id) ||
      undefined,
    'data-header-group': group || undefined,
    'data-placeholder': header.isPlaceholder || undefined,
    'data-utility': meta?.utility,
    'data-align': group ? undefined : meta?.align,
    'data-actions': meta?.type === 'actions' || undefined,
  };
}

export interface DataGridHeaderCellContentProps {
  header: DataGridHeaderInstance;
  isLast: boolean;
  classNames?: ClassNames<any>;
  styles?: Styles<any>;
}

/** Interactive part, column menu and resize handle of a header cell, shared by the table and virtual headers */
export function DataGridHeaderCellContent({
  header,
  isLast,
  classNames,
  styles,
}: DataGridHeaderCellContentProps) {
  const ctx = useDataGridContext();
  const { column } = header;
  const meta = column.columnDef.meta;
  const group = isGroupHeader(header);
  const canSort = getCanSort(header, ctx);
  const sortDirection = column.getIsSorted();
  const label = header.isPlaceholder
    ? null
    : flexRender(column.columnDef.header, header.getContext());

  const withMenu =
    ctx.withColumnMenu &&
    !header.isPlaceholder &&
    !group &&
    !meta?.utility &&
    meta?.type !== 'actions' &&
    !meta?.disableColumnMenu;

  const withHandle =
    ctx.withColumnResizing && !isLast && !header.isPlaceholder && column.getCanResize();

  return (
    <>
      {header.isPlaceholder ? null : canSort ? (
        <UnstyledButton
          onClick={column.getToggleSortingHandler()}
          {...ctx.getStyles('headerCell', { classNames, styles })}
        >
          <span {...ctx.getStyles('headerLabel', { classNames, styles })}>{label}</span>
          <span {...ctx.getStyles('sortIcon', { classNames, styles })}>
            {sortDirection
              ? (ctx.sortedIcon ?? <SortIcon />)
              : (ctx.unsortedIcon ?? <DefaultUnsortedIcon />)}
          </span>
        </UnstyledButton>
      ) : (
        <div {...ctx.getStyles('headerCell', { classNames, styles })}>
          <span {...ctx.getStyles('headerLabel', { classNames, styles })}>{label}</span>
        </div>
      )}
      {withMenu && <DataGridColumnMenu column={column} />}
      {withHandle && (
        <div
          {...ctx.getStyles('resizeHandle', { classNames, styles })}
          {...ctx.headerInteractions.getResizeHandleProps(header)}
          data-resizing={column.getIsResizing() || undefined}
        />
      )}
    </>
  );
}
