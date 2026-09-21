import { Button, Group, RangeSlider, Select, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Button, Group, RangeSlider, Select, Text } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department', filterFn: 'equals' },
      { accessorKey: 'status', header: 'Status', filterFn: 'equals' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        filterFn: 'inNumberRange',
        meta: { align: 'end' },
      },
    ],
    withFaceting: true,
  });

  const [min, max] = store.getFacetedMinMaxValues('salary') ?? [0, 0];
  const range = (store.getColumnFilterValue('salary') as [number, number] | undefined) ?? [min, max];

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Select
          size={store.controlSize}
          placeholder="Department"
          clearable
          data={store.getFacetedUniqueValues('department')}
          value={(store.getColumnFilterValue('department') as string) ?? null}
          onChange={(value) => store.setColumnFilter('department', value)}
        />
        <Select
          size={store.controlSize}
          placeholder="Status"
          clearable
          data={store.getFacetedUniqueValues('status')}
          value={(store.getColumnFilterValue('status') as string) ?? null}
          onChange={(value) => store.setColumnFilter('status', value)}
        />
        <Group gap="xs" wrap="nowrap" style={{ flex: 1, minWidth: 220 }}>
          <Text size="xs" c="dimmed">
            Salary
          </Text>
          <RangeSlider
            size="sm"
            style={{ flex: 1 }}
            min={min}
            max={max}
            step={1000}
            minRange={1000}
            value={range}
            label={(value) => \`$\${value.toLocaleString()}\`}
            onChange={(value) => store.setColumnFilter('salary', value)}
          />
        </Group>
        <Button
          size={store.controlSize}
          variant="subtle"
          disabled={store.columnFilters.length === 0}
          onClick={() => store.resetColumnFilters()}
        >
          Reset
        </Button>
      </DataGrid.Toolbar>
    </DataGrid>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department', filterFn: 'equals' },
      { accessorKey: 'status', header: 'Status', filterFn: 'equals' },
      {
        accessorKey: 'salary',
        header: 'Salary',
        filterFn: 'inNumberRange',
        meta: { align: 'end' },
      },
    ],
    withFaceting: true,
  });

  const [min, max] = store.getFacetedMinMaxValues('salary') ?? [0, 0];
  const range = (store.getColumnFilterValue('salary') as [number, number] | undefined) ?? [
    min,
    max,
  ];

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Select
          size={store.controlSize}
          placeholder="Department"
          clearable
          data={store.getFacetedUniqueValues('department')}
          value={(store.getColumnFilterValue('department') as string) ?? null}
          onChange={(value) => store.setColumnFilter('department', value)}
        />
        <Select
          size={store.controlSize}
          placeholder="Status"
          clearable
          data={store.getFacetedUniqueValues('status')}
          value={(store.getColumnFilterValue('status') as string) ?? null}
          onChange={(value) => store.setColumnFilter('status', value)}
        />
        <Group gap="xs" wrap="nowrap" style={{ flex: 1, minWidth: 220 }}>
          <Text size="xs" c="dimmed">
            Salary
          </Text>
          <RangeSlider
            size="sm"
            style={{ flex: 1 }}
            min={min}
            max={max}
            step={1000}
            minRange={1000}
            value={range}
            label={(value) => `$${value.toLocaleString()}`}
            onChange={(value) => store.setColumnFilter('salary', value)}
          />
        </Group>
        <Button
          size={store.controlSize}
          variant="subtle"
          disabled={store.columnFilters.length === 0}
          onClick={() => store.resetColumnFilters()}
        >
          Reset
        </Button>
      </DataGrid.Toolbar>
    </DataGrid>
  );
}

export const facetedFilters: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
