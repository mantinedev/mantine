import React, { useCallback, useState } from 'react';
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
import { getPinnedStyles } from '../get-pinned-styles';
import { DataGridGroupRow } from './DataGridGroupRow';
import { DataGridRow } from './DataGridRow';
import { handleRowKeyDown, hasExpandedPanel } from './row-interactions';
import classes from '../DataGrid.module.css';

export type DataGridBodyStylesNames =
  | 'tbody'
  | 'tr'
  | 'td'
  | 'expandedRow'
  | 'emptyState'
  | 'groupHeader'
  | 'groupToggle'
  | 'aggregationCell';

export interface DataGridBodyProps
  extends BoxProps, CompoundStylesApiProps<DataGridBodyFactory>, ElementProps<'tbody'> {}

export type DataGridBodyFactory = Factory<{
  props: DataGridBodyProps;
  ref: HTMLTableSectionElement;
  stylesNames: DataGridBodyStylesNames;
  compound: true;
}>;

export const DataGridBody = factory<DataGridBodyFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps('DataGridBody', null, props);

  const ctx = useDataGridContext();
  const topRows = ctx.withRowPinning ? ctx.table.getTopRows() : [];
  const bottomRows = ctx.withRowPinning ? ctx.table.getBottomRows() : [];
  const rows = ctx.withRowPinning ? ctx.table.getCenterRows() : ctx.table.getRowModel().rows;
  const allEmpty = topRows.length === 0 && rows.length === 0 && bottomRows.length === 0;
  const visibleColumns = ctx.table.getVisibleLeafColumns();
  const totalColumns = visibleColumns.length;
  const utilityColumns = visibleColumns.filter((column) => column.columnDef.meta?.utility);
  const dataColumnCount = totalColumns - utilityColumns.length;

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTableSectionElement>) =>
      handleRowKeyDown(event, ctx, {
        scopeSelector: 'table',
        rowSelector: 'tbody > tr[data-row-id]',
      }),
    [ctx]
  );

  const [pinnedTopOffset, setPinnedTopOffset] = useState(0);
  const pinnedTopRef = useCallback(
    (node: HTMLElement | null) => {
      if (node && ctx.stickyHeader) {
        const thead = node.parentElement?.querySelector('thead');
        if (thead) {
          setPinnedTopOffset(thead.offsetHeight);
        }
      }
    },
    [ctx.stickyHeader]
  );

  const renderRows = (rowList: typeof rows, startIndex = 0) =>
    rowList.map((row, i) => {
      const globalIndex = startIndex + i;
      return (
        <React.Fragment key={row.id}>
          {ctx.withGrouping && row.getIsGrouped() ? (
            <DataGridGroupRow
              row={row}
              rowIndex={globalIndex}
              classNames={classNames}
              styles={styles}
            />
          ) : (
            <DataGridRow row={row} rowIndex={globalIndex} classNames={classNames} styles={styles} />
          )}
          {hasExpandedPanel(ctx, row) && (
            <tr data-expanded-row {...ctx.getStyles('tr', { classNames, styles })}>
              {utilityColumns.map((column) => (
                <td
                  key={column.id}
                  data-utility={column.columnDef.meta?.utility}
                  data-pinned-left={
                    (ctx.withColumnPinning && column.getIsPinned() === 'start') || undefined
                  }
                  {...ctx.getStyles('td', { classNames, styles })}
                  style={ctx.withColumnPinning ? getPinnedStyles(column) : undefined}
                />
              ))}
              <td
                colSpan={dataColumnCount}
                {...ctx.getStyles('expandedRow', { classNames, styles })}
              >
                {ctx.renderExpandedRow!({ row })}
              </td>
            </tr>
          )}
        </React.Fragment>
      );
    });

  return (
    <>
      {ctx.withRowPinning && topRows.length > 0 && (
        <tbody
          ref={pinnedTopRef}
          data-pinned-top
          onKeyDown={handleKeyDown}
          {...ctx.getStyles('tbody', { className, classNames, style, styles })}
          style={{ top: pinnedTopOffset > 0 ? pinnedTopOffset : undefined }}
        >
          {renderRows(topRows, 0)}
        </tbody>
      )}
      <Box
        component="tbody"
        onKeyDown={handleKeyDown}
        {...ctx.getStyles('tbody', { className, classNames, style, styles })}
        {...others}
      >
        {allEmpty && ctx.emptyState ? (
          <tr {...ctx.getStyles('tr', { classNames, styles })}>
            <td colSpan={totalColumns} {...ctx.getStyles('emptyState', { classNames, styles })}>
              {ctx.emptyState}
            </td>
          </tr>
        ) : (
          renderRows(rows, topRows.length)
        )}
      </Box>
      {ctx.withRowPinning && bottomRows.length > 0 && (
        <tbody
          data-pinned-bottom
          onKeyDown={handleKeyDown}
          {...ctx.getStyles('tbody', { className, classNames, style, styles })}
        >
          {renderRows(bottomRows, topRows.length + rows.length)}
        </tbody>
      )}
    </>
  );
});

DataGridBody.classes = classes;
DataGridBody.displayName = '@mantine/data-grid/DataGridBody';
