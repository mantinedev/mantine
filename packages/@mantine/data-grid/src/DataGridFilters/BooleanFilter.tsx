import { Column } from '@tanstack/react-table';
import { Select } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';

export interface BooleanFilterProps {
  column: Column<any, unknown>;
}

export function BooleanFilter({ column }: BooleanFilterProps) {
  const ctx = useDataGridContext();
  const filterValue = column.getFilterValue();
  const currentValue = filterValue === true ? 'true' : filterValue === false ? 'false' : null;
  const booleanOptions = [
    { value: 'true', label: ctx.localization.booleanFilterTrue },
    { value: 'false', label: ctx.localization.booleanFilterFalse },
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
        `${ctx.localization.filterPlaceholder.replace('...', '')} ${column.id}...`
      }
      aria-label={`${ctx.localization.filterPlaceholder.replace('...', '')} ${column.id}`}
      clearable
    />
  );
}

BooleanFilter.displayName = '@mantine/data-grid/BooleanFilter';
