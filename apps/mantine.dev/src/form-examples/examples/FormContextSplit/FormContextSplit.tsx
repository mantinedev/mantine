import { Button, Group, Stack } from '@mantine/core';
import { isEmail, isNotEmpty } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { AddressFields } from './AddressFields';
import { AccountValues, FormProvider, useForm } from './form-context';
import { PersonalFields } from './PersonalFields';

export function FormContextSplit() {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      postalCode: '',
      country: null,
    },
    validate: {
      firstName: isNotEmpty('First name is required'),
      lastName: isNotEmpty('Last name is required'),
      email: isEmail('Invalid email'),
      street: isNotEmpty('Street is required'),
      city: isNotEmpty('City is required'),
      country: isNotEmpty('Country is required'),
    },
  });

  const handleSubmit = (values: AccountValues) => {
    notifications.show({
      title: 'Account created',
      message: `${values.firstName} ${values.lastName} (${values.email}), shipping to ${values.city}, ${values.country}`,
    });
  };

  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <PersonalFields />

          <AddressFields />

          <Group justify="flex-end">
            <Button size="md" variant="default" onClick={form.reset}>
              Reset
            </Button>

            <Button size="md" type="submit">
              Create account
            </Button>
          </Group>
        </Stack>
      </form>
    </FormProvider>
  );
}
