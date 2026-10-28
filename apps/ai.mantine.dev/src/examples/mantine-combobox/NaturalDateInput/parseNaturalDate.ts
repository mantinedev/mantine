export interface ParsedDate {
  /** Resolved moment; a date without a time is due at the end of that day */
  date: Date;
  hasTime: boolean;
}

const DAY_MS = 24 * 60 * 60 * 1000;

export const WEEKDAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;

const WEEKDAY_ALIASES: Record<string, number> = {
  mon: 0,
  tue: 1,
  tues: 1,
  wed: 2,
  thu: 3,
  thur: 3,
  thurs: 3,
  fri: 4,
  sat: 5,
  sun: 6,
};

export const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
] as const;

const NUMBER_WORDS: Record<string, number> = { a: 1, an: 1, one: 1, two: 2, three: 3 };

/** Lowercases, drops commas and joins "3 pm" into "3pm" */
export function normalizePhrase(input: string) {
  return input
    .toLowerCase()
    .replace(/[,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/(\d)\s+(am|pm|a\.m\.|p\.m\.)(?=\s|$)/g, '$1$2');
}

export function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function addMonths(date: Date, months: number) {
  const target = new Date(date.getFullYear(), date.getMonth() + months, 1);
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(date.getDate(), lastDay));
}

/** 0 = Monday … 6 = Sunday */
function weekdayIndex(date: Date) {
  return (date.getDay() + 6) % 7;
}

function startOfWeek(date: Date) {
  return addDays(date, -weekdayIndex(date));
}

function parseWeekday(token: string): number | null {
  const full = WEEKDAYS.indexOf(token as (typeof WEEKDAYS)[number]);
  if (full !== -1) {
    return full;
  }
  return token in WEEKDAY_ALIASES ? WEEKDAY_ALIASES[token] : null;
}

function parseMonth(token: string): number | null {
  if (token.length < 3) {
    return null;
  }
  if (token === 'sept') {
    return 8;
  }
  const index = MONTHS.findIndex((month) => month.startsWith(token));
  return index === -1 ? null : index;
}

function parseCount(token: string): number | null {
  if (/^\d{1,4}$/.test(token)) {
    return Number(token);
  }
  return token in NUMBER_WORDS ? NUMBER_WORDS[token] : null;
}

function addUnit(date: Date, count: number, unit: string) {
  if (unit.startsWith('day')) {
    return addDays(date, count);
  }
  if (unit.startsWith('week')) {
    return addDays(date, count * 7);
  }
  if (unit.startsWith('month')) {
    return addMonths(date, count);
  }
  return addMonths(date, count * 12);
}

/** Builds a valid calendar date or null for overflowing days (Feb 30) */
function calendarDate(year: number, month: number, day: number) {
  const date = new Date(year, month, day);
  if (date.getMonth() !== month || date.getDate() !== day) {
    return null;
  }
  if (year < 100) {
    date.setFullYear(year);
  }
  return date;
}

/** A date without a year is the next such date, today included */
function nextCalendarDate(month: number, day: number, today: Date) {
  // Feb 29 may only exist in one of the next few years
  for (let year = today.getFullYear(); year <= today.getFullYear() + 8; year += 1) {
    const date = calendarDate(year, month, day);
    if (date && date >= today) {
      return date;
    }
  }
  return null;
}

function explicitDate(month: number, day: number, year: string | undefined, today: Date) {
  if (year === undefined) {
    return nextCalendarDate(month, day, today);
  }
  const fullYear = year.length === 2 ? 2000 + Number(year) : Number(year);
  return calendarDate(fullYear, month, day);
}

const UNIT = '(days?|weeks?|months?|years?)';
const ORDINAL = '(\\d{1,2})(?:st|nd|rd|th)?';

