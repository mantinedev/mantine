import { Fieldset, Stack, Textarea, TextInput } from '@mantine/core';
import { EventTimeFields } from './EventTimeFields';
import type { RecurringEventFormType } from './types';

interface EventFieldsProps {
  form: RecurringEventFormType;
  onEndEdit: () => void;
}

export function EventFields({ form, onEndEdit }: EventFieldsProps) {
  return (
    <Fieldset legend="Event">
      <Stack>
        <TextInput
          label="Title"
          placeholder="Title"
          withAsterisk
          {...form.getInputProps('title')}
        />
        <Textarea
          label="Description"
          placeholder="What the event is about"
          autosize
          minRows={2}
          maxRows={6}
          {...form.getInputProps('description')}
        />
        <EventTimeFields form={form} onEndEdit={onEndEdit} />
        <TextInput
          label="Location"
          placeholder="Room, address or meeting link"
          {...form.getInputProps('location')}
        />
      </Stack>
    </Fieldset>
  );
}
