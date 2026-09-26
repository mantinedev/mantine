import { useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Group,
  Menu,
  Popover,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { DataGrid, useDataGrid, useDataGridState, DataGridColumnDef } from './index';

export default { title: 'DataGrid' };

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  salary: number;
  status: 'active' | 'inactive';
}

const employees: Employee[] = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    department: 'Engineering',
    salary: 95000,
    status: 'active',
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    department: 'Marketing',
    salary: 72000,
    status: 'active',
  },
  {
    id: '3',
    firstName: 'Carol',
    lastName: 'Williams',
    email: 'carol.williams@example.com',
    department: 'Sales',
    salary: 68000,
    status: 'inactive',
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@example.com',
    department: 'HR',
    salary: 61000,
    status: 'active',
  },
  {
    id: '5',
    firstName: 'Eve',
    lastName: 'Davis',
    email: 'eve.davis@example.com',
    department: 'Finance',
    salary: 88000,
    status: 'active',
  },
  {
    id: '6',
    firstName: 'Frank',
    lastName: 'Miller',
    email: 'frank.miller@example.com',
    department: 'Engineering',
    salary: 105000,
    status: 'active',
  },
  {
    id: '7',
    firstName: 'Grace',
    lastName: 'Wilson',
    email: 'grace.wilson@example.com',
    department: 'Marketing',
    salary: 74000,
    status: 'inactive',
  },
  {
    id: '8',
    firstName: 'Henry',
    lastName: 'Moore',
    email: 'henry.moore@example.com',
    department: 'Sales',
    salary: 71000,
    status: 'active',
  },
  {
    id: '9',
    firstName: 'Ivy',
    lastName: 'Taylor',
    email: 'ivy.taylor@example.com',
    department: 'HR',
    salary: 59000,
    status: 'active',
  },
  {
    id: '10',
    firstName: 'Jack',
    lastName: 'Anderson',
    email: 'jack.anderson@example.com',
    department: 'Finance',
    salary: 92000,
    status: 'active',
  },
  {
    id: '11',
    firstName: 'Karen',
    lastName: 'Thomas',
    email: 'karen.thomas@example.com',
    department: 'Engineering',
    salary: 99000,
    status: 'inactive',
  },
  {
    id: '12',
    firstName: 'Leo',
    lastName: 'Jackson',
    email: 'leo.jackson@example.com',
    department: 'Marketing',
    salary: 67000,
    status: 'active',
  },
  {
    id: '13',
    firstName: 'Mia',
    lastName: 'White',
    email: 'mia.white@example.com',
    department: 'Sales',
    salary: 73000,
    status: 'active',
  },
  {
    id: '14',
    firstName: 'Nathan',
    lastName: 'Harris',
    email: 'nathan.harris@example.com',
    department: 'HR',
    salary: 64000,
    status: 'active',
  },
  {
    id: '15',
    firstName: 'Olivia',
    lastName: 'Martin',
    email: 'olivia.martin@example.com',
    department: 'Finance',
    salary: 86000,
    status: 'inactive',
  },
  {
    id: '16',
    firstName: 'Paul',
    lastName: 'Garcia',
    email: 'paul.garcia@example.com',
    department: 'Engineering',
    salary: 110000,
    status: 'active',
  },
  {
    id: '17',
    firstName: 'Quinn',
    lastName: 'Martinez',
    email: 'quinn.martinez@example.com',
    department: 'Marketing',
    salary: 69000,
    status: 'active',
  },
  {
    id: '18',
    firstName: 'Rachel',
    lastName: 'Robinson',
    email: 'rachel.robinson@example.com',
    department: 'Sales',
    salary: 75000,
    status: 'active',
  },
  {
    id: '19',
    firstName: 'Sam',
    lastName: 'Clark',
    email: 'sam.clark@example.com',
    department: 'HR',
    salary: 58000,
    status: 'inactive',
  },
  {
    id: '20',
    firstName: 'Tina',
    lastName: 'Rodriguez',
    email: 'tina.rodriguez@example.com',
    department: 'Finance',
    salary: 91000,
    status: 'active',
  },
];

const columns: DataGridColumnDef<Employee>[] = [
  { accessorKey: 'firstName', header: 'Name', enableSorting: true },
  { accessorKey: 'department', header: 'Department', enableSorting: true },
  {
    accessorKey: 'salary',
    header: 'Salary',
    enableSorting: true,
    cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
  },
  { accessorKey: 'status', header: 'Status' },
];

const largeData: Employee[] = Array.from({ length: 100000 }, (_, i) => ({
  id: String(i),
  firstName: `First${i}`,
  lastName: `Last${i}`,
  email: `user${i}@example.com`,
  department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5],
  salary: 30000 + (i % 100) * 1000,
  status: i % 3 === 0 ? ('inactive' as const) : ('active' as const),
}));

const manyRows: Employee[] = Array.from({ length: 50 }, (_, i) => ({
  id: String(i),
  firstName: `First${i}`,
  lastName: `Last${i}`,
  email: `user${i}@example.com`,
  department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5],
  salary: 40000 + (i % 80) * 1000,
  status: i % 4 === 0 ? ('inactive' as const) : ('active' as const),
}));

