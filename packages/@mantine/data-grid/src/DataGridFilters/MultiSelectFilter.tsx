import { Column } from '@tanstack/react-table';
import { MultiSelect } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { getFilterOptions } from './get-filter-options';

export interface MultiSelectFilterProps {
  column: Column<DataGridFeatures, any, unknown>;
}

export function MultiSelectFilter({ column }: MultiSelectFilterProps) {
  const ctx = useDataGridContext();
  const options = getFilterOptions(column, ctx.withFaceting);
  const placeholder =
    column.columnDef.meta?.filterPlaceholder ??
    `${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id}...`;

  return (
    <MultiSelect
      size="xs"
      data={options}
      value={(column.getFilterValue() as string[]) ?? []}
      onChange={(value) => column.setFilterValue(value.length > 0 ? value : undefined)}
      placeholder={placeholder}
      aria-label={`${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id}`}
      clearable
    />
  );
}

MultiSelectFilter.displayName = '@mantine/data-grid/MultiSelectFilter';
