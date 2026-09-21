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
 * The complete feature set, used as the static type for every DataGrid table.
 *
 * DataGrid resolves its features from runtime props rather than at build time,
 * so per-table tree-shaking does not apply and the full set is always typed in.
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

export interface DataGridRowModelFlags {
  withSorting: boolean;
  withFiltering: boolean;
  withGlobalFilter: boolean;
  withPagination: boolean;
  withRowExpansion: boolean;
  withGrouping: boolean;
  withTreeData: boolean;
  withFaceting: boolean;
}

/**
 * Registers every feature but only the row models the grid actually needs.
 *
 * A row model slot left unset makes its stage fall through to the preceding
 * model, which is how v8 behaved when a `getXRowModel` option was omitted.
 * Pagination in particular must stay unregistered when the grid is not
 * paginated, since `getRowModel()` resolves to the paginated model and would
 * otherwise silently truncate every grid to one page.
 */
export function createDataGridFeatures(flags: DataGridRowModelFlags): DataGridFeatures {
  return tableFeatures({
    ...stockFeatures,
    ...metaSlots,
    editingFeature,
    ...(flags.withSorting && { sortedRowModel: createSortedRowModel() }),
    ...((flags.withFiltering || flags.withGlobalFilter) && {
      filteredRowModel: createFilteredRowModel(),
    }),
    ...(flags.withPagination && { paginatedRowModel: createPaginatedRowModel() }),
    ...((flags.withRowExpansion || flags.withGrouping || flags.withTreeData) && {
      expandedRowModel: createExpandedRowModel(),
    }),
    ...(flags.withGrouping && { groupedRowModel: createGroupedRowModel() }),
    ...(flags.withFaceting && {
      facetedRowModel: createFacetedRowModel(),
      facetedUniqueValues: createFacetedUniqueValues(),
      facetedMinMaxValues: createFacetedMinMaxValues(),
    }),
  }) as DataGridFeatures;
}
