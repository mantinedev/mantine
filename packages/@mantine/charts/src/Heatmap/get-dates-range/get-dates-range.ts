function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 86400000);
}

function startOfWeek(date: Date, firstDayOfWeek: number): Date {
  let value = new Date(date);
  while (value.getDay() !== firstDayOfWeek) {
    value = addDays(value, -1);
  }

  return value;
}

function endOfWeek(date: Date, firstDayOfWeek: number): Date {
  const day = date.getDay();
  const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;
  return addDays(date, 6 - (diff - 1));
}

interface HeatmapOptions {
  startDate?: Date | string;
  endDate?: Date | string;
  withOutsideDates?: boolean;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export function getDatesRange({
  startDate,
  endDate,
  withOutsideDates = true,
  firstDayOfWeek = 1,
}: HeatmapOptions = {}): (string | null)[][] {
  const start = startDate
    ? new Date(startDate)
    : new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());
  const end = endDate ? new Date(endDate) : new Date();
  const startWeek = startOfWeek(start, firstDayOfWeek);
  const endWeek = endOfWeek(end, firstDayOfWeek);
  const dates: (string | null)[][] = [];

  let current = startWeek;

  while (current <= endWeek) {
    const week = Array.from({ length: 7 }, (_, i) => {
      const day = addDays(current, i);
      return withOutsideDates || (day >= start && day <= end) ? formatDate(day) : null;
    });

    dates.push(week);
    current = addDays(current, 7);
  }

  return dates;
}
