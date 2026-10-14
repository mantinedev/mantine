import { ArrowDownRightIcon, ArrowUpRightIcon, PlusIcon } from '@phosphor-icons/react';
import {
  Badge,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Surface,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { OrderStatus, orders, stats } from './data';
import classes from './Dashboard.module.css';

const statusColors: Record<OrderStatus, string> = {
  Paid: 'green',
  Pending: 'yellow',
  Refunded: 'red',
};

export function Dashboard() {
  const statCards = stats.map((stat) => {
    const DiffIcon = stat.diff > 0 ? ArrowUpRightIcon : ArrowDownRightIcon;

    return (
      <Surface key={stat.label} level={0} withBorder p="md">
        <Text className={classes.statLabel}>{stat.label}</Text>
        <Group justify="space-between" align="flex-end" wrap="nowrap" mt="xs">
          <Text className={classes.statValue}>{stat.value}</Text>
          <Group gap={4} wrap="nowrap" c={stat.diff > 0 ? 'teal' : 'red'}>
            <Text size="sm" fw={500}>
              {stat.diff > 0 ? '+' : ''}
              {stat.diff}%
            </Text>
            <DiffIcon size={16} />
          </Group>
        </Group>
      </Surface>
    );
  });

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
    <Stack gap="lg">
      <Group justify="space-between">
        <div>
          <Title order={2} c="var(--mantine-color-bright)">
            Dashboard
          </Title>
          <Text size="sm">Overview of your store for the last 30 days</Text>
        </div>
        <Button leftSection={<PlusIcon size={16} />}>New order</Button>
      </Group>

      <SimpleGrid type="container" cols={{ base: 1, '440px': 2, '860px': 4 }}>
        {statCards}
      </SimpleGrid>

      <Surface level={0} withBorder>
        <Title order={3} fz="md" p="md" c="var(--mantine-color-bright)">
          Recent orders
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
    </Stack>
  );
}
