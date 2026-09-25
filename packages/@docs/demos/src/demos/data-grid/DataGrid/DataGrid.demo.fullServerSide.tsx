import { useCallback, useEffect, useMemo, useState } from 'react';
import { ColumnFiltersState, PaginationState, SortingState } from '@tanstack/react-table';
import { Select, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ColumnFiltersState, PaginationState, SortingState } from '@tanstack/react-table';
import { Select, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';

interface ServerRow {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
}

const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

const allData: ServerRow[] = Array.from({ length: 200 }, (_, i) => ({
  id: String(i + 1),
  name: \`Employee \${i + 1}\`,
  email: \`employee\${i + 1}@example.com\`,
  department: departments[i % departments.length],
  salary: 50000 + (i * 500),
}));

function fetchServerData(params: {
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  pagination: PaginationState;
}): Promise<{ data: ServerRow[]; totalCount: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...allData];

      params.columnFilters.forEach((filter) => {
        const value = String(filter.value).toLowerCase();
        filtered = filtered.filter((row) =>
          String(row[filter.id as keyof ServerRow]).toLowerCase().includes(value)
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

function Demo() {
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
      { accessorKey: 'id' as const, header: 'ID', size: 80, enableColumnFilter: true },
      { accessorKey: 'name' as const, header: 'Name', enableSorting: true, enableColumnFilter: true },
      { accessorKey: 'email' as const, header: 'Email', size: 220, enableSorting: true, enableColumnFilter: true },
      { accessorKey: 'department' as const, header: 'Department', enableSorting: true, enableColumnFilter: true },
      { accessorKey: 'salary' as const, header: 'Salary', enableSorting: true, enableColumnFilter: true },
    ],
    []
  );

  const store = useDataGrid({
    data,
    columns,
    manualSorting: true,
    sorting,
    onSortingChange: setSorting,
    manualFiltering: true,
    columnFilters,
    onColumnFiltersChange: (updater) => {
      setColumnFilters(updater);
      setPagination((current) => ({ ...current, pageIndex: 0 }));
    },
    manualPagination: true,
    pagination,
    onPaginationChange: setPagination,
    rowCount: totalCount,
  });

  return (
    <DataGrid store={store} loading={loading} loadingVariant="bar">
      <DataGrid.Toolbar>
        <TextInput
          size={store.getControlSize()}
          placeholder="Filter by name"
          value={(store.getColumnFilterValue('name') as string) ?? ''}
          onChange={(event) => store.setColumnFilter('name', event.currentTarget.value)}
        />
        <Select
          size={store.getControlSize()}
          placeholder="Any department"
          clearable
          data={departments}
          value={(store.getColumnFilterValue('department') as string) ?? null}
          onChange={(value) => store.setColumnFilter('department', value)}
        />
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}
`;

interface ServerRow {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
}

const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

const allData: ServerRow[] = Array.from({ length: 200 }, (_, i) => ({
  id: String(i + 1),
  name: `Employee ${i + 1}`,
  email: `employee${i + 1}@example.com`,
  department: departments[i % departments.length],
  salary: 50000 + i * 500,
}));

function fetchServerData(params: {
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  pagination: PaginationState;
}): Promise<{ data: ServerRow[]; totalCount: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...allData];

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

function Demo() {
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
      { accessorKey: 'id' as const, header: 'ID', size: 80, enableColumnFilter: true },
      {
        accessorKey: 'name' as const,
        header: 'Name',
        enableSorting: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: 'email' as const,
        header: 'Email',
        size: 220,
        enableSorting: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: 'department' as const,
        header: 'Department',
        enableSorting: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: 'salary' as const,
        header: 'Salary',
        enableSorting: true,
        enableColumnFilter: true,
      },
    ],
    []
  );

  const store = useDataGrid({
    data,
    columns,
    manualSorting: true,
    sorting,
    onSortingChange: setSorting,
    manualFiltering: true,
    columnFilters,
    onColumnFiltersChange: (updater) => {
      setColumnFilters(updater);
      setPagination((current) => ({ ...current, pageIndex: 0 }));
    },
    manualPagination: true,
    pagination,
    onPaginationChange: setPagination,
    rowCount: totalCount,
  });

  return (
    <DataGrid store={store} loading={loading} loadingVariant="bar">
      <DataGrid.Toolbar>
        <TextInput
          size={store.getControlSize()}
          placeholder="Filter by name"
          value={(store.getColumnFilterValue('name') as string) ?? ''}
          onChange={(event) => store.setColumnFilter('name', event.currentTarget.value)}
        />
        <Select
          size={store.getControlSize()}
          placeholder="Any department"
          clearable
          data={departments}
          value={(store.getColumnFilterValue('department') as string) ?? null}
          onChange={(value) => store.setColumnFilter('department', value)}
        />
      </DataGrid.Toolbar>
      <DataGrid.Footer />
    </DataGrid>
  );
}

export const fullServerSide: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
