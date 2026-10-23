import { Radio, Stack, Title } from '@mantine/core';
import { EndsFields } from './EndsFields';
import { ExceptionsInput } from './ExceptionsInput';
import { IntervalInput } from './IntervalInput';
import { MonthlyOptions } from './MonthlyOptions';
import { OccurrencesPreview } from './OccurrencesPreview';
import type { RecurringEventFormType } from './types';
import { REPEAT_OPTIONS } from './validation';
import { WeekdaysInput } from './WeekdaysInput/WeekdaysInput';

export function RecurrenceFields({ form }: { form: RecurringEventFormType }) {
  const repeat = form.useWatchValue('repeat');

  return (
    <Stack>
      <Title order={3} c="var(--mantine-color-bright)">
        Recurrence
      </Title>

      <Stack gap="xs">
        <Radio.Group label="Repeat" {...form.getInputProps('repeat')}>
          <Stack gap="xs" mt="xs">
            {REPEAT_OPTIONS.map((option) => (
              <Radio key={option.value} value={option.value} label={option.label} />
            ))}
          </Stack>
        </Radio.Group>

        {repeat !== 'none' && <IntervalInput form={form} frequency={repeat} />}
        {repeat === 'weekly' && <WeekdaysInput form={form} />}
        {repeat === 'monthly' && <MonthlyOptions form={form} />}
      </Stack>

      {repeat !== 'none' && (
        <>
          <EndsFields form={form} />
          <ExceptionsInput form={form} />
        </>
      )}

      <OccurrencesPreview form={form} />
    </Stack>
  );
}
