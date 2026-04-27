import { Badge, NumberFormatter, Text, TextInput } from '@mantine/core';
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

const orders: Order[] = [
  {
    id: 'ORD-1001',
    customer: 'Alice Johnson',
    product: 'MacBook Pro 16"',
    amount: 2499,
    status: 'delivered',
    date: '2024-12-01',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1002',
    customer: 'Bob Smith',
    product: 'iPhone 15 Pro',
    amount: 1199,
    status: 'shipped',
    date: '2024-12-03',
    method: 'PayPal',
  },
  {
    id: 'ORD-1003',
    customer: 'Carol Williams',
    product: 'AirPods Max',
    amount: 549,
    status: 'delivered',
    date: '2024-12-05',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1004',
    customer: 'David Brown',
    product: 'iPad Air',
    amount: 799,
    status: 'cancelled',
    date: '2024-12-07',
    method: 'Bank Transfer',
  },
  {
    id: 'ORD-1005',
    customer: 'Eva Davis',
    product: 'Apple Watch Ultra',
    amount: 899,
    status: 'delivered',
    date: '2024-12-08',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1006',
    customer: 'Frank Miller',
    product: 'MacBook Air 15"',
    amount: 1499,
    status: 'processing',
    date: '2024-12-10',
    method: 'PayPal',
  },
  {
    id: 'ORD-1007',
    customer: 'Grace Wilson',
    product: 'HomePod mini',
    amount: 99,
    status: 'delivered',
    date: '2024-12-11',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1008',
    customer: 'Henry Taylor',
    product: 'iPhone 15',
    amount: 899,
    status: 'shipped',
    date: '2024-12-12',
    method: 'Bank Transfer',
  },
  {
    id: 'ORD-1009',
    customer: 'Irene Anderson',
    product: 'MacBook Pro 14"',
    amount: 1999,
    status: 'pending',
    date: '2024-12-14',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1010',
    customer: 'James Thomas',
    product: 'AirPods Pro',
    amount: 249,
    status: 'delivered',
    date: '2024-12-15',
    method: 'PayPal',
  },
  {
    id: 'ORD-1011',
    customer: 'Karen Jackson',
    product: 'iPad Pro 13"',
    amount: 1299,
    status: 'shipped',
    date: '2024-12-16',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1012',
    customer: 'Leo White',
    product: 'Mac Studio',
    amount: 1999,
    status: 'processing',
    date: '2024-12-17',
    method: 'Bank Transfer',
  },
  {
    id: 'ORD-1013',
    customer: 'Mia Harris',
    product: 'Apple Watch SE',
    amount: 279,
    status: 'delivered',
    date: '2024-12-18',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1014',
    customer: 'Nathan Martin',
    product: 'AirTag 4-Pack',
    amount: 99,
    status: 'cancelled',
    date: '2024-12-19',
    method: 'PayPal',
  },
  {
    id: 'ORD-1015',
    customer: 'Olivia Garcia',
    product: 'Magic Keyboard',
    amount: 299,
    status: 'delivered',
    date: '2024-12-20',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1016',
    customer: 'Patrick Martinez',
    product: 'Studio Display',
    amount: 1599,
    status: 'pending',
    date: '2024-12-21',
    method: 'Bank Transfer',
  },
  {
    id: 'ORD-1017',
    customer: 'Quinn Robinson',
    product: 'iPhone 15 Pro Max',
    amount: 1399,
    status: 'shipped',
    date: '2024-12-22',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1018',
    customer: 'Rachel Clark',
    product: 'iPad mini',
    amount: 499,
    status: 'delivered',
    date: '2024-12-23',
    method: 'PayPal',
  },
  {
    id: 'ORD-1019',
    customer: 'Sam Lewis',
    product: 'MacBook Air 13"',
    amount: 1099,
    status: 'processing',
    date: '2024-12-24',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1020',
    customer: 'Tina Walker',
    product: 'AirPods 4',
    amount: 179,
    status: 'delivered',
    date: '2024-12-25',
    method: 'Bank Transfer',
  },
  {
    id: 'ORD-1021',
    customer: 'Uma Hall',
    product: 'Apple TV 4K',
    amount: 179,
    status: 'pending',
    date: '2024-12-26',
    method: 'PayPal',
  },
  {
    id: 'ORD-1022',
    customer: 'Victor Allen',
    product: 'Mac mini',
    amount: 599,
    status: 'shipped',
    date: '2024-12-27',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1023',
    customer: 'Wendy Young',
    product: 'Vision Pro',
    amount: 3499,
    status: 'processing',
    date: '2024-12-28',
    method: 'Credit Card',
  },
  {
    id: 'ORD-1024',
    customer: 'Xavier King',
    product: 'Magic Mouse',
    amount: 99,
    status: 'delivered',
    date: '2024-12-29',
    method: 'PayPal',
  },
  {
    id: 'ORD-1025',
    customer: 'Yara Scott',
    product: 'MacBook Pro 16"',
    amount: 2499,
    status: 'shipped',
    date: '2024-12-30',
    method: 'Bank Transfer',
  },
];

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

