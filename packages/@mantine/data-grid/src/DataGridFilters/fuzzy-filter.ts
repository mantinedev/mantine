import { sortingFns } from '@tanstack/react-table';
import type { FilterFn, SortingFn } from '@tanstack/react-table';

let _rankItem: typeof import('@tanstack/match-sorter-utils').rankItem;
let _compareItems: typeof import('@tanstack/match-sorter-utils').compareItems;

function loadMatchSorterUtils() {
  if (!_rankItem) {
    try {
      const mod = require('@tanstack/match-sorter-utils');
      _rankItem = mod.rankItem;
      _compareItems = mod.compareItems;
    } catch {
      throw new Error(
        '@tanstack/match-sorter-utils is required for fuzzy filtering. Install it with: npm install @tanstack/match-sorter-utils'
      );
    }
  }
}

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  loadMatchSorterUtils();
  const itemRank = _rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

export const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  loadMatchSorterUtils();
  let dir = 0;
  if (rowA.columnFiltersMeta[columnId]) {
    dir = _compareItems(
      (rowA.columnFiltersMeta[columnId] as any).itemRank,
      (rowB.columnFiltersMeta[columnId] as any).itemRank
    );
  }
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
