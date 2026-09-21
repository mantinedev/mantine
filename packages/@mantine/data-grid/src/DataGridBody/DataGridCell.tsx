import React, { useRef } from 'react';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useMergedRef } from '@mantine/hooks';
import { useDataGridContext } from '../DataGrid.context';
import { getPinnedCellProps } from '../get-pinned-cell-props';
import type { DataGridFeatures } from '../table-features';
import { TreeCellContent } from './DataGridTreeCell';
import { useCellEditing } from './use-cell-editing';
import { useCellSelection } from './use-cell-selection';
import classes from '../DataGrid.module.css';

export type DataGridCellStylesNames = 'td' | 'editCell' | 'treeIndent' | 'treeToggle' | 'treeLabel';

export interface DataGridCellProps
  extends BoxProps, CompoundStylesApiProps<DataGridCellFactory>, ElementProps<'td'> {
  /** TanStack cell instance */
  cell: Cell<DataGridFeatures, any, unknown>;

  /** Tree data info, present only on the first data cell when tree data is active */
  treeData?: { row: Row<DataGridFeatures, any> };

  /** Number of columns this cell should span */
  colSpan?: number;

  /** Number of rows this cell should span */
  rowSpan?: number;

  /** Visual column index used for keyboard navigation */
  colIndex?: number;
}

export type DataGridCellFactory = Factory<{
  props: DataGridCellProps;
  ref: HTMLTableCellElement;
  stylesNames: DataGridCellStylesNames;
  compound: true;
}>;

export const DataGridCell = factory<DataGridCellFactory>((props) => {
  const {
    className,
    style,
    classNames,
    styles,
    cell,
    treeData,
    colSpan,
    rowSpan,
    colIndex,
    ...others
  } = useProps('DataGridCell', null, props);

  const ctx = useDataGridContext();
  const meta = cell.column.columnDef.meta;
  const utility = meta?.utility;
  const pinned = getPinnedCellProps(cell.column, ctx.withColumnPinning);

  const elementRef = useRef<HTMLTableCellElement>(null);
  const cellSelection = useCellSelection<HTMLTableCellElement>(cell);
  const editing = useCellEditing(cell, elementRef, { classNames, styles });
  const mergedRef = useMergedRef(elementRef, cellSelection.ref);

  const handleClick =
    ctx.onCellClick || editing.handlers.onClick
      ? (event: React.MouseEvent) => {
          ctx.onCellClick?.(cell, event);
          editing.handlers.onClick?.(event);
        }
      : undefined;

  const handleKeyDown =
    cellSelection.props.onKeyDown || editing.handlers.onKeyDown
      ? (event: React.KeyboardEvent) => {
          editing.handlers.onKeyDown?.(event);
          if (!event.defaultPrevented) {
            cellSelection.props.onKeyDown?.(event);
          }
        }
      : undefined;

  return (
    <Box
      component="td"
      colSpan={colSpan}
      rowSpan={rowSpan}
      data-col-index={colIndex}
      data-utility={utility}
      data-align={meta?.align}
      data-actions={meta?.type === 'actions' || undefined}
      data-pinned={pinned['data-pinned']}
      data-pinned-edge={pinned['data-pinned-edge']}
      ref={mergedRef}
      {...cellSelection.props}
      {...editing.attributes}
      onClick={handleClick}
      onDoubleClick={editing.handlers.onDoubleClick}
      onKeyDown={handleKeyDown}
      {...ctx.getStyles('td', { className, classNames, style, styles })}
      style={pinned.style}
      {...others}
    >
      {editing.editor ??
        (treeData ? (
          <TreeCellContent row={treeData.row} classNames={classNames} styles={styles}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TreeCellContent>
        ) : (
          flexRender(cell.column.columnDef.cell, cell.getContext())
        ))}
    </Box>
  );
});

DataGridCell.classes = classes;
DataGridCell.displayName = '@mantine/data-grid/DataGridCell';
