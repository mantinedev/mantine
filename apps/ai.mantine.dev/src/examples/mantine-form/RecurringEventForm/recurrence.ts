import dayjs, { type Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type { MonthlyBy, MonthlyRule, Recurrence, Weekday } from './types';

dayjs.extend(utc);

export const WEEKDAYS: { value: Weekday; label: string; name: string }[] = [
  { value: 'MO', label: 'Mon', name: 'Monday' },
  { value: 'TU', label: 'Tue', name: 'Tuesday' },
  { value: 'WE', label: 'Wed', name: 'Wednesday' },
  { value: 'TH', label: 'Thu', name: 'Thursday' },
  { value: 'FR', label: 'Fri', name: 'Friday' },
  { value: 'SA', label: 'Sat', name: 'Saturday' },
  { value: 'SU', label: 'Sun', name: 'Sunday' },
];

const ORDINALS = ['first', 'second', 'third', 'fourth'];

// A rule that never matches (Feb 29 every 100 years) must not loop forever
const MAX_PERIODS = 5000;

// Date math runs in UTC on calendar dates, so the machine timezone and DST never shift a day
function toDay(date: string) {
  return dayjs.utc(date.slice(0, 10));
}

function format(day: Dayjs) {
  return day.format('YYYY-MM-DD');
}

function mondayIndex(day: Dayjs) {
  return (day.day() + 6) % 7;
}

export function getWeekday(date: string): Weekday {
  return WEEKDAYS[mondayIndex(toDay(date))].value;
}

export function sortWeekdays(weekdays: Weekday[]) {
  return WEEKDAYS.map((weekday) => weekday.value).filter((value) => weekdays.includes(value));
}

export function getMonthlyRule(start: string, by: MonthlyBy): MonthlyRule {
  const day = toDay(start);

  if (by === 'dayOfMonth') {
    return { by, day: day.date() };
  }

  const week = Math.ceil(day.date() / 7);
  return { by, weekday: getWeekday(start), week: week > 4 ? -1 : week };
}

export function describeMonthlyRule(rule: MonthlyRule) {
  if (rule.by === 'dayOfMonth') {
    return `Day ${rule.day}`;
  }

  const weekday = WEEKDAYS.find((item) => item.value === rule.weekday)!.name;
  return `The ${rule.week === -1 ? 'last' : ORDINALS[rule.week - 1]} ${weekday}`;
}

function getMonthlyDate(month: Dayjs, rule: MonthlyRule) {
  if (rule.by === 'dayOfMonth') {
    return rule.day <= month.daysInMonth() ? month.date(rule.day) : null;
  }

  const weekday = WEEKDAYS.findIndex((item) => item.value === rule.weekday);

  if (rule.week === -1) {
    const last = month.date(month.daysInMonth());
    return last.subtract((mondayIndex(last) - weekday + 7) % 7, 'day');
  }

  const date = 1 + ((weekday - mondayIndex(month) + 7) % 7) + (rule.week - 1) * 7;
  return date <= month.daysInMonth() ? month.date(date) : null;
}

function* candidateDays(start: Dayjs, recurrence: Recurrence): Generator<Dayjs> {
  const { interval } = recurrence;

  for (let period = 0; period < MAX_PERIODS; period += 1) {
    const step = period * interval;

    if (recurrence.frequency === 'daily') {
      yield start.add(step, 'day');
    }

    if (recurrence.frequency === 'weekly') {
      const week = start.subtract(mondayIndex(start), 'day').add(step, 'week');
      for (const weekday of sortWeekdays(recurrence.weekdays ?? [])) {
        yield week.add(
          WEEKDAYS.findIndex((item) => item.value === weekday),
          'day'
        );
      }
    }

    if (recurrence.frequency === 'monthly' && recurrence.monthly) {
      const date = getMonthlyDate(start.startOf('month').add(step, 'month'), recurrence.monthly);
      if (date) {
        yield date;
      }
    }

    if (recurrence.frequency === 'yearly') {
      const date = start.year(start.year() + step);
      // dayjs moves Feb 29 to Feb 28 in years that have no Feb 29
      if (date.date() === start.date()) {
        yield date;
      }
    }
  }
}

/** Dates (`YYYY-MM-DD`) of the series in order, before exceptions are removed */
export function* seriesDates(start: string, recurrence: Recurrence | null): Generator<string> {
  if (!recurrence) {
    yield start.slice(0, 10);
    return;
  }

  const startDay = toDay(start);
  let produced = 0;

  for (const day of candidateDays(startDay, recurrence)) {
    if (day.isBefore(startDay)) {
      continue;
    }

    const date = format(day);
    if (recurrence.ends === 'on' && date > recurrence.until) {
      return;
    }

    yield date;
    produced += 1;

    if (recurrence.ends === 'after' && produced >= recurrence.count) {
      return;
    }
  }
}

export function isInSeries(start: string, recurrence: Recurrence | null, date: string) {
  for (const seriesDate of seriesDates(start, recurrence)) {
    if (seriesDate >= date) {
      return seriesDate === date;
    }
  }

  return false;
}

export function getOccurrences(
  start: string,
  recurrence: Recurrence | null,
  exceptions: string[],
  limit: number
) {
  const result: string[] = [];

  for (const date of seriesDates(start, recurrence)) {
    if (result.length >= limit) {
      break;
    }

    if (!exceptions.includes(date)) {
      result.push(date);
    }
  }

  return result;
}

export function formatDate(date: string) {
  return toDay(date).format('ddd, MMM D, YYYY');
}

/** Formats an occurrence date with the time of the event start, when the event has one */
export function formatOccurrence(date: string, start: string, allDay: boolean) {
  return allDay ? formatDate(date) : `${formatDate(date)}, ${start.slice(11, 16)}`;
}