export function Usage() {
  const store = useDataGrid({ data: employees, columns, getRowId: (row) => row.id });
  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function CustomCells() {
  const customColumns: DataGridColumnDef<Employee>[] = [
    { accessorKey: 'firstName', header: 'Name' },
    {
      accessorKey: 'salary',
      header: 'Salary',
      cell: (info) => {
        const value = info.getValue<number>();
        const color = value >= 90000 ? 'teal' : value >= 70000 ? 'blue' : 'orange';
        return (
          <Text fw={600} c={color}>
            ${value.toLocaleString()}
          </Text>
        );
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: (info) => {
        const value = info.getValue<string>();
        return (
          <Badge color={value === 'active' ? 'green' : 'red'} variant="light">
            {value}
          </Badge>
        );
      },
    },
  ];

  const store = useDataGrid({ data: employees, columns: customColumns, getRowId: (row) => row.id });
  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function Sorting() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withSorting: true,
  });
  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function ColumnFilters() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withFiltering: true,
    withFaceting: true,
    withGlobalFilter: true,
  });
  const activeCount = store.columnFilters.length;
  return (
    <Box p="md">
      <DataGrid store={store}>
        <DataGrid.Toolbar>
          <DataGrid.GlobalFilter />
          <Popover position="bottom-start" shadow="md" width={260}>
            <Popover.Target>
              <Button
                variant="default"
                size={store.controlSize}
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
              <Stack gap="xs">
                <TextInput
                  size="xs"
                  label="Name contains"
                  value={(store.getColumnFilterValue('firstName') as string) ?? ''}
                  onChange={(event) =>
                    store.setColumnFilter('firstName', event.currentTarget.value)
                  }
                />
                <Select
                  size="xs"
                  label="Department"
                  clearable
                  data={store.getFacetedUniqueValues('department')}
                  value={(store.getColumnFilterValue('department') as string) ?? null}
                  onChange={(value) => store.setColumnFilter('department', value)}
                />
                <Select
                  size="xs"
                  label="Status"
                  clearable
                  data={store.getFacetedUniqueValues('status')}
                  value={(store.getColumnFilterValue('status') as string) ?? null}
                  onChange={(value) => store.setColumnFilter('status', value)}
                />
                <Button
                  size="xs"
                  variant="subtle"
                  disabled={activeCount === 0}
                  onClick={() => store.resetColumnFilters()}
                >
                  Clear filters
                </Button>
              </Stack>
            </Popover.Dropdown>
          </Popover>
          <DataGrid.RowCount />
        </DataGrid.Toolbar>
      </DataGrid>
    </Box>
  );
}

export function GlobalFilter() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
  });
  return (
    <Box p="md">
      <DataGrid store={store}>
        <DataGrid.Toolbar>
          <DataGrid.GlobalFilter placeholder="Search employees..." />
        </DataGrid.Toolbar>
      </DataGrid>
    </Box>
  );
}

export function Pagination() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    pageSize: 5,
  });
  return (
    <Stack p="md">
      <Text fw={600}>pagination="pages" (default)</Text>
      <DataGrid store={store}>
        <DataGrid.Footer pageSizeOptions={[5, 10, 20]} />
      </DataGrid>
      <Text fw={600}>pagination="arrows"</Text>
      <DataGrid store={store}>
        <DataGrid.Footer pagination="arrows" pageSizeOptions={[5, 10, 20]} />
      </DataGrid>
      <Text fw={600}>pagination="none", status only</Text>
      <DataGrid store={store}>
        <DataGrid.Footer pagination="none" />
      </DataGrid>
      <Text fw={600}>custom footer children</Text>
      <DataGrid store={store}>
        <DataGrid.Footer>
          <Text size="sm">
            Page {store.pagination.pageIndex + 1} of {store.table.getPageCount()}
          </Text>
          <Group gap="xs" ml="auto">
            <Button
              size={store.controlSize}
              variant="default"
              disabled={!store.table.getCanPreviousPage()}
              onClick={() => store.table.previousPage()}
            >
              Previous
            </Button>
            <Button
              size={store.controlSize}
              variant="default"
              disabled={!store.table.getCanNextPage()}
              onClick={() => store.table.nextPage()}
            >
              Next
            </Button>
          </Group>
        </DataGrid.Footer>
      </DataGrid>
    </Stack>
  );
}

export function ColumnResizing() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withColumnResizing: true,
  });
  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function ColumnPinning() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withColumnPinning: true,
    columnPinning: { start: ['firstName'], end: ['status'] },
  });
  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function ColumnVisibility() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withColumnVisibility: true,
  });
  return (
    <Box p="md">
      <DataGrid store={store}>
        <DataGrid.Toolbar>
          <Group justify="flex-end">
            <DataGrid.ColumnVisibilityToggle />
          </Group>
        </DataGrid.Toolbar>
      </DataGrid>
    </Box>
  );
}

export function RowSelection() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withRowSelection: true,
  });
  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function RowExpansion() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withRowExpansion: true,
  });
  return (
    <Box p="md">
      <DataGrid
        store={store}
        renderExpandedRow={({ row }) => (
          <Stack gap="xs" p="sm">
            <Text size="sm">
              <Text span fw={600}>
                Full Name:
              </Text>{' '}
              {row.original.firstName} {row.original.lastName}
            </Text>
            <Text size="sm">
              <Text span fw={600}>
                Email:
              </Text>{' '}
              {row.original.email}
            </Text>
            <Text size="sm">
              <Text span fw={600}>
                Department:
              </Text>{' '}
              {row.original.department}
            </Text>
            <Text size="sm">
              <Text span fw={600}>
                Annual Salary:
              </Text>{' '}
              ${row.original.salary.toLocaleString()}
            </Text>
          </Stack>
        )}
      />
    </Box>
  );
}

export function StripedHover() {
  const store = useDataGrid({
    data: employees.slice(0, 8),
    columns,
    getRowId: (row) => row.id,
    withRowSelection: true,
  });
  return (
    <Stack p="md">
      <Text fw={600}>striped + highlightOnHover</Text>
      <DataGrid store={store} striped highlightOnHover />
      <Text fw={600}>striped="even" without row rules</Text>
      <DataGrid store={store} striped="even" withRowBorders={false} highlightOnHover />
      <Text fw={600}>stripedColor + highlightOnHoverColor</Text>
      <DataGrid
        store={store}
        striped
        stripedColor="var(--mantine-primary-color-light)"
        highlightOnHover
        highlightOnHoverColor="var(--mantine-color-yellow-light)"
      />
    </Stack>
  );
}

export function Frame() {
  const store = useDataGrid({
    data: employees.slice(0, 5),
    columns,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    pageSize: 5,
  });
  return (
    <Stack p="md">
      <Text fw={600}>default frame (theme.defaultRadius)</Text>
      <DataGrid store={store}>
        <DataGrid.Toolbar />
        <DataGrid.Footer />
      </DataGrid>
      <Text fw={600}>radius="xl"</Text>
      <DataGrid store={store} radius="xl">
        <DataGrid.Toolbar />
        <DataGrid.Footer />
      </DataGrid>
      <Text fw={600}>radius={0}</Text>
      <DataGrid store={store} radius={0} />
      <Text fw={600}>withTableBorder={false} (toolbar and footer rules stay)</Text>
      <DataGrid store={store} withTableBorder={false}>
        <DataGrid.Toolbar />
        <DataGrid.Footer />
      </DataGrid>
      <Text fw={600}>borderColor="violet"</Text>
      <DataGrid store={store} borderColor="violet" withColumnBorders />
    </Stack>
  );
}

