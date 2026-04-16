import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ColumnFiltersState,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
} from '@tanstack/react-table';
import { Code, Group, Text } from '@mantine/core';
import { employees } from '../../../@docs/demos/src/demos/data-grid/DataGrid/_data';
import { DataGrid } from './index';

export default { title: 'data-grid/Demos' };

export function Usage() {
  return (
    <DataGrid
      data={employees}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

export function Sorting() {
  return (
    <DataGrid
      data={employees}
      withSorting
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'startDate', header: 'Start Date' },
      ]}
    />
  );
}

export function MultiSort() {
  return (
    <DataGrid
      data={employees}
      withSorting
      tableOptions={{ enableMultiSort: true }}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

export function ControlledSorting() {
  const [sorting, setSorting] = useState<SortingState>([]);

  return (
    <>
      <Text mb="md">
        Current sorting: <Code>{JSON.stringify(sorting)}</Code>
      </Text>
      <DataGrid
        data={employees}
        sorting={sorting}
        onSortingChange={setSorting}
        columns={[
          { accessorKey: 'firstName', header: 'First Name' },
          { accessorKey: 'lastName', header: 'Last Name' },
          { accessorKey: 'department', header: 'Department' },
          { accessorKey: 'salary', header: 'Salary' },
          { accessorKey: 'status', header: 'Status' },
        ]}
      />
    </>
  );
}

export function ColumnFilters() {
  return (
    <DataGrid
      data={employees}
      withFiltering
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

export function GlobalFilter() {
  return (
    <DataGrid
      data={employees}
      withGlobalFilter
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    >
      <DataGrid.Toolbar>
        <DataGrid.GlobalFilter />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
    </DataGrid>
  );
}

export function ControlledFilters() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  return (
    <>
      <Text mb="md">
        Active filters: <Code>{JSON.stringify(columnFilters)}</Code>
      </Text>
      <DataGrid
        data={employees}
        withFiltering
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
        columns={[
          { accessorKey: 'firstName', header: 'First Name' },
          { accessorKey: 'lastName', header: 'Last Name' },
          { accessorKey: 'department', header: 'Department' },
          { accessorKey: 'salary', header: 'Salary' },
          { accessorKey: 'status', header: 'Status' },
        ]}
      />
    </>
  );
}

export function Pagination() {
  return (
    <DataGrid
      data={employees}
      withPagination
      pageSize={5}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    />
  );
}

export function ControlledPagination() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  return (
    <>
      <Text mb="md">
        Current page: <Code>{JSON.stringify(pagination)}</Code>
      </Text>
      <DataGrid
        data={employees}
        withPagination
        pagination={pagination}
        onPaginationChange={setPagination}
        columns={[
          { accessorKey: 'firstName', header: 'First Name' },
          { accessorKey: 'lastName', header: 'Last Name' },
          { accessorKey: 'department', header: 'Department' },
          { accessorKey: 'salary', header: 'Salary' },
          { accessorKey: 'status', header: 'Status' },
        ]}
      />
    </>
  );
}

export function ColumnResizing() {
  return (
    <DataGrid
      data={employees}
      withColumnResizing
      columns={[
        { accessorKey: 'firstName', header: 'First Name', size: 150 },
        { accessorKey: 'lastName', header: 'Last Name', size: 150 },
        { accessorKey: 'email', header: 'Email', size: 250 },
        { accessorKey: 'department', header: 'Department', size: 150 },
        { accessorKey: 'salary', header: 'Salary', size: 120 },
      ]}
    />
  );
}

export function ColumnPinning() {
  return (
    <DataGrid
      data={employees}
      withColumnPinning
      columnPinning={{ left: ['firstName'], right: [] }}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'startDate', header: 'Start Date' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

export function ColumnVisibility() {
  return (
    <DataGrid
      data={employees}
      withColumnVisibility
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    >
      <DataGrid.Toolbar>
        <DataGrid.ColumnVisibilityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
    </DataGrid>
  );
}

export function RowSelection() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <>
      <Text mb="md">
        Selected rows: <Code>{JSON.stringify(Object.keys(rowSelection))}</Code>
      </Text>
      <DataGrid
        data={employees}
        withRowSelection
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        getRowId={(row) => row.id}
        columns={[
          { accessorKey: 'firstName', header: 'First Name' },
          { accessorKey: 'lastName', header: 'Last Name' },
          { accessorKey: 'department', header: 'Department' },
          { accessorKey: 'salary', header: 'Salary' },
          { accessorKey: 'status', header: 'Status' },
        ]}
      />
    </>
  );
}

export function RowExpansion() {
  return (
    <DataGrid
      data={employees}
      withRowExpansion
      getRowId={(row) => row.id}
      renderExpandedRow={({ row }) => (
        <Group p="md" gap="xl">
          <Text size="sm">Email: {row.original.email}</Text>
          <Text size="sm">Start date: {row.original.startDate}</Text>
          <Text size="sm">
            Salary:{' '}
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
              row.original.salary
            )}
          </Text>
        </Group>
      )}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

export function StripedHover() {
  return (
    <DataGrid
      data={employees}
      withStriped
      withHighlightOnHover
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    />
  );
}

interface VirtualRow {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
}

const virtualDepartments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

export function Virtualization() {
  const data = useMemo<VirtualRow[]>(
    () =>
      Array.from({ length: 100000 }, (_, i) => ({
        id: String(i + 1),
        name: `Employee ${i + 1}`,
        email: `employee${i + 1}@example.com`,
        department: virtualDepartments[i % virtualDepartments.length],
        salary: 50000 + Math.floor(Math.random() * 80000),
      })),
    []
  );

  return (
    <DataGrid
      data={data}
      withVirtualization
      height={500}
      columns={[
        { accessorKey: 'id', header: 'ID', size: 80 },
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    />
  );
}

interface InfiniteScrollRow {
  id: string;
  name: string;
  email: string;
  department: string;
}

const infiniteScrollDepartments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

function generateRows(start: number, count: number): InfiniteScrollRow[] {
  return Array.from({ length: count }, (_, i) => {
    const index = start + i;
    return {
      id: String(index + 1),
      name: `Employee ${index + 1}`,
      email: `employee${index + 1}@example.com`,
      department: infiniteScrollDepartments[index % infiniteScrollDepartments.length],
    };
  });
}

export function InfiniteScroll() {
  const [data, setData] = useState(() => generateRows(0, 50));
  const [loading, setLoading] = useState(false);

  const handleScrollToBottom = useCallback(() => {
    if (loading) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setData((prev) => [...prev, ...generateRows(prev.length, 50)]);
      setLoading(false);
    }, 500);
  }, [loading]);

  const columns = useMemo(
    () => [
      { accessorKey: 'id' as const, header: 'ID', size: 80 },
      { accessorKey: 'name' as const, header: 'Name' },
      { accessorKey: 'email' as const, header: 'Email' },
      { accessorKey: 'department' as const, header: 'Department' },
    ],
    []
  );

  return (
    <DataGrid
      data={data}
      withVirtualization
      height={400}
      loading={loading}
      onScrollToBottom={handleScrollToBottom}
      columns={columns}
    />
  );
}

interface CellEditEmployee {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  salary: number;
}

const cellEditData: CellEditEmployee[] = [
  { id: '1', firstName: 'Alice', lastName: 'Johnson', department: 'Engineering', salary: 95000 },
  { id: '2', firstName: 'Bob', lastName: 'Smith', department: 'Marketing', salary: 72000 },
  { id: '3', firstName: 'Carol', lastName: 'Williams', department: 'Sales', salary: 68000 },
  { id: '4', firstName: 'David', lastName: 'Brown', department: 'HR', salary: 65000 },
  { id: '5', firstName: 'Eva', lastName: 'Davis', department: 'Finance', salary: 88000 },
];

export function CellEditing() {
  const [data, setData] = useState(cellEditData);

  return (
    <DataGrid
      data={data}
      withEditing
      editingMode="cell"
      getRowId={(row) => row.id}
      onCellEdit={({
        row,
        columnId,
        value,
      }: {
        row: Row<CellEditEmployee>;
        columnId: string;
        value: unknown;
      }) => {
        setData((prev) =>
          prev.map((item) => (item.id === row.original.id ? { ...item, [columnId]: value } : item))
        );
      }}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    />
  );
}

export function Grouping() {
  return (
    <DataGrid
      data={employees}
      withGrouping
      grouping={['department']}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    />
  );
}

interface ServerRow {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
}

const serverDepartments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

const allServerData: ServerRow[] = Array.from({ length: 200 }, (_, i) => ({
  id: String(i + 1),
  name: `Employee ${i + 1}`,
  email: `employee${i + 1}@example.com`,
  department: serverDepartments[i % serverDepartments.length],
  salary: 50000 + i * 500,
}));

function fetchServerData(params: {
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  pagination: PaginationState;
}): Promise<{ data: ServerRow[]; totalCount: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...allServerData];

      params.columnFilters.forEach((filter) => {
        const value = String(filter.value).toLowerCase();
        filtered = filtered.filter((row) =>
          String(row[filter.id as keyof ServerRow])
            .toLowerCase()
            .includes(value)
        );
      });

      if (params.sorting.length > 0) {
        const { id, desc } = params.sorting[0];
        filtered.sort((a, b) => {
          const aVal = a[id as keyof ServerRow];
          const bVal = b[id as keyof ServerRow];
          if (aVal < bVal) {
            return desc ? 1 : -1;
          }
          if (aVal > bVal) {
            return desc ? -1 : 1;
          }
          return 0;
        });
      }

      const totalCount = filtered.length;
      const { pageIndex, pageSize } = params.pagination;
      const start = pageIndex * pageSize;
      const paged = filtered.slice(start, start + pageSize);

      resolve({ data: paged, totalCount });
    }, 500);
  });
}