export const orders: Order[] = [
  { id: 'ORD-1001', customer: 'Alice Johnson', product: 'MacBook Pro 16"', amount: 2499, status: 'delivered', date: '2024-12-01', method: 'Credit Card' },
  { id: 'ORD-1002', customer: 'Bob Smith', product: 'iPhone 15 Pro', amount: 1199, status: 'shipped', date: '2024-12-03', method: 'PayPal' },
  { id: 'ORD-1003', customer: 'Carol Williams', product: 'AirPods Max', amount: 549, status: 'delivered', date: '2024-12-05', method: 'Credit Card' },
  { id: 'ORD-1004', customer: 'David Brown', product: 'iPad Air', amount: 799, status: 'cancelled', date: '2024-12-07', method: 'Bank Transfer' },
  { id: 'ORD-1005', customer: 'Eva Davis', product: 'Apple Watch Ultra', amount: 899, status: 'delivered', date: '2024-12-08', method: 'Credit Card' },
  { id: 'ORD-1006', customer: 'Frank Miller', product: 'MacBook Air 15"', amount: 1499, status: 'processing', date: '2024-12-10', method: 'PayPal' },
  { id: 'ORD-1007', customer: 'Grace Wilson', product: 'HomePod mini', amount: 99, status: 'delivered', date: '2024-12-11', method: 'Credit Card' },
  { id: 'ORD-1008', customer: 'Henry Taylor', product: 'iPhone 15', amount: 899, status: 'shipped', date: '2024-12-12', method: 'Bank Transfer' },
  { id: 'ORD-1009', customer: 'Irene Anderson', product: 'MacBook Pro 14"', amount: 1999, status: 'pending', date: '2024-12-14', method: 'Credit Card' },
  { id: 'ORD-1010', customer: 'James Thomas', product: 'AirPods Pro', amount: 249, status: 'delivered', date: '2024-12-15', method: 'PayPal' },
  { id: 'ORD-1011', customer: 'Karen Jackson', product: 'iPad Pro 13"', amount: 1299, status: 'shipped', date: '2024-12-16', method: 'Credit Card' },
  { id: 'ORD-1012', customer: 'Leo White', product: 'Mac Studio', amount: 1999, status: 'processing', date: '2024-12-17', method: 'Bank Transfer' },
  { id: 'ORD-1013', customer: 'Mia Harris', product: 'Apple Watch SE', amount: 279, status: 'delivered', date: '2024-12-18', method: 'Credit Card' },
  { id: 'ORD-1014', customer: 'Nathan Martin', product: 'AirTag 4-Pack', amount: 99, status: 'cancelled', date: '2024-12-19', method: 'PayPal' },
  { id: 'ORD-1015', customer: 'Olivia Garcia', product: 'Magic Keyboard', amount: 299, status: 'delivered', date: '2024-12-20', method: 'Credit Card' },
  { id: 'ORD-1016', customer: 'Patrick Martinez', product: 'Studio Display', amount: 1599, status: 'pending', date: '2024-12-21', method: 'Bank Transfer' },
  { id: 'ORD-1017', customer: 'Quinn Robinson', product: 'iPhone 15 Pro Max', amount: 1399, status: 'shipped', date: '2024-12-22', method: 'Credit Card' },
  { id: 'ORD-1018', customer: 'Rachel Clark', product: 'iPad mini', amount: 499, status: 'delivered', date: '2024-12-23', method: 'PayPal' },
  { id: 'ORD-1019', customer: 'Sam Lewis', product: 'MacBook Air 13"', amount: 1099, status: 'processing', date: '2024-12-24', method: 'Credit Card' },
  { id: 'ORD-1020', customer: 'Tina Walker', product: 'AirPods 4', amount: 179, status: 'delivered', date: '2024-12-25', method: 'Bank Transfer' },
  { id: 'ORD-1021', customer: 'Uma Hall', product: 'Apple TV 4K', amount: 179, status: 'pending', date: '2024-12-26', method: 'PayPal' },
  { id: 'ORD-1022', customer: 'Victor Allen', product: 'Mac mini', amount: 599, status: 'shipped', date: '2024-12-27', method: 'Credit Card' },
  { id: 'ORD-1023', customer: 'Wendy Young', product: 'Vision Pro', amount: 3499, status: 'processing', date: '2024-12-28', method: 'Credit Card' },
  { id: 'ORD-1024', customer: 'Xavier King', product: 'Magic Mouse', amount: 99, status: 'delivered', date: '2024-12-29', method: 'PayPal' },
  { id: 'ORD-1025', customer: 'Yara Scott', product: 'MacBook Pro 16"', amount: 2499, status: 'shipped', date: '2024-12-30', method: 'Bank Transfer' },
];
`;

const code = `
import { Badge, NumberFormatter, Text, TextInput } from '@mantine/core';
import { DataGrid, useDataGrid } from '@mantine/data-grid';
import { orders, statusColors } from './data';
import type { Order } from './data';

