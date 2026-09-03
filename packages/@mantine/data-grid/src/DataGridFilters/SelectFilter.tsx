import { Column } from '@tanstack/react-table';
import { Select } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';
import { getFilterOptions } from './get-filter-options';

export interface SelectFilterProps {
  column: Column<DataGridFeatures, any, unknown>;
}

export function SelectFilter({ column }: SelectFilterProps) {
  const ctx = useDataGridContext();
  const options = getFilterOptions(column, ctx.withFaceting);
  const placeholder =
    column.columnDef.meta?.filterPlaceholder ??
    `${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id}...`;

  return (
    <Select
      size="xs"
      data={options}
      value={(column.getFilterValue() as string) ?? null}
      onChange={(value) => column.setFilterValue(value ?? undefined)}
      placeholder={placeholder}
      aria-label={`${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id}`}
      clearable
    />
  );
}

SelectFilter.displayName = '@mantine/data-grid/SelectFilter';
