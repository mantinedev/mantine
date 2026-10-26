import { isEndOfDay, startOfDay } from './parseNaturalDate';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatTime(date: Date) {
  const hours = date.getHours() % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes} ${date.getHours() < 12 ? 'AM' : 'PM'}`;
}

/**
 * "Fri, Oct 30, 3:00 PM"; the year is added when it is not the current one,
 * the time is left out for dates due at the end of the day
 */
export function formatDueDate(date: Date, now: Date = new Date()) {
  const parts = [`${WEEKDAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`];
  if (date.getFullYear() !== now.getFullYear()) {
    parts.push(String(date.getFullYear()));
  }
  if (!isEndOfDay(date)) {
    parts.push(formatTime(date));
  }
  return parts.join(', ');
}

function plural(count: number, unit: string) {
  return `${count} ${unit}${count === 1 ? '' : 's'}`;
}

/** How far the date is from today in calendar days: "today", "in 4 days", "2 weeks ago" */
export function formatRelative(date: Date, now: Date = new Date()) {
  const days = Math.round((startOfDay(date).getTime() - startOfDay(now).getTime()) / 86_400_000);

  if (days === 0) {
    return 'today';
  }
  if (days === 1) {
    return 'tomorrow';
  }
  if (days === -1) {
    return 'yesterday';
  }

  const abs = Math.abs(days);
  const distance =
    abs < 14
      ? plural(abs, 'day')
      : abs < 60
        ? plural(Math.round(abs / 7), 'week')
        : abs < 365
          ? plural(Math.round(abs / 30.44), 'month')
          : plural(Math.round(abs / 365.25), 'year');

  return days > 0 ? `in ${distance}` : `${distance} ago`;
}
