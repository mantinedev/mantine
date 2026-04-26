import { useCallback, useEffect, useMemo, useState } from 'react';
import { ColumnFiltersState, PaginationState, SortingState } from '@tanstack/react-table';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ColumnFiltersState, PaginationState, SortingState } from '@tanstack/react-table';
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
      { accessorKey: 'id' as const, header: 'ID', size: 80 },
      { accessorKey: 'name' as const, header: 'Name', enableSorting: true },
      { accessorKey: 'email' as const, header: 'Email', enableSorting: true },
      { accessorKey: 'department' as const, header: 'Department', enableSorting: true },
      { accessorKey: 'salary' as const, header: 'Salary', enableSorting: true },
    ],
    []
  );

  const store = useDataGrid({
    data,
    columns,
    withSorting: true,
    manualSorting: true,
    sorting,
    onSortingChange: setSorting,
    withFiltering: true,
    manualFiltering: true,
    columnFilters,
    onColumnFiltersChange: setColumnFilters,
    withPagination: true,
    manualPagination: true,
    pagination,
    onPaginationChange: setPagination,
    rowCount: totalCount,
  });

  return <DataGrid store={store} loading={loading} />;
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
      { accessorKey: 'id' as const, header: 'ID', size: 80 },
      { accessorKey: 'name' as const, header: 'Name', enableSorting: true },
      { accessorKey: 'email' as const, header: 'Email', enableSorting: true },
      { accessorKey: 'department' as const, header: 'Department', enableSorting: true },
      { accessorKey: 'salary' as const, header: 'Salary', enableSorting: true },
    ],
    []
  );

  const store = useDataGrid({
    data,
    columns,
    withSorting: true,
    manualSorting: true,
    sorting,
    onSortingChange: setSorting,
    withFiltering: true,
    manualFiltering: true,
    columnFilters,
    onColumnFiltersChange: setColumnFilters,
    withPagination: true,
    manualPagination: true,
    pagination,
    onPaginationChange: setPagination,
    rowCount: totalCount,
  });

  return <DataGrid store={store} loading={loading} />;
}

export const fullServerSide: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
