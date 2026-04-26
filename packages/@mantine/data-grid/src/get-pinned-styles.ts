import type { Column } from '@tanstack/react-table';

export interface PinnedStyles {
  position: 'sticky';
  left?: string;
  right?: string;
  zIndex: number;
}

export function getPinnedStyles(column: Column<any, unknown>): PinnedStyles | undefined {
  const isPinned = column.getIsPinned();
  if (!isPinned) {
    return undefined;
  }

  return {
    position: 'sticky',
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    zIndex: 1,
  };
}
