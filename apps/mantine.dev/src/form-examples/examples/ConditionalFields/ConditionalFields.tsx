import { Button, Checkbox, Collapse, Group, Radio, Stack, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface DeliveryValues {
  name: string;
  method: 'pickup' | 'courier';
  address: string;
  leaveAtDoor: boolean;
}

export function ConditionalFields() {
  const form = useForm<DeliveryValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', method: 'pickup', address: '', leaveAtDoor: false },
    validate: {
      name: isNotEmpty('Name is required'),
      address: (value, values) =>
        values.method === 'courier' && value.trim().length === 0
          ? 'Address is required for courier delivery'
          : null,
    },
  });

  const isCourier = form.useWatchValue('method') === 'courier';

  const handleSubmit = (values: DeliveryValues) => {
    notifications.show({
      title: 'Order placed',
      message: `Order placed, delivery by ${values.method}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Name"
          placeholder="Jane Doe"
          withAsterisk
          {...form.getInputProps('name')}
        />

        <div>
          <Radio.Group label="Delivery method" withAsterisk {...form.getInputProps('method')}>
            <Group mt="xs">
              <Radio value="pickup" label="Pickup" />
              <Radio value="courier" label="Courier" />
            </Group>
          </Radio.Group>

          <Collapse expanded={isCourier}>
            <Stack mt="md">
              <TextInput
                label="Address"
                placeholder="Street, building, apartment"
                withAsterisk
                {...form.getInputProps('address')}
              />
              <Checkbox
                label="Leave at door"
                {...form.getInputProps('leaveAtDoor', { type: 'checkbox' })}
              />
            </Stack>
          </Collapse>
        </div>

        <Group justify="flex-end">
          <Button type="submit">Place order</Button>
        </Group>
      </Stack>
    </form>
  );
}
