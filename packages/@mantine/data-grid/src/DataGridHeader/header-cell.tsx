import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { UnstyledButton } from '@mantine/core';
import { getPinnedHeaderProps } from '../column-cell-props';
import { DataGridContextValue, useDataGridContext } from '../DataGrid.context';
import { DataGridColumnMenu } from '../DataGridColumnMenu/DataGridColumnMenu';
import { DefaultUnsortedIcon, SortIcon } from '../icons';
import type { DataGridHeaderInstance } from './use-header-interactions';

function isGroupHeader(header: DataGridHeaderInstance) {
  return !header.isPlaceholder && header.column.columns.length > 0;
}

function getCanSort(header: DataGridHeaderInstance, ctx: DataGridContextValue) {
  return (
    ctx.withSorting && !header.isPlaceholder && !isGroupHeader(header) && header.column.getCanSort()
  );
}

export function getHeaderCellAttributes(header: DataGridHeaderInstance, ctx: DataGridContextValue) {
  const { column } = header;
  const group = isGroupHeader(header);
  const canSort = getCanSort(header, ctx);
  const sortDirection = canSort ? column.getIsSorted() : false;
  const meta = column.columnDef.meta;
  const pinned = getPinnedHeaderProps(header, ctx.withColumnPinning);
  const ariaSort =
    sortDirection === 'asc'
      ? ('ascending' as const)
      : sortDirection === 'desc'
        ? ('descending' as const)
        : canSort
          ? ('none' as const)
          : undefined;

  return {
    'data-column-id': group || header.isPlaceholder ? undefined : column.id,
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
    'data-pinned': pinned['data-pinned'],
    'data-pinned-edge': pinned['data-pinned-edge'],
    style: pinned.style,
  };
}

interface HeaderCellContentProps {
  header: DataGridHeaderInstance;
  isLast: boolean;
}

export function HeaderCellContent({ header, isLast }: HeaderCellContentProps) {
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
        <UnstyledButton onClick={column.getToggleSortingHandler()} {...ctx.getStyles('headerCell')}>
          <span {...ctx.getStyles('headerLabel')}>{label}</span>
          <span {...ctx.getStyles('sortIcon')}>
            {sortDirection
              ? (ctx.sortedIcon ?? <SortIcon />)
              : (ctx.unsortedIcon ?? <DefaultUnsortedIcon />)}
          </span>
        </UnstyledButton>
      ) : (
        <div {...ctx.getStyles('headerCell')}>
          <span {...ctx.getStyles('headerLabel')}>{label}</span>
        </div>
      )}
      {withMenu && <DataGridColumnMenu column={column} />}
      {withHandle && (
        <div
          {...ctx.getStyles('resizeHandle')}
          {...ctx.headerInteractions.getResizeHandleProps(header)}
          data-resizing={column.getIsResizing() || undefined}
        />
      )}
    </>
  );
}
