import React, { useEffect, useRef } from 'react';
import type { Cell, Row } from '@tanstack/react-table';
import { useDataGridContext, type DataGridContextValue } from '../DataGrid.context';
import { GRID_ELEMENT_SELECTOR } from '../hooks/grid-dom';
import type { DataGridFeatures } from '../table-features';

const DIRECTIONS = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
} as const;

interface CellSelectionProps {
  'data-selected': true | undefined;
  'data-focused': true | undefined;
  'data-edge-top': true | undefined;
  'data-edge-bottom': true | undefined;
  'data-edge-left': true | undefined;
  'data-edge-right': true | undefined;
  tabIndex: number | undefined;
  onMouseDown: ((event: unknown) => void) | undefined;
  onMouseEnter: ((event: unknown) => void) | undefined;
  onKeyDown: ((event: React.KeyboardEvent) => void) | undefined;
  onFocus: ((event: React.FocusEvent) => void) | undefined;
}

type GridRow = Row<DataGridFeatures, any>;
type GridCell = Cell<DataGridFeatures, any, unknown>;

export function getCellSelectionEntryId(
  ctx: DataGridContextValue,
  renderedRows: GridRow[],
  entryStartIndex: number,
  isCellRendered: (cell: GridCell) => boolean
) {
  if (!ctx.withCellSelection) {
    return undefined;
  }

  const getEntryCells = (row: GridRow) =>
    ctx.withGrouping && row.getIsGrouped()
      ? []
      : row.getVisibleCells().filter((cell) => cell.getCanSelect() && isCellRendered(cell));

  const focused = ctx.table.getFocusedCell();
  if (
    focused &&
    renderedRows.some(
      (row) =>
        row.id === focused.row.id &&
        getEntryCells(row).some((cell) => cell.column.id === focused.column.id)
    )
  ) {
    return undefined;
  }

  for (let i = Math.max(0, entryStartIndex); i < renderedRows.length; i++) {
    const entryCell = getEntryCells(renderedRows[i])[0];
    if (entryCell) {
      return entryCell.id;
    }
  }

  return undefined;
}

export function useCellSelection<T extends HTMLElement>(
  cell: Cell<DataGridFeatures, any, unknown>,
  isEntry: boolean
) {
  const ctx = useDataGridContext();
  const enabled = ctx.withCellSelection;
  const ref = useRef<T>(null);
  const isSelected = enabled && cell.getIsSelected();
  const isFocused = enabled && cell.getIsFocused();
  const edges = enabled ? cell.getSelectionEdges() : undefined;

  useEffect(() => {
    const element = ref.current;
    if (!isFocused || !element || document.activeElement === element) {
      return;
    }
    const active = document.activeElement;
    const grid = element.closest(GRID_ELEMENT_SELECTOR);
    if (!active || active === document.body || grid?.contains(active)) {
      element.focus();
    }
  }, [isFocused]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const direction = DIRECTIONS[event.key as keyof typeof DIRECTIONS];
    if (!direction) {
      return;
    }

    event.preventDefault();
    if (event.shiftKey) {
      ctx.table.extendCellSelection(direction);
    } else {
      ctx.table.moveCellSelection(direction);
    }
  };

  const onFocus = (event: React.FocusEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    const ranges = ctx.table.store.state.cellSelection;
    const active = ranges?.[ranges.length - 1];
    if (
      active &&
      ((active.focusRowId === cell.row.id && active.focusColumnId === cell.column.id) ||
        (active.anchorRowId === cell.row.id && active.anchorColumnId === cell.column.id))
    ) {
      return;
    }

    ctx.table.setFocusedCell(cell.row.id, cell.column.id);
  };

  const props: CellSelectionProps = {
    'data-selected': isSelected || undefined,
    'data-focused': isFocused || undefined,
    'data-edge-top': edges?.top || undefined,
    'data-edge-bottom': edges?.bottom || undefined,
    'data-edge-left': edges?.left || undefined,
    'data-edge-right': edges?.right || undefined,
    tabIndex: enabled ? (isEntry ? 0 : cell.getTabIndex()) : undefined,
    onMouseDown: enabled ? cell.getSelectionStartHandler() : undefined,
    onMouseEnter: enabled ? cell.getSelectionExtendHandler() : undefined,
    onKeyDown: enabled ? onKeyDown : undefined,
    onFocus: enabled && isEntry ? onFocus : undefined,
  };

  return { ref: enabled ? ref : undefined, props };
}
