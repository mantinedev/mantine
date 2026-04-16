import React, { useCallback } from 'react';
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
import { DataGridGroupRow } from './DataGridGroupRow';
import { DataGridRow } from './DataGridRow';
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
  const rows = ctx.table.getRowModel().rows;
  let totalColumns = ctx.table.getVisibleLeafColumns().length;
  if (ctx.withRowSelection) {
    totalColumns += 1;
  }
  if (ctx.withRowExpansion) {
    totalColumns += 1;
  }
  if (ctx.withRowNumbers) {
    totalColumns += 1;
  }

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTableSectionElement>) => {
      const target = event.target as HTMLElement;
      const row = target.closest('tr');
      if (!row) {
        return;
      }

      const tbody = row.parentElement;
      if (!tbody) {
        return;
      }

      const rowElements = Array.from(tbody.querySelectorAll<HTMLElement>(':scope > tr'));
      const currentIndex = rowElements.indexOf(row as HTMLElement);

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const nextRow = rowElements[currentIndex + 1];
        if (nextRow) {
          nextRow.focus();
        }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prevRow = rowElements[currentIndex - 1];
        if (prevRow) {
          prevRow.focus();
        }
      } else if (event.key === 'Enter') {
        const rowIndex = Number(row.dataset.rowIndex);
        if (!Number.isNaN(rowIndex)) {
          const tableRow = ctx.table.getRowModel().rows[rowIndex];
          if (tableRow) {
            if (ctx.withRowExpansion) {
              event.preventDefault();
              tableRow.toggleExpanded();
            }
          }
        }
      } else if (event.key === 'Escape') {
        (event.target as HTMLElement).blur();
      }
    },
    [ctx.table, ctx.withRowExpansion]
  );

  return (
    <Box
      component="tbody"
      onKeyDown={handleKeyDown}
      {...ctx.getStyles('tbody', { className, classNames, style, styles })}
      {...others}
    >
      {rows.length === 0 && ctx.emptyState ? (
        <Box component="tr" {...ctx.getStyles('tr', { classNames, styles })}>
          <Box
            component="td"
            colSpan={totalColumns}
            {...ctx.getStyles('emptyState', { classNames, styles })}
          >
            {ctx.emptyState}
          </Box>
        </Box>
      ) : (
        rows.map((row, rowIndex) => (
          <React.Fragment key={row.id}>
            {ctx.withGrouping && row.getIsGrouped() ? (
              <DataGridGroupRow
                row={row}
                totalColumns={totalColumns}
                classNames={classNames}
                styles={styles}
              />
            ) : (
              <DataGridRow row={row} rowIndex={rowIndex} classNames={classNames} styles={styles} />
            )}
            {ctx.withRowExpansion &&
              row.getIsExpanded() &&
              !row.getIsGrouped() &&
              ctx.renderExpandedRow && (
                <Box component="tr" {...ctx.getStyles('tr', { classNames, styles })}>
                  <Box
                    component="td"
                    colSpan={totalColumns}
                    {...ctx.getStyles('expandedRow', { classNames, styles })}
                  >
                    {ctx.renderExpandedRow({ row })}
                  </Box>
                </Box>
              )}
            {ctx.withGrouping && row.getIsGrouped() && row.getIsExpanded() && (
              <>
                {row.subRows.map((subRow, subIndex) => (
                  <DataGridRow
                    key={subRow.id}
                    row={subRow}
                    rowIndex={subIndex}
                    classNames={classNames}
                    styles={styles}
                  />
                ))}
              </>
            )}
          </React.Fragment>
        ))
      )}
    </Box>
  );
});

DataGridBody.classes = classes;
DataGridBody.displayName = '@mantine/data-grid/DataGridBody';
