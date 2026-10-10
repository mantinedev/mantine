import { z } from 'zod';
import { Button, Group, Input, NumberInput, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { schemaResolver, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { Ticket, TicketsList } from './TicketsList';

interface RegistrationValues {
  name: string;
  email: string;
  age: number | '';
  address: {
    city: string;
    zip: string;
  };
  tickets: Ticket[];
}

const schema = z.object({
  name: z.string().min(2, { error: 'Name must have at least 2 letters' }),
  email: z.email({ error: 'Invalid email' }),
  age: z.number({ error: 'Age is required' }).min(18, { error: 'You must be at least 18' }),
  address: z.object({
    city: z.string().min(1, { error: 'City is required' }),
    zip: z.string().regex(/^\d{5}$/, { error: 'Zip code must be 5 digits' }),
  }),
  tickets: z
    .array(
      z.object({
        holder: z.string().min(2, { error: 'Holder name must have at least 2 letters' }),
      })
    )
    .min(1, { error: 'Add at least one ticket' }),
});

export function ZodSchema() {
  const form = useForm<RegistrationValues>({
    initialValues: {
      name: '',
      email: '',
      age: '',
      address: {
        city: '',
        zip: '',
      },
      tickets: [
        {
          key: randomId(),
          holder: '',
        },
      ],
    },
    validate: schemaResolver(schema, { sync: true }),
  });

  const handleSubmit = (values: RegistrationValues) => {
    notifications.show({
      title: 'Registration complete',
      message: `${values.tickets.length} ${values.tickets.length === 1 ? 'ticket' : 'tickets'} reserved for ${values.name}, confirmation sent to ${values.email}`,
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

        <NumberInput
          size="md"
          label="Age"
          placeholder="18"
          withAsterisk
          min={0}
          max={120}
          {...form.getInputProps('age')}
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            size="md"
            label="City"
            placeholder="Berlin"
            withAsterisk
            {...form.getInputProps('address.city')}
          />

          <TextInput
            size="md"
            label="Zip code"
            placeholder="10115"
            withAsterisk
            {...form.getInputProps('address.zip')}
          />
        </SimpleGrid>

        <div>
          <Input.Label size="md" mb="xs">
            Tickets
          </Input.Label>

          <TicketsList form={form} />
        </div>

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Register
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
