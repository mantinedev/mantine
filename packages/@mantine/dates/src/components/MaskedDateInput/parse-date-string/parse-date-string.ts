interface ParsedDate {
  day: number | null;
  month: number | null;
  year: number | null;
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
}

export function parseDateString(value: string | null | undefined): ParsedDate {
  const empty: ParsedDate = {
    day: null,
    month: null,
    year: null,
    hours: null,
    minutes: null,
    seconds: null,
  };
  if (!value) {
    return empty;
  }

  const [datePart, timePart] = value.split(' ');
  const [yearStr, monthStr, dayStr] = (datePart || '').split('-');
  const year = yearStr ? parseInt(yearStr, 10) : null;
  const month = monthStr ? parseInt(monthStr, 10) : null;
  const day = dayStr ? parseInt(dayStr, 10) : null;

  if (
    year === null ||
    Number.isNaN(year) ||
    month === null ||
    Number.isNaN(month) ||
    day === null ||
    Number.isNaN(day)
  ) {
    return empty;
  }

  if (!timePart) {
    return { day, month, year, hours: null, minutes: null, seconds: null };
  }

  const [hoursStr, minutesStr, secondsStr] = timePart.split(':');
  const hours = hoursStr ? parseInt(hoursStr, 10) : null;
  const minutes = minutesStr ? parseInt(minutesStr, 10) : null;
  const seconds = secondsStr ? parseInt(secondsStr, 10) : null;

  return {
    day,
    month,
    year,
    hours: Number.isNaN(hours) ? null : hours,
    minutes: Number.isNaN(minutes) ? null : minutes,
    seconds: Number.isNaN(seconds) ? null : seconds,
  };
}
