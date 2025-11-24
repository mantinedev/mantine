import { getWeekDays } from './get-week-days';

describe('@mantine/dates/get-week-days', () => {
  it('returns 7 days for a week starting from Monday (default)', () => {
    // January 15, 2024 is a Monday
    const days = getWeekDays({
      week: '2024-01-15',
    });

    expect(days).toHaveLength(7);
    expect(days[0]).toBe('2024-01-15'); // Monday
    expect(days[6]).toBe('2024-01-21'); // Sunday
  });

  it('returns 7 days starting from Sunday when firstDayOfWeek is 0', () => {
    // January 15, 2024 is a Monday, so Sunday would be January 14
    const days = getWeekDays({
      week: '2024-01-15',
      firstDayOfWeek: 0,
    });

    expect(days).toHaveLength(7);
    expect(days[0]).toBe('2024-01-14'); // Sunday
    expect(days[6]).toBe('2024-01-20'); // Saturday
  });

  it('excludes weekend days when withWeekendDays is false', () => {
    // January 15, 2024 is a Monday
    const days = getWeekDays({
      week: '2024-01-15',
      weekendDays: [0, 6], // Sunday and Saturday
      withWeekendDays: false,
    });

    expect(days).toHaveLength(5); // Mon, Tue, Wed, Thu, Fri
    expect(days[0]).toBe('2024-01-15'); // Monday
    expect(days[4]).toBe('2024-01-19'); // Friday
  });

  it('includes weekend days when withWeekendDays is true', () => {
    // January 15, 2024 is a Monday
    const days = getWeekDays({
      week: '2024-01-15',
      weekendDays: [0, 6],
      withWeekendDays: true,
    });

    expect(days).toHaveLength(7);
    // Should include Saturday and Sunday
    expect(days).toContain('2024-01-20'); // Saturday
    expect(days).toContain('2024-01-21'); // Sunday
  });

  it('works with different weekend definitions', () => {
    // Using Friday and Saturday as weekends
    const days = getWeekDays({
      week: '2024-01-15',
      weekendDays: [5, 6], // Friday and Saturday
      withWeekendDays: false,
    });

    expect(days).toHaveLength(5); // Sun, Mon, Tue, Wed, Thu
    expect(days).not.toContain('2024-01-19'); // Friday should be excluded
    expect(days).not.toContain('2024-01-20'); // Saturday should be excluded
  });

  it('accepts Date objects as week input', () => {
    const date = new Date('2024-01-15');
    const days = getWeekDays({
      week: date,
    });

    expect(days).toHaveLength(7);
    expect(days[0]).toBe('2024-01-15');
  });

  it('starts from the correct day of week regardless of input day', () => {
    // January 17, 2024 is a Wednesday
    const days = getWeekDays({
      week: '2024-01-17',
      firstDayOfWeek: 1, // Monday
    });

    expect(days).toHaveLength(7);
    expect(days[0]).toBe('2024-01-15'); // Monday of that week
  });

  it('handles week starting with different days of week', () => {
    // Using the same week but different starting points
    const daysFromMonday = getWeekDays({
      week: '2024-01-15',
      firstDayOfWeek: 1,
    });

    const daysFromSunday = getWeekDays({
      week: '2024-01-15',
      firstDayOfWeek: 0,
    });

    // Monday view should start on Monday
    expect(daysFromMonday[0]).toBe('2024-01-15');
    // Sunday view should start on Sunday (previous day)
    expect(daysFromSunday[0]).toBe('2024-01-14');
  });

  it('returns correct format for all dates', () => {
    const days = getWeekDays({
      week: '2024-01-15',
    });

    days.forEach((day) => {
      // Check format: YYYY-MM-DD
      expect(day).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it('excludes only the specified weekend days', () => {
    // January 15, 2024 is a Monday
    const days = getWeekDays({
      week: '2024-01-15',
      weekendDays: [0], // Only Sunday
      withWeekendDays: false,
    });

    expect(days).toHaveLength(6); // Mon-Sat only
    expect(days).not.toContain('2024-01-21'); // Sunday excluded
    expect(days).toContain('2024-01-20'); // Saturday included
  });

  it('handles empty weekendDays array', () => {
    const days = getWeekDays({
      week: '2024-01-15',
      weekendDays: [],
      withWeekendDays: false,
    });

    expect(days).toHaveLength(7); // All days included since none are marked as weekends
  });

  it('works with week starting on different days', () => {
    // Test with firstDayOfWeek = 3 (Wednesday)
    const days = getWeekDays({
      week: '2024-01-15', // Monday
      firstDayOfWeek: 3, // Wednesday
    });

    expect(days).toHaveLength(7);
    expect(days[0]).toBe('2024-01-10'); // Wednesday of previous week
    expect(days[6]).toBe('2024-01-16'); // Tuesday
  });
});
