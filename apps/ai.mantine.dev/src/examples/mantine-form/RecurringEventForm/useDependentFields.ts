import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useRef } from 'react';
import { weekdayOf } from './recurrence';
import type { RecurringEventFormType } from './types';

dayjs.extend(utc);

export type GeneratedField = 'end' | 'weekdays';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const timeOf = (value: string | null) => (value && value.length > 10 ? value.slice(11) : null);

/**
 * Keeps generated fields in sync with the start until the user edits them,
 * converts start and end when "All day" changes and clears errors of fields that get hidden
 */
export function useDependentFields(form: RecurringEventFormType) {
  const edited = useRef<Record<GeneratedField, boolean>>({ end: false, weekdays: false });
  const times = useRef({ start: '09:00:00', end: '10:00:00' });

  form.watch('start', ({ value }) => {
    if (!value) {
      return;
    }

    if (!edited.current.end) {
      const end = form.getValues().allDay
        ? value
        : dayjs.utc(value).add(1, 'hour').format(DATE_TIME_FORMAT);
      form.setFieldValue('end', end);
    }

    if (!edited.current.weekdays) {
      form.setFieldValue('weekdays', [weekdayOf(value)]);
    }
  });

  form.watch('allDay', ({ value: allDay }) => {
    const { start, end } = form.getValues();

    if (allDay) {
      times.current = {
        start: timeOf(start) ?? times.current.start,
        end: timeOf(end) ?? times.current.end,
      };
    }

    const convert = (date: string | null, time: string) => {
      if (!date) {
        return null;
      }

      return allDay ? date.slice(0, 10) : `${date.slice(0, 10)} ${time}`;
    };

    form.setValues({
      start: convert(start, times.current.start),
      end: convert(end, times.current.end),
    });
  });

  form.watch('repeats', ({ value }) => {
    if (!value) {
      ['interval', 'weekdays', 'count', 'until', 'exceptions'].forEach(form.clearFieldError);
    }
  });

  form.watch('frequency', ({ value }) => {
    if (value !== 'weekly') {
      form.clearFieldError('weekdays');
    }
  });

  form.watch('ends', ({ value }) => {
    if (value !== 'after') {
      form.clearFieldError('count');
    }

    if (value !== 'on') {
      form.clearFieldError('until');
    }
  });

  return {
    markEdited: (field: GeneratedField) => {
      edited.current[field] = true;
    },
  };
}
