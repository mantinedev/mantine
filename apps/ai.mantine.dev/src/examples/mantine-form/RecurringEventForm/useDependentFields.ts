import dayjs from 'dayjs';
import type { LooseKeys } from '@mantine/form';
import { DATE_FORMAT, weekdayOf } from './recurrence';
import type { RecurringEventFormType, RecurringEventValues } from './types';

type FieldPath = LooseKeys<RecurringEventValues>;

function defaultEnd(startDate: string | null, startTime: string) {
  if (!startDate || !startTime) {
    return { endDate: startDate, endTime: '' };
  }
  const end = dayjs(`${startDate} ${startTime}`).add(1, 'hour');
  return { endDate: end.format(DATE_FORMAT), endTime: end.format('HH:mm') };
}

// The end follows the start while it still holds the default derived from the previous start,
// which means the user has not edited it
function syncEnd(
  form: RecurringEventFormType,
  previousStartDate: string | null,
  previousStartTime: string
) {
  const { startDate, startTime, endDate, endTime } = form.getValues();
  const previous = defaultEnd(previousStartDate, previousStartTime);
  if (endDate !== previous.endDate || endTime !== previous.endTime) {
    return;
  }
  const next = defaultEnd(startDate, startTime);
  form.setFieldValue('endDate', next.endDate);
  form.setFieldValue('endTime', next.endTime);
}

function syncWeekdays(
  form: RecurringEventFormType,
  startDate: string | null,
  previousStartDate: string | null
) {
  const { weekdays } = form.getValues().recurrence;
  const previous = previousStartDate ? [weekdayOf(previousStartDate)] : [];
  if (startDate && weekdays.join() === previous.join()) {
    form.setFieldValue('recurrence.weekdays', [weekdayOf(startDate)]);
  }
}

// Fields hidden by a toggle have conditional rules: revalidating a shown error clears it, and
// errors that depend on another field follow that field
function revalidateShown(form: RecurringEventFormType, paths: FieldPath[]) {
  paths.forEach((path) => form.errors[path] && form.validateField(path));
}

export function useDependentFields(form: RecurringEventFormType) {
  form.watch('startDate', ({ value, previousValue }) => {
    syncEnd(form, previousValue, form.getValues().startTime);
    syncWeekdays(form, value, previousValue);
    revalidateShown(form, ['endDate', 'endTime', 'recurrence.until', 'exceptions']);
  });

  form.watch('startTime', ({ previousValue }) => {
    syncEnd(form, form.getValues().startDate, previousValue);
    revalidateShown(form, ['endTime']);
  });

  form.watch('endDate', () => revalidateShown(form, ['endTime']));
  form.watch('allDay', () => revalidateShown(form, ['startTime', 'endTime']));

  form.watch('recurrence.repeat', () =>
    revalidateShown(form, [
      'recurrence.interval',
      'recurrence.weekdays',
      'recurrence.count',
      'recurrence.until',
      'exceptions',
    ])
  );

  form.watch('recurrence.ends', () =>
    revalidateShown(form, ['recurrence.count', 'recurrence.until'])
  );
  form.watch('recurrence', () => revalidateShown(form, ['exceptions']));
}