export function FullServerSide() {
  const [data, setData] = useState<ServerRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const fetchData = useCallback(() => {
    setLoading(true);
    fetchServerData({ sorting, columnFilters, pagination }).then((result) => {
      setData(result.data);
      setTotalCount(result.totalCount);
      setLoading(false);
    });
  }, [sorting, columnFilters, pagination]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = useMemo(
    () => [
      { accessorKey: 'id' as const, header: 'ID', size: 80 },
      { accessorKey: 'name' as const, header: 'Name' },
      { accessorKey: 'email' as const, header: 'Email' },
      { accessorKey: 'department' as const, header: 'Department' },
      { accessorKey: 'salary' as const, header: 'Salary' },
    ],
    []
  );

  return (
    <DataGrid
      data={data}
      loading={loading}
      columns={columns}
      withSorting
      manualSorting
      sorting={sorting}
      onSortingChange={setSorting}
      withFiltering
      manualFiltering
      columnFilters={columnFilters}
      onColumnFiltersChange={setColumnFilters}
      withPagination
      manualPagination
      pagination={pagination}
      onPaginationChange={setPagination}
      rowCount={totalCount}
    />
  );
}

export function StylesApi() {
  return (
    <DataGrid
      data={employees}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
      styles={{
        thead: { backgroundColor: 'var(--mantine-color-blue-light)' },
        th: { fontWeight: 700 },
        td: { fontSize: 'var(--mantine-font-size-sm)' },
        tr: { borderBottom: '1px solid var(--mantine-color-gray-3)' },
      }}
    />
  );
}

export function CompoundComponents() {
  return (
    <DataGrid
      data={employees}
      withGlobalFilter
      withColumnVisibility
      withPagination
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
        { accessorKey: 'status', header: 'Status' },
      ]}
    >
      <DataGrid.Toolbar>
        <DataGrid.GlobalFilter />
        <DataGrid.ColumnVisibilityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
      <DataGrid.Pagination />
      <DataGrid.StatusBar />
    </DataGrid>
  );
}

export function Density() {
  return (
    <DataGrid
      data={employees}
      columns={[
        { accessorKey: 'firstName', header: 'First Name' },
        { accessorKey: 'lastName', header: 'Last Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'department', header: 'Department' },
        { accessorKey: 'salary', header: 'Salary' },
      ]}
    >
      <DataGrid.Toolbar>
        <DataGrid.DensityToggle />
      </DataGrid.Toolbar>
      <DataGrid.Header />
      <DataGrid.Body />
    </DataGrid>
  );
}
