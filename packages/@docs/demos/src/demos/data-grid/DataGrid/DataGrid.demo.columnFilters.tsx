import { Badge, Button, Group, Popover, Select, Stack, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, employees } from './_data';

const code = `
import { Badge, Button, Group, Popover, Select, Stack, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { employees } from './data';

function Demo() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'First Name', enableColumnFilter: true },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department', filterFn: 'equals' },
      { accessorKey: 'status', header: 'Status', filterFn: 'equals' },
    ],
    withFaceting: true,
  });

  const activeCount = store.getColumnFilters().length;

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Popover position="bottom-start" shadow="md">
          <Popover.Target>
            <Button
              size={store.getControlSize()}
              variant="default"
              rightSection={activeCount > 0 ? <Badge size="xs" circle>{activeCount}</Badge> : null}
            >
              Filters
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap="sm" w={240}>
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
              <Group justify="flex-end">
                <Button
                  size="xs"
                  variant="default"
                  disabled={activeCount === 0}
                  onClick={() => store.resetColumnFilters()}
                >
                  Clear all
                </Button>
              </Group>
            </Stack>
          </Popover.Dropdown>
        </Popover>
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
      { accessorKey: 'email', header: 'Email', size: 220 },
      { accessorKey: 'department', header: 'Department', filterFn: 'equals' },
      { accessorKey: 'status', header: 'Status', filterFn: 'equals' },
    ],
    withFaceting: true,
  });

  const activeCount = store.getColumnFilters().length;

  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar>
        <Popover position="bottom-start" shadow="md">
          <Popover.Target>
            <Button
              size={store.getControlSize()}
              variant="default"
              rightSection={
                activeCount > 0 ? (
                  <Badge size="xs" circle>
                    {activeCount}
                  </Badge>
                ) : null
              }
            >
              Filters
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap="sm" w={240}>
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
              <Group justify="flex-end">
                <Button
                  size="xs"
                  variant="default"
                  disabled={activeCount === 0}
                  onClick={() => store.resetColumnFilters()}
                >
                  Clear all
                </Button>
              </Group>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </DataGrid.Toolbar>
    </DataGrid>
  );
}

export const columnFilters: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
