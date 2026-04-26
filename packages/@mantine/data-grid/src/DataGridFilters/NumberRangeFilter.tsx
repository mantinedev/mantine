import { Column } from '@tanstack/react-table';
import { Flex, NumberInput } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';

export interface NumberRangeFilterProps {
  column: Column<any, unknown>;
}

export function NumberRangeFilter({ column }: NumberRangeFilterProps) {
  const ctx = useDataGridContext();
  const filterValue = (column.getFilterValue() as [number | undefined, number | undefined]) ?? [
    undefined,
    undefined,
  ];

  const facetedMinMax = ctx.withFaceting ? column.getFacetedMinMaxValues() : undefined;

  const minPlaceholder = facetedMinMax?.[0] != null ? `Min (${facetedMinMax[0]})` : 'Min';
  const maxPlaceholder = facetedMinMax?.[1] != null ? `Max (${facetedMinMax[1]})` : 'Max';

  return (
    <Flex gap={4}>
      <NumberInput
        size="xs"
        value={filterValue[0] ?? ''}
        onChange={(value) => {
          const newMin = typeof value === 'number' ? value : undefined;
          column.setFilterValue(
            newMin == null && filterValue[1] == null ? undefined : [newMin, filterValue[1]]
          );
        }}
        placeholder={minPlaceholder}
        aria-label={`${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id} min`}
        style={{ flex: 1 }}
      />
      <NumberInput
        size="xs"
        value={filterValue[1] ?? ''}
        onChange={(value) => {
          const newMax = typeof value === 'number' ? value : undefined;
          column.setFilterValue(
            filterValue[0] == null && newMax == null ? undefined : [filterValue[0], newMax]
          );
        }}
        placeholder={maxPlaceholder}
        aria-label={`${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id} max`}
        style={{ flex: 1 }}
      />
    </Flex>
  );
}

NumberRangeFilter.displayName = '@mantine/data-grid/NumberRangeFilter';
