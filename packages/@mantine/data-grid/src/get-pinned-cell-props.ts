import type React from 'react';
import type { Column, Header } from '@tanstack/react-table';
import type { DataGridFeatures } from './table-features';

type GridColumn = Column<DataGridFeatures, any, unknown>;

export interface PinnedCellProps {
  'data-pinned': 'start' | 'end' | undefined;
  'data-pinned-edge': true | undefined;
  style: React.CSSProperties | undefined;
}

const NOT_PINNED: PinnedCellProps = {
  'data-pinned': undefined,
  'data-pinned-edge': undefined,
  style: undefined,
};

function getPinnedLeavesProps(leaves: GridColumn[], enabled: boolean): PinnedCellProps {
  const first = leaves[0];
  const last = leaves[leaves.length - 1];
  if (!enabled || !first) {
    return NOT_PINNED;
  }

  const position = first.getIsPinned();
  if (!position || leaves.some((leaf) => leaf.getIsPinned() !== position)) {
    return NOT_PINNED;
  }

  const pinnedLeaves = first.table.getPinnedVisibleLeafColumns(position);
  const edge =
    position === 'start'
      ? pinnedLeaves[pinnedLeaves.length - 1]?.id === last.id
      : pinnedLeaves[0]?.id === first.id;
  const offset = position === 'start' ? first.getStart('start') : last.getAfter('end');

  return {
    'data-pinned': position,
    'data-pinned-edge': edge || undefined,
    style: { '--dg-pinned-offset': `${offset}px` } as React.CSSProperties,
  };
}

/** Pinned attributes and the private offset variable of a body cell; CSS owns sticky positioning */
export function getPinnedCellProps(column: GridColumn, enabled: boolean): PinnedCellProps {
  return getPinnedLeavesProps([column], enabled);
}

/** Pinned attributes of a header cell, computed from the leaf headers it spans */
export function getPinnedHeaderProps(
  header: Header<DataGridFeatures, any, unknown>,
  enabled: boolean
): PinnedCellProps {
  if (!enabled) {
    return NOT_PINNED;
  }

  const leaves = header
    .getLeafHeaders()
    .map((leaf) => leaf.column)
    .filter((column) => column.getIsVisible());
  return getPinnedLeavesProps(leaves, enabled);
}
