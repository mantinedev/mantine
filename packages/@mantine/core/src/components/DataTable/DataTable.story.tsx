import { useMemo, useState } from 'react';
import { ColumnDef, VisibilityState } from '@tanstack/react-table';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Group } from '../Group';
import { Popover } from '../Popover';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { DataTable } from './DataTable';

export default { title: 'DataTable' };

interface Person {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  status: string;
}

const defaultData: Person[] = [
  { id: '1', firstName: 'Tanner', lastName: 'Linsley', age: 24, status: 'In Relationship' },
  { id: '2', firstName: 'Kevin', lastName: 'Vandy', age: 40, status: 'Single' },
  { id: '3', firstName: 'Abra', lastName: 'Ham', age: 21, status: 'Complicated' },
  { id: '4', firstName: 'John', lastName: 'Doe', age: 30, status: 'Single' },
  { id: '5', firstName: 'Jane', lastName: 'Smith', age: 28, status: 'Married' },
];

const columns: ColumnDef<Person>[] = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'age', header: 'Age' },
  { accessorKey: 'status', header: 'Status' },
];

export function Usage() {
  return (
    <Stack p="md">
      <DataTable columns={columns} data={defaultData} />
    </Stack>
  );
}

export function Sorting() {
  return (
    <Stack p="md">
      <DataTable columns={columns} data={defaultData} />
    </Stack>
  );
}

export function RowSelection() {
  return (
    <Stack p="md">
      <DataTable columns={columns} data={defaultData} withRowSelection withSelectAll />
    </Stack>
  );
}

export function Loading() {
  return (
    <Stack p="md">
      <DataTable columns={columns} data={defaultData} loading />
    </Stack>
  );
}

export function Empty() {
  return (
    <Stack p="md">
      <DataTable columns={columns} data={[]} />
    </Stack>
  );
}

export function Virtualization() {
  const largeData = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i.toString(),
        firstName: `First ${i}`,
        lastName: `Last ${i}`,
        age: 20 + (i % 60),
        status: i % 3 === 0 ? 'Single' : i % 3 === 1 ? 'Married' : 'Complicated',
      })),
    []
  );

  return (
    <Stack p="md">
      <DataTable
        columns={columns}
        data={largeData}
        withVirtualization
        virtualHeight={400}
        tableProps={{ stickyHeader: true }}
        withRecordsInfo
      />
    </Stack>
  );
}

export function Pagination() {
  const paginatedData = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i.toString(),
        firstName: `First ${i}`,
        lastName: `Last ${i}`,
        age: 20 + (i % 60),
        status: 'Single',
      })),
    []
  );

  return (
    <Stack p="md">
      <DataTable columns={columns} data={paginatedData} />
    </Stack>
  );
}

export function RowClick() {
  return (
    <Stack p="md">
      <Text size="sm" c="dimmed" mb="xs">
        Click a row to see the log
      </Text>
      <DataTable
        columns={columns}
        data={defaultData}
        highlightOnHover
        onRowClick={(row) =>
          console.log(`Clicked: ${row.original.firstName} ${row.original.lastName}`)
        }
      />
    </Stack>
  );
}

export function StripedAndHover() {
  const data = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i.toString(),
        firstName: `First ${i}`,
        lastName: `Last ${i}`,
        age: 20 + (i % 60),
        status: i % 2 === 0 ? 'Single' : 'Married',
      })),
    []
  );

  return (
    <Stack p="md">
      <DataTable columns={columns} data={data} striped="odd" highlightOnHover />
    </Stack>
  );
}

export function ColumnVisibility() {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  return (
    <Stack p="md">
      <Popover width={200} position="bottom-start">
        <Popover.Target>
          <Button variant="light" size="xs">
            Toggle Columns
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Stack gap="xs">
            {columns.map((col) => {
              const key = (col as any).accessorKey as string;
              const isVisible = columnVisibility[key] !== false;
              return (
                <Checkbox
                  key={key}
                  label={(col as any).header as string}
                  checked={isVisible}
                  onChange={() =>
                    setColumnVisibility((prev) => ({
                      ...prev,
                      [key]: !isVisible,
                    }))
                  }
                  size="sm"
                />
              );
            })}
          </Stack>
        </Popover.Dropdown>
      </Popover>

      <DataTable
        columns={columns}
        data={defaultData}
        columnVisibility={columnVisibility}
        onColumnVisibilityChange={setColumnVisibility}
      />
    </Stack>
  );
}

export function PageSizeAndRecords() {
  const data = useMemo(
    () =>
      Array.from({ length: 87 }, (_, i) => ({
        id: i.toString(),
        firstName: `First ${i}`,
        lastName: `Last ${i}`,
        age: 20 + (i % 60),
        status: i % 3 === 0 ? 'Single' : i % 3 === 1 ? 'Married' : 'Complicated',
      })),
    []
  );

  return (
    <Stack p="md">
      <DataTable
        columns={columns}
        data={data}
        withPageSizeSelector
        withRecordsInfo
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </Stack>
  );
}

export function FullFeatured() {
  const data = useMemo(
    () =>
      Array.from({ length: 200 }, (_, i) => ({
        id: i.toString(),
        firstName: `First ${i}`,
        lastName: `Last ${i}`,
        age: 20 + (i % 60),
        status: i % 3 === 0 ? 'Single' : i % 3 === 1 ? 'Married' : 'Complicated',
      })),
    []
  );

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  return (
    <Stack p="md">
      <Group>
        <Popover width={200} position="bottom-start">
          <Popover.Target>
            <Button variant="light" size="xs">
              Columns
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap="xs">
              {columns.map((col) => {
                const key = (col as any).accessorKey as string;
                const isVisible = columnVisibility[key] !== false;
                return (
                  <Checkbox
                    key={key}
                    label={(col as any).header as string}
                    checked={isVisible}
                    onChange={() =>
                      setColumnVisibility((prev) => ({
                        ...prev,
                        [key]: !isVisible,
                      }))
                    }
                    size="sm"
                  />
                );
              })}
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </Group>

      <DataTable
        columns={columns}
        data={data}
        striped="odd"
        highlightOnHover
        withRowSelection
        withSelectAll
        withPageSizeSelector
        withRecordsInfo
        pageSizeOptions={[10, 25, 50, 100]}
        columnVisibility={columnVisibility}
        onColumnVisibilityChange={setColumnVisibility}
        onRowClick={(row) => console.log('Clicked:', row.original)}
        recordsInfoText={({ from, to, total }) => `${from}–${to} z ${total}`}
      />
    </Stack>
  );
}
