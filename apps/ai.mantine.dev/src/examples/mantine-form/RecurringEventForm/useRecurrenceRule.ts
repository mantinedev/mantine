import { getRecurrenceRule } from './recurrence';
import type { RecurringEventFormType } from './types';

export function useRecurrenceRule(form: RecurringEventFormType) {
  return getRecurrenceRule({
    repeats: form.useWatchValue('repeats'),
    start: form.useWatchValue('start'),
    frequency: form.useWatchValue('frequency'),
    interval: form.useWatchValue('interval'),
    weekdays: form.useWatchValue('weekdays'),
    monthlyMode: form.useWatchValue('monthlyMode'),
    ends: form.useWatchValue('ends'),
    count: form.useWatchValue('count'),
    until: form.useWatchValue('until'),
  });
}
