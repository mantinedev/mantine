import { Column } from '@tanstack/react-table';
import { Select } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';

export interface BooleanFilterProps {
  column: Column<DataGridFeatures, any, unknown>;
}

export function BooleanFilter({ column }: BooleanFilterProps) {
  const ctx = useDataGridContext();
  const filterValue = column.getFilterValue();
  const currentValue = filterValue === true ? 'true' : filterValue === false ? 'false' : null;
  const booleanOptions = [
    { value: 'true', label: ctx.labels.booleanFilterTrue },
    { value: 'false', label: ctx.labels.booleanFilterFalse },
  ];

  return (
    <Select
      size="xs"
      data={booleanOptions}
      value={currentValue}
      onChange={(value) => {
        if (value === 'true') {
          column.setFilterValue(true);
        } else if (value === 'false') {
          column.setFilterValue(false);
        } else {
          column.setFilterValue(undefined);
        }
      }}
      placeholder={
        column.columnDef.meta?.filterPlaceholder ??
        `${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id}...`
      }
      aria-label={`${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id}`}
      clearable
    />
  );
}

BooleanFilter.displayName = '@mantine/data-grid/BooleanFilter';
