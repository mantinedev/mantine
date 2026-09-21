import React, { useRef } from 'react';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { useMergedRef } from '@mantine/hooks';
import { useDataGridContext } from '../DataGrid.context';
import { getPinnedCellProps } from '../get-pinned-cell-props';
import type { DataGridFeatures } from '../table-features';
import { GroupCellContent, toggleGroupRowKey } from './DataGridGroupCell';
import { TreeCellContent } from './DataGridTreeCell';
import { useCellEditing } from './use-cell-editing';
import { useCellSelection } from './use-cell-selection';

interface DataGridVirtualCellProps {
  cell: Cell<DataGridFeatures, any, unknown>;
  cellIndex: number;
  row: Row<DataGridFeatures, any>;
  isTreeFirstCell: boolean;
  groupLabelCellId?: string;
  classNames: any;
  styles: any;
}

export function DataGridVirtualCell({
  cell,
  cellIndex,
  row,
  isTreeFirstCell,
  groupLabelCellId,
  classNames,
  styles,
}: DataGridVirtualCellProps) {
  const ctx = useDataGridContext();
  const meta = cell.column.columnDef.meta;
  const pinned = getPinnedCellProps(cell.column, ctx.withColumnPinning);
  const elementRef = useRef<HTMLDivElement>(null);
  const cellSelection = useCellSelection<HTMLDivElement>(cell);
  const editing = useCellEditing(cell, elementRef, { classNames, styles });
  const mergedRef = useMergedRef(elementRef, cellSelection.ref);
  const isGroupRow = row.getIsGrouped();
  const isLabelCell = isGroupRow && cell.id === groupLabelCellId;
  const groupFocusTarget = isLabelCell && ctx.withCellSelection;

  const handleCellClick =
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

  const sharedProps = {
    role: 'gridcell',
    'aria-colindex': cellIndex + 1,
    'data-utility': meta?.utility,
    'data-align': meta?.align,
    'data-actions': meta?.type === 'actions' || undefined,
    'data-pinned': pinned['data-pinned'],
    'data-pinned-edge': pinned['data-pinned-edge'],
    ...ctx.getStyles('virtualCell', { classNames, styles }),
    style: {
      ...pinned.style,
      width: `var(--dg-col-${cellIndex})`,
    },
  };

  if (isGroupRow) {
    return (
      <div
        {...sharedProps}
        tabIndex={groupFocusTarget ? -1 : undefined}
        onKeyDown={groupFocusTarget ? (event) => toggleGroupRowKey(event, row) : undefined}
      >
        <GroupCellContent
          cell={cell}
          isLabelCell={isLabelCell}
          classNames={classNames}
          styles={styles}
        />
      </div>
    );
  }

  return (
    <div
      {...sharedProps}
      ref={mergedRef}
      {...cellSelection.props}
      {...editing.attributes}
      onClick={handleCellClick}
      onDoubleClick={editing.handlers.onDoubleClick}
      onKeyDown={handleKeyDown}
    >
      {editing.editor ??
        (isTreeFirstCell ? (
          <TreeCellContent row={row} classNames={classNames} styles={styles}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TreeCellContent>
        ) : (
          flexRender(cell.column.columnDef.cell, cell.getContext())
        ))}
    </div>
  );
}
