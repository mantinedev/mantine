import React from 'react';
import { getOrderedVisibleColumns } from '../column-cell-props';
import { useDataGridContext } from '../DataGrid.context';
import {
  ExpandedRowUtilityCells,
  getDataColumnCount,
  resolveEmptyState,
  SkeletonRows,
} from './body-states';
import { GroupRow } from './group-row';
import { handleRowKeyDown, hasExpandedPanel } from './row-interactions';
import { flattenRowSections, getRowSectionsCount } from './row-sections';
import { TableRow } from './table-row';
import { getCellSelectionEntryId } from './use-cell-selection';

export function DataGridBody() {
  const ctx = useDataGridContext();
  const sections = ctx.rowSections;
  const { top: topRows, center: rows, bottom: bottomRows } = sections;
  const allEmpty = getRowSectionsCount(sections) === 0;
  const emptyStateContent = !ctx.loading && allEmpty ? resolveEmptyState(ctx) : null;
  const visibleColumns = getOrderedVisibleColumns(ctx.table);
  const totalColumns = visibleColumns.length;
  const dataColumnCount = getDataColumnCount(visibleColumns);
  const selectionEntryId = getCellSelectionEntryId(
    ctx,
    flattenRowSections(sections),
    0,
    (cell) => !cell.getIsCovered()
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTableSectionElement>) =>
    handleRowKeyDown(event, ctx, {
      rowSelector: 'tr[data-row-id]',
      containerSelector: 'tbody',
    });

  const renderRows = (rowList: typeof rows, startIndex = 0) =>
    rowList.map((row, i) => {
      const globalIndex = startIndex + i;
      return (
        <React.Fragment key={row.id}>
          {ctx.withGrouping && row.getIsGrouped() ? (
            <GroupRow row={row} rowIndex={globalIndex} />
          ) : (
            <TableRow row={row} rowIndex={globalIndex} selectionEntryId={selectionEntryId} />
          )}
          {hasExpandedPanel(ctx, row) && (
            <tr data-expanded-row {...ctx.getStyles('tr')}>
              <ExpandedRowUtilityCells virtual={false} columns={visibleColumns} />
              <td colSpan={dataColumnCount} {...ctx.getStyles('expandedRow')}>
                {ctx.renderExpandedRow!({ row })}
              </td>
            </tr>
          )}
        </React.Fragment>
      );
    });

  if (ctx.withSkeletonRows) {
    return (
      <tbody {...ctx.getStyles('tbody')}>
        <SkeletonRows virtual={false} columns={visibleColumns} />
      </tbody>
    );
  }

  return (
    <>
      {topRows.length > 0 && (
        <tbody data-pinned="top" onKeyDown={handleKeyDown} {...ctx.getStyles('tbody')}>
          {renderRows(topRows, 0)}
        </tbody>
      )}
      <tbody onKeyDown={handleKeyDown} {...ctx.getStyles('tbody')}>
        {emptyStateContent != null ? (
          <tr data-empty-row {...ctx.getStyles('tr')}>
            <td colSpan={totalColumns} {...ctx.getStyles('emptyState')}>
              {emptyStateContent}
            </td>
          </tr>
        ) : (
          renderRows(rows, topRows.length)
        )}
      </tbody>
      {bottomRows.length > 0 && (
        <tbody data-pinned="bottom" onKeyDown={handleKeyDown} {...ctx.getStyles('tbody')}>
          {renderRows(bottomRows, topRows.length + rows.length)}
        </tbody>
      )}
    </>
  );
}
