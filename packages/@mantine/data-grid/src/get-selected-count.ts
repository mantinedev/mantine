import type { RowSelectionState } from '@tanstack/react-table';

export function getSelectedCount(rowSelection: RowSelectionState | undefined): number {
  if (!rowSelection) {
    return 0;
  }

  let count = 0;
  for (const id in rowSelection) {
    if (rowSelection[id]) {
      count += 1;
    }
  }
  return count;
}
