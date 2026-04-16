import React, { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Badge, Box, Group, Stack, Text } from '@mantine/core';
import { DataGrid } from './index';

export default { title: 'data-grid/DataGrid' };

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

const columns: ColumnDef<Employee>[] = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'department', header: 'Department' },
  {
    accessorKey: 'salary',
    header: 'Salary',
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
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} />
    </Box>
  );
}

export function CustomCells() {
  const customColumns: ColumnDef<Employee>[] = [
    { accessorKey: 'firstName', header: 'First Name' },
    { accessorKey: 'lastName', header: 'Last Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'department', header: 'Department' },
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

  return (
    <Box p="md">
      <DataGrid data={employees} columns={customColumns} getRowId={(row) => row.id} />
    </Box>
  );
}

export function Sorting() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} withSorting />
    </Box>
  );
}

export function ColumnFilters() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} withFiltering />
    </Box>
  );
}

export function GlobalFilter() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} withGlobalFilter>
        <DataGrid.Toolbar>
          <DataGrid.GlobalFilter placeholder="Search employees..." />
        </DataGrid.Toolbar>
        <Box component="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <DataGrid.Header />
          <DataGrid.Body />
        </Box>
      </DataGrid>
    </Box>
  );
}

export function Pagination() {
  return (
    <Box p="md">
      <DataGrid
        data={employees}
        columns={columns}
        getRowId={(row) => row.id}
        withPagination
        pageSize={5}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
}

export function ColumnResizing() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} withColumnResizing />
    </Box>
  );
}

export function ColumnPinning() {
  return (
    <Box p="md">
      <DataGrid
        data={employees}
        columns={columns}
        getRowId={(row) => row.id}
        withColumnPinning
        columnPinning={{ left: ['firstName'], right: ['status'] }}
      />
    </Box>
  );
}

export function ColumnVisibility() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} withColumnVisibility>
        <DataGrid.Toolbar>
          <Group justify="flex-end">
            <DataGrid.ColumnVisibilityToggle />
          </Group>
        </DataGrid.Toolbar>
        <Box component="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <DataGrid.Header />
          <DataGrid.Body />
        </Box>
      </DataGrid>
    </Box>
  );
}

export function RowSelection() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} withRowSelection />
    </Box>
  );
}

export function RowExpansion() {
  return (
    <Box p="md">
      <DataGrid
        data={employees}
        columns={columns}
        getRowId={(row) => row.id}
        withRowExpansion
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
  return (
    <Box p="md">
      <DataGrid
        data={employees}
        columns={columns}
        getRowId={(row) => row.id}
        withStriped
        withHighlightOnHover
      />
    </Box>
  );
}

export function RowNumbers() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} withRowNumbers />
    </Box>
  );
}

export function Virtualization() {
  return (
    <Box p="md">
      <DataGrid
        data={largeData}
        columns={columns}
        getRowId={(row) => row.id}
        withVirtualization
        height={500}
      />
    </Box>
  );
}

export function Loading() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id} loading />
    </Box>
  );
}

export function EmptyState() {
  return (
    <Box p="md">
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
    </Box>
  );
}

export function StickyHeader() {
  return (
    <Box p="md">
      <DataGrid
        data={manyRows}
        columns={columns}
        getRowId={(row) => row.id}
        withStickyHeader
        height={400}
      />
    </Box>
  );
}

export function Grouping() {
  return (
    <Box p="md">
      <DataGrid
        data={employees}
        columns={columns}
        getRowId={(row) => row.id}
        withGrouping
        grouping={['department']}
      />
    </Box>
  );
}

export function Editing() {
  const [data, setData] = useState(employees);

  return (
    <Box p="md">
      <DataGrid
        data={data}
        columns={columns}
        getRowId={(row) => row.id}
        withEditing
        editingMode="cell"
        onCellEdit={({ row, columnId, value }) => {
          setData((prev) =>
            prev.map((item) =>
              item.id === row.original.id ? { ...item, [columnId]: value } : item
            )
          );
        }}
      />
    </Box>
  );
}

export function Density() {
  return (
    <Box p="md">
      <DataGrid data={employees} columns={columns} getRowId={(row) => row.id}>
        <DataGrid.Toolbar>
          <Group justify="flex-end">
            <DataGrid.DensityToggle />
          </Group>
        </DataGrid.Toolbar>
        <Box component="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <DataGrid.Header />
          <DataGrid.Body />
        </Box>
      </DataGrid>
    </Box>
  );
}

export function CompoundComponents() {
  const columnsWithFooter: ColumnDef<Employee>[] = [
    { accessorKey: 'firstName', header: 'First Name', footer: 'Total' },
    { accessorKey: 'lastName', header: 'Last Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'department', header: 'Department' },
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

  return (
    <Box p="md">
      <DataGrid
        data={employees}
        columns={columnsWithFooter}
        getRowId={(row) => row.id}
        withGlobalFilter
        withPagination
        pageSize={10}
        withColumnVisibility
      >
        <DataGrid.Toolbar>
          <Group justify="space-between">
            <DataGrid.GlobalFilter placeholder="Search..." />
            <DataGrid.ColumnVisibilityToggle />
          </Group>
        </DataGrid.Toolbar>
        <Box component="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <DataGrid.Header />
          <DataGrid.Body />
          <DataGrid.Footer />
        </Box>
        <DataGrid.Pagination pageSizeOptions={[5, 10, 20]} />
        <DataGrid.StatusBar />
      </DataGrid>
    </Box>
  );
}

export function AllFeatures() {
  const [data, setData] = useState(employees);

  return (
    <Box p="md">
      <DataGrid
        data={data}
        columns={columns}
        getRowId={(row) => row.id}
        withSorting
        withFiltering
        withGlobalFilter
        withPagination
        pageSize={10}
        pageSizeOptions={[5, 10, 20]}
        withColumnResizing
        withColumnPinning
        withColumnVisibility
        withRowSelection
        withRowExpansion
        withRowNumbers
        withStriped
        withHighlightOnHover
        withStickyHeader
        withGrouping
        withEditing
        editingMode="cell"
        height={500}
        renderExpandedRow={({ row }) => (
          <Text size="sm" p="sm">
            Details for {row.original.firstName} {row.original.lastName} — {row.original.department}
          </Text>
        )}
        onCellEdit={({ row, columnId, value }) => {
          setData((prev) =>
            prev.map((item) =>
              item.id === row.original.id ? { ...item, [columnId]: value } : item
            )
          );
        }}
      >
        <DataGrid.Toolbar>
          <Group justify="space-between">
            <DataGrid.GlobalFilter placeholder="Search all columns..." />
            <Group gap="xs">
              <DataGrid.DensityToggle />
              <DataGrid.ColumnVisibilityToggle />
            </Group>
          </Group>
        </DataGrid.Toolbar>
        <Box component="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <DataGrid.Header />
          <DataGrid.Body />
        </Box>
        <DataGrid.Pagination />
        <DataGrid.StatusBar />
      </DataGrid>
    </Box>
  );
}
