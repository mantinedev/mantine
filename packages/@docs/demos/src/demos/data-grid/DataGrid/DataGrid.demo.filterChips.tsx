import { Button, Pill, Popover, Select, Stack, TextInput } from '@mantine/core';
import { DataGrid, getColumnLabel, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Button, Pill, Popover, Select, Stack, TextInput } from '@mantine/core';
import { DataGrid, getColumnLabel, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department', filterFn: 'equals' },
      { accessorKey: 'status', header: 'Status', filterFn: 'equals' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    withFaceting: true,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Popover position="bottom-start" shadow="md">
          <Popover.Target>
            <Button size={store.controlSize} variant="default">
              Add filter
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap="sm" w={220}>
              <TextInput
                label="First name"
                placeholder="Contains"
                value={(store.getColumnFilterValue('firstName') as string) ?? ''}
                onChange={(event) => store.setColumnFilter('firstName', event.currentTarget.value)}
              />
              <Select
                label="Department"
                placeholder="Any"
                clearable
                data={store.getFacetedUniqueValues('department')}
                value={(store.getColumnFilterValue('department') as string) ?? null}
                onChange={(value) => store.setColumnFilter('department', value)}
              />
              <Select
                label="Status"
                placeholder="Any"
                clearable
                data={store.getFacetedUniqueValues('status')}
                value={(store.getColumnFilterValue('status') as string) ?? null}
                onChange={(value) => store.setColumnFilter('status', value)}
              />
            </Stack>
          </Popover.Dropdown>
        </Popover>
        {store.columnFilters.map((filter) => {
          const column = store.table.getColumn(filter.id);
          return column ? (
            <Pill
              key={filter.id}
              size={store.controlSize}
              withRemoveButton
              onRemove={() => store.setColumnFilter(filter.id, undefined)}
            >
              {getColumnLabel(column)}: {String(filter.value)}
            </Pill>
          ) : null;
        })}
        {store.columnFilters.length > 0 && (
          <Button size={store.controlSize} variant="subtle" onClick={() => store.resetColumnFilters()}>
            Clear all
          </Button>
        )}
      </DataGrid.Toolbar>
    </DataGrid>
  );
}
`;

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'department', header: 'Department', filterFn: 'equals' },
      { accessorKey: 'status', header: 'Status', filterFn: 'equals' },
      { accessorKey: 'salary', header: 'Salary', meta: { align: 'end' } },
    ],
    withFaceting: true,
  });

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Popover position="bottom-start" shadow="md">
          <Popover.Target>
            <Button size={store.controlSize} variant="default">
              Add filter
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap="sm" w={220}>
              <TextInput
                label="First name"
                placeholder="Contains"
                value={(store.getColumnFilterValue('firstName') as string) ?? ''}
                onChange={(event) => store.setColumnFilter('firstName', event.currentTarget.value)}
              />
              <Select
                label="Department"
                placeholder="Any"
                clearable
                data={store.getFacetedUniqueValues('department')}
                value={(store.getColumnFilterValue('department') as string) ?? null}
                onChange={(value) => store.setColumnFilter('department', value)}
              />
              <Select
                label="Status"
                placeholder="Any"
                clearable
                data={store.getFacetedUniqueValues('status')}
                value={(store.getColumnFilterValue('status') as string) ?? null}
                onChange={(value) => store.setColumnFilter('status', value)}
              />
            </Stack>
          </Popover.Dropdown>
        </Popover>
        {store.columnFilters.map((filter) => {
          const column = store.table.getColumn(filter.id);
          return column ? (
            <Pill
              key={filter.id}
              size={store.controlSize}
              withRemoveButton
              onRemove={() => store.setColumnFilter(filter.id, undefined)}
            >
              {getColumnLabel(column)}: {String(filter.value)}
            </Pill>
          ) : null;
        })}
        {store.columnFilters.length > 0 && (
          <Button
            size={store.controlSize}
            variant="subtle"
            onClick={() => store.resetColumnFilters()}
          >
            Clear all
          </Button>
        )}
      </DataGrid.Toolbar>
    </DataGrid>
  );
}

export const filterChips: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
