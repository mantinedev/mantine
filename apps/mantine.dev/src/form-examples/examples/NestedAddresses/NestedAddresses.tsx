import { PlusIcon } from '@phosphor-icons/react';
import { Button, Group, Input, Stack, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { Address, AddressCard } from './AddressCard';

interface ContactValues {
  name: string;
  addresses: Address[];
}

export function NestedAddresses() {
  const form = useForm<ContactValues>({
    initialValues: {
      name: '',
      addresses: [
        {
          key: randomId(),
          label: 'Home',
          street: '12 Baker St',
          city: 'London',
          isPrimary: true,
        },
        {
          key: randomId(),
          label: 'Office',
          street: '',
          city: '',
          isPrimary: false,
        },
      ],
    },
    validate: {
      name: isNotEmpty('Name is required'),
      addresses: {
        [formRootRule]: (value) =>
          value.filter((address) => address.isPrimary).length === 1
            ? null
            : 'Exactly one address must be primary',
        label: isNotEmpty('Label is required'),
        street: isNotEmpty('Street is required'),
      },
    },
  });

  const addresses = form.useWatchValue('addresses');

  const handleSubmit = (values: ContactValues) => {
    const primary = values.addresses.find((address) => address.isPrimary);
    notifications.show({
      title: 'Contact saved',
      message: `${values.name}: ${values.addresses.length} ${values.addresses.length === 1 ? 'address' : 'addresses'}, primary is ${primary?.label}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Name"
          placeholder="Jane Doe"
          withAsterisk
          {...form.getInputProps('name')}
        />

        {addresses.map((address, index) => (
          <AddressCard key={address.key} form={form} index={index} />
        ))}

        {addresses.length === 0 && (
          <Text size="sm" ta="center">
            No addresses yet
          </Text>
        )}

        {form.errors.addresses && <Input.Error size="md">{form.errors.addresses}</Input.Error>}

        <Group>
          <Button
            variant="default"
            leftSection={<PlusIcon size={16} />}
            onClick={() =>
              form.insertListItem('addresses', {
                key: randomId(),
                label: '',
                street: '',
                city: '',
                isPrimary: addresses.length === 0,
              })
            }
          >
            Add address
          </Button>
        </Group>

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Save contact
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
