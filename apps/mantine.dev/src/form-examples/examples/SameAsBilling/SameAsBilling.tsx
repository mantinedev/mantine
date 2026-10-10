import { Button, Checkbox, Group, Stack } from '@mantine/core';
import { isNotEmpty, matches, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { AddressFields } from './AddressFields';
import { Address, AddressValues } from './types';

interface Values extends AddressValues {
  sameAsBilling: boolean;
}

const emptyAddress: Address = { street: '', city: '', zip: '' };

const addressRules = {
  street: isNotEmpty('Street is required'),
  city: isNotEmpty('City is required'),
  zip: matches(/^\d{5}$/, 'ZIP code must be 5 digits'),
};

export function SameAsBilling() {
  const form = useForm<Values>({
    // Watchers of nested shipping fields are notified when the whole shipping object is set
    cascadeUpdates: true,
    initialValues: {
      billing: emptyAddress,
      shipping: emptyAddress,
      sameAsBilling: false,
    },
    validate: {
      billing: addressRules,
      shipping: {
        street: (value, values) => (values.sameAsBilling ? null : addressRules.street(value)),
        city: (value, values) => (values.sameAsBilling ? null : addressRules.city(value)),
        zip: (value, values) => (values.sameAsBilling ? null : addressRules.zip(value)),
      },
    },
    enhanceGetInputProps: ({ field, form }) =>
      field.startsWith('shipping.') && form.getValues().sameAsBilling ? { disabled: true } : {},
  });

  // enhanceGetInputProps reads sameAsBilling during render, subscribe to rerender on toggle
  const sameAsBilling = form.useWatchValue('sameAsBilling');

  form.watch('sameAsBilling', ({ value }) => {
    if (value) {
      form.setFieldValue('shipping', { ...form.getValues().billing });
    }
  });

  form.watch('billing', ({ value }) => {
    if (form.getValues().sameAsBilling) {
      form.setFieldValue('shipping', { ...value }, { forceUpdate: false });
    }
  });

  const handleSubmit = (values: Values) => {
    const { shipping } = values;
    notifications.show({
      title: 'Addresses saved',
      message: `Orders will be shipped to ${shipping.street}, ${shipping.zip} ${shipping.city}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <AddressFields form={form} prefix="billing" legend="Billing address" />

        <Checkbox
          size="md"
          label="Shipping address is the same as billing"
          {...form.getInputProps('sameAsBilling', { type: 'checkbox' })}
        />

        <AddressFields
          form={form}
          prefix="shipping"
          legend="Shipping address"
          disabled={sameAsBilling}
        />

        <Group justify="flex-end">
          <Button size="md" variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button size="md" type="submit">
            Save addresses
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
