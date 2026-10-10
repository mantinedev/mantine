import { Button, Checkbox, Collapse, Group, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface OrderValues {
  name: string;
  email: string;
  shipToDifferentAddress: boolean;
  street: string;
  city: string;
  zip: string;
}

export function ConditionalValidation() {
  const form = useForm<OrderValues>({
    initialValues: {
      name: '',
      email: '',
      shipToDifferentAddress: false,
      street: '',
      city: '',
      zip: '',
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      street: (value, values) =>
        values.shipToDifferentAddress ? isNotEmpty('Street is required')(value) : null,
      city: (value, values) =>
        values.shipToDifferentAddress ? isNotEmpty('City is required')(value) : null,
      zip: (value, values) =>
        values.shipToDifferentAddress ? isNotEmpty('Zip code is required')(value) : null,
    },
  });

  const shipToDifferentAddress = form.useWatchValue('shipToDifferentAddress');

  form.watch('shipToDifferentAddress', ({ value }) => {
    if (!value) {
      form.clearFieldError('street');
      form.clearFieldError('city');
      form.clearFieldError('zip');
    }
  });

  const handleSubmit = (values: OrderValues) => {
    const address = values.shipToDifferentAddress
      ? `${values.street}, ${values.zip} ${values.city}`
      : 'billing address';

    notifications.show({
      title: 'Order confirmed',
      message: `Shipping to ${address}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Name"
          placeholder="John Doe"
          withAsterisk
          {...form.getInputProps('name')}
        />

        <TextInput
          size="md"
          label="Email"
          placeholder="john@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <div>
          <Checkbox
            size="md"
            label="Ship to a different address"
            {...form.getInputProps('shipToDifferentAddress', { type: 'checkbox' })}
          />

          <Collapse expanded={shipToDifferentAddress}>
            <Stack mt="md">
              <TextInput
                size="md"
                label="Street"
                placeholder="123 Main St"
                withAsterisk
                {...form.getInputProps('street')}
              />

              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  size="md"
                  label="City"
                  placeholder="Berlin"
                  withAsterisk
                  {...form.getInputProps('city')}
                />

                <TextInput
                  size="md"
                  label="Zip code"
                  placeholder="10115"
                  withAsterisk
                  {...form.getInputProps('zip')}
                />
              </SimpleGrid>
            </Stack>
          </Collapse>
        </div>

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Place order
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
