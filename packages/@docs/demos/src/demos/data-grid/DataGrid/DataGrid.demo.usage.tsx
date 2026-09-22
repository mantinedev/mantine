import { useState } from 'react';
import {
  Badge,
  Button,
  Group,
  NumberFormatter,
  NumberInput,
  Popover,
  Select,
  Stack,
} from '@mantine/core';
import { DataGrid, DataGridStore, useDataGrid } from '@mantine/data-grid';
import { MantineDemo } from '@mantinex/demo';

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  method: string;
}

const statusColors: Record<Order['status'], string> = {
  pending: 'yellow',
  processing: 'blue',
  shipped: 'indigo',
  delivered: 'green',
  cancelled: 'red',
};

const firstNames = [
  'Alice',
  'Bob',
  'Carol',
  'David',
  'Eva',
  'Frank',
  'Grace',
  'Henry',
  'Irene',
  'James',
  'Karen',
  'Leo',
  'Mia',
  'Nathan',
  'Olivia',
  'Patrick',
  'Quinn',
  'Rachel',
  'Sam',
  'Tina',
  'Uma',
  'Victor',
  'Wendy',
  'Xavier',
  'Yara',
  'Zoe',
  'Adam',
  'Beth',
  'Carl',
  'Diana',
  'Eric',
  'Fiona',
  'George',
  'Hannah',
  'Ivan',
  'Julia',
  'Kevin',
  'Laura',
  'Mike',
  'Nina',
];

const lastNames = [
  'Johnson',
  'Smith',
  'Williams',
  'Brown',
  'Davis',
  'Miller',
  'Wilson',
  'Taylor',
  'Anderson',
  'Thomas',
  'Jackson',
  'White',
  'Harris',
  'Martin',
  'Garcia',
  'Martinez',
  'Robinson',
  'Clark',
  'Lewis',
  'Walker',
  'Hall',
  'Allen',
  'Young',
  'King',
  'Scott',
  'Adams',
  'Baker',
  'Carter',
  'Evans',
  'Foster',
  'Green',
  'Hill',
  'Irving',
  'Jones',
  'Kelly',
  'Long',
  'Morris',
  'Nelson',
  'Owen',
  'Parker',
];

const products = [
  'MacBook Pro 16"',
  'iPhone 15 Pro',
  'AirPods Max',
  'iPad Air',
  'Apple Watch Ultra',
  'MacBook Air 15"',
  'HomePod mini',
  'iPhone 15',
  'MacBook Pro 14"',
  'AirPods Pro',
  'iPad Pro 13"',
  'Mac Studio',
  'Apple Watch SE',
  'AirTag 4-Pack',
  'Magic Keyboard',
  'Studio Display',
  'iPhone 15 Pro Max',
  'iPad mini',
  'MacBook Air 13"',
  'AirPods 4',
  'Apple TV 4K',
  'Mac mini',
  'Vision Pro',
  'Magic Mouse',
  'Magic Trackpad',
];

const prices = [
  2499, 1199, 549, 799, 899, 1499, 99, 899, 1999, 249, 1299, 1999, 279, 99, 299, 1599, 1399, 499,
  1099, 179, 179, 599, 3499, 99, 149,
];

const statuses: Order['status'][] = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
const methods = ['Credit Card', 'PayPal', 'Bank Transfer'];

