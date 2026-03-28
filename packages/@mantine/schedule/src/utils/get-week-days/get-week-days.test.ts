import { getWeekDays } from './get-week-days';

describe('@mantine/schedule/get-week-days', () => {
  it('works correctly with default options', () => {
    const days = getWeekDays({ week: '2024-01-15 00:00:00' });
    expect(days).toHaveLength(7);
    expect(days[0]).toBe('2024-01-15 00:00:00');
    expect(days[6]).toBe('2024-01-21 00:00:00');
  });

  it('works correctly with custom firstDayOfWeek', () => {
    const days = getWeekDays({ week: '2024-01-15 00:00:00', firstDayOfWeek: 0 });
    expect(days).toHaveLength(7);
    expect(days[0]).toBe('2024-01-14 00:00:00');
    expect(days[6]).toBe('2024-01-20 00:00:00');
  });

  it('excludes weekend days when withWeekendDays is false', () => {
    const days = getWeekDays({
      week: '2024-01-15 00:00:00',
      weekendDays: [0, 6],
      withWeekendDays: false,
    });

    expect(days).toHaveLength(5);
    expect(days[0]).toBe('2024-01-15 00:00:00');
    expect(days[4]).toBe('2024-01-19 00:00:00');
  });

  it('works correct with custom weekendDays', () => {
    const days = getWeekDays({
      week: '2024-01-15 00:00:00',
      weekendDays: [4, 5, 6],
      withWeekendDays: false,
    });

    expect(days).toStrictEqual([
      '2024-01-15 00:00:00',
      '2024-01-16 00:00:00',
      '2024-01-17 00:00:00',
      '2024-01-21 00:00:00',
    ]);
  });
});
