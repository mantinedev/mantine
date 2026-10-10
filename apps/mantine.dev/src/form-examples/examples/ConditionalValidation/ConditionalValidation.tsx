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
    mode: 'uncontrolled',
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

  // Clear address values and their errors only after the collapse animation ends
  const handleCollapseEnd = () => {
    if (!shipToDifferentAddress) {
      form.setValues({ street: '', city: '', zip: '' });
    }
  };

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
          label="Name"
          placeholder="John Doe"
          withAsterisk
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="john@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <div>
          <Checkbox
            label="Ship to a different address"
            {...form.getInputProps('shipToDifferentAddress', { type: 'checkbox' })}
          />
          <Collapse expanded={shipToDifferentAddress} onTransitionEnd={handleCollapseEnd}>
            <Stack mt="md">
              <TextInput
                label="Street"
                placeholder="123 Main St"
                withAsterisk
                {...form.getInputProps('street')}
              />
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="City"
                  placeholder="Berlin"
                  withAsterisk
                  {...form.getInputProps('city')}
                />
                <TextInput
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
          <Button type="submit">Place order</Button>
        </Group>
      </Stack>
    </form>
  );
}
