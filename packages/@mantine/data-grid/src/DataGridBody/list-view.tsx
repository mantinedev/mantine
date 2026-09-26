import React from 'react';
import { flexRender, Row } from '@tanstack/react-table';
import { UnstyledButton } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { getColumnLabel } from '../get-column-label';
import type { DataGridFeatures } from '../table-features';
import { resolveEmptyState } from './body-states';
import { GroupLabel } from './group-cell';
import {
  getGroupRowProps,
  getRowProps,
  handleRowKeyDown,
  hasExpandedPanel,
} from './row-interactions';
import { getRowSectionsCount } from './row-sections';

function isExpandedPanelEvent(event: React.SyntheticEvent) {
  return event.target instanceof Element && !!event.target.closest('[data-list-expanded]');
}

function ignoreExpandedPanelEvents(handler: ((event: React.MouseEvent) => void) | undefined) {
  return (
    handler &&
    ((event: React.MouseEvent) => {
      if (!isExpandedPanelEvent(event)) {
        handler(event);
      }
    })
  );
}

export function ListView() {
  const ctx = useDataGridContext();
  const sections = ctx.rowSections;
  const { top: topRows, center: centerRows, bottom: bottomRows } = sections;
  const rowCount = getRowSectionsCount(sections);
  const emptyStateContent = !ctx.loading && rowCount === 0 ? resolveEmptyState(ctx) : null;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) =>
    handleRowKeyDown(event, ctx, {
      rowSelector: '[data-row-id]',
      containerSelector: '[data-list-pinned]',
    });

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

  const renderItem = (row: Row<DataGridFeatures, any>, index: number) => {
    const isGroupRow = ctx.withGrouping && row.getIsGrouped();
    const pinned = ctx.withRowPinning ? row.getIsPinned() : false;
    const expanded = !isGroupRow && hasExpandedPanel(ctx, row);
    const rowProps = isGroupRow ? getGroupRowProps(ctx, row, index) : getRowProps(ctx, row, index);
    return (
      <div
        key={row.id}
        {...rowProps}
        role="listitem"
        tabIndex={index === 0 ? 0 : -1}
        aria-expanded={undefined}
        data-pinned={pinned || undefined}
        onClick={ignoreExpandedPanelEvents(rowProps.onClick)}
        onDoubleClick={ignoreExpandedPanelEvents(
          'onDoubleClick' in rowProps ? rowProps.onDoubleClick : undefined
        )}
        {...ctx.getStyles('listItem')}
      >
        {isGroupRow ? (
          <UnstyledButton
            tabIndex={-1}
            aria-expanded={row.getIsExpanded()}
            {...ctx.getStyles('groupHeader')}
          >
            <GroupLabel row={row} />
          </UnstyledButton>
        ) : ctx.renderListItem ? (
          ctx.renderListItem({ row })
        ) : (
          renderDefaultContent(row)
        )}
        {expanded && (
          <div data-list-expanded {...ctx.getStyles('expandedRow')}>
            {ctx.renderExpandedRow!({ row })}
          </div>
        )}
      </div>
    );
  };

  const renderItems = () => {
    const topItems = topRows.map((row, index) => renderItem(row, index));
    const centerItems = centerRows.map((row, index) => renderItem(row, topRows.length + index));
    const bottomItems = bottomRows.map((row, index) =>
      renderItem(row, topRows.length + centerRows.length + index)
    );
    return (
      <>
        {topItems.length > 0 && (
          <div role="none" data-list-pinned="top">
            {topItems}
          </div>
        )}
        {centerItems}
        {bottomItems.length > 0 && (
          <div role="none" data-list-pinned="bottom">
            {bottomItems}
          </div>
        )}
      </>
    );
  };

  const isEmpty = emptyStateContent != null;

  return (
    <div
      data-list-view-scope
      role={isEmpty ? undefined : 'list'}
      onKeyDown={handleKeyDown}
      {...ctx.getStyles('listView')}
    >
      {isEmpty ? (
        <div data-empty-row {...ctx.getStyles('emptyState')}>
          {emptyStateContent}
        </div>
      ) : (
        renderItems()
      )}
    </div>
  );
}
