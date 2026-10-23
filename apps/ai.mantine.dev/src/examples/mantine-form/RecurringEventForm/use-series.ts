import { getRecurrence } from './payload';
import type { RecurringEventFormType } from './types';
import { isRuleComplete } from './validation';

/** The series described by the current values; rerenders the caller when any of them changes */
export function useSeries(form: RecurringEventFormType) {
  const start = form.useWatchValue('start');
  const allDay = form.useWatchValue('allDay');
  const exceptions = form.useWatchValue('exceptions');
  form.useWatchValue('repeat');
  form.useWatchValue('interval');
  form.useWatchValue('weekdays');
  form.useWatchValue('monthlyBy');
  form.useWatchValue('ends');
  form.useWatchValue('count');
  form.useWatchValue('until');

  const values = form.getValues();

  return {
    start,
    allDay,
    exceptions,
    complete: isRuleComplete(values),
    recurrence: getRecurrence(values),
  };
}
