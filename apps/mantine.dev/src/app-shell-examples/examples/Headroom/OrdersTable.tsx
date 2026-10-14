import { Badge, Surface, Table, Title } from '@mantine/core';
import { OrderStatus, orders } from './data';

const statusColors: Record<OrderStatus, string> = {
  Paid: 'green',
  Pending: 'yellow',
  Refunded: 'red',
};

export function OrdersTable() {
  const rows = orders.map((order) => (
    <Table.Tr key={order.id}>
      <Table.Td>{order.id}</Table.Td>
      <Table.Td>{order.customer}</Table.Td>
      <Table.Td>{order.date}</Table.Td>
      <Table.Td>
        <Badge color={statusColors[order.status]}>{order.status}</Badge>
      </Table.Td>
      <Table.Td ta="right">{order.amount}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Surface level={0} withBorder>
      <Title order={3} fz="md" p="md" c="var(--mantine-color-bright)">
        All orders
      </Title>
      <Table.ScrollContainer minWidth={500}>
        <Table verticalSpacing="sm" horizontalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Order</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th ta="right">Amount</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Surface>
  );
}
