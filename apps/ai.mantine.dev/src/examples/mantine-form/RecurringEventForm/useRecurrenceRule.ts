import { useMemo } from 'react';
import { getRule } from './recurrence';
import type { RecurringEventFormType } from './types';

export function useRecurrenceRule(form: RecurringEventFormType) {
  const start = form.useWatchValue('start');
  const repeat = form.useWatchValue('repeat');
  const interval = form.useWatchValue('interval');
  const weekdays = form.useWatchValue('weekdays');
  const monthlyMode = form.useWatchValue('monthlyMode');
  const ends = form.useWatchValue('ends');
  const count = form.useWatchValue('count');
  const until = form.useWatchValue('until');

  return useMemo(
    () => getRule({ start, repeat, interval, weekdays, monthlyMode, ends, count, until }),
    [start, repeat, interval, weekdays, monthlyMode, ends, count, until]
  );
}
