import { useState } from 'react';
import { Badge, Box, Button, Group, Menu, Select, Stack, Text, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid, DataGridColumnDef } from './index';

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
  });
  return (
    <Box p="md">
      <DataGrid store={store}>
        <DataGrid.Toolbar>
          <TextInput
            size={store.controlSize}
            placeholder="First name contains"
            value={(store.getColumnFilterValue('firstName') as string) ?? ''}
            onChange={(event) => store.setColumnFilter('firstName', event.currentTarget.value)}
          />
          <Select
            size={store.controlSize}
            placeholder="Department"
            clearable
            data={store.getFacetedUniqueValues('department')}
            value={(store.getColumnFilterValue('department') as string) ?? null}
            onChange={(value) => store.setColumnFilter('department', value)}
          />
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
    <Box p="md">
      <DataGrid store={store}>
        <DataGrid.Footer pageSizeOptions={[5, 10, 20]} />
      </DataGrid>
    </Box>
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
  const store = useDataGrid({ data: employees, columns, getRowId: (row) => row.id });
  return (
    <Box p="md">
      <DataGrid store={store} striped highlightOnHover />
    </Box>
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
  const store = useDataGrid({
    data: employees,
    columns,
    getRowId: (row) => row.id,
    withGrouping: true,
    grouping: ['department'],
  });
  return (
    <Box p="md">
      <DataGrid store={store} />
    </Box>
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
    withFiltering: true,
    withGlobalFilter: true,
    pageSize: 10,
    withColumnResizing: true,
    withColumnPinning: true,
    withColumnVisibility: true,
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
        height={500}
        renderExpandedRow={({ row }) => (
          <Text size="sm" p="sm">
            Details for {row.original.firstName} {row.original.lastName} — {row.original.department}
          </Text>
        )}
      >
        <DataGrid.Footer />
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

export function PinnedColumnsOverflow() {
  const store = useDataGrid({
    data: employees,
    columns: [
      ...columns,
      { accessorKey: 'email', header: 'Email', size: 260 },
      { accessorKey: 'department', header: 'Department 2', size: 200 },
      { accessorKey: 'salary', header: 'Salary 2', size: 200 },
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
