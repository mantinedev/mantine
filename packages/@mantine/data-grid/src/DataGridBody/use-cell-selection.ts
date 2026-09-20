import React, { useCallback, useEffect, useRef } from 'react';
import type { Cell } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';

const DIRECTIONS = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
} as const;

export interface CellSelectionProps {
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
}

/** Attributes and handlers of TanStack cell selection, shared by the table and virtual cells */
export function useCellSelection<T extends HTMLElement>(
  cell: Cell<DataGridFeatures, any, unknown>
) {
  const ctx = useDataGridContext();
  const enabled = ctx.withCellSelection;
  const ref = useRef<T>(null);
  const isSelected = enabled && cell.getIsSelected();
  const isFocused = enabled && cell.getIsFocused();
  const edges = enabled ? cell.getSelectionEdges() : undefined;

  useEffect(() => {
    if (isFocused && ref.current && document.activeElement !== ref.current) {
      ref.current.focus();
    }
  }, [isFocused]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
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
    },
    [ctx.table]
  );

  const props: CellSelectionProps = {
    'data-selected': isSelected || undefined,
    'data-focused': isFocused || undefined,
    'data-edge-top': edges?.top || undefined,
    'data-edge-bottom': edges?.bottom || undefined,
    'data-edge-left': edges?.left || undefined,
    'data-edge-right': edges?.right || undefined,
    tabIndex: enabled ? cell.getTabIndex() : undefined,
    onMouseDown: enabled ? cell.getSelectionStartHandler() : undefined,
    onMouseEnter: enabled ? cell.getSelectionExtendHandler() : undefined,
    onKeyDown: enabled ? onKeyDown : undefined,
  };

  return { ref: enabled ? ref : undefined, props };
}