function Demo() {
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
        enableColumnFilter: true,
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
          <Text fw={500}>
            <NumberFormatter
              value={getValue() as number}
              prefix="$"
              thousandSeparator
              decimalScale={2}
            />
          </Text>
        ),
        meta: { filterVariant: 'range' },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 130,
        enableSorting: true,
        cell: ({ getValue }) => {
          const status = getValue() as Order['status'];
          return (
            <Badge variant="light" color={statusColors[status]} size="sm">
              {status}
            </Badge>
          );
        },
        meta: { filterVariant: 'select' },
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
        meta: { filterVariant: 'select' },
      },
    ],
    withGlobalFilter: true,
    withPagination: true,
    withRowSelection: true,
    withFaceting: true,
    pageSize: 10,
  });

  return (
    <>
      <TextInput
        placeholder="Search orders..."
        value={store.globalFilter ?? ''}
        onChange={(event) => store.setGlobalFilter(event.currentTarget.value)}
        mb="md"
        style={{ maxWidth: 300 }}
      />
      <DataGrid store={store} highlightOnHover striped />
    </>
  );
}
`;

function Demo() {
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
        enableColumnFilter: true,
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
          <Text fw={500}>
            <NumberFormatter
              value={getValue() as number}
              prefix="$"
              thousandSeparator
              decimalScale={2}
            />
          </Text>
        ),
        meta: { filterVariant: 'range' },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 130,
        enableSorting: true,
        cell: ({ getValue }) => {
          const status = getValue() as Order['status'];
          return (
            <Badge variant="light" color={statusColors[status]} size="sm">
              {status}
            </Badge>
          );
        },
        meta: { filterVariant: 'select' },
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
        meta: { filterVariant: 'select' },
      },
    ],
    withGlobalFilter: true,
    withPagination: true,
    withRowSelection: true,
    withFaceting: true,
    pageSize: 10,
  });

  return (
    <>
      <TextInput
        placeholder="Search orders..."
        value={store.globalFilter ?? ''}
        onChange={(event) => store.setGlobalFilter(event.currentTarget.value)}
        mb="md"
        style={{ maxWidth: 300 }}
      />
      <DataGrid store={store} highlightOnHover striped />
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
