import {
  Button,
  Group,
  Input,
  SegmentedControl,
  Select,
  Stack,
  TextInput,
  useModalCloseGuard,
} from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { CHANNELS, STATUSES } from './channels';
import type { PostFormValues } from './types';

interface PostFormProps {
  initialValues: PostFormValues;
  isNew: boolean;
  /** Published posts keep their date */
  dateLocked: boolean;
  /** Newsletter issues always have a date, other drafts can stay unscheduled */
  dateRequired: boolean;
  onSubmit: (values: PostFormValues) => void;
}

export function PostForm({
  initialValues,
  isNew,
  dateLocked,
  dateRequired,
  onSubmit,
}: PostFormProps) {
  const closeModal = useModalCloseGuard();
  const form = useForm<PostFormValues>({
    name: 'content-post',
    initialValues,
    validate: {
      title: isNotEmpty('Enter a title'),
      channel: isNotEmpty('Pick a channel'),
      date: (value, values) => {
        if (value) {
          return null;
        }
        if (dateRequired) {
          return 'Pick a date';
        }
        return values.status === 'draft' ? null : 'Pick a date, or save the post as a draft';
      },
    },
  });

  const dateDescription = dateLocked
    ? 'Published posts cannot be moved'
    : dateRequired
      ? undefined
      : 'Leave empty to keep the draft unscheduled';

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit({ ...values, title: values.title.trim() }))}>
      <Stack>
        <TextInput
          label="Title"
          placeholder="Title"
          withAsterisk
          data-autofocus
          {...form.getInputProps('title')}
        />
        <Select
          label="Channel"
          placeholder="Pick a channel"
          withAsterisk
          data={CHANNELS.map(({ value, label }) => ({ value, label }))}
          allowDeselect={false}
          {...form.getInputProps('channel')}
        />
        <MaskedDateInput
          label="Date and time"
          withTime
          clearable={!dateRequired && !dateLocked}
          disabled={dateLocked}
          withAsterisk={dateRequired}
          description={dateDescription}
          dayInputLabel="Day"
          monthInputLabel="Month"
          yearInputLabel="Year"
          hoursInputLabel="Hours"
          minutesInputLabel="Minutes"
          {...form.getInputProps('date')}
        />
        <Input.Wrapper label="Status" withBlockChildren>
          <SegmentedControl
            fullWidth
            data={STATUSES}
            {...form.getInputProps('status', { withError: false })}
          />
        </Input.Wrapper>
        <Group justify="flex-end">
          <Button variant="default" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">{isNew ? 'Create post' : 'Save changes'}</Button>
        </Group>
      </Stack>
    </form>
  );
}
