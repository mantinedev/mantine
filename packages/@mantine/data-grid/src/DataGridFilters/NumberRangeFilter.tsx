import { useState } from 'react';
import { Column } from '@tanstack/react-table';
import {
  CloseButton,
  Group,
  Input,
  InputBase,
  NumberInput,
  Popover,
  RangeSlider,
  rem,
  Stack,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridFeatures } from '../table-features';

export interface NumberRangeFilterProps {
  column: Column<DataGridFeatures, any, unknown>;
}

export function NumberRangeFilter({ column }: NumberRangeFilterProps) {
  const ctx = useDataGridContext();
  const [opened, setOpened] = useState(false);
  const filterValue = (column.getFilterValue() as [number | undefined, number | undefined]) ?? [
    undefined,
    undefined,
  ];

  const facetedMinMax = ctx.withFaceting ? column.getFacetedMinMaxValues() : undefined;
  const sliderMin = facetedMinMax?.[0] ?? 0;
  const sliderMax = facetedMinMax?.[1] ?? 100;

  const hasValue = filterValue[0] != null || filterValue[1] != null;

  const displayValue = hasValue
    ? `${filterValue[0] ?? sliderMin} – ${filterValue[1] ?? sliderMax}`
    : '';

  const placeholder = `${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id}...`;

  return (
    <Popover opened={opened} onChange={setOpened} position="bottom-start" width={280}>
      <Popover.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          size="xs"
          onClick={() => setOpened((o) => !o)}
          rightSection={
            hasValue ? (
              <CloseButton
                size="xs"
                onClick={(e) => {
                  e.stopPropagation();
                  column.setFilterValue(undefined);
                }}
                aria-label="Clear filter"
              />
            ) : undefined
          }
          aria-label={`${ctx.labels.filterPlaceholder.replace('...', '')} ${column.id}`}
        >
          {displayValue || <Input.Placeholder>{placeholder}</Input.Placeholder>}
        </InputBase>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="sm">
          <Group grow gap="xs">
            <NumberInput
              size="xs"
              label="Min"
              value={filterValue[0] ?? ''}
              onChange={(value) => {
                const newMin = typeof value === 'number' ? value : undefined;
                column.setFilterValue(
                  newMin == null && filterValue[1] == null ? undefined : [newMin, filterValue[1]]
                );
              }}
              placeholder={facetedMinMax?.[0] != null ? String(facetedMinMax[0]) : 'Min'}
              min={sliderMin}
              max={filterValue[1] ?? sliderMax}
            />
            <NumberInput
              size="xs"
              label="Max"
              value={filterValue[1] ?? ''}
              onChange={(value) => {
                const newMax = typeof value === 'number' ? value : undefined;
                column.setFilterValue(
                  filterValue[0] == null && newMax == null ? undefined : [filterValue[0], newMax]
                );
              }}
              placeholder={facetedMinMax?.[1] != null ? String(facetedMinMax[1]) : 'Max'}
              min={filterValue[0] ?? sliderMin}
              max={sliderMax}
            />
          </Group>
          <RangeSlider
            size="sm"
            min={sliderMin}
            max={sliderMax}
            value={[filterValue[0] ?? sliderMin, filterValue[1] ?? sliderMax]}
            onChange={([min, max]) => {
              column.setFilterValue([
                min === sliderMin ? undefined : min,
                max === sliderMax ? undefined : max,
              ]);
            }}
            minRange={0}
            styles={{ root: { marginTop: rem(4) } }}
          />
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

NumberRangeFilter.displayName = '@mantine/data-grid/NumberRangeFilter';
