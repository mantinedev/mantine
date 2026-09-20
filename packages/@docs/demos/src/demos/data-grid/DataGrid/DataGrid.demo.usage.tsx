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
  Text,
  TextInput,
} from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
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
import { Badge, Button, Group, NumberFormatter, NumberInput, Popover, Select, Stack, Text, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { orders, statusColors } from './data';
import type { Order } from './data';

function Demo() {
  const [filterOpened, setFilterOpened] = useState(false);

  const store = useDataGrid({
    data: orders,
    columns: [
      {
        accessorKey: 'id',
        header: 'Order',
        size: 110,
        enableSorting: true,
      },
      {
        accessorKey: 'customer',
        header: 'Customer',
        size: 160,
        enableSorting: true,
      },
      {
        accessorKey: 'product',
        header: 'Product',
        size: 180,
        enableSorting: true,
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 120,
        enableSorting: true,
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
      {
        accessorKey: 'method',
        header: 'Payment',
        size: 130,
      },
    ],
    withGlobalFilter: true,
    withRowSelection: true,
    withFaceting: true,
    pageSize: 20,
  });

  const selectedCount = Object.keys(store.rowSelection).length;

  return (
    <>
      <Group mb="md">
        <TextInput
          placeholder="Search orders..."
          value={store.globalFilter ?? ''}
          onChange={(event) => store.setGlobalFilter(event.currentTarget.value)}

          style={{ flex: 1, maxWidth: 300 }}
        />
        <Popover opened={filterOpened} onChange={setFilterOpened} position="bottom-start" width={260}>
          <Popover.Target>
            <Button
              variant="default"

              onClick={() => setFilterOpened((o) => !o)}
            >
              Filters
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap="sm">
              <Select
                label="Status"
                placeholder="All statuses"
                data={['pending', 'processing', 'shipped', 'delivered', 'cancelled']}
                value={(store.table.getColumn('status')?.getFilterValue() as string) ?? null}
                onChange={(value) =>
                  store.table.getColumn('status')?.setFilterValue(value || undefined)
                }
                clearable
                size="xs"
              />
              <Select
                label="Payment"
                placeholder="All methods"
                data={['Credit Card', 'PayPal', 'Bank Transfer']}
                value={(store.table.getColumn('method')?.getFilterValue() as string) ?? null}
                onChange={(value) =>
                  store.table.getColumn('method')?.setFilterValue(value || undefined)
                }
                clearable
                size="xs"
              />
              <Group grow gap="xs">
                <NumberInput
                  label="Min amount"
                  placeholder="Min"
                  size="xs"
                  prefix="$"
                  value={
                    (store.table.getColumn('amount')?.getFilterValue() as
                      | [number | undefined, number | undefined]
                      | undefined)?.[0] ?? ''
                  }
                  onChange={(value) => {
                    const current = (store.table.getColumn('amount')?.getFilterValue() as
                      | [number | undefined, number | undefined]
                      | undefined) ?? [undefined, undefined];
                    const min = typeof value === 'number' ? value : undefined;
                    store.table
                      .getColumn('amount')
                      ?.setFilterValue(
                        min == null && current[1] == null ? undefined : [min, current[1]]
                      );
                  }}
                />
                <NumberInput
                  label="Max amount"
                  placeholder="Max"
                  size="xs"
                  prefix="$"
                  value={
                    (store.table.getColumn('amount')?.getFilterValue() as
                      | [number | undefined, number | undefined]
                      | undefined)?.[1] ?? ''
                  }
                  onChange={(value) => {
                    const current = (store.table.getColumn('amount')?.getFilterValue() as
                      | [number | undefined, number | undefined]
                      | undefined) ?? [undefined, undefined];
                    const max = typeof value === 'number' ? value : undefined;
                    store.table
                      .getColumn('amount')
                      ?.setFilterValue(
                        current[0] == null && max == null ? undefined : [current[0], max]
                      );
                  }}
                />
              </Group>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </Group>
      <DataGrid store={store} highlightOnHover striped>
        <Group justify="space-between" p="xs">
          <Text size="sm" c="dimmed">
            {selectedCount > 0 ? \`\${selectedCount} rows selected\` : '\\u00A0'}
          </Text>
          <DataGrid.Footer />
        </Group>
      </DataGrid>
    </>
  );
}
`;

function Demo() {
  const [filterOpened, setFilterOpened] = useState(false);

  const store = useDataGrid({
    data: orders,
    columns: [
      {
        accessorKey: 'id',
        header: 'Order',
        size: 110,
        enableSorting: true,
      },
      {
        accessorKey: 'customer',
        header: 'Customer',
        size: 160,
        enableSorting: true,
      },
      {
        accessorKey: 'product',
        header: 'Product',
        size: 180,
        enableSorting: true,
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 120,
        enableSorting: true,
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
      {
        accessorKey: 'method',
        header: 'Payment',
        size: 130,
      },
    ],
    withGlobalFilter: true,
    withRowSelection: true,
    withFaceting: true,
    pageSize: 20,
  });

  const selectedCount = Object.keys(store.rowSelection).length;

  return (
    <>
      <Group mb="md">
        <TextInput
          placeholder="Search orders..."
          value={store.globalFilter ?? ''}
          onChange={(event) => store.setGlobalFilter(event.currentTarget.value)}
          style={{ flex: 1, maxWidth: 300 }}
        />
        <Popover
          opened={filterOpened}
          onChange={setFilterOpened}
          position="bottom-start"
          width={260}
        >
          <Popover.Target>
            <Button variant="default" onClick={() => setFilterOpened((o) => !o)}>
              Filters
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap="sm">
              <Select
                label="Status"
                placeholder="All statuses"
                data={['pending', 'processing', 'shipped', 'delivered', 'cancelled']}
                value={(store.table.getColumn('status')?.getFilterValue() as string) ?? null}
                onChange={(value) =>
                  store.table.getColumn('status')?.setFilterValue(value || undefined)
                }
                clearable
                size="xs"
              />
              <Select
                label="Payment"
                placeholder="All methods"
                data={['Credit Card', 'PayPal', 'Bank Transfer']}
                value={(store.table.getColumn('method')?.getFilterValue() as string) ?? null}
                onChange={(value) =>
                  store.table.getColumn('method')?.setFilterValue(value || undefined)
                }
                clearable
                size="xs"
              />
              <Group grow gap="xs">
                <NumberInput
                  label="Min amount"
                  placeholder="Min"
                  size="xs"
                  prefix="$"
                  value={
                    (
                      store.table.getColumn('amount')?.getFilterValue() as
                        | [number | undefined, number | undefined]
                        | undefined
                    )?.[0] ?? ''
                  }
                  onChange={(value) => {
                    const current = (store.table.getColumn('amount')?.getFilterValue() as
                      | [number | undefined, number | undefined]
                      | undefined) ?? [undefined, undefined];
                    const min = typeof value === 'number' ? value : undefined;
                    store.table
                      .getColumn('amount')
                      ?.setFilterValue(
                        min == null && current[1] == null ? undefined : [min, current[1]]
                      );
                  }}
                />
                <NumberInput
                  label="Max amount"
                  placeholder="Max"
                  size="xs"
                  prefix="$"
                  value={
                    (
                      store.table.getColumn('amount')?.getFilterValue() as
                        | [number | undefined, number | undefined]
                        | undefined
                    )?.[1] ?? ''
                  }
                  onChange={(value) => {
                    const current = (store.table.getColumn('amount')?.getFilterValue() as
                      | [number | undefined, number | undefined]
                      | undefined) ?? [undefined, undefined];
                    const max = typeof value === 'number' ? value : undefined;
                    store.table
                      .getColumn('amount')
                      ?.setFilterValue(
                        current[0] == null && max == null ? undefined : [current[0], max]
                      );
                  }}
                />
              </Group>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </Group>
      <DataGrid store={store} highlightOnHover striped>
        <Group justify="space-between" p="xs">
          <Text size="sm" c="dimmed">
            {selectedCount > 0 ? `${selectedCount} rows selected` : '\u00A0'}
          </Text>
          <DataGrid.Footer />
        </Group>
      </DataGrid>
    </>
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
