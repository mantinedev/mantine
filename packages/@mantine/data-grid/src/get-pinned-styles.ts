import type { Column } from '@tanstack/react-table';
import type { DataGridFeatures } from './table-features';

export interface PinnedStyles {
  position: 'sticky';
  left?: string;
  right?: string;
  zIndex: number;
}

export function getPinnedStyles(
  column: Column<DataGridFeatures, any, unknown>
): PinnedStyles | undefined {
  const isPinned = column.getIsPinned();
  if (!isPinned) {
    return undefined;
  }

  return {
    position: 'sticky',
    left: isPinned === 'start' ? `${column.getStart('start')}px` : undefined,
    right: isPinned === 'end' ? `${column.getAfter('end')}px` : undefined,
    zIndex: 1,
  };
}
