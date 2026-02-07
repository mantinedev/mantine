import dayjs from 'dayjs';
import { useEffect } from 'react';
import { Button, Group, Modal, ModalProps, Stack, TextInput } from '@mantine/core';
import { DateTimePicker, DateValue } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';

export interface EventData {
  id?: string | number;
  title: string;
  start: DateValue;
  end: DateValue;
  color?: string;
}

interface EventFormProps extends Omit<ModalProps, 'onSubmit'> {
  values: EventData | null;
  onSubmit: (values: EventData) => void;
  onDelete?: () => void;
}

export function EventForm({
  opened,
  onClose,
  values,
  onSubmit,
  onDelete,
  ...others
}: EventFormProps) {
  const form = useForm({
    initialValues: {
      id: values?.id,
      title: values?.title || '',
      start: values?.start || new Date(),
      end: values?.end || new Date(),
      color: values?.color || 'blue',
    },
    validate: {
      title: isNotEmpty('Event title is required'),
      start: isNotEmpty('Start time is required'),
      end: (value, { start }) => {
        if (!value) {
          return 'End time is required';
        }

        if (dayjs(value).isBefore(dayjs(start))) {
          return 'End time must be after start time';
        }

        return null;
      },
    },
  });

  useEffect(() => {
    form.setValues({
      id: values?.id,
      title: values?.title || '',
      start: values?.start || new Date(),
      end: values?.end || new Date(),
      color: values?.color || 'blue',
    });
  }, [values]);

  const handleSave = () => {
    if (!form.validate().hasErrors) {
      onSubmit({
        id: form.values.id,
        title: form.values.title,
        start: form.values.start,
        end: form.values.end,
        color: form.values.color,
      });
      onClose();
    }
  };

  const handleDelete = () => {
    onDelete?.();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={form.values.id ? 'Edit Event' : 'Create Event'}
      radius="md"
      {...others}
    >
      <Stack gap="md">
        <TextInput
          label="Event Title"
          placeholder="Enter event title"
          radius="md"
          data-autofocus
          {...form.getInputProps('title')}
        />

        <DateTimePicker label="Start Time" clearable radius="md" {...form.getInputProps('start')} />
        <DateTimePicker label="End Time" {...form.getInputProps('end')} clearable radius="md" />

        <Group justify="flex-end" gap="sm">
          {form.values.id && onDelete && (
            <Button color="red" onClick={handleDelete} mie="auto" radius="md">
              Delete
            </Button>
          )}

          <Button variant="default" onClick={onClose} radius="md">
            Cancel
          </Button>
          <Button onClick={handleSave} radius="md">
            {form.values.id ? 'Update' : 'Create'}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

export const _eventFormCode = `import { useEffect } from 'react';
import { Modal, TextInput, Button, Stack, Group, Checkbox } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';

interface EventData {
  id?: string | number;
  title: string;
  start: Date;
  end: Date;
  color?: string;
  isAllDay?: boolean;
}

interface EventFormProps {
  opened: boolean;
  onClose: () => void;
  initialData: EventData | null;
  onSave: (data: EventData) => void;
  onDelete?: () => void;
}

export function EventForm({
  opened,
  onClose,
  initialData,
  onSave,
  onDelete,
}: EventFormProps) {
  const form = useForm({
    values: {
      id: initialData?.id,
      title: initialData?.title || '',
      start: initialData?.start || new Date(),
      end: initialData?.end || new Date(),
      color: initialData?.color || 'blue',
      isAllDay: initialData?.isAllDay || false,
    },
    validate: {
      title: (value) => (value.trim().length === 0 ? 'Event title is required' : null),
      start: (value) => (!value ? 'Start time is required' : null),
      end: (value, { start }) => {
        if (!value) return 'End time is required';
        if (value < start) return 'End time must be after start time';
        return null;
      },
    },
  });

  useEffect(() => {
    form.setValues({
      id: initialData?.id,
      title: initialData?.title || '',
      start: initialData?.start || new Date(),
      end: initialData?.end || new Date(),
      color: initialData?.color || 'blue',
      isAllDay: initialData?.isAllDay || false,
    });
    form.resetTouched();
  }, [opened, initialData]);

  const handleSave = () => {
    if (!form.validate().hasErrors) {
      onSave({
        id: form.values.id,
        title: form.values.title,
        start: form.values.start,
        end: form.values.end,
        color: form.values.color,
        isAllDay: form.values.isAllDay,
      });
      onClose();
    }
  };

  const handleDelete = () => {
    if (onDelete && confirm('Are you sure you want to delete this event?')) {
      onDelete();
      onClose();
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={form.values.id ? 'Edit Event' : 'Create Event'}
      centered
    >
      <Stack gap="md">
        <TextInput
          label="Event Title"
          placeholder="Enter event title"
          data-autofocus
          {...form.getInputProps('title')}
        />

        {!form.values.isAllDay && (
          <>
            <DateTimePicker
              label="Start Time"
              value={form.values.start}
              onChange={(value) => {
                if (value) {
                  form.setFieldValue('start', new Date(value));
                }
              }}
              clearable
              error={form.errors.start}
            />

            <DateTimePicker
              label="End Time"
              value={form.values.end}
              onChange={(value) => {
                if (value) {
                  form.setFieldValue('end', new Date(value));
                }
              }}
              clearable
              error={form.errors.end}
            />
          </>
        )}

        <Checkbox
          label="All-day event"
          checked={form.values.isAllDay}
          onChange={(e) => form.setFieldValue('isAllDay', e.currentTarget.checked)}
        />

        <Group justify="flex-end" gap="sm">
          {form.values.id && onDelete && (
            <Button color="red" onClick={handleDelete} variant="light">
              Delete
            </Button>
          )}
          <Button variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {form.values.id ? 'Update' : 'Create'}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}`;