function generateOrders(count: number): Order[] {
  return Array.from({ length: count }, (_, i) => {
    const productIndex = i % products.length;
    const day = (i % 28) + 1;
    const month = Math.floor(i / 28) % 12;
    return {
      id: `ORD-${String(i + 1001).padStart(4, '0')}`,
      customer: `${firstNames[i % firstNames.length]} ${lastNames[(i * 7) % lastNames.length]}`,
      product: products[productIndex],
      amount: prices[productIndex] + ((i * 13) % 100),
      status: statuses[i % statuses.length],
      date: `2024-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      method: methods[i % methods.length],
    };
  });
}

const orders = generateOrders(1000);

const dataCode = `
export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  method: string;
}

export const statusColors: Record<Order['status'], string> = {
  pending: 'yellow',
  processing: 'blue',
  shipped: 'indigo',
  delivered: 'green',
  cancelled: 'red',
};

// 1000 generated orders
export const orders: Order[] = generateOrders(1000);
`;

const code = `
import { useState } from 'react';
import { Badge, Button, Group, NumberFormatter, NumberInput, Popover, Select, Stack } from '@mantine/core';
import { DataGrid, DataGridStore, useDataGrid } from '@mantine/data-grid';
import { orders, statusColors } from './data';
import type { Order } from './data';

function FiltersPopover({ store }: { store: DataGridStore<Order> }) {
  const [opened, setOpened] = useState(false);
  const activeCount = store.getColumnFilters().length;
  const amount = (store.getColumnFilterValue('amount') as [number?, number?] | undefined) ?? [];

  const setAmount = (index: 0 | 1, value: string | number) => {
    const next: [number?, number?] = [amount[0], amount[1]];
    next[index] = typeof value === 'number' ? value : undefined;
    store.setColumnFilter('amount', next[0] == null && next[1] == null ? undefined : next);
  };

  return (
    <Popover opened={opened} onChange={setOpened} position="bottom-start" shadow="md">
      <Popover.Target>
        <Button
          variant="default"
          size={store.getControlSize()}
          onClick={() => setOpened((o) => !o)}
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
        <Stack gap="sm" w={260}>
          <Select
            label="Status"
            placeholder="All statuses"
            clearable
            size="xs"
            data={store.getFacetedUniqueValues('status')}
            value={(store.getColumnFilterValue('status') as string) ?? null}
            onChange={(value) => store.setColumnFilter('status', value)}
          />
          <Select
            label="Payment"
            placeholder="All methods"
            clearable
            size="xs"
            data={store.getFacetedUniqueValues('method')}
            value={(store.getColumnFilterValue('method') as string) ?? null}
            onChange={(value) => store.setColumnFilter('method', value)}
          />
          <Group grow gap="xs">
            <NumberInput
              label="Min amount"
              placeholder="Min"
              size="xs"
              prefix="$"
              value={amount[0] ?? ''}
              onChange={(value) => setAmount(0, value)}
            />
            <NumberInput
              label="Max amount"
              placeholder="Max"
              size="xs"
              prefix="$"
              value={amount[1] ?? ''}
              onChange={(value) => setAmount(1, value)}
            />
          </Group>
          <Group justify="flex-end">
            <Button
              size="xs"
              variant="subtle"
              disabled={activeCount === 0}
              onClick={() => store.resetColumnFilters()}
            >
              Clear all
            </Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

function Demo() {
  const store = useDataGrid({
    data: orders,
    columns: [
      { accessorKey: 'id', header: 'Order', size: 110, enableSorting: true },
      { accessorKey: 'customer', header: 'Customer', size: 160, enableSorting: true },
      { accessorKey: 'product', header: 'Product', size: 180, enableSorting: true },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 120,
        enableSorting: true,
        filterFn: 'inNumberRange',
        meta: { align: 'end' },
        cell: ({ getValue }) => (
          <NumberFormatter
            value={getValue() as number}
            prefix="$"
            thousandSeparator
            decimalScale={2}
          />
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 130,
        enableSorting: true,
        filterFn: 'equals',
        cell: ({ getValue }) => {
          const status = getValue() as Order['status'];
          return (
            <Badge variant="filled" color={statusColors[status]} size="sm">
              {status}
            </Badge>
          );
        },
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 120,
        enableSorting: true,
        cell: ({ getValue }) =>
          new Date(getValue() as string).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
      },
      { accessorKey: 'method', header: 'Payment', size: 130, filterFn: 'equals' },
    ],
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    withRowSelection: true,
    withColumnVisibility: true,
    withFaceting: true,
    pageSize: 20,
  });

  return (
    <DataGrid store={store} highlightOnHover>
      <DataGrid.Toolbar>
        <DataGrid.GlobalFilter placeholder="Search orders..." />
        <FiltersPopover store={store} />
        <div style={{ flex: 1 }} />
        <DataGrid.ColumnVisibilityToggle />
        <DataGrid.ExportButton fileName="orders" />
      </DataGrid.Toolbar>
      <DataGrid.SelectionBar>
        <Button size={store.getControlSize()} variant="default">
          Mark as shipped
        </Button>
        <Button size={store.getControlSize()} variant="light" color="red">
          Cancel orders
        </Button>
      </DataGrid.SelectionBar>
      <DataGrid.Footer statusFormat="long" />
    </DataGrid>
  );
}
`;

function FiltersPopover({ store }: { store: DataGridStore<Order> }) {
  const [opened, setOpened] = useState(false);
  const activeCount = store.getColumnFilters().length;
  const amount = (store.getColumnFilterValue('amount') as [number?, number?] | undefined) ?? [];

  const setAmount = (index: 0 | 1, value: string | number) => {
    const next: [number?, number?] = [amount[0], amount[1]];
    next[index] = typeof value === 'number' ? value : undefined;
    store.setColumnFilter('amount', next[0] == null && next[1] == null ? undefined : next);
  };

  return (
    <Popover opened={opened} onChange={setOpened} position="bottom-start" shadow="md">
      <Popover.Target>
        <Button
          variant="default"
          size={store.getControlSize()}
          onClick={() => setOpened((o) => !o)}
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
        <Stack gap="sm" w={260}>
          <Select
            label="Status"
            placeholder="All statuses"
            clearable
            size="xs"
            data={store.getFacetedUniqueValues('status')}
            value={(store.getColumnFilterValue('status') as string) ?? null}
            onChange={(value) => store.setColumnFilter('status', value)}
          />
          <Select
            label="Payment"
            placeholder="All methods"
            clearable
            size="xs"
            data={store.getFacetedUniqueValues('method')}
            value={(store.getColumnFilterValue('method') as string) ?? null}
            onChange={(value) => store.setColumnFilter('method', value)}
          />
          <Group grow gap="xs">
            <NumberInput
              label="Min amount"
              placeholder="Min"
              size="xs"
              prefix="$"
              value={amount[0] ?? ''}
              onChange={(value) => setAmount(0, value)}
            />
            <NumberInput
              label="Max amount"
              placeholder="Max"
              size="xs"
              prefix="$"
              value={amount[1] ?? ''}
              onChange={(value) => setAmount(1, value)}
            />
          </Group>
          <Group justify="flex-end">
            <Button
              size="xs"
              variant="subtle"
              disabled={activeCount === 0}
              onClick={() => store.resetColumnFilters()}
            >
              Clear all
            </Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

function Demo() {
  const store = useDataGrid<Order>({
    data: orders,
    columns: [
      { accessorKey: 'id', header: 'Order', size: 110, enableSorting: true },
      { accessorKey: 'customer', header: 'Customer', size: 160, enableSorting: true },
      { accessorKey: 'product', header: 'Product', size: 180, enableSorting: true },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 120,
        enableSorting: true,
        filterFn: 'inNumberRange',
        meta: { align: 'end' },
        cell: ({ getValue }) => (
          <NumberFormatter
            value={getValue() as number}
            prefix="$"
            thousandSeparator
            decimalScale={2}
          />
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 130,
        enableSorting: true,
        filterFn: 'equals',
        cell: ({ getValue }) => {
          const status = getValue() as Order['status'];
          return (
            <Badge variant="filled" color={statusColors[status]} size="sm">
              {status}
            </Badge>
          );
        },
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 120,
        enableSorting: true,
        cell: ({ getValue }) =>
          new Date(getValue() as string).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
      },
      { accessorKey: 'method', header: 'Payment', size: 130, filterFn: 'equals' },
    ],
    getRowId: (row) => row.id,
    withGlobalFilter: true,
    withRowSelection: true,
    withColumnVisibility: true,
    withFaceting: true,
    pageSize: 20,
  });

  return (
    <DataGrid store={store} highlightOnHover>
      <DataGrid.Toolbar>
        <DataGrid.GlobalFilter placeholder="Search orders..." />
        <FiltersPopover store={store} />
        <div style={{ flex: 1 }} />
        <DataGrid.ColumnVisibilityToggle />
        <DataGrid.ExportButton fileName="orders" />
      </DataGrid.Toolbar>
      <DataGrid.SelectionBar>
        <Button size={store.getControlSize()} variant="default">
          Mark as shipped
        </Button>
        <Button size={store.getControlSize()} variant="light" color="red">
          Cancel orders
        </Button>
      </DataGrid.SelectionBar>
      <DataGrid.Footer statusFormat="long" />
    </DataGrid>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
