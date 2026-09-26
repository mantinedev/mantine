import React, { useRef, useState } from 'react';
import { Row } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { endRowDrag, getRowDragSource, getRowDragVisibleOrder } from './row-drag-source';
import { getRowProps, getTableRowHeightStyle } from './row-interactions';
import { canReorderRows, getVisibleOrder, reorderVisibleRows, RowDropEdge } from './row-reorder';
import { TableCell } from './table-cell';

interface TableRowProps {
  /** TanStack row instance */
  row: Row<DataGridFeatures, any>;
  /** Zero-based visual row index */
  rowIndex: number;
  /** Id of the cell that is the keyboard entry point of the cell selection grid, if any */
  selectionEntryId: string | undefined;
}

function getDropEdge(event: React.DragEvent<HTMLElement>): RowDropEdge {
  const rect = event.currentTarget.getBoundingClientRect();
  return event.clientY < rect.top + rect.height / 2 ? 'before' : 'after';
}

export function TableRow({ row, rowIndex, selectionEntryId }: TableRowProps) {
  const ctx = useDataGridContext();
  const rowPinned = ctx.withRowPinning ? row.getIsPinned() : false;
  const heightStyle = getTableRowHeightStyle(ctx, row);

  const [dropEdge, setDropEdge] = useState<RowDropEdge | null>(null);
  const dragDepthRef = useRef(0);

  const getDragVisibleOrder = () =>
    getRowDragVisibleOrder(ctx.table.store, ctx.table.getRowModel().rows, () =>
      getVisibleOrder(ctx.table, ctx.withRowPinning)
    );

  const handleDragOver = (event: React.DragEvent<HTMLTableRowElement>) => {
    const sourceRowId = getRowDragSource(ctx.table.store, event.dataTransfer);
    if (sourceRowId === null) {
      return;
    }

    const edge = getDropEdge(event);
    if (!canReorderRows(getDragVisibleOrder(), sourceRowId, row.id, edge)) {
      if (dropEdge !== null) {
        setDropEdge(null);
      }
      return;
    }

    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (edge !== dropEdge) {
      setDropEdge(edge);
    }
  };

  const handleDragEnter = () => {
    dragDepthRef.current += 1;
  };

  const handleDragLeave = () => {
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) {
      setDropEdge(null);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLTableRowElement>) => {
    dragDepthRef.current = 0;
    setDropEdge(null);
    const sourceRowId = getRowDragSource(ctx.table.store, event.dataTransfer);
    if (sourceRowId === null) {
      return;
    }

    event.preventDefault();
    const visibleOrder = getDragVisibleOrder();
    endRowDrag();
    if (!ctx.onRowOrderChange) {
      return;
    }

    const reordered = reorderVisibleRows(
      ctx.table,
      sourceRowId,
      row.id,
      getDropEdge(event),
      visibleOrder
    );
    if (reordered) {
      ctx.onRowOrderChange(reordered);
    }
  };

  const visibleCells = row.getVisibleCells();
  const cells: React.ReactNode[] = [];
  const firstDataCellIndex = visibleCells.findIndex((cell) => !cell.column.columnDef.meta?.utility);

  for (let i = 0; i < visibleCells.length; i++) {
    const cell = visibleCells[i];

    if (cell.getIsCovered()) {
      continue;
    }

    const colSpan = cell.getColSpan();
    const rowSpan = cell.getRowSpan();

    cells.push(
      <TableCell
        key={cell.id}
        cell={cell}
        colSpan={colSpan > 1 ? colSpan : undefined}
        rowSpan={rowSpan > 1 ? rowSpan : undefined}
        isTreeCell={ctx.withTreeData && i === firstDataCellIndex}
        isSelectionEntry={cell.id === selectionEntryId}
      />
    );
  }

  return (
    <tr
      {...getRowProps(ctx, row, rowIndex)}
      data-pinned={rowPinned || undefined}
      data-drop-edge={(ctx.withRowReorder && dropEdge) || undefined}
      onDragEnter={ctx.withRowReorder ? handleDragEnter : undefined}
      onDragOver={ctx.withRowReorder ? handleDragOver : undefined}
      onDragLeave={ctx.withRowReorder ? handleDragLeave : undefined}
      onDrop={ctx.withRowReorder ? handleDrop : undefined}
      {...ctx.getStyles('tr', { style: heightStyle })}
    >
      {cells}
    </tr>
  );
}
