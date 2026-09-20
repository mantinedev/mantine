import React from 'react';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { useDataGridContext } from '../DataGrid.context';
import { getPinnedStyles } from '../get-pinned-styles';
import type { DataGridFeatures } from '../table-features';
import { GroupCellContent, toggleGroupRowKey } from './DataGridGroupCell';
import { TreeCellContent } from './DataGridTreeCell';
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
  const isPinned = ctx.withColumnPinning ? cell.column.getIsPinned() : false;
  const meta = cell.column.columnDef.meta;
  const pinnedStyles = ctx.withColumnPinning ? getPinnedStyles(cell.column) : undefined;
  const cellSelection = useCellSelection<HTMLDivElement>(cell);
  const isGroupRow = row.getIsGrouped();
  const isLabelCell = isGroupRow && cell.id === groupLabelCellId;
  const groupFocusTarget = isLabelCell && ctx.withCellSelection;

  const handleCellClick = ctx.onCellClick
    ? (event: React.MouseEvent) => {
        ctx.onCellClick!(cell, event);
      }
    : undefined;

  const sharedProps = {
    role: 'gridcell',
    'aria-colindex': cellIndex + 1,
    'data-utility': meta?.utility,
    'data-align': meta?.align,
    'data-actions': meta?.type === 'actions' || undefined,
    'data-pinned-left': isPinned === 'start' || undefined,
    'data-pinned-right': isPinned === 'end' || undefined,
    ...ctx.getStyles('virtualCell', { classNames, styles }),
    style: {
      ...pinnedStyles,
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
      ref={cellSelection.ref}
      {...cellSelection.props}
      onClick={handleCellClick}
    >
      {isTreeFirstCell ? (
        <TreeCellContent row={row} classNames={classNames} styles={styles}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TreeCellContent>
      ) : (
        flexRender(cell.column.columnDef.cell, cell.getContext())
      )}
    </div>
  );
}
