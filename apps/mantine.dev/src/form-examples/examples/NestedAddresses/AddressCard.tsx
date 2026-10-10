import { TrashIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

export interface Address {
  key: string;
  label: string;
  street: string;
  city: string;
  isPrimary: boolean;
}

interface AddressCardProps {
  form: UseFormReturnType<{ addresses: Address[] }>;
  index: number;
}

export function AddressCard({ form, index }: AddressCardProps) {
  const isPrimary = form.useWatchValue(`addresses.${index}.isPrimary`);

  const setPrimary = () => {
    const current = form.getValues().addresses;
    const primaryIndex = current.findIndex((address) => address.isPrimary);

    if (primaryIndex !== -1 && primaryIndex !== index) {
      form.replaceListItem('addresses', primaryIndex, {
        ...current[primaryIndex],
        isPrimary: false,
      });
    }

    form.replaceListItem('addresses', index, { ...current[index], isPrimary: true });
  };

  return (
    <Paper withBorder p="md">
      <Stack gap="sm">
        <Group justify="space-between" wrap="nowrap">
          <Group gap="xs">
            <Text fw={500} size="sm">
              Address {index + 1}
            </Text>
            {isPrimary && <Badge size="sm">Primary</Badge>}
          </Group>

          <Group gap="xs" wrap="nowrap">
            <Button size="compact-xs" variant="default" disabled={isPrimary} onClick={setPrimary}>
              Set as primary
            </Button>

            <ActionIcon
              variant="default"
              aria-label="Remove address"
              onClick={() => form.removeListItem('addresses', index)}
            >
              <TrashIcon size={18} color="var(--mantine-color-red-6)" />
            </ActionIcon>
          </Group>
        </Group>

        <TextInput
          size="md"
          label="Label"
          placeholder="Home"
          withAsterisk
          {...form.getInputProps(`addresses.${index}.label`)}
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            size="md"
            label="Street"
            placeholder="12 Baker St"
            withAsterisk
            {...form.getInputProps(`addresses.${index}.street`)}
          />

          <TextInput
            size="md"
            label="City"
            placeholder="London"
            {...form.getInputProps(`addresses.${index}.city`)}
          />
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
