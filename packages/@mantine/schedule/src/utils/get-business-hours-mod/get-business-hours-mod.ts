import { DayOfWeek } from '../../types';
import { parseTimeString } from '../parse-time-string/parse-time-string';

/** Business hours range in `HH:mm:ss` or `HH:mm` format */
export type BusinessHoursRange = [string, string];

/** Per-day business hours map keyed by day of the week (0 – Sunday, 6 – Saturday). `null` marks a day as fully outside business hours. */
export type BusinessHoursPerDay = Partial<Record<DayOfWeek, BusinessHoursRange | null>>;

/** Business hours value – tuple applies to every day, record configures business hours per day */
export type BusinessHoursValue = BusinessHoursRange | BusinessHoursPerDay;

export interface GetBusinessHoursModInput {
  /** Start of the interval in `HH:mm:ss` format */
  time: string;

  /** End of the interval in `HH:mm:ss` format. When set, intervals that contain a business hours boundary get the partial state. */
  endTime?: string;

  businessHours?: BusinessHoursValue;
  highlightBusinessHours?: boolean;
  dayOfWeek?: DayOfWeek;
}

export interface BusinessHoursMod {
  'business-hours': boolean;
  'non-business-hours': boolean;
  'partial-business-hours': boolean;
}

/** CSS variables applied to partial intervals, percentage of the interval where business hours start and end */
export type BusinessHoursVars = {
  '--business-hours-from': string;
  '--business-hours-to': string;
};

export interface BusinessHoursState {
  mod: BusinessHoursMod;
  vars: BusinessHoursVars | undefined;
}

const NONE: BusinessHoursMod = {
  'business-hours': false,
  'non-business-hours': false,
  'partial-business-hours': false,
};

const INSIDE: BusinessHoursMod = {
  'business-hours': true,
  'non-business-hours': false,
  'partial-business-hours': false,
};

const OUTSIDE: BusinessHoursMod = {
  'business-hours': false,
  'non-business-hours': true,
  'partial-business-hours': false,
};

const PARTIAL: BusinessHoursMod = {
  'business-hours': false,
  'non-business-hours': false,
  'partial-business-hours': true,
};

function isBusinessHoursRange(value: BusinessHoursValue): value is BusinessHoursRange {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === 'string' &&
    typeof value[1] === 'string'
  );
}

function toSeconds(time: string) {
  const { hours, minutes, seconds } = parseTimeString(time);
  return hours * 3600 + minutes * 60 + seconds;
}

function toPercent(value: number) {
  return `${Math.round(value * 10000) / 100}%`;
}

/**
 * Resolves business hours state of a time interval
 * @returns `mod` – modifiers for styling business/non-business/partial intervals, `vars` – CSS variables with the business hours boundaries inside a partial interval
 */
export function getBusinessHoursState({
  time,
  endTime,
  businessHours,
  highlightBusinessHours,
  dayOfWeek,
}: GetBusinessHoursModInput): BusinessHoursState {
  if (!highlightBusinessHours || !businessHours) {
    return { mod: NONE, vars: undefined };
  }

  let range: BusinessHoursRange | null;
  if (isBusinessHoursRange(businessHours)) {
    range = businessHours;
  } else {
    if (dayOfWeek === undefined) {
      return { mod: NONE, vars: undefined };
    }
    range = businessHours[dayOfWeek] ?? null;
  }

  if (!range) {
    return { mod: OUTSIDE, vars: undefined };
  }

  const start = toSeconds(time);
  const rangeStart = toSeconds(range[0]);
  const rangeEnd = toSeconds(range[1]);
  const end = endTime === undefined ? start : toSeconds(endTime);

  if (end <= start) {
    const isInside = start >= rangeStart && start < rangeEnd;
    return { mod: isInside ? INSIDE : OUTSIDE, vars: undefined };
  }

  const overlapStart = Math.max(start, rangeStart);
  const overlapEnd = Math.min(end, rangeEnd);

  if (overlapEnd <= overlapStart) {
    return { mod: OUTSIDE, vars: undefined };
  }

  if (overlapStart === start && overlapEnd === end) {
    return { mod: INSIDE, vars: undefined };
  }

  const duration = end - start;

  return {
    mod: PARTIAL,
    vars: {
      '--business-hours-from': toPercent((overlapStart - start) / duration),
      '--business-hours-to': toPercent((overlapEnd - start) / duration),
    },
  };
}

/**
 * Determines if a given time interval is within business hours and returns modifier object
 * @param time - Start time in HH:mm:ss format
 * @param endTime - End time in HH:mm:ss format, enables the partial state for intervals that contain a boundary
 * @param businessHours - Tuple of [start, end] times in HH:mm:ss or HH:mm format, or per-day record keyed by day of the week
 * @param highlightBusinessHours - Whether to highlight business hours
 * @param dayOfWeek - Day of the week (0 – Sunday, 6 – Saturday), used to resolve per-day business hours
 * @returns Modifier object for styling business/non-business hours
 */
export function getBusinessHoursMod(input: GetBusinessHoursModInput): BusinessHoursMod {
  return getBusinessHoursState(input).mod;
}