export function Separators() {
  const store = useDataGrid({
    data: employees.slice(0, 6),
    columns,
    getRowId: (row) => row.id,
    withRowSelection: true,
    withRowNumbers: true,
  });
  return (
    <Stack p="md">
      <Text fw={600}>withRowBorders (default)</Text>
      <DataGrid store={store} />
      <Text fw={600}>withRowBorders="subtle"</Text>
      <DataGrid store={store} withRowBorders="subtle" />
      <Text fw={600}>withRowBorders={false}</Text>
      <DataGrid store={store} withRowBorders={false} />
      <Text fw={600}>withColumnBorders (every column, utility columns included)</Text>
      <DataGrid store={store} withColumnBorders />
      <Text fw={600}>withColumnBorders="data" (utility columns share one divider)</Text>
      <DataGrid store={store} withColumnBorders="data" />
      <Text fw={600}>striped + withColumnBorders, subtle rules, tabularNums</Text>
      <DataGrid store={store} striped withColumnBorders withRowBorders="subtle" tabularNums />
    </Stack>
  );
}

export function Sizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
  return (
    <Stack p="md" gap="xl">
      {sizes.map((size) => (
        <SizedGrid key={size} size={size} />
      ))}
    </Stack>
  );
}

function SizedGrid({ size }: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }) {
  const store = useDataGrid({
    data: employees.slice(0, 4),
    columns,
    getRowId: (row) => row.id,
    size,
    withRowSelection: true,
    withRowNumbers: true,
  });
  return (
    <Stack gap="xs">
      <Text size="sm">size = {size}</Text>
      <DataGrid store={store} />
    </Stack>
  );
}

export function RowNumbers() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withRowNumbers: true,
  });
  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function Virtualization() {
  const store = useDataGrid({ data: largeData, columns, getRowId: (row) => row.id });
  return (
    <Box p="md">
      <DataGrid store={store} virtualize="rows" height={500} />
    </Box>
  );
}

export function VirtualizationRowHeight() {
  const store = useDataGrid({ data: largeData, columns, getRowId: (row) => row.id });
  const estimatedStore = useDataGrid({ data: largeData, columns, getRowId: (row) => row.id });
  return (
    <Stack p="md">
      <Text fw={600}>getRowHeight={'{() => 60}'}</Text>
      <DataGrid store={store} virtualize="rows" height={400} getRowHeight={() => 60} />
      <Text fw={600}>estimateRowHeight={'{60}'} (rows keep their natural height)</Text>
      <DataGrid store={estimatedStore} virtualize="rows" height={400} estimateRowHeight={60} />
    </Stack>
  );
}

interface NoteRow {
  id: string;
  title: string;
  note: string;
}

const noteSentence = 'This note wraps across several lines to exercise auto row height. ';
const noteRows: NoteRow[] = Array.from({ length: 500 }, (_, index) => ({
  id: String(index),
  title: `Note ${index + 1}`,
  note: noteSentence.repeat((index % 4) + 1).trim(),
}));

const noteColumns: DataGridColumnDef<NoteRow>[] = [
  { accessorKey: 'title', header: 'Title', size: 120 },
  { accessorKey: 'note', header: 'Note', size: 320 },
];

const getAutoRowHeight = () => 'auto' as const;

export function VirtualizationAutoRowHeight() {
  const store = useDataGrid({
    data: noteRows,
    columns: noteColumns,
    getRowId: (row) => row.id,
  });
  return (
    <Box p="md">
      <DataGrid
        store={store}
        virtualize="rows"
        height={500}
        textOverflow="wrap"
        getRowHeight={getAutoRowHeight}
      />
    </Box>
  );
}

export function Loading() {
  const store = useDataGrid({ data: employees, columns, getRowId: (row) => row.id });
  return (
    <Stack p="md">
      <Text fw={600}>overlay (default)</Text>
      <DataGrid store={store} loading />
      <Text fw={600}>bar</Text>
      <DataGrid store={store} loading loadingVariant="bar" />
      <Text fw={600}>skeleton</Text>
      <DataGrid store={store} loading loadingVariant="skeleton" skeletonRowCount={5} />
      <Text fw={600}>first load (no rows, any variant)</Text>
      <DataGrid data={[]} columns={columns} loading loadingVariant="bar" />
    </Stack>
  );
}

export function EmptyState() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
  });
  return (
    <Stack p="md">
      <DataGrid
        data={[]}
        columns={columns}
        emptyState={
          <Stack align="center" gap="xs" py="xl">
            <Text size="lg" fw={500} c="dimmed">
              No employees found
            </Text>
            <Text size="sm" c="dimmed">
              Try adjusting your filters or add new employees.
            </Text>
          </Stack>
        }
      />
      <DataGrid
        store={store}
        emptyState={({ isFiltered, filteredRowCount, rowCount }) => (
          <Stack align="center" gap="xs" py="xl">
            <Text size="lg" fw={500} c="dimmed">
              {isFiltered ? 'No matching employees' : 'No employees'}
            </Text>
            <Text size="sm" c="dimmed">
              {filteredRowCount} of {rowCount} rows match
            </Text>
          </Stack>
        )}
      >
        <DataGrid.Toolbar />
      </DataGrid>
    </Stack>
  );
}

export function StickyHeader() {
  const store = useDataGrid({ data: manyRows, columns, getRowId: (row) => row.id });
  return (
    <Box p="md">
      <DataGrid store={store} stickyHeader height={400} />
    </Box>
  );
}

export function Grouping() {
  const groupedColumns: DataGridColumnDef<Employee>[] = [
    { accessorKey: 'firstName', header: 'Name', enableSorting: true },
    { accessorKey: 'department', header: 'Department', enableSorting: true },
    {
      accessorKey: 'salary',
      header: 'Salary',
      enableSorting: true,
      meta: { align: 'end' },
      aggregationFn: 'mean',
      cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
      aggregatedCell: (info) => `avg $${Math.round(info.getValue<number>()).toLocaleString()}`,
    },
    { accessorKey: 'status', header: 'Status' },
  ];
  const store = useDataGrid({
    data: employees,
    columns: groupedColumns,
    getRowId: (row) => row.id,
    withGrouping: true,
    withRowSelection: true,
    withRowNumbers: true,
    grouping: ['department'],
  });
  return (
    <Stack p="md">
      <Text fw={600}>plain group rows (default)</Text>
      <DataGrid store={store} striped highlightOnHover />
      <Text fw={600}>withTintedGroupRows</Text>
      <DataGrid store={store} withTintedGroupRows highlightOnHover />
    </Stack>
  );
}

