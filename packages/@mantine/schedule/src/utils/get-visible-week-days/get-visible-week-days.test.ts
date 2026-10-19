import { getHiddenWeekendColumns, getVisibleWeekDays } from './get-visible-week-days';

const week = [
  '2025-11-03 00:00:00',
  '2025-11-04 00:00:00',
  '2025-11-05 00:00:00',
  '2025-11-06 00:00:00',
  '2025-11-07 00:00:00',
  '2025-11-08 00:00:00',
  '2025-11-09 00:00:00',
];

describe('@mantine/schedule/get-visible-week-days', () => {
  describe('getHiddenWeekendColumns', () => {
    it('returns no columns when withWeekendDays is not false', () => {
      expect(
        getHiddenWeekendColumns({ weekendDays: [0, 6], firstDayOfWeek: 1, withWeekendDays: true })
      ).toStrictEqual([]);
      expect(
        getHiddenWeekendColumns({
          weekendDays: [0, 6],
          firstDayOfWeek: 1,
          withWeekendDays: undefined,
        })
      ).toStrictEqual([]);
    });

    it('returns weekend columns relative to firstDayOfWeek', () => {
      expect(
        getHiddenWeekendColumns({ weekendDays: [0, 6], firstDayOfWeek: 1, withWeekendDays: false })
      ).toStrictEqual([5, 6]);
      expect(
        getHiddenWeekendColumns({ weekendDays: [0, 6], firstDayOfWeek: 0, withWeekendDays: false })
      ).toStrictEqual([0, 6]);
      expect(
        getHiddenWeekendColumns({ weekendDays: [1, 2], firstDayOfWeek: 1, withWeekendDays: false })
      ).toStrictEqual([0, 1]);
    });
  });

  describe('getVisibleWeekDays', () => {
    it('returns the whole week when withWeekendDays is not false', () => {
      expect(getVisibleWeekDays({ week, weekendDays: [0, 6], withWeekendDays: true })).toBe(week);
    });

    it('filters out weekend days when withWeekendDays is false', () => {
      expect(
        getVisibleWeekDays({ week, weekendDays: [0, 6], withWeekendDays: false })
      ).toStrictEqual(week.slice(0, 5));
      expect(
        getVisibleWeekDays({ week, weekendDays: [1, 2], withWeekendDays: false })
      ).toStrictEqual(week.slice(2));
    });
  });
});
