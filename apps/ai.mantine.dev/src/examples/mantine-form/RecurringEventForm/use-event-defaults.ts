import dayjs from 'dayjs';
import { useRef } from 'react';
import { getWeekday } from './recurrence';
import type { RecurringEventFormType, RecurringEventValues } from './types';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

function getDefaultEnd(start: string, allDay: boolean) {
  return allDay ? start : dayjs(start).add(1, 'hour').format(DATE_TIME_FORMAT);
}

const RECURRENCE_FIELDS: (keyof RecurringEventValues)[] = [
  'interval',
  'weekdays',
  'count',
  'until',
  'exceptions',
];

/**
 * Keeps the fields derived from the start in sync until the user edits them: the end (one hour
 * later) and the weekly weekdays (the start weekday). Also converts start and end between dates
 * and date-times when "All day" changes.
 */
export function useEventDefaults(form: RecurringEventFormType) {
  const writing = useRef(false);
  const edited = useRef({ end: false, weekdays: false });
  const times = useRef({ start: '09:00:00', end: '10:00:00' });

  const write: RecurringEventFormType['setFieldValue'] = (field, value) => {
    writing.current = true;
    form.setFieldValue(field, value);
    writing.current = false;
  };

  form.watch('end', () => {
    if (!writing.current) {
      edited.current.end = true;
    }
  });

  form.watch('weekdays', () => {
    if (!writing.current) {
      edited.current.weekdays = true;
    }
  });

  form.watch('start', ({ value }) => {
    if (!value || writing.current) {
      return;
    }

    if (!edited.current.end) {
      write('end', getDefaultEnd(value, form.getValues().allDay));
    }

    if (!edited.current.weekdays) {
      write('weekdays', [getWeekday(value)]);
    }
  });

  form.watch('allDay', ({ value: allDay }) => {
    const { start, end } = form.getValues();

    if (allDay) {
      times.current = {
        start: start?.slice(11) || times.current.start,
        end: end?.slice(11) || times.current.end,
      };
    }

    const convert = (date: string | null, time: string) =>
      date && (allDay ? date.slice(0, 10) : `${date} ${time}`);

    const nextStart = convert(start, times.current.start);
    write('start', nextStart);
    write(
      'end',
      !edited.current.end && nextStart
        ? getDefaultEnd(nextStart, allDay)
        : convert(end, times.current.end)
    );
  });

  form.watch('repeat', () => RECURRENCE_FIELDS.forEach((field) => form.clearFieldError(field)));
  form.watch('ends', () => {
    form.clearFieldError('count');
    form.clearFieldError('until');
  });
}
