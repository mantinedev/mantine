import { PlusIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Button, Group, Input, Stack, Text, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { randomId } from '@mantine/hooks';

export interface Ticket {
  key: string;
  holder: string;
}

interface TicketsListProps {
  form: UseFormReturnType<{ tickets: Ticket[] }>;
}

export function TicketsList({ form }: TicketsListProps) {
  const tickets = form.getValues().tickets.map((ticket, index) => (
    <Group key={ticket.key} align="flex-start" wrap="nowrap">
      <TextInput
        size="md"
        placeholder="Ticket holder name"
        aria-label="Ticket holder name"
        style={{ flex: 1 }}
        {...form.getInputProps(`tickets.${index}.holder`)}
      />

      <ActionIcon
        variant="default"
        size="input-md"
        aria-label="Remove ticket"
        onClick={() => form.removeListItem('tickets', index)}
      >
        <TrashIcon size={18} color="var(--mantine-color-red-6)" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Stack gap="xs">
      {tickets.length > 0 ? tickets : <Text size="sm">No tickets yet</Text>}
      {form.errors.tickets && <Input.Error size="md">{form.errors.tickets}</Input.Error>}
      <Group>
        <Button
          variant="default"
          leftSection={<PlusIcon size={16} />}
          onClick={() => form.insertListItem('tickets', { key: randomId(), holder: '' })}
        >
          Add ticket
        </Button>
      </Group>
    </Stack>
  );
}