export function Editing() {
  const [data, setData] = useState(employees);
  const store = useDataGrid({
    data,
    columns,
    getRowId: (row) => row.id,
    editingMode: 'cell',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });

  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function CompoundComponents() {
  const columnsWithFooter: DataGridColumnDef<Employee>[] = [
    { accessorKey: 'firstName', header: 'Name', footer: 'Total' },
    {
      accessorKey: 'salary',
      header: 'Salary',
      cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce((sum, row) => sum + row.getValue<number>('salary'), 0);
        return `$${total.toLocaleString()}`;
      },
    },
    { accessorKey: 'status', header: 'Status' },
  ];

  const store = useDataGrid({
    data: employees,
    columns: columnsWithFooter,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    pageSize: 10,
    withColumnVisibility: true,
  });

  return (
    <Box p="md">
      <DataGrid store={store}>
        <DataGrid.Toolbar />
        <DataGrid.Footer pageSizeOptions={[5, 10, 20]} />
      </DataGrid>
    </Box>
  );
}

export function Footer() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withRowSelection: true,
    pageSize: 5,
  });
  return (
    <Stack p="md">
      <DataGrid store={store}>
        <DataGrid.Footer />
      </DataGrid>
      <DataGrid store={store}>
        <DataGrid.Footer statusFormat="long" pagination="arrows" />
      </DataGrid>
      <DataGrid store={store}>
        <DataGrid.Footer pagination="none" />
      </DataGrid>
      <DataGrid store={store}>
        <DataGrid.Footer withPageSize={false} />
      </DataGrid>
    </Stack>
  );
}

export function FooterSizes() {
  return (
    <Stack p="md">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <SizedFooterGrid key={size} size={size} />
      ))}
    </Stack>
  );
}

function SizedFooterGrid({ size }: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }) {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    pageSize: 3,
    size,
  });
  return (
    <DataGrid store={store}>
      <DataGrid.Footer statusFormat="long" />
    </DataGrid>
  );
}

export function ToolbarSizes() {
  return (
    <Stack p="md">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <SizedToolbarGrid key={size} size={size} />
      ))}
    </Stack>
  );
}

function SizedToolbarGrid({ size }: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }) {
  const store = useDataGrid({
    data: employees.slice(0, 3),
    columns,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    withColumnVisibility: true,
    size,
  });
  return (
    <DataGrid store={store}>
      <DataGrid.Toolbar />
    </DataGrid>
  );
}

export function ExportButton() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
  });
  return (
    <Box p="md">
      <DataGrid store={store}>
        <DataGrid.Toolbar>
          <DataGrid.ExportButton fileName="employees" />
          <DataGrid.ExportButton formats={['csv']}>Download CSV</DataGrid.ExportButton>
        </DataGrid.Toolbar>
      </DataGrid>
    </Box>
  );
}

export function RowCount() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
  });
  return (
    <Box p="md">
      <DataGrid store={store}>
        <DataGrid.Toolbar>
          <DataGrid.GlobalFilter />
          <DataGrid.RowCount />
        </DataGrid.Toolbar>
      </DataGrid>
    </Box>
  );
}

export function SelectionBar() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withRowSelection: true,
    withGlobalFilter: true,
    pageSize: 5,
  });
  return (
    <Stack p="md">
      <DataGrid store={store}>
        <DataGrid.Toolbar />
        <DataGrid.SelectionBar>
          <Button size={store.controlSize} color="red" variant="light">
            Delete
          </Button>
        </DataGrid.SelectionBar>
        <DataGrid.Footer />
      </DataGrid>
      <DataGrid store={store}>
        <DataGrid.Toolbar />
        <DataGrid.SelectionBar floating>
          <Button size={store.controlSize} color="red" variant="light">
            Delete
          </Button>
        </DataGrid.SelectionBar>
        <DataGrid.Footer />
      </DataGrid>
    </Stack>
  );
}

export function AllFeatures() {
  const [data, setData] = useState(employees);

  const store = useDataGrid({
    data,
    columns,
    getRowId: (row) => row.id,
    withSorting: true,
    withGlobalFilter: true,
    pageSize: 10,
    withColumnResizing: true,
    withColumnPinning: true,
    withColumnVisibility: true,
    withColumnReorder: true,
    withRowSelection: true,
    withRowExpansion: true,
    withGrouping: true,
    withRowNumbers: true,
    editingMode: 'cell',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });

  return (
    <Box p="md">
      <DataGrid
        store={store}
        striped
        highlightOnHover
        stickyHeader
        withColumnMenu
        height={500}
        renderExpandedRow={({ row }) => (
          <Text size="sm" p="sm">
            Details for {row.original.firstName} {row.original.lastName} — {row.original.department}
          </Text>
        )}
      >
        <DataGrid.Toolbar />
        <DataGrid.SelectionBar>
          <Button size={store.controlSize} variant="light" color="red">
            Delete
          </Button>
        </DataGrid.SelectionBar>
        <DataGrid.Footer statusFormat="long" />
      </DataGrid>
    </Box>
  );
}

export function SortIndicators() {
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      {
        accessorKey: 'salary',
        header: 'Salary',
        enableSorting: true,
        meta: { align: 'end' },
        cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
      },
      { accessorKey: 'status', header: 'Status', meta: { align: 'center' } },
    ],
    getRowId: (row) => row.id,
  });

  return (
    <Stack p="md">
      <Text fw={600}>hover / trailing (default)</Text>
      <DataGrid store={store} />
      <Text fw={600}>always / trailing</Text>
      <DataGrid store={store} sortIndicator="always" />
      <Text fw={600}>always / inline</Text>
      <DataGrid store={store} sortIndicator="always" sortIndicatorPosition="inline" />
    </Stack>
  );
}

export function ColumnMenu() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withColumnVisibility: true,
    withColumnPinning: true,
    withColumnResizing: true,
    withColumnReorder: true,
    withGrouping: true,
  });

  return (
    <Box p="md">
      <DataGrid
        store={store}
        withColumnMenu
        columnMenuItems={(column) => (
          <Menu.Item onClick={() => console.log(column.id)}>Log column id</Menu.Item>
        )}
      />
    </Box>
  );
}

export function ColumnReorder() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withColumnReorder: true,
    withRowSelection: true,
  });

  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

