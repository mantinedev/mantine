import React, { useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Checkbox, Table } from '@mantine/core';
import { DataTable } from './DataTable';

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: 'relationship' | 'complicated' | 'single';
  subRows?: Person[];
};

const makePerson = (): Person => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int(40),
  visits: faker.number.int(1000),
  progress: faker.number.int(100),
  status: faker.helpers.shuffle<Person['status']>(['relationship', 'complicated', 'single'])[0],
});

const makeData = (...counts: number[]) => {
  const makeDataLevel = (depth = 0): Person[] => {
    const count = counts[depth];
    return faker.helpers
      .multiple(makePerson, {
        count,
      })
      .map((person) => ({
        ...person,
        subRows: counts[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }));
  };

  return makeDataLevel();
};

const columnHelper = createColumnHelper<Person>();

export default { title: 'DataTable' };

export const Basic = () => {
  const data = useMemo(() => makeData(10), []);

  const columns = useMemo(
    () => [
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('age', { header: 'Age' }),
      columnHelper.accessor('visits', { header: 'Visits' }),
      columnHelper.accessor('status', { header: 'Status' }),
      columnHelper.accessor('progress', { header: 'Profile Progress' }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ padding: 40 }}>
      <DataTable table={table} />
    </div>
  );
};

export const ColumnGroups = () => {
  const data = useMemo(() => makeData(10), []);

  const columns = useMemo(
    () => [
      columnHelper.group({
        header: 'Hello',
        columns: [
          columnHelper.accessor('firstName', { header: 'First Name' }),
          columnHelper.accessor('lastName', { header: 'Last Name' }),
        ],
      }),
      columnHelper.group({
        id: 'info',
        header: 'Info',
        footer: (props) => props.column.id,
        columns: [
          columnHelper.accessor('age', { header: 'Age' }),
          columnHelper.group({
            header: 'More Info',
            columns: [
              columnHelper.accessor('visits', { header: 'Visits' }),
              columnHelper.accessor('status', { header: 'Status' }),
              columnHelper.accessor('progress', { header: 'Profile Progress' }),
            ],
          }),
        ],
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ padding: 40 }}>
      <DataTable table={table} withTableBorder withColumnBorders />
    </div>
  );
};

export const StickyHeader = () => {
  const data = useMemo(() => makeData(100), []);

  const columns = useMemo(
    () => [
      columnHelper.group({
        header: 'Hello',
        columns: [
          columnHelper.accessor('firstName', { header: 'First Name' }),
          columnHelper.accessor('lastName', { header: 'Last Name' }),
        ],
      }),
      columnHelper.group({
        header: 'Info',
        columns: [
          columnHelper.accessor('age', { header: 'Age' }),
          columnHelper.accessor('visits', { header: 'Visits' }),
          columnHelper.accessor('status', { header: 'Status' }),
          columnHelper.accessor('progress', { header: 'Profile Progress' }),
        ],
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ padding: 40 }}>
      <DataTable table={table} stickyHeader />
    </div>
  );
};

export const Sorting = () => {
  const data = useMemo(() => makeData(10), []);

  const columns = useMemo(
    () => [
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('age', { header: 'Age' }),
      columnHelper.accessor('visits', { header: 'Visits' }),
      columnHelper.accessor('status', { header: 'Status', enableSorting: false }),
      columnHelper.accessor('progress', { header: 'Profile Progress', enableSorting: false }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: true,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div style={{ padding: 40 }}>
      <DataTable table={table} />
    </div>
  );
};

export const RowSelection = () => {
  const data = useMemo(() => makeData(10), []);

  const columns = useMemo(
    () => [
      columnHelper.display({
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      }),
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('age', { header: 'Age' }),
      columnHelper.accessor('visits', { header: 'Visits' }),
      columnHelper.accessor('status', { header: 'Status' }),
      columnHelper.accessor('progress', { header: 'Profile Progress' }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: (row) => row.original.status === 'single',
  });

  return (
    <div style={{ padding: 40 }}>
      <DataTable table={table} />
    </div>
  );
};

export const InfinityScroll = () => {
  const [data, setData] = useState(makeData(50));

  const columns = useMemo(
    () => [
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('age', { header: 'Age' }),
      columnHelper.accessor('visits', { header: 'Visits' }),
      columnHelper.accessor('status', { header: 'Status' }),
      columnHelper.accessor('progress', { header: 'Profile Progress' }),
    ],
    []
  );

  const loadMore = () => {
    if (data.length > 149) return;
    setData((current) => [...current, ...makeData(50)]);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ padding: 40 }}>
      <DataTable table={table} onScrollToBottom={loadMore} />
    </div>
  );
};

export const ScrollContainer = () => {
  const [data, setData] = useState(makeData(50));

  const columns = useMemo(
    () => [
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('age', { header: 'Age' }),
      columnHelper.accessor('visits', { header: 'Visits' }),
      columnHelper.accessor('status', { header: 'Status' }),
      columnHelper.accessor('progress', { header: 'Profile Progress' }),
    ],
    []
  );

  const loadMore = () => {
    if (data.length > 149) return;
    setData((current) => [...current, ...makeData(50)]);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ padding: 40 }}>
      <Table.ScrollContainer h={300} minWidth={500}>
        <DataTable table={table} stickyHeader onScrollToBottom={loadMore} />
      </Table.ScrollContainer>
    </div>
  );
};
