import { PlusIcon } from '@phosphor-icons/react';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { formatMoney, getTotal, InvoiceItem, InvoiceItemsTable } from './InvoiceItemsTable';

interface InvoiceValues {
  customer: string;
  items: InvoiceItem[];
}

export function InvoiceItems() {
  const form = useForm<InvoiceValues>({
    initialValues: {
      customer: '',
      items: [
        {
          key: randomId(),
          description: 'Design work',
          quantity: 10,
          price: 80,
        },
        {
          key: randomId(),
          description: 'Hosting',
          quantity: 1,
          price: 25,
        },
      ],
    },
    validate: {
      customer: isNotEmpty('Customer name is required'),
      items: {
        [formRootRule]: isNotEmpty('Add at least one item'),
        description: isNotEmpty('Description is required'),
        quantity: (value) => (Number(value) >= 1 ? null : 'Quantity must be at least 1'),
      },
    },
  });

  const handleSubmit = (values: InvoiceValues) => {
    notifications.show({
      title: 'Invoice created',
      message: `Invoice for ${values.customer}: ${values.items.length} items, total ${formatMoney(getTotal(values.items))}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Customer"
          placeholder="Acme Inc."
          withAsterisk
          {...form.getInputProps('customer')}
        />

        <InvoiceItemsTable form={form} />

        <Group>
          <Button
            variant="default"
            leftSection={<PlusIcon size={16} />}
            onClick={() =>
              form.insertListItem('items', {
                key: randomId(),
                description: '',
                quantity: 1,
                price: 0,
              })
            }
          >
            Add item
          </Button>
        </Group>

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Create invoice
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
