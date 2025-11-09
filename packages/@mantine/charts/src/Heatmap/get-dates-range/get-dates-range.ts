function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 86400000);
}

function toUtcMidnight(input: Date | string): Date {
  if (typeof input === 'string') {
    const m = input.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      const year = Number(m[1]);
      const month = Number(m[2]) - 1; // 0-indexed
      const day = Number(m[3]);
      return new Date(Date.UTC(year, month, day));
    }

    const d = new Date(input);
    return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  }

  return new Date(Date.UTC(input.getFullYear(), input.getMonth(), input.getDate()));
}

function startOfWeekUtc(date: Date, firstDayOfWeek: number): Date {
  let value = new Date(date);
  while (value.getUTCDay() !== firstDayOfWeek) {
    value = addDays(value, -1);
  }

  return value;
}

function endOfWeekUtc(date: Date, firstDayOfWeek: number): Date {
  const day = date.getUTCDay();
  const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;
  return addDays(date, 6 - diff);
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
  const now = new Date();
  const defaultStartLocal = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  const defaultEndLocal = now;

  const start = startDate ? toUtcMidnight(startDate) : toUtcMidnight(defaultStartLocal);
  const end = endDate ? toUtcMidnight(endDate) : toUtcMidnight(defaultEndLocal);

  const startWeek = startOfWeekUtc(start, firstDayOfWeek);
  const endWeek = endOfWeekUtc(end, firstDayOfWeek);
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
