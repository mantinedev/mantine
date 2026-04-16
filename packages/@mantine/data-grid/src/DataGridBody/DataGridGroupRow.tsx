import React from 'react';
import { Row } from '@tanstack/react-table';
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
import classes from '../DataGrid.module.css';

export type DataGridGroupRowStylesNames = 'tr' | 'groupHeader' | 'groupToggle' | 'aggregationCell';

export interface DataGridGroupRowProps
  extends BoxProps, CompoundStylesApiProps<DataGridGroupRowFactory>, ElementProps<'tr'> {
  /** TanStack row instance */
  row: Row<any>;

  /** Total number of visible columns including feature columns */
  totalColumns: number;
}

export type DataGridGroupRowFactory = Factory<{
  props: DataGridGroupRowProps;
  ref: HTMLTableRowElement;
  stylesNames: DataGridGroupRowStylesNames;
  compound: true;
}>;

function GroupChevron({ expanded }: { expanded: boolean }) {
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

export const DataGridGroupRow = factory<DataGridGroupRowFactory>((props) => {
  const { className, style, classNames, styles, row, totalColumns, ...others } = useProps(
    'DataGridGroupRow',
    null,
    props
  );

  const ctx = useDataGridContext();
  const isExpanded = row.getIsExpanded();
  const groupingColumnId = row.groupingColumnId;
  const groupingValue = row.groupingValue;

  return (
    <Box
      component="tr"
      data-group-row
      {...ctx.getStyles('tr', { className, classNames, style, styles })}
      {...others}
    >
      <Box
        component="td"
        colSpan={totalColumns}
        {...ctx.getStyles('groupHeader', { classNames, styles })}
      >
        <Box
          component="button"
          type="button"
          onClick={() => row.toggleExpanded()}
          aria-label={isExpanded ? ctx.localization.groupCollapse : ctx.localization.groupExpand}
          {...ctx.getStyles('groupToggle', { classNames, styles })}
        >
          <GroupChevron expanded={isExpanded} />
        </Box>
        <span>
          {groupingColumnId}: {String(groupingValue)} ({row.subRows.length})
        </span>
      </Box>
    </Box>
  );
});

DataGridGroupRow.classes = classes;
DataGridGroupRow.displayName = '@mantine/data-grid/DataGridGroupRow';
