import { RefObject } from 'react';
import { Badge, Surface, Table, Title, UnstyledButton } from '@mantine/core';
import { Order, orders, statusColors } from './data';
import classes from './OrdersTable.module.css';

interface OrdersTableProps {
  selected: Order | null;
  onSelect: (order: Order) => void;
  orderControlsRef: RefObject<Record<string, HTMLButtonElement | null>>;
}

export function OrdersTable({ selected, onSelect, orderControlsRef }: OrdersTableProps) {
  const rows = orders.map((order) => (
    <Table.Tr
      key={order.id}
      className={classes.row}
      data-selected={order.id === selected?.id || undefined}
      onClick={() => onSelect(order)}
    >
      <Table.Td>
        <UnstyledButton
          ref={(node) => {
            orderControlsRef.current[order.id] = node;
          }}
          fz="inherit"
        >
          {order.id}
        </UnstyledButton>
      </Table.Td>
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
        Recent orders
      </Title>
      <Table.ScrollContainer minWidth={500}>
        <Table verticalSpacing="sm" horizontalSpacing="md" highlightOnHover>
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
