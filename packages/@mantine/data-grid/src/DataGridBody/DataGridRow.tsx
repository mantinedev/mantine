import React from 'react';
import { Row } from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  Checkbox,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { DataGridCell } from './DataGridCell';
import classes from '../DataGrid.module.css';

export type DataGridRowStylesNames = 'tr' | 'td' | 'selectionCheckbox' | 'expandIcon' | 'rowNumber';

export interface DataGridRowProps
  extends BoxProps, CompoundStylesApiProps<DataGridRowFactory>, ElementProps<'tr'> {
  /** TanStack row instance */
  row: Row<any>;

  /** Zero-based visual row index */
  rowIndex: number;
}

export type DataGridRowFactory = Factory<{
  props: DataGridRowProps;
  ref: HTMLTableRowElement;
  stylesNames: DataGridRowStylesNames;
  compound: true;
}>;

function ExpandChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: expanded ? 'rotate(90deg)' : undefined,
        transition: 'transform 150ms ease',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export const DataGridRow = factory<DataGridRowFactory>((props) => {
  const { className, style, classNames, styles, row, rowIndex, ...others } = useProps(
    'DataGridRow',
    null,
    props
  );

  const ctx = useDataGridContext();
  const isSelected = ctx.withRowSelection && row.getIsSelected();
  const isStriped = ctx.striped && rowIndex % 2 === 1;
  const rowPinned = ctx.withRowPinning ? row.getIsPinned() : false;

  const handleRowClick = (event: React.MouseEvent) => {
    if (ctx.onRowClick) {
      ctx.onRowClick(row, event);
    }
    if (ctx.expandOnRowClick && ctx.withRowExpansion) {
      row.toggleExpanded();
    }
  };

  const handleRowDoubleClick = ctx.onRowDoubleClick
    ? (event: React.MouseEvent) => {
        ctx.onRowDoubleClick!(row, event);
      }
    : undefined;

  return (
    <Box
      component="tr"
      tabIndex={rowIndex === 0 ? 0 : -1}
      data-row-index={rowIndex}
      data-row-id={row.id}
      data-selected={isSelected || undefined}
      data-striped={isStriped || undefined}
      data-hover={ctx.highlightOnHover || undefined}
      data-pinned-top={rowPinned === 'top' || undefined}
      data-pinned-bottom={rowPinned === 'bottom' || undefined}
      onClick={ctx.onRowClick || ctx.expandOnRowClick ? handleRowClick : undefined}
      onDoubleClick={handleRowDoubleClick}
      {...ctx.getStyles('tr', { className, classNames, style, styles })}
      {...others}
    >
      {ctx.withRowSelection && (
        <Box
          component="td"
          {...ctx.getStyles('td', { classNames, styles })}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <Checkbox
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
            {...ctx.getStyles('selectionCheckbox', { classNames, styles })}
          />
        </Box>
      )}
      {ctx.withRowExpansion && (
        <Box component="td" {...ctx.getStyles('td', { classNames, styles })}>
          <Box
            component="button"
            type="button"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              row.toggleExpanded();
            }}
            {...ctx.getStyles('expandIcon', { classNames, styles })}
          >
            <ExpandChevron expanded={row.getIsExpanded()} />
          </Box>
        </Box>
      )}
      {ctx.withRowNumbers && (
        <Box
          component="td"
          {...ctx.getStyles('td', { classNames, styles })}
          {...ctx.getStyles('rowNumber', { classNames, styles })}
        >
          {rowIndex + 1}
        </Box>
      )}
      {row.getVisibleCells().map((cell) => (
        <DataGridCell key={cell.id} cell={cell} classNames={classNames} styles={styles} />
      ))}
    </Box>
  );
});

DataGridRow.classes = classes;
DataGridRow.displayName = '@mantine/data-grid/DataGridRow';
