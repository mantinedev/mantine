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
  Radio,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { ExpandChevron, GripIcon } from '../icons';
import { DataGridCell } from './DataGridCell';
import classes from '../DataGrid.module.css';

export type DataGridRowStylesNames =
  | 'tr'
  | 'td'
  | 'selectionCheckbox'
  | 'expandIcon'
  | 'rowNumber'
  | 'treeIndent'
  | 'treeToggle'
  | 'dragHandle';

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

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', row.id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const sourceRowId = e.dataTransfer.getData('text/plain');
    if (!sourceRowId || sourceRowId === row.id) {
      return;
    }

    if (ctx.onRowOrderChange) {
      const visibleRows = ctx.table.getRowModel().rows;
      const visibleOrder = visibleRows.map((r) => r.id);
      const srcVisIdx = visibleOrder.indexOf(sourceRowId);
      const tgtVisIdx = visibleOrder.indexOf(row.id);
      if (srcVisIdx === -1 || tgtVisIdx === -1) {
        return;
      }
      const newVisibleOrder = [...visibleOrder];
      const [movedId] = newVisibleOrder.splice(srcVisIdx, 1);
      const adjustedTarget = srcVisIdx < tgtVisIdx ? tgtVisIdx - 1 : tgtVisIdx;
      newVisibleOrder.splice(adjustedTarget, 0, movedId);

      const allRows = ctx.table.getCoreRowModel().rows;
      const reordered = allRows.map((r) => r.original);
      const visibleIdSet = new Set(visibleOrder);
      const visibleCoreIndices = allRows
        .map((r, i) => (visibleIdSet.has(r.id) ? i : -1))
        .filter((i) => i !== -1);
      const originals = visibleCoreIndices.map((i) => reordered[i]);
      const idToOriginal = new Map(originals.map((o, i) => [visibleOrder[i], o]));
      visibleCoreIndices.forEach((coreIdx, i) => {
        reordered[coreIdx] = idToOriginal.get(newVisibleOrder[i])!;
      });
      ctx.onRowOrderChange(reordered);
    }
  };

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
      onDragOver={ctx.withRowReorder ? handleDragOver : undefined}
      onDrop={ctx.withRowReorder ? handleDrop : undefined}
      {...ctx.getStyles('tr', { className, classNames, style, styles })}
      {...others}
    >
      {ctx.withRowReorder && (
        <Box
          component="td"
          {...ctx.getStyles('td', { classNames, styles })}
          {...ctx.getStyles('dragHandle', { classNames, styles })}
          draggable
          onDragStart={handleDragStart}
          aria-label={ctx.localization.dragToReorder ?? 'Drag to reorder'}
        >
          <GripIcon />
        </Box>
      )}
      {ctx.withRowSelection && (
        <Box
          component="td"
          {...ctx.getStyles('td', { classNames, styles })}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {row.getCanSelect() &&
            (ctx.table.options.enableMultiRowSelection === false ? (
              <Radio
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
                {...ctx.getStyles('selectionCheckbox', { classNames, styles })}
              />
            ) : (
              <Checkbox
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
                {...ctx.getStyles('selectionCheckbox', { classNames, styles })}
              />
            ))}
        </Box>
      )}
      {ctx.withRowExpansion && !ctx.withTreeData && (
        <Box component="td" {...ctx.getStyles('td', { classNames, styles })}>
          <Box
            component="button"
            type="button"
            aria-expanded={row.getIsExpanded()}
            aria-label={row.getIsExpanded() ? 'Collapse row' : 'Expand row'}
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
      {row.getVisibleCells().map((cell, cellIndex) => (
        <DataGridCell
          key={cell.id}
          cell={cell}
          classNames={classNames}
          styles={styles}
          treeData={ctx.withTreeData && cellIndex === 0 ? { row } : undefined}
        />
      ))}
    </Box>
  );
});

DataGridRow.classes = classes;
DataGridRow.displayName = '@mantine/data-grid/DataGridRow';