/** Parses the date part of a phrase into the start of that day */
export function parseDatePart(phrase: string, now: Date): Date | null {
  const today = startOfDay(now);
  let match: RegExpMatchArray | null;

  if (phrase === 'today') {
    return today;
  }
  if (phrase === 'tomorrow') {
    return addDays(today, 1);
  }
  if (phrase === 'yesterday') {
    return addDays(today, -1);
  }
  if (phrase === 'next week') {
    return addDays(startOfWeek(today), 7);
  }
  if (phrase === 'next month') {
    return new Date(today.getFullYear(), today.getMonth() + 1, 1);
  }
  if (/^end of (the )?week$/.test(phrase)) {
    return addDays(startOfWeek(today), 6);
  }
  if (/^end of (the )?month$/.test(phrase)) {
    return new Date(today.getFullYear(), today.getMonth() + 1, 0);
  }

  if ((match = phrase.match(/^(?:(next|this) )?([a-z]+)$/))) {
    const weekday = parseWeekday(match[2]);
    if (weekday !== null) {
      if (match[1] === 'next') {
        return addDays(startOfWeek(today), 7 + weekday);
      }
      if (match[1] === 'this') {
        return addDays(startOfWeek(today), weekday);
      }
      return addDays(today, (weekday - weekdayIndex(today) + 7) % 7 || 7);
    }
  }

  if ((match = phrase.match(new RegExp(`^in ([a-z]+|\\d{1,4}) ${UNIT}$`)))) {
    const count = parseCount(match[1]);
    return count === null ? null : addUnit(today, count, match[2]);
  }
  if ((match = phrase.match(new RegExp(`^([a-z]+|\\d{1,4}) ${UNIT} from (now|today)$`)))) {
    const count = parseCount(match[1]);
    return count === null ? null : addUnit(today, count, match[2]);
  }

  if ((match = phrase.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/))) {
    return calendarDate(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }
  if ((match = phrase.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}|\d{2}))?$/))) {
    return explicitDate(Number(match[1]) - 1, Number(match[2]), match[3], today);
  }

  // A weekday in front of an explicit date is accepted and ignored ("fri oct 30")
  const withoutWeekday = phrase.replace(/^([a-z]+) (?=\S+ \S+)/, (whole, word: string) =>
    parseWeekday(word) === null ? whole : ''
  );

  if ((match = withoutWeekday.match(new RegExp(`^([a-z]+)\\.? ${ORDINAL}(?: (\\d{4}))?$`)))) {
    const month = parseMonth(match[1]);
    return month === null ? null : explicitDate(month, Number(match[2]), match[3], today);
  }
  if (
    (match = withoutWeekday.match(new RegExp(`^${ORDINAL} (?:of )?([a-z]+)\\.?(?: (\\d{4}))?$`)))
  ) {
    const month = parseMonth(match[2]);
    return month === null ? null : explicitDate(month, Number(match[1]), match[3], today);
  }

  return null;
}

interface Time {
  hours: number;
  minutes: number;
}

/** Parses "3pm", "3:30pm", "15:30", "noon", "midnight", optionally after "at" */
export function parseTime(input: string): Time | null {
  const phrase = input.replace(/^at /, '');
  let match: RegExpMatchArray | null;

  if (phrase === 'noon') {
    return { hours: 12, minutes: 0 };
  }
  if (phrase === 'midnight') {
    return { hours: 0, minutes: 0 };
  }
  if ((match = phrase.match(/^(\d{1,2})(?::(\d{2}))?(am|pm|a\.m\.|p\.m\.)$/))) {
    const hours = Number(match[1]);
    const minutes = Number(match[2] ?? 0);
    if (hours < 1 || hours > 12 || minutes > 59) {
      return null;
    }
    const pm = match[3].startsWith('p');
    return { hours: (hours % 12) + (pm ? 12 : 0), minutes };
  }
  if ((match = phrase.match(/^(\d{1,2}):(\d{2})$/))) {
    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    return hours > 23 || minutes > 59 ? null : { hours, minutes };
  }
  return null;
}

function withTime(day: Date, time: Time | null): ParsedDate {
  const date = new Date(day);
  if (time) {
    date.setHours(time.hours, time.minutes, 0, 0);
  } else {
    date.setHours(23, 59, 59, 999);
  }
  return { date, hasTime: time !== null };
}