export function HeaderGroups() {
  const store = useDataGrid({
    data: employees,
    columns: [
      {
        id: 'person',
        header: 'Person',
        columns: [
          { accessorKey: 'firstName', header: 'First name', enableSorting: true },
          { accessorKey: 'lastName', header: 'Last name', enableSorting: true },
        ],
      },
      {
        id: 'work',
        header: 'Work',
        columns: [
          { accessorKey: 'department', header: 'Department', enableSorting: true },
          { accessorKey: 'salary', header: 'Salary', enableSorting: true, meta: { align: 'end' } },
        ],
      },
      { accessorKey: 'status', header: 'Status' },
    ],
    getRowId: (row) => row.id,
    withColumnResizing: true,
    withColumnReorder: true,
  });

  return (
    <Box p="md">
      <DataGrid store={store} withColumnMenu withColumnBorders />
    </Box>
  );
}

export function PinnedRows() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withRowPinning: true,
    withRowSelection: true,
    rowPinning: { top: [employees[0].id, employees[1].id], bottom: [employees[2].id] },
  });
  return (
    <Stack p="md">
      <Text fw={600}>sticky header + pinned rows, striped</Text>
      <DataGrid store={store} stickyHeader striped highlightOnHover height={300} />
      <Text fw={600}>pinned rows without sticky header</Text>
      <DataGrid store={store} height={300} />
    </Stack>
  );
}

export function ScrollToRowPinnedStickyOffset() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withRowPinning: true,
    rowPinning: { top: [employees[0].id], bottom: [] },
  });
  return (
    <Stack p="md">
      <Text fw={600}>
        stickyHeaderOffset 24 + top-pinned row: scrollToRow(10) lands the row right below the pinned
        row
      </Text>
      <Button w="fit-content" onClick={() => store.scrollToRow(10)}>
        Scroll to row 10
      </Button>
      <DataGrid store={store} stickyHeader stickyHeaderOffset={24} height={300} />
    </Stack>
  );
}

export function PinnedColumnsOverflow() {
  const store = useDataGrid({
    data: employees,
    columns: [
      ...columns,
      { accessorKey: 'email', header: 'Email', size: 260 },
      { id: 'department2', accessorKey: 'department', header: 'Department 2', size: 200 },
      { id: 'salary2', accessorKey: 'salary', header: 'Salary 2', size: 200 },
    ],
    getRowId: (row) => row.id,
    withColumnPinning: true,
    withRowSelection: true,
    withColumnResizing: true,
    columnPinning: { start: ['firstName'], end: ['status'] },
  });
  return (
    <Stack p="md" style={{ maxWidth: 720 }}>
      <Text fw={600}>scroll horizontally: divider always, shadow only while overflowing</Text>
      <DataGrid store={store} striped highlightOnHover />
      <Text fw={600}>withColumnBorders (edge divider suppressed by the column border)</Text>
      <DataGrid store={store} withColumnBorders />
    </Stack>
  );
}

export function RowEditing() {
  const [data, setData] = useState(employees);
  const [log, setLog] = useState<string[]>([]);
  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First name' },
      { accessorKey: 'lastName', header: 'Last name' },
      { accessorKey: 'email', header: 'Email', meta: { disableEditing: true } },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: {
          align: 'end',
          validate: (value) => (Number(value) > 0 ? null : 'Salary must be positive'),
        },
      },
      {
        id: 'actions',
        meta: { type: 'actions' },
        cell: ({ row }) => (
          <Group gap={4} justify="flex-end" wrap="nowrap">
            {row.getIsEditing() ? (
              <>
                <Button size="compact-xs" onClick={() => row.saveEditing()}>
                  Save
                </Button>
                <Button size="compact-xs" variant="subtle" onClick={() => row.cancelEditing()}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button size="compact-xs" variant="subtle" onClick={() => row.startEditing()}>
                Edit
              </Button>
            )}
          </Group>
        ),
      },
    ],
    getRowId: (row) => row.id,
    editingMode: 'row',
    getCellStatus: ({ row, columnId }) =>
      columnId === 'salary' && row.original.salary > 90000 ? 'dirty' : undefined,
    onEditStart: ({ row }) => setLog((prev) => [...prev, `start ${row.id}`]),
    onEditCancel: ({ row }) => setLog((prev) => [...prev, `cancel ${row.id}`]),
    onEditSave: ({ newRow, changedColumnIds }) =>
      new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (newRow.firstName === 'Error') {
            reject(new Error('Rejected by the server'));
            return;
          }
          setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
          setLog((prev) => [...prev, `save ${newRow.id}: ${changedColumnIds.join(', ')}`]);
          resolve();
        }, 600);
      }),
    onEditSaveError: (error) => setLog((prev) => [...prev, `error: ${String(error)}`]),
  });

  return (
    <Box p="md">
      <DataGrid store={store} withFloatingEditActions striped highlightOnHover />
      <Text size="sm" mt="md" c="dimmed">
        Type "Error" as the first name to see a rejected save. {log.join(' · ')}
      </Text>
    </Box>
  );
}

export function CellSelection() {
  const store = useDataGrid({
    data: employees.slice(0, 8),
    columns,
    getRowId: (row) => row.id,
    withCellSelection: true,
    withRowNumbers: true,
    withRowSelection: true,
  });
  return (
    <Stack p="md">
      <Text fw={600}>drag or shift+click to select a range, arrows move the focused cell</Text>
      <DataGrid store={store} />
      <Text fw={600}>virtual body</Text>
      <DataGrid store={store} virtualize="rows" height={220} />
    </Stack>
  );
}

export function ListView() {
  const store = useDataGrid({
    data: employees.slice(0, 5),
    columns,
    getRowId: (row) => row.id,
    withRowSelection: true,
    withGlobalFilter: true,
  });
  return (
    <Stack p="md">
      <Text fw={600}>listView (cards)</Text>
      <DataGrid store={store} listView selectOnRowClick>
        <DataGrid.Toolbar />
      </DataGrid>
      <Text fw={600}>listView="flat"</Text>
      <DataGrid store={store} listView="flat" selectOnRowClick highlightOnHover>
        <DataGrid.Toolbar />
        <DataGrid.Footer pagination="none" />
      </DataGrid>
      <Text fw={600}>custom renderListItem</Text>
      <DataGrid
        store={store}
        listView
        renderListItem={({ row }) => (
          <Group justify="space-between">
            <div>
              <Text fw={600}>
                {row.original.firstName} {row.original.lastName}
              </Text>
              <Text size="sm" c="dimmed">
                {row.original.email}
              </Text>
            </div>
            <Badge variant="light">{row.original.department}</Badge>
          </Group>
        )}
      />
    </Stack>
  );
}

