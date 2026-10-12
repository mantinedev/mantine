import { Divider, Group, Surface, Stack, Text } from '@mantine/core';
import { products } from './data';

export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

interface OrderSummaryProps {
  product: string | null;
  quantity: number | string;
  discount: number | string;
  total: number;
}

export function OrderSummary({ product, quantity, discount, total }: OrderSummaryProps) {
  const item = products.find((entry) => entry.value === product);
  const percent = typeof discount === 'number' ? discount : 0;

  return (
    <Surface level={0} withBorder p="md">
      <Stack gap="xs">
        <Group justify="space-between">
          <Text size="sm">{item ? item.label : 'No product selected'}</Text>
          <Text size="sm">
            {item && typeof quantity === 'number'
              ? `${quantity} × ${currency.format(item.price)}`
              : '—'}
          </Text>
        </Group>

        <Group justify="space-between">
          <Text size="sm">Discount</Text>
          <Text size="sm">{percent}%</Text>
        </Group>

        <Divider />

        <Group justify="space-between">
          <Text fw={500}>Total</Text>

          <Text fw={700} size="lg">
            {currency.format(total)}
          </Text>
        </Group>
      </Stack>
    </Surface>
  );
}
