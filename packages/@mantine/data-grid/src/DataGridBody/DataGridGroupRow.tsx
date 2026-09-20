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
import { getPinnedStyles } from '../get-pinned-styles';
import type { DataGridFeatures } from '../table-features';
import { getGroupLabelCellId, GroupCellContent, toggleGroupRowKey } from './DataGridGroupCell';
import classes from '../DataGrid.module.css';

export type DataGridGroupRowStylesNames = 'tr' | 'td' | 'groupHeader' | 'groupToggle';

export interface DataGridGroupRowProps
  extends BoxProps, CompoundStylesApiProps<DataGridGroupRowFactory>, ElementProps<'tr'> {
  /** TanStack row instance */
  row: Row<DataGridFeatures, any>;

  /** Zero-based visual row index */
  rowIndex: number;
}

export type DataGridGroupRowFactory = Factory<{
  props: DataGridGroupRowProps;
  ref: HTMLTableRowElement;
  stylesNames: DataGridGroupRowStylesNames;
  compound: true;
}>;

export const DataGridGroupRow = factory<DataGridGroupRowFactory>((props) => {
  const { className, style, classNames, styles, row, rowIndex, ...others } = useProps(
    'DataGridGroupRow',
    null,
    props
  );

  const ctx = useDataGridContext();
  const cells = row.getVisibleCells();
  const labelCellId = getGroupLabelCellId(cells);

  return (
    <Box
      component="tr"
      data-group-row
      data-row-id={row.id}
      data-row-index={rowIndex}
      aria-expanded={row.getIsExpanded()}
      tabIndex={ctx.withCellSelection ? undefined : rowIndex === 0 ? 0 : -1}
      onClick={() => row.toggleExpanded()}
      {...ctx.getStyles('tr', { className, classNames, style, styles })}
      {...others}
    >
      {cells.map((cell) => {
        const meta = cell.column.columnDef.meta;
        const isPinned = ctx.withColumnPinning ? cell.column.getIsPinned() : false;
        const isLabelCell = cell.id === labelCellId;
        const focusTarget = isLabelCell && ctx.withCellSelection;

        return (
          <td
            key={cell.id}
            data-utility={meta?.utility}
            data-align={meta?.align}
            data-pinned-left={isPinned === 'start' || undefined}
            data-pinned-right={isPinned === 'end' || undefined}
            tabIndex={focusTarget ? -1 : undefined}
            onKeyDown={focusTarget ? (event) => toggleGroupRowKey(event, row) : undefined}
            {...ctx.getStyles('td', { classNames, styles })}
            style={ctx.withColumnPinning ? getPinnedStyles(cell.column) : undefined}
          >
            <GroupCellContent
              cell={cell}
              isLabelCell={isLabelCell}
              classNames={classNames}
              styles={styles}
            />
          </td>
        );
      })}
    </Box>
  );
});

DataGridGroupRow.classes = classes;
DataGridGroupRow.displayName = '@mantine/data-grid/DataGridGroupRow';