const listViewEmployees = employees.slice(0, 6);

export function ListViewExpansionPinning() {
  const store = useDataGrid({
    data: listViewEmployees,
    columns,
    getRowId: (row) => row.id,
    withRowExpansion: true,
    withRowPinning: true,
    rowPinning: { top: [employees[0].id], bottom: [employees[1].id] },
  });
  return (
    <Stack p="md">
      <Text fw={600}>click an item to expand it; first and second employees are pinned</Text>
      <DataGrid
        store={store}
        listView
        expandOnRowClick
        renderExpandedRow={({ row }) => (
          <Text size="sm" c="dimmed">
            Details for {row.original.firstName} {row.original.lastName}
          </Text>
        )}
      />
    </Stack>
  );
}

export function ListViewHeightPinning() {
  const options = {
    data: employees,
    columns,
    getRowId: (row: Employee) => row.id,
    withRowPinning: true,
    rowPinning: { top: [employees[0].id], bottom: [employees[1].id] },
  };
  const cardsStore = useDataGrid(options);
  const flatStore = useDataGrid(options);
  const groupedStore = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withGrouping: true,
    grouping: ['department'],
  });
  return (
    <Stack p="md">
      <Text fw={600}>
        list scrolls inside height=360; first employee sticks to the top, second to the bottom
      </Text>
      <DataGrid store={cardsStore} listView height={360} />
      <DataGrid store={flatStore} listView="flat" height={360} />
      <Text fw={600}>grouped list: group items toggle through an aria-expanded button</Text>
      <DataGrid store={groupedStore} listView="flat" height={360} />
    </Stack>
  );
}

function createScrollEmployees(start: number, count: number): Employee[] {
  return Array.from({ length: count }, (_, index) => {
    const source = employees[(start + index) % employees.length];
    return { ...source, id: `scroll-${start + index}` };
  });
}

export function ScrollToBottomScrollArea() {
  const [data, setData] = useState(() => createScrollEmployees(0, 30));
  const [loads, setLoads] = useState(0);
  const store = useDataGrid({ data, columns, getRowId: (row) => row.id });
  const plainStore = useDataGrid({ data, columns, getRowId: (row) => row.id });
  return (
    <Stack p="md">
      <Text fw={600}>
        onScrollToBottom keeps the ScrollArea and scrollAreaProps (10px scrollbars); loads: {loads},
        rows: {data.length}
      </Text>
      <DataGrid
        store={store}
        height={360}
        scrollAreaProps={{ type: 'always', scrollbarSize: 10 }}
        onScrollToBottom={() => {
          setLoads((current) => current + 1);
          setData((current) => [...current, ...createScrollEmployees(current.length, 20)]);
        }}
      />
      <Text fw={600}>withScrollArea=false uses a plain scroll container</Text>
      <DataGrid store={plainStore} height={240} withScrollArea={false} />
    </Stack>
  );
}

function ColumnVirtualizationPinnedGrid({
  virtualize,
}: {
  virtualize: 'columns' | 'rows,columns';
}) {
  const wideColumns: DataGridColumnDef<Employee>[] = Array.from({ length: 30 }, (_, index) => ({
    id: `col${index}`,
    header: `Column ${index + 1}`,
    accessorFn: (row) => `${row.firstName} ${index + 1}`,
    size: 140,
  }));
  const store = useDataGrid({
    data: employees,
    columns: [{ accessorKey: 'firstName', header: 'Name', size: 160 }, ...wideColumns],
    getRowId: (row) => row.id,
    withColumnPinning: true,
    withColumnResizing: true,
    columnPinning: { start: ['firstName'], end: ['col29'] },
  });
  return <DataGrid store={store} virtualize={virtualize} height={320} withColumnBorders />;
}

export function ColumnVirtualizationPinned() {
  return (
    <Stack p="md" style={{ maxWidth: 900 }}>
      <Text fw={600}>virtualize="columns" with start and end pinned columns</Text>
      <ColumnVirtualizationPinnedGrid virtualize="columns" />
      <Text fw={600}>virtualize="rows,columns"</Text>
      <ColumnVirtualizationPinnedGrid virtualize="rows,columns" />
    </Stack>
  );
}

const groupedSelectionColumns: DataGridColumnDef<Employee>[] = [
  { accessorKey: 'firstName', header: 'First name' },
  { accessorKey: 'department', header: 'Department' },
  { accessorKey: 'salary', header: 'Salary', aggregationFn: 'sum', meta: { align: 'end' } },
];

function GroupingCellSelectionGrid({ virtual }: { virtual?: boolean }) {
  const store = useDataGrid({
    data: employees,
    columns: groupedSelectionColumns,
    getRowId: (row) => row.id,
    withGrouping: true,
    withCellSelection: true,
    grouping: ['department'],
  });
  return virtual ? (
    <DataGrid store={store} virtualize="rows" height={320} />
  ) : (
    <DataGrid store={store} />
  );
}

export function GroupingCellSelection() {
  return (
    <Stack p="md" style={{ maxWidth: 720 }}>
      <Text fw={600}>Tab to a group toggle, press Enter or Space to expand it</Text>
      <GroupingCellSelectionGrid />
      <Text fw={600}>virtual body</Text>
      <GroupingCellSelectionGrid virtual />
    </Stack>
  );
}

interface TreeEmployee extends Employee {
  subRows?: TreeEmployee[];
}

const treeEmployees: TreeEmployee[] = [
  {
    ...employees[0],
    subRows: [
      { ...employees[5], subRows: [employees[10], employees[15]] },
      { ...employees[1], subRows: [employees[6]] },
      employees[11],
    ],
  },
  { ...employees[4], subRows: [employees[9], employees[14], employees[19]] },
  employees[3],
];

const treeColumns: DataGridColumnDef<TreeEmployee>[] = [
  { accessorKey: 'firstName', header: 'Name' },
  { accessorKey: 'department', header: 'Department' },
  {
    accessorKey: 'salary',
    header: 'Salary',
    meta: { align: 'end' },
    cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
  },
];

