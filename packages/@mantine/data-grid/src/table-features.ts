import {
  aggregationFns,
  createExpandedRowModel,
  createFacetedMinMaxValues,
  createFacetedRowModel,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createGroupedRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFns,
  metaHelper,
  sortFns,
  stockFeatures,
  tableFeatures,
} from '@tanstack/react-table';
import type { DataGridColumnMeta } from './DataGrid.types';
import { editingFeature } from './editing-feature';

const metaSlots = {
  columnMeta: metaHelper<DataGridColumnMeta<any, any>>(),
  filterFns,
  sortFns,
  aggregationFns,
};

/**
 * The complete feature set registered on every DataGrid table.
 *
 * TanStack Table keeps the features passed at construction for the table's
 * lifetime, so every row model is always registered and the stages of disabled
 * features are bypassed through the `manual*` table options instead.
 */
export const dataGridFeatures = tableFeatures({
  ...stockFeatures,
  ...metaSlots,
  editingFeature,
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  expandedRowModel: createExpandedRowModel(),
  groupedRowModel: createGroupedRowModel(),
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  facetedMinMaxValues: createFacetedMinMaxValues(),
});

export type DataGridFeatures = typeof dataGridFeatures;
