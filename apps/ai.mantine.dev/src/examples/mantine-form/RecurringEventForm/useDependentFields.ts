import dayjs from 'dayjs';
import { useRef } from 'react';
import { getWeekday } from './recurrence';
import type { RecurringEventFormType, RecurringEventValues, Weekday } from './types';

const RECURRENCE_PATHS = ['interval', 'weekdays', 'count', 'until', 'exceptions'] as const;

/** Fields filled from the start until the user edits them, and errors that depend on other fields */
export function useDependentFields(form: RecurringEventFormType) {
  // The last values written automatically: a field still holding it was not edited by the user
  const autoEnd = useRef<string | null>(null);
  const autoWeekdays = useRef<Weekday[]>([]);

  const revalidate = (...paths: (keyof RecurringEventValues)[]) => {
    paths.forEach((path) => {
      if (form.errors[path]) {
        form.validateField(path);
      }
    });
  };

  form.watch('start', ({ value }) => {
    if (!value) {
      return;
    }

    const { end, weekdays } = form.getValues();

    if (end === autoEnd.current) {
      autoEnd.current = dayjs(value).add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');
      form.setFieldValue('end', autoEnd.current);
    }

    if (weekdays.join() === autoWeekdays.current.join()) {
      autoWeekdays.current = [getWeekday(value)];
      form.setFieldValue('weekdays', autoWeekdays.current);
    }

    revalidate('end', 'until', 'exceptions');
  });

  form.watch('allDay', () => revalidate('start', 'end'));

  form.watch('repeat', () => {
    RECURRENCE_PATHS.forEach((path) => form.clearFieldError(path));
  });

  form.watch('ends', () => {
    form.clearFieldError('count');
    form.clearFieldError('until');
    revalidate('exceptions');
  });

  form.watch('interval', () => revalidate('exceptions'));
  form.watch('weekdays', () => revalidate('exceptions'));
  form.watch('monthlyMode', () => revalidate('exceptions'));
  form.watch('count', () => revalidate('exceptions'));
  form.watch('until', () => revalidate('exceptions'));
}
