import React, { useRef } from 'react';
import { Cell, flexRender } from '@tanstack/react-table';
import { useMergedRef } from '@mantine/hooks';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { TreeCellContent } from './tree-cell';
import { useCellEditing } from './use-cell-editing';
import { useCellSelection } from './use-cell-selection';

interface UseBodyCellOptions {
  isTreeCell: boolean;
  isSelectionEntry: boolean;
}

export function useBodyCell<T extends HTMLElement>(
  cell: Cell<DataGridFeatures, any, unknown>,
  { isTreeCell, isSelectionEntry }: UseBodyCellOptions
) {
  const ctx = useDataGridContext();
  const elementRef = useRef<T>(null);
  const cellSelection = useCellSelection<T>(cell, isSelectionEntry);
  const editing = useCellEditing(cell, elementRef);
  const ref = useMergedRef(elementRef, cellSelection.ref);

  const onClick =
    ctx.onCellClick || editing.handlers.onClick
      ? (event: React.MouseEvent) => {
          ctx.onCellClick?.(cell, event);
          editing.handlers.onClick?.(event);
        }
      : undefined;

  const onKeyDown =
    cellSelection.props.onKeyDown || editing.handlers.onKeyDown
      ? (event: React.KeyboardEvent) => {
          editing.handlers.onKeyDown?.(event);
          if (!event.defaultPrevented) {
            cellSelection.props.onKeyDown?.(event);
          }
        }
      : undefined;

  const rendered = flexRender(cell.column.columnDef.cell, cell.getContext());
  const content =
    editing.editor ??
    (isTreeCell ? <TreeCellContent row={cell.row}>{rendered}</TreeCellContent> : rendered);

  return {
    ref,
    props: {
      ...cellSelection.props,
      ...editing.attributes,
      onClick,
      onDoubleClick: editing.handlers.onDoubleClick,
      onKeyDown,
    },
    content,
  };
}
