import { DayOfWeek } from '../../types';

/** Business hours range in `HH:mm:ss` format */
export type BusinessHoursRange = [string, string];

/** Per-day business hours map keyed by day of the week (0 – Sunday, 6 – Saturday). `null` marks a day as fully outside business hours. */
export type BusinessHoursPerDay = Partial<Record<DayOfWeek, BusinessHoursRange | null>>;

/** Business hours value – tuple applies to every day, record configures business hours per day */
export type BusinessHoursValue = BusinessHoursRange | BusinessHoursPerDay;

export interface GetBusinessHoursModInput {
  time: string;
  businessHours?: BusinessHoursValue;
  highlightBusinessHours?: boolean;
  dayOfWeek?: DayOfWeek;
}

export interface BusinessHoursMod {
  'business-hours': boolean;
  'non-business-hours': boolean;
}

function isBusinessHoursRange(value: BusinessHoursValue): value is BusinessHoursRange {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === 'string' &&
    typeof value[1] === 'string'
  );
}

/**
 * Determines if a given time is within business hours and returns modifier object
 * @param time - Time string in HH:mm:ss format
 * @param businessHours - Tuple of [start, end] times in HH:mm:ss format, or per-day record keyed by day of the week
 * @param highlightBusinessHours - Whether to highlight business hours
 * @param dayOfWeek - Day of the week (0 – Sunday, 6 – Saturday), used to resolve per-day business hours
 * @returns Modifier object for styling business/non-business hours
 */
export function getBusinessHoursMod({
  time,
  businessHours,
  highlightBusinessHours,
  dayOfWeek,
}: GetBusinessHoursModInput): BusinessHoursMod {
  if (!highlightBusinessHours || !businessHours) {
    return {
      'business-hours': false,
      'non-business-hours': false,
    };
  }

  let range: [string, string] | null;
  if (isBusinessHoursRange(businessHours)) {
    range = businessHours;
  } else {
    if (dayOfWeek === undefined) {
      return {
        'business-hours': false,
        'non-business-hours': false,
      };
    }
    range = businessHours[dayOfWeek] ?? null;
  }

  if (!range) {
    return {
      'business-hours': false,
      'non-business-hours': true,
    };
  }

  const [start, end] = range;
  const isInBusinessHours = time >= start && time < end;

  return {
    'business-hours': isInBusinessHours,
    'non-business-hours': !isInBusinessHours,
  };
}
