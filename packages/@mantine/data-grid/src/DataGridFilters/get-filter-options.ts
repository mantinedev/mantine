import { Column } from '@tanstack/react-table';
import type { DataGridFeatures } from '../table-features';

export function getFilterOptions(
  column: Column<DataGridFeatures, any, unknown>,
  withFaceting: boolean
) {
  const meta = column.columnDef.meta;

  if (meta?.filterOptions) {
    return meta.filterOptions.map((opt) =>
      typeof opt === 'string' ? { value: opt, label: opt } : opt
    );
  }

  if (withFaceting) {
    const facetedValues = column.getFacetedUniqueValues();
    const uniqueItems = new Set<string>();
    Array.from(facetedValues.keys())
      .filter((val) => val != null)
      .forEach((val) => {
        if (Array.isArray(val)) {
          val.forEach((item) => {
            if (item != null) {
              uniqueItems.add(String(item));
            }
          });
        } else {
          uniqueItems.add(String(val));
        }
      });
    return Array.from(uniqueItems)
      .sort()
      .map((val) => ({ value: val, label: val }));
  }

  return [];
}
