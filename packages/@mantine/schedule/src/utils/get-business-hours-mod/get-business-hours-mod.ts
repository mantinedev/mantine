export interface GetBusinessHoursModInput {
  time: string;
  businessHours?: [string, string];
  highlightBusinessHours?: boolean;
}

export interface BusinessHoursMod {
  'business-hours': boolean;
  'non-business-hours': boolean;
}

/**
 * Determines if a given time is within business hours and returns modifier object
 * @param time - Time string in HH:mm:ss format
 * @param businessHours - Tuple of [start, end] times in HH:mm:ss format
 * @param highlightBusinessHours - Whether to highlight business hours
 * @returns Modifier object for styling business/non-business hours
 */
export function getBusinessHoursMod({
  time,
  businessHours,
  highlightBusinessHours,
}: GetBusinessHoursModInput): BusinessHoursMod {
  if (!highlightBusinessHours || !businessHours) {
    return {
      'business-hours': false,
      'non-business-hours': false,
    };
  }

  const [start, end] = businessHours;
  const isInBusinessHours = time >= start && time < end;

  return {
    'business-hours': isInBusinessHours,
    'non-business-hours': !isInBusinessHours,
  };
}
