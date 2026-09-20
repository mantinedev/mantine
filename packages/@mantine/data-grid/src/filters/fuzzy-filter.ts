import { compareItems, rankItem, type RankingInfo } from '@tanstack/match-sorter-utils';
import {
  constructFilterFn,
  sortFn_alphanumeric,
  type FilterFn,
  type SortFn,
} from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';

interface FuzzyFilterMeta {
  itemRank: RankingInfo;
}

export const fuzzyFilter: FilterFn<DataGridFeatures, any> = constructFilterFn({
  filter: (dataValue, filterValue, _row, _columnId, addMeta) => {
    const itemRank = rankItem(dataValue, filterValue);
    addMeta?.({ itemRank } as any);
    return itemRank.passed;
  },
});

export const fuzzySort: SortFn<DataGridFeatures, any> = (rowA, rowB, columnId) => {
  let dir = 0;
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      (rowA.columnFiltersMeta[columnId] as FuzzyFilterMeta).itemRank,
      (rowB.columnFiltersMeta[columnId] as FuzzyFilterMeta).itemRank
    );
  }
  return dir === 0 ? sortFn_alphanumeric(rowA, rowB, columnId) : dir;
};
