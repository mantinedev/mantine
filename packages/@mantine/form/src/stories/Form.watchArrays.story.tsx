import { useState } from 'react';
import { Button, Code, Group, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { useForm } from '../use-form';

export default { title: 'Form' };

interface Product {
  name: string;
  price: number;
  quantity: number;
  key: string;
}

export function WatchArrays() {
  const [watchLog, setWatchLog] = useState<{ previous: Product[]; current: Product[] }[]>([]);
  const [total, setTotal] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      products: [
        { name: 'Phone', price: 1000, quantity: 1, key: randomId() },
        { name: 'Tablet', price: 500, quantity: 2, key: randomId() },
      ] as Product[],
    },
  });

  form.watch('products', ({ previousValue, value }) => {
    setWatchLog((log) => [...log, { previous: previousValue, current: value }]);
    setTotal(value.reduce((acc: number, item: Product) => acc + item.price * item.quantity, 0));
  });

  return (
    <Stack style={{ padding: 40, maxWidth: 600, margin: 'auto' }}>
      <Text fw={700} size="lg">
        form.watch with arrays
      </Text>

      <Text size="sm" c="dimmed">
        The total updates via form.watch when any nested field changes, or when items are
        added/removed/reordered.
      </Text>

      <Text fw={700} size="xl">
        Total: ${total}
      </Text>

      {form.getValues().products.map((item, index) => (
        <Group key={item.key} align="flex-end">
          <TextInput
            label="Name"
            style={{ flex: 1 }}
            {...form.getInputProps(`products.${index}.name`)}
            key={form.key(`products.${index}.name`)}
          />
          <NumberInput
            label="Price"
            style={{ width: 100 }}
            {...form.getInputProps(`products.${index}.price`)}
            key={form.key(`products.${index}.price`)}
          />
          <NumberInput
            label="Qty"
            style={{ width: 80 }}
            {...form.getInputProps(`products.${index}.quantity`)}
            key={form.key(`products.${index}.quantity`)}
          />
          <Button color="red" onClick={() => form.removeListItem('products', index)}>
            Remove
          </Button>
        </Group>
      ))}

      <Group>
        <Button
          onClick={() =>
            form.insertListItem('products', {
              name: '',
              price: 0,
              quantity: 1,
              key: randomId(),
            })
          }
        >
          Add product
        </Button>
        {form.getValues().products.length >= 2 && (
          <Button
            variant="outline"
            onClick={() => form.reorderListItem('products', { from: 0, to: 1 })}
          >
            Swap first two
          </Button>
        )}
      </Group>

      <Text fw={500} mt="md">
        Watch log ({watchLog.length} events):
      </Text>
      <Code block style={{ maxHeight: 300, overflow: 'auto' }}>
        {JSON.stringify(watchLog, null, 2)}
      </Code>
    </Stack>
  );
}