function dropTrailingAt(tokens: string[]) {
  return tokens[tokens.length - 1] === 'at' ? tokens.slice(0, -1) : tokens;
}

/**
 * Parses a plain English due date ("next friday at 3pm", "mar 5", "in 2 weeks")
 * relative to `now`. Returns null when the text is not understood.
 */
export function parseNaturalDate(input: string, now: Date = new Date()): ParsedDate | null {
  const phrase = normalizePhrase(input);
  if (phrase === '') {
    return null;
  }

  const plainDate = parseDatePart(phrase, now);
  if (plainDate) {
    return withTime(plainDate, null);
  }

  const tokens = phrase.split(' ');

  // Time after the date: "friday at 3pm", "mar 5 15:30"
  for (let count = 1; count <= Math.min(2, tokens.length); count += 1) {
    const time = parseTime(tokens.slice(-count).join(' '));
    if (time) {
      const rest = dropTrailingAt(tokens.slice(0, -count)).join(' ');
      const day = rest === '' ? startOfDay(now) : parseDatePart(rest, now);
      if (day) {
        return withTime(day, time);
      }
    }
  }

  // Time before the date: "3pm today", "at noon tomorrow"
  for (let count = 1; count < Math.min(3, tokens.length); count += 1) {
    const time = parseTime(tokens.slice(0, count).join(' '));
    if (time) {
      const day = parseDatePart(tokens.slice(count).join(' '), now);
      if (day) {
        return withTime(day, time);
      }
    }
  }

  return null;
}

export function isEndOfDay(date: Date) {
  return (
    date.getHours() === 23 &&
    date.getMinutes() === 59 &&
    date.getSeconds() === 59 &&
    date.getMilliseconds() === 999
  );
}

const SHORT_WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const SHORT_MONTHS = MONTHS.map((month) => month.charAt(0).toUpperCase() + month.slice(1, 3));

/** "Fri, Oct 30, 3:00 PM"; the year only when it is not the current one, the time only when set */
export function formatDueDate(date: Date, now: Date = new Date()) {
  let result = `${SHORT_WEEKDAYS[date.getDay()]}, ${SHORT_MONTHS[date.getMonth()]} ${date.getDate()}`;
  if (date.getFullYear() !== now.getFullYear()) {
    result += `, ${date.getFullYear()}`;
  }
  if (!isEndOfDay(date)) {
    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    result += `, ${hours}:${minutes} ${date.getHours() < 12 ? 'AM' : 'PM'}`;
  }
  return result;
}

function plural(count: number, unit: string) {
  return `${count} ${unit}${count === 1 ? '' : 's'}`;
}

function relative(count: number, unit: string) {
  return count > 0 ? `in ${plural(count, unit)}` : `${plural(-count, unit)} ago`;
}

/** How far the date is from now: "today", "in 4 days", "2 hours ago" */
export function formatRelative(date: Date, now: Date = new Date()) {
  const days = Math.round((startOfDay(date).getTime() - startOfDay(now).getTime()) / DAY_MS);

  if (days === 0 && !isEndOfDay(date)) {
    const minutes = Math.round((date.getTime() - now.getTime()) / 60000);
    if (minutes === 0) {
      return 'now';
    }
    if (Math.abs(minutes) < 60) {
      return relative(minutes, 'minute');
    }
    return relative(Math.trunc(minutes / 60), 'hour');
  }

  if (days === 0) {
    return 'today';
  }
  if (days === 1) {
    return 'tomorrow';
  }
  if (days === -1) {
    return 'yesterday';
  }
  if (Math.abs(days) < 14) {
    return relative(days, 'day');
  }
  if (Math.abs(days) < 60) {
    return relative(Math.round(days / 7), 'week');
  }
  if (Math.abs(days) < 365) {
    return relative(Math.round(days / 30), 'month');
  }
  return relative(Math.round(days / 365), 'year');
}