export function TreeData() {
  const store = useDataGrid({
    data: treeEmployees,
    columns: treeColumns,
    getRowId: (row) => row.id,
    getSubRows: (row) => row.subRows,
    withRowSelection: true,
    withRowNumbers: true,
    tableOptions: { initialState: { expanded: true } },
  });
  return (
    <Stack p="md">
      <Text fw={600}>withTreeLines (default)</Text>
      <DataGrid store={store} />
      <Text fw={600}>withTreeLines={'{false}'}, striped</Text>
      <DataGrid store={store} withTreeLines={false} striped />
      <Text fw={600}>virtual body</Text>
      <DataGrid store={store} virtualize="rows" height={260} />
    </Stack>
  );
}

export function ExpandedRows() {
  const store = useDataGrid({
    data: employees.slice(0, 6),
    columns,
    getRowId: (row) => row.id,
    withRowExpansion: true,
    withRowSelection: true,
    expanded: { '2': true, '4': true },
  });
  const renderExpandedRow = ({ row }: { row: { original: Employee } }) => (
    <Text size="sm">
      {row.original.firstName} {row.original.lastName} · {row.original.email} · $
      {row.original.salary.toLocaleString()}
    </Text>
  );
  return (
    <Stack p="md">
      <Text fw={600}>plain (default), expandOnRowClick, striped</Text>
      <DataGrid store={store} striped expandOnRowClick renderExpandedRow={renderExpandedRow} />
      <Text fw={600}>withTintedExpandedRows</Text>
      <DataGrid
        store={store}
        withTintedExpandedRows
        highlightOnHover
        expandOnRowClick
        renderExpandedRow={renderExpandedRow}
      />
      <Text fw={600}>virtual body</Text>
      <DataGrid
        store={store}
        virtualize="rows"
        height={280}
        expandOnRowClick
        renderExpandedRow={renderExpandedRow}
      />
    </Stack>
  );
}

export function Totals() {
  const totalsColumns: DataGridColumnDef<Employee>[] = [
    { accessorKey: 'firstName', header: 'Name', footer: 'Totals' },
    { accessorKey: 'department', header: 'Department', aggregationFn: 'uniqueCount' },
    {
      accessorKey: 'salary',
      header: 'Salary',
      meta: {
        align: 'end',
        aggregationLabel: 'Payroll',
        formatAggregatedValue: (value) => `$${Number(value).toLocaleString()}`,
      },
      aggregationFn: 'sum',
      cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
    },
    {
      id: 'meanSalary',
      accessorFn: (row) => row.salary,
      header: 'Mean salary',
      meta: {
        align: 'end',
        formatAggregatedValue: (value) => `$${Math.round(Number(value)).toLocaleString()}`,
      },
      aggregationFn: 'mean',
      cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
    },
    { accessorKey: 'status', header: 'Status', aggregationFn: 'count' },
  ];
  const store = useDataGrid({
    data: employees,
    columns: totalsColumns,
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    withRowSelection: true,
    pageSize: 5,
  });
  return (
    <Stack p="md">
      <Text fw={600}>totals over every filtered row, footer after the tfoot</Text>
      <DataGrid store={store}>
        <DataGrid.Toolbar />
        <DataGrid.Footer />
      </DataGrid>
      <Text fw={600}>virtual body</Text>
      <DataGrid store={store} virtualize="rows" height={200} />
      <Text fw={600}>virtual body, horizontal scroll and column virtualization</Text>
      <Box maw={480}>
        <DataGrid store={store} virtualize="rows,columns" height={200} />
      </Box>
    </Stack>
  );
}

function CellStatusGrid({ virtual }: { virtual?: boolean }) {
  const [data, setData] = useState(employees.slice(0, 8));
  const [saved] = useState(() => new Map(employees.map((item) => [item.id, item])));
  const store = useDataGrid({
    data,
    columns: [
      { accessorKey: 'firstName', header: 'First name' },
      { accessorKey: 'lastName', header: 'Last name' },
      {
        accessorKey: 'email',
        header: 'Email',
        meta: {
          validate: (value) => (String(value).includes('@') ? null : 'Enter a valid email'),
        },
      },
      {
        accessorKey: 'salary',
        header: 'Salary',
        meta: {
          align: 'end',
          validate: (value) => (Number(value) >= 30000 ? null : 'Salary must be at least 30000'),
        },
      },
    ],
    getRowId: (row) => row.id,
    editingMode: 'cell',
    getCellStatus: ({ row, columnId, value }) => {
      if (columnId === 'salary' && Number(value) > 100000) {
        return 'invalid';
      }
      const original = saved.get(row.id);
      return original && (original as any)[columnId] !== value ? 'dirty' : undefined;
    },
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });
  return virtual ? (
    <DataGrid store={store} virtualize="rows" height={220} />
  ) : (
    <DataGrid store={store} striped highlightOnHover />
  );
}

export function CellStatus() {
  return (
    <Stack p="md">
      <Text fw={600}>
        double-click to edit: changed cells are dirty, salaries above 100000 are invalid, an invalid
        draft blocks the save
      </Text>
      <CellStatusGrid />
      <Text fw={600}>virtual body</Text>
      <CellStatusGrid virtual />
    </Stack>
  );
}

export function VirtualizationParity() {
  const [data, setData] = useState(manyRows);
  const parityColumns: DataGridColumnDef<Employee>[] = [
    { accessorKey: 'firstName', header: 'Name', enableSorting: true },
    { accessorKey: 'department', header: 'Department', enableSorting: true },
    {
      accessorKey: 'salary',
      header: 'Salary',
      enableSorting: true,
      meta: { align: 'end' },
      cell: (info) => `$${info.getValue<number>().toLocaleString()}`,
    },
    { accessorKey: 'email', header: 'Email', size: 260 },
    { accessorKey: 'status', header: 'Status', meta: { align: 'center' } },
  ];
  const store = useDataGrid({
    data,
    columns: parityColumns,
    getRowId: (row) => row.id,
    withRowSelection: true,
    withRowNumbers: true,
    withRowExpansion: true,
    withColumnPinning: true,
    withColumnResizing: true,
    withColumnReorder: true,
    columnPinning: { start: ['firstName'], end: ['status'] },
    rowSelection: { '1': true, '2': true },
    editingMode: 'cell',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });
  const renderExpandedRow = ({ row }: { row: { original: Employee } }) => (
    <Text size="sm">{row.original.email}</Text>
  );
  return (
    <Stack p="md" style={{ maxWidth: 760 }}>
      <Text fw={600}>table body</Text>
      <DataGrid
        store={store}
        striped
        highlightOnHover
        withColumnMenu
        sortIndicator="always"
        stickyHeader
        height={260}
        renderExpandedRow={renderExpandedRow}
      >
        <DataGrid.Toolbar />
        <DataGrid.Footer pagination="none" />
      </DataGrid>
      <Text fw={600}>virtual body, same store and props</Text>
      <DataGrid
        store={store}
        striped
        highlightOnHover
        withColumnMenu
        sortIndicator="always"
        virtualize="rows"
        height={260}
        renderExpandedRow={renderExpandedRow}
      >
        <DataGrid.Toolbar />
        <DataGrid.Footer pagination="none" />
      </DataGrid>
    </Stack>
  );
}

