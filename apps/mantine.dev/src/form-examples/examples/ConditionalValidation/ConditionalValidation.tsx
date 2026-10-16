import { Button, Checkbox, Collapse, Group, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, useForm, when } from '@mantine/form';
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
      street: when((values) => values.shipToDifferentAddress, isNotEmpty('Street is required')),
      city: when((values) => values.shipToDifferentAddress, isNotEmpty('City is required')),
      zip: when((values) => values.shipToDifferentAddress, isNotEmpty('Zip code is required')),
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

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
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
