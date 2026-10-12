import {
  Button,
  Group,
  MultiSelect,
  NumberInput,
  SimpleGrid,
  Stack,
  Switch,
  TagsInput,
  TextInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { isNotEmpty, TransformedValues, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface EventValues {
  title: string;
  date: string | null;
  capacity: number | string;
  tags: string[];
  isPublic: boolean;
  emails: string[];
}

const initialValues: EventValues = {
  title: '',
  date: null,
  capacity: '',
  tags: [],
  isPublic: true,
  emails: [],
};

export function SubmitWithTransform() {
  const form = useForm({
    initialValues,
    validate: {
      title: isNotEmpty('Title is required'),
      date: isNotEmpty('Pick a date'),
      capacity: (value) => (Number(value) > 0 ? null : 'Capacity must be greater than 0'),
    },
    // Form values are kept in the input-friendly shape, the API payload is built here
    transformValues: (values) => ({
      ...values,
      date: values.date ? new Date(values.date).toISOString() : null,
      capacity: Number(values.capacity) || 0,
      emails: values.emails.map((email) => email.trim().toLowerCase()),
    }),
  });

  type Payload = TransformedValues<typeof form>;

  const describePayload = (payload: Payload) =>
    `${payload.date ?? 'no date'}, ${payload.capacity} seats, tags: ${payload.tags.join(', ') || 'none'}, ${payload.emails.length} invites`;

  const handleSubmit = (payload: Payload) => {
    notifications.show({
      title: 'Event created',
      message: `${payload.title}: ${describePayload(payload)}`,
    });
  };

  const showPreview = () => {
    notifications.show({
      title: 'Payload preview',
      message: describePayload(form.getTransformedValues()),
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Event title"
          placeholder="Mantine meetup"
          withAsterisk
          {...form.getInputProps('title')}
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <DateInput
            size="md"
            label="Date"
            placeholder="Pick date"
            withAsterisk
            {...form.getInputProps('date')}
          />

          <NumberInput
            size="md"
            label="Capacity"
            placeholder="Number of seats"
            withAsterisk
            min={1}
            max={100000}
            {...form.getInputProps('capacity')}
          />
        </SimpleGrid>

        <MultiSelect
          size="md"
          label="Tags"
          placeholder="Pick tags"
          data={['React', 'TypeScript', 'CSS', 'Design']}
          {...form.getInputProps('tags')}
        />

        <TagsInput
          size="md"
          label="Invite emails"
          placeholder="Type an email and press Enter"
          description="Invitations are sent when the event is created"
          splitChars={[',', ' ']}
          {...form.getInputProps('emails')}
        />

        <Switch
          size="md"
          label="Public event"
          {...form.getInputProps('isPublic', { type: 'checkbox' })}
        />

        <Group justify="flex-end">
          <Button size="md" variant="default" onClick={showPreview}>
            Preview payload
          </Button>

          <Button size="md" type="submit">
            Create event
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
