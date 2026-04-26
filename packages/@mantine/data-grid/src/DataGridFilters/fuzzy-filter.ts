import { compareItems, rankItem } from '@tanstack/match-sorter-utils';
import type { RankingInfo } from '@tanstack/match-sorter-utils';
import { sortingFns } from '@tanstack/react-table';
import type { FilterFn, SortingFn } from '@tanstack/react-table';

interface FuzzyFilterMeta {
  itemRank: RankingInfo;
}

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

export const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      (rowA.columnFiltersMeta[columnId] as FuzzyFilterMeta).itemRank,
      (rowB.columnFiltersMeta[columnId] as FuzzyFilterMeta).itemRank
    );
  }
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
