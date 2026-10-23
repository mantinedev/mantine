import { Select, SimpleGrid, Stack, Switch } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import type { RecurringEventFormType } from './types';
import { TIMEZONES } from './validation';

const partLabels = (label: string) => ({
  dayInputLabel: `${label} day`,
  monthInputLabel: `${label} month`,
  yearInputLabel: `${label} year`,
  hoursInputLabel: `${label} hours`,
  minutesInputLabel: `${label} minutes`,
});

interface EventTimeFieldsProps {
  form: RecurringEventFormType;
  onEndEdit: () => void;
}

export function EventTimeFields({ form, onEndEdit }: EventTimeFieldsProps) {
  const allDay = form.useWatchValue('allDay');
  const endProps = form.getInputProps('end');

  return (
    <>
      <Stack gap="xs">
        <Switch label="All day" {...form.getInputProps('allDay', { type: 'checkbox' })} />
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <MaskedDateInput
            label="Start"
            withTime={!allDay}
            withAsterisk
            {...partLabels('Start')}
            {...form.getInputProps('start')}
          />
          <MaskedDateInput
            label="End"
            withTime={!allDay}
            withAsterisk
            {...partLabels('End')}
            {...endProps}
            onChange={(value) => {
              onEndEdit();
              endProps.onChange(value);
            }}
          />
        </SimpleGrid>
      </Stack>

      <Select
        label="Timezone"
        placeholder="Pick a timezone"
        data={TIMEZONES}
        allowDeselect={false}
        withAsterisk
        {...form.getInputProps('timezone')}
      />
    </>
  );
}