export function RowReorder() {
  const [rows, setRows] = useState(employees.slice(0, 6));
  const store = useDataGrid({
    data: rows,
    columns,
    getRowId: (row) => row.id,
    withRowReorder: true,
    onRowOrderChange: setRows,
  });

  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
  );
}

const floatingTotalsColumns: DataGridColumnDef<Employee>[] = [
  { accessorKey: 'firstName', header: 'First name' },
  { accessorKey: 'lastName', header: 'Last name' },
  { accessorKey: 'salary', header: 'Salary', aggregationFn: 'sum', meta: { align: 'end' } },
];

export function FloatingEditActionsVirtualTotals() {
  const [data, setData] = useState(employees);
  const store = useDataGrid({
    data,
    columns: floatingTotalsColumns,
    getRowId: (row) => row.id,
    editingMode: 'row',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });
  return (
    <Stack p="md" style={{ maxWidth: 720 }}>
      <Text fw={600}>
        edit a row near the bottom, then scroll it under the totals row: the pill stays above the
        footer and hides when the row is covered
      </Text>
      <DataGrid store={store} virtualize="rows" height={250} withFloatingEditActions />
    </Stack>
  );
}

export function FloatingEditActionsVirtualExpansion() {
  const [data, setData] = useState(employees.slice(0, 20));
  const store = useDataGrid({
    data,
    columns,
    getRowId: (row) => row.id,
    withRowExpansion: true,
    editingMode: 'row',
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });
  return (
    <Stack p="md">
      <Text fw={600}>
        edit the 4th row, then expand the 1st row: the edited row moves down and the pill follows it
      </Text>
      <DataGrid
        store={store}
        virtualize="rows"
        height={360}
        withFloatingEditActions
        renderExpandedRow={({ row }) => (
          <Text size="sm" py="lg">
            {row.original.firstName} {row.original.lastName} · {row.original.email}
          </Text>
        )}
      />
    </Stack>
  );
}

export function FloatingEditActionsPinnedRows() {
  const [data, setData] = useState(employees);
  const store = useDataGrid({
    data,
    columns: floatingTotalsColumns,
    getRowId: (row) => row.id,
    editingMode: 'row',
    withRowPinning: true,
    rowPinning: { top: [employees[0].id], bottom: [employees[1].id] },
    onEditSave: ({ newRow }) => {
      setData((prev) => prev.map((item) => (item.id === newRow.id ? newRow : item)));
    },
  });
  return (
    <Stack p="md" style={{ maxWidth: 720 }}>
      <Text fw={600}>
        double click the top-pinned or bottom-pinned row: the Save / Cancel pill stays visible while
        the body scrolls
      </Text>
      <DataGrid store={store} height={250} stickyHeader withFloatingEditActions />
    </Stack>
  );
}

export function VirtualizationMixedPinnedGroup() {
  const extraGroups: DataGridColumnDef<Employee>[] = Array.from({ length: 8 }, (_, group) => ({
    id: `group${group}`,
    header: `Group ${group + 1}`,
    columns: [0, 1].map((leaf) => ({
      id: `col${group * 2 + leaf}`,
      header: `Column ${group * 2 + leaf + 1}`,
      accessorFn: (row: Employee) => `${row.firstName} ${group * 2 + leaf + 1}`,
      size: 140,
    })),
  }));
  const store = useDataGrid({
    data: employees,
    columns: [
      { accessorKey: 'firstName', header: 'Name', size: 140 },
      {
        id: 'contact',
        header: 'Contact',
        columns: [
          { accessorKey: 'email', header: 'Email', size: 220 },
          { accessorKey: 'department', header: 'Department', size: 160 },
        ],
      },
      ...extraGroups,
    ],
    getRowId: (row) => row.id,
    withColumnPinning: true,
    columnPinning: { start: ['firstName', 'email'], end: [] },
  });
  return (
    <Stack p="md" style={{ maxWidth: 900 }}>
      <Text fw={600}>
        virtualize="columns": the Contact group spans a start-pinned (Email) and an unpinned
        (Department) column
      </Text>
      <DataGrid store={store} virtualize="columns" height={320} withColumnBorders />
    </Stack>
  );
}

const STATE_PERSISTENCE_STORAGE_KEY = 'mantine-data-grid-story-state';

export function StatePersistence() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withSorting: true,
    withColumnReorder: true,
    withGrouping: true,
    withRowSelection: true,
  });

  useDataGridState({
    store,
    stateStorageKey: STATE_PERSISTENCE_STORAGE_KEY,
    persistedState: ['sorting', 'columnOrder', 'grouping', 'rowSelection', 'size'],
  });

  return (
    <Stack p="md">
      <Text fw={600}>
        Reorder columns, group by a column (column menu), select rows, then reload the page: the
        state is restored from localStorage
      </Text>
      <Group>
        <Button
          size="xs"
          variant="default"
          onClick={() => {
            localStorage.removeItem(STATE_PERSISTENCE_STORAGE_KEY);
            window.location.reload();
          }}
        >
          Clear saved state and reload
        </Button>
      </Group>
      <DataGrid store={store} withColumnMenu />
    </Stack>
  );
}

const getGroupingRowHeight = () => 48;

export function GroupingRowHeight() {
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withGrouping: true,
    grouping: ['department'],
    tableOptions: { initialState: { expanded: true } },
  });
  const virtualStore = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withGrouping: true,
    grouping: ['department'],
    tableOptions: { initialState: { expanded: true } },
  });

  return (
    <Stack p="md">
      <Text fw={600}>getRowHeight={'{() => 48}'}: group rows and data rows are 48px</Text>
      <DataGrid store={store} getRowHeight={getGroupingRowHeight} striped />
      <Text fw={600}>virtualize=&quot;rows&quot;</Text>
      <DataGrid
        store={virtualStore}
        virtualize="rows"
        height={300}
        getRowHeight={getGroupingRowHeight}
        striped
      />
    </Stack>
  );
}
