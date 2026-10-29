import {
  Button,
  Checkbox,
  Group,
  NumberInput,
  Select,
  SimpleGrid,
  Stack,
  TextInput,
  useModalCloseGuard,
} from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { useForm, type FormErrors } from '@mantine/form';
import { ROOM_OPTIONS } from '../data';
import type { BookingFormValues } from '../types';
import classes from './BookingForm.module.css';

interface BookingFormProps {
  initialValues: BookingFormValues;
  isNew: boolean;
  /** Moved occurrences of a series cannot change the repeat rule */
  withRepeat: boolean;
  validate: (values: BookingFormValues) => FormErrors;
  onSubmit: (values: BookingFormValues) => void;
  onCancelBooking?: () => void;
}

function dateTimeLabels(prefix: string) {
  return {
    dayInputLabel: `${prefix} day`,
    monthInputLabel: `${prefix} month`,
    yearInputLabel: `${prefix} year`,
    hoursInputLabel: `${prefix} hours`,
    minutesInputLabel: `${prefix} minutes`,
  };
}

export function BookingForm({
  initialValues,
  isNew,
  withRepeat,
  validate,
  onSubmit,
  onCancelBooking,
}: BookingFormProps) {
  const form = useForm<BookingFormValues>({
    name: 'room-booking',
    initialValues,
    validate,
  });
  const close = useModalCloseGuard();
  const repeat = form.useWatchValue('repeat');

  return (
    <form
      onSubmit={form.onSubmit(onSubmit, (errors) =>
        form.getInputNode(Object.keys(errors)[0])?.focus()
      )}
    >
      <Stack>
        <TextInput
          label="Title"
          placeholder="Title"
          withAsterisk
          data-autofocus
          {...form.getInputProps('title')}
        />

        <SimpleGrid cols={{ base: 1, xs: 2 }} className={classes.row}>
          <Select
            label="Room"
            placeholder="Pick a room"
            withAsterisk
            data={ROOM_OPTIONS}
            {...form.getInputProps('roomId')}
          />
          <NumberInput
            label="Attendees"
            placeholder="Attendees"
            withAsterisk
            min={1}
            allowDecimal={false}
            allowNegative={false}
            {...form.getInputProps('attendees')}
          />
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, xs: 2 }} className={classes.row}>
          <MaskedDateInput
            label="Start"
            withTime
            withAsterisk
            {...dateTimeLabels('Start')}
            {...form.getInputProps('start')}
          />
          <MaskedDateInput
            label="End"
            withTime
            withAsterisk
            {...dateTimeLabels('End')}
            {...form.getInputProps('end')}
          />
        </SimpleGrid>

        {withRepeat && (
          <Stack gap="xs">
            <Checkbox
              label="Repeat weekly"
              {...form.getInputProps('repeat', { type: 'checkbox' })}
            />
            {repeat && (
              <MaskedDateInput
                label="Repeat until"
                withAsterisk
                dayInputLabel="Repeat until day"
                monthInputLabel="Repeat until month"
                yearInputLabel="Repeat until year"
                {...form.getInputProps('repeatUntil')}
              />
            )}
          </Stack>
        )}

        <Group justify="flex-end" mt="md">
          {onCancelBooking && (
            <Button variant="default" c="red" mie="auto" onClick={onCancelBooking}>
              Cancel booking
            </Button>
          )}
          <Button variant="default" onClick={close}>
            Close
          </Button>
          <Button type="submit">{isNew ? 'Book room' : 'Save changes'}</Button>
        </Group>
      </Stack>
    </form>
  );
}
