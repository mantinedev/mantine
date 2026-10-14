import { useEffect, useRef } from 'react';
import { XIcon } from '@phosphor-icons/react';
import { ActionIcon, Badge, Button, Group, Stack, Text, Title } from '@mantine/core';
import { Order, statusColors } from './data';

interface OrderDetailsProps {
  order: Order;
  onClose: () => void;
}

export function OrderDetails({ order, onClose }: OrderDetailsProps) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButton.current?.focus();
  }, []);

  const email = `${order.customer.toLowerCase().replace(' ', '.')}@example.com`;

  const fields = [
    ['Customer', order.customer],
    ['Email', email],
    ['Date', order.date],
    ['Amount', order.amount],
  ].map(([label, value]) => (
    <Group key={label} justify="space-between" wrap="nowrap">
      <Text size="sm">{label}</Text>
      <Text size="sm" fw={500} ta="right">
        {value}
      </Text>
    </Group>
  ));

  return (
    <Stack gap="md">
      <Group justify="space-between" wrap="nowrap">
        <Title order={3} fz="md" c="var(--mantine-color-bright)">
          Order {order.id}
        </Title>
        <ActionIcon
          ref={closeButton}
          variant="default"
          aria-label="Close details"
          title="Close"
          onClick={onClose}
        >
          <XIcon size={16} />
        </ActionIcon>
      </Group>

      <Badge color={statusColors[order.status]}>{order.status}</Badge>

      <Stack gap="xs">{fields}</Stack>

      <Group justify="flex-end" mt="md">
        <Button variant="default">Refund</Button>
        <Button>Send invoice</Button>
      </Group>
    </Stack>
  );
}
