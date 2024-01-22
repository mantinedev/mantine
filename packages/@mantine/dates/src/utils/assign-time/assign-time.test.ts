import { assignTime } from './assign-time';

describe('@mantine/dates/assign-time', () => {
  it('preserves time from the given original date', () => {
    const originalDate = new Date(2022, 3, 11, 3, 45, 13, 53);
    const nextDate = new Date(2023, 4, 12);
    const result = assignTime(originalDate, nextDate);

    expect(result.getFullYear()).toBe(nextDate.getFullYear());
    expect(result.getDate()).toBe(nextDate.getDate());
    expect(result.getMonth()).toBe(nextDate.getMonth());

    expect(result.getHours()).toBe(originalDate.getHours());
    expect(result.getMinutes()).toBe(originalDate.getMinutes());
    expect(result.getSeconds()).toBe(originalDate.getSeconds());
    expect(result.getMilliseconds()).toBe(originalDate.getMilliseconds());
  });

  it('returns null if next date is null', () => {
    expect(assignTime(new Date(2022, 3, 11), null!)).toBe(null);
  });

  it('returns next date if original date is null', () => {
    expect(assignTime(null!, new Date(2022, 3, 11))).toStrictEqual(new Date(2022, 3, 11));
  });
});
