import { Select, SimpleGrid, Switch } from '@mantine/core';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import type { RecurringEventFormType } from './types';
import { TIMEZONES } from './validation';

interface ScheduleFieldsProps {
  form: RecurringEventFormType;
}

export function ScheduleFields({ form }: ScheduleFieldsProps) {
  const allDay = form.useWatchValue('allDay');
  const startDate = form.useWatchValue('startDate');

  return (
    <>
      <Switch label="All day" {...form.getInputProps('allDay', { type: 'checkbox' })} />

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <DatePickerInput
          label="Start date"
          placeholder="Pick a date"
          valueFormat="MMMM D, YYYY"
          withAsterisk
          {...form.getInputProps('startDate')}
        />
        {!allDay && (
          <TimeInput
            label="Start time"
            placeholder="Pick a time"
            withAsterisk
            {...form.getInputProps('startTime')}
          />
        )}
        <DatePickerInput
          label="End date"
          placeholder="Pick a date"
          valueFormat="MMMM D, YYYY"
          minDate={startDate ?? undefined}
          withAsterisk
          {...form.getInputProps('endDate')}
        />
        {!allDay && (
          <TimeInput
            label="End time"
            placeholder="Pick a time"
            withAsterisk
            {...form.getInputProps('endTime')}
          />
        )}
      </SimpleGrid>

      <Select
        label="Timezone"
        placeholder="Pick a timezone"
        data={TIMEZONES}
        searchable
        nothingFoundMessage="No matching timezones"
        withAsterisk
        {...form.getInputProps('timezone')}
      />
    </>
  );
}
