import dayjs from 'dayjs';
import { isSameWeek } from './is-same-week';

describe('@mantine/schedule/is-same-week', () => {
  it('returns true when dates are in the same week', () => {
    const monday = dayjs('2024-01-15').format('YYYY-MM-DD'); // Monday
    const wednesday = dayjs('2024-01-17').format('YYYY-MM-DD'); // Wednesday of same week
    const firstDayOfWeek = 1; // Monday

    const result = isSameWeek({
      date: monday,
      targetWeek: wednesday,
      firstDayOfWeek,
    });

    expect(result).toBe(true);
  });

  it('returns false when dates are in different weeks', () => {
    const monday1 = dayjs('2024-01-15').format('YYYY-MM-DD'); // Monday of week 1
    const monday2 = dayjs('2024-01-22').format('YYYY-MM-DD'); // Monday of week 2
    const firstDayOfWeek = 1; // Monday

    const result = isSameWeek({
      date: monday1,
      targetWeek: monday2,
      firstDayOfWeek,
    });

    expect(result).toBe(false);
  });
});
