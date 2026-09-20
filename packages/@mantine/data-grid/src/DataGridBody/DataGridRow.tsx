import React, { useMemo } from 'react';
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
import type { DataGridFeatures } from '../table-features';
import { DataGridCell } from './DataGridCell';
import classes from '../DataGrid.module.css';

export type DataGridRowStylesNames = 'tr' | 'td' | 'treeIndent' | 'treeToggle';

export interface DataGridRowProps
  extends BoxProps, CompoundStylesApiProps<DataGridRowFactory>, ElementProps<'tr'> {
  /** TanStack row instance */
  row: Row<DataGridFeatures, any>;

  /** Zero-based visual row index */
  rowIndex: number;

  /** Row span lookup map */
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
  const isStriped = ctx.striped && rowIndex % 2 === (ctx.striped === 'odd' ? 0 : 1);
  const rowPinned = ctx.withRowPinning ? row.getIsPinned() : false;
  const rowHeight = ctx.getRowHeight?.(row);
  const heightStyle = typeof rowHeight === 'number' ? { height: `${rowHeight}px` } : undefined;

  const handleRowClick = (event: React.MouseEvent) => {
    if (ctx.onRowClick) {
      ctx.onRowClick(row, event);
    }
    if (ctx.expandOnRowClick && ctx.withRowExpansion) {
      row.toggleExpanded();
    }
    if (ctx.selectOnRowClick && ctx.withRowSelection && row.getCanSelect()) {
      if (event.shiftKey) {
        const rows = ctx.table.getRowModel().rows;
        const selected = ctx.table.getSelectedRowModel().rows;
        const lastSelected = selected.length > 0 ? selected[selected.length - 1] : null;
        if (lastSelected) {
          const startIdx = rows.findIndex((r) => r.id === lastSelected.id);
          const endIdx = rows.findIndex((r) => r.id === row.id);
          const [from, to] = startIdx < endIdx ? [startIdx, endIdx] : [endIdx, startIdx];
          const updates: Record<string, true> = {};
          for (let i = from; i <= to; i++) {
            if (rows[i].getCanSelect()) {
              updates[rows[i].id] = true;
            }
          }
          ctx.table.setRowSelection((prev) => ({ ...prev, ...updates }));
        } else {
          row.toggleSelected(true);
        }
      } else if (event.metaKey || event.ctrlKey) {
        row.toggleSelected();
      } else {
        ctx.table.setRowSelection({ [row.id]: true });
      }
    }
  };

  const handleRowDoubleClick = ctx.onRowDoubleClick
    ? (event: React.MouseEvent) => {
        ctx.onRowDoubleClick!(row, event);
      }
    : undefined;

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

  const dataCells = useMemo(() => {
    const visibleCells = row.getVisibleCells();
    const cells: React.ReactNode[] = [];
    const firstDataCellIndex = visibleCells.findIndex(
      (cell) => !cell.column.columnDef.meta?.utility
    );

    for (let i = 0; i < visibleCells.length; i++) {
      const cell = visibleCells[i];

      if (cell.getIsCovered()) {
        continue;
      }

      const colSpan = cell.getColSpan();
      const rowSpan = cell.getRowSpan();

      cells.push(
        <DataGridCell
          key={cell.id}
          cell={cell}
          colIndex={i}
          colSpan={colSpan > 1 ? colSpan : undefined}
          rowSpan={rowSpan > 1 ? rowSpan : undefined}
          classNames={classNames}
          styles={styles}
          treeData={ctx.withTreeData && i === firstDataCellIndex ? { row } : undefined}
        />
      );
    }

    return cells;
  }, [row, classNames, styles, ctx.withTreeData]);

  return (
    <Box
      component="tr"
      tabIndex={rowIndex === 0 ? 0 : -1}
      data-row-index={rowIndex}
      data-row-id={row.id}
      data-selected={isSelected || undefined}
      data-striped={isStriped || undefined}
      data-pinned-top={rowPinned === 'top' || undefined}
      data-pinned-bottom={rowPinned === 'bottom' || undefined}
      onClick={
        ctx.onRowClick || ctx.expandOnRowClick || ctx.selectOnRowClick ? handleRowClick : undefined
      }
      onDoubleClick={handleRowDoubleClick}
      onDragOver={ctx.withRowReorder ? handleDragOver : undefined}
      onDrop={ctx.withRowReorder ? handleDrop : undefined}
      {...ctx.getStyles('tr', { className, classNames, style: [heightStyle, style], styles })}
      {...others}
    >
      {dataCells}
    </Box>
  );
});

DataGridRow.classes = classes;
DataGridRow.displayName = '@mantine/data-grid/DataGridRow';
