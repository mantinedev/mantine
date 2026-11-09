import { getWeekPickerDayProps, normalizeWeekValue } from './get-week-picker-day-props';

const getControlProps =
  (selectedWeeks: string[], inRangeWeeks: string[] = []) =>
  (date: string) => ({
    selected: selectedWeeks.includes(date),
    inRange: inRangeWeeks.includes(date),
  });

describe('@mantine/dates/get-week-picker-day-props', () => {
  it('marks all days of a selected week as selected without range flags', () => {
    const props = (date: string) =>
      getWeekPickerDayProps({
        date,
        firstDayOfWeek: 1,
        hoveredWeek: null,
        getControlProps: getControlProps(['2026-03-02']),
      });

    expect(props('2026-03-02')).toMatchObject({
      selected: true,
      inRange: false,
      firstInRange: false,
      lastInRange: false,
    });
    expect(props('2026-03-05')).toMatchObject({ selected: true });
    expect(props('2026-03-05')).not.toHaveProperty('data-autofocus');
    expect(props('2026-03-08')).toMatchObject({ selected: true });
    expect(props('2026-03-09')).toMatchObject({ selected: false, inRange: false });
  });

  it('marks every day of an in-range week as inRange', () => {
    const props = (date: string) =>
      getWeekPickerDayProps({
        date,
        firstDayOfWeek: 1,
        hoveredWeek: null,
        getControlProps: getControlProps([], ['2026-03-09']),
      });
    expect(props('2026-03-09')).toMatchObject({ selected: false, inRange: true });
    expect(props('2026-03-11')).toMatchObject({ selected: false, inRange: true });
    expect(props('2026-03-15')).toMatchObject({ selected: false, inRange: true });
    expect(props('2026-03-16')).toMatchObject({ inRange: false });
  });

  it('applies week-level firstInRange and lastInRange flags to every day of the week', () => {
    const props = (date: string) =>
      getWeekPickerDayProps({
        date,
        firstDayOfWeek: 1,
        hoveredWeek: null,
        getControlProps: (weekStart) => ({
          selected: weekStart === '2026-03-02' || weekStart === '2026-03-16',
          inRange: ['2026-03-02', '2026-03-09', '2026-03-16'].includes(weekStart),
          firstInRange: weekStart === '2026-03-02',
          lastInRange: weekStart === '2026-03-16',
        }),
      });
    expect(props('2026-03-04')).toMatchObject({ firstInRange: true, lastInRange: false });
    expect(props('2026-03-11')).toMatchObject({ firstInRange: false, lastInRange: false });
    expect(props('2026-03-18')).toMatchObject({ firstInRange: false, lastInRange: true });
  });

  it('respects firstDayOfWeek when resolving the week of a day', () => {
    const props = (date: string) =>
      getWeekPickerDayProps({
        date,
        firstDayOfWeek: 0,
        hoveredWeek: null,
        getControlProps: getControlProps(['2026-03-01']),
      });
    expect(props('2026-03-01')).toMatchObject({ selected: true });
    expect(props('2026-03-07')).toMatchObject({ selected: true });
    expect(props('2026-03-08')).toMatchObject({ selected: false });
  });

  it('sets data-week-hovered on every day of the hovered week', () => {
    const props = (date: string) =>
      getWeekPickerDayProps({
        date,
        firstDayOfWeek: 1,
        hoveredWeek: '2026-03-02',
        getControlProps: getControlProps([]),
      });
    expect(props('2026-03-04')['data-week-hovered']).toBe(true);
    expect(props('2026-03-09')['data-week-hovered']).toBe(undefined);
  });
});

describe('@mantine/dates/normalize-week-value', () => {
  it('normalizes string, Date, arrays and keeps null/undefined', () => {
    expect(normalizeWeekValue(undefined, 1)).toBe(undefined);
    expect(normalizeWeekValue(null, 1)).toBe(null);
    expect(normalizeWeekValue('2026-03-04', 1)).toBe('2026-03-02');
    expect(normalizeWeekValue(new Date(2026, 2, 4), 0)).toBe('2026-03-01');
    expect(normalizeWeekValue(['2026-03-04', null], 1)).toStrictEqual(['2026-03-02', null]);
    expect(normalizeWeekValue(['2026-03-04', '2026-03-20'], 1)).toStrictEqual([
      '2026-03-02',
      '2026-03-16',
    ]);
  });

  it('returns null instead of hanging for invalid or empty values', () => {
    expect(normalizeWeekValue('', 1)).toBe(null);
    expect(normalizeWeekValue('garbage', 1)).toBe(null);
    expect(normalizeWeekValue(['', '2026-03-04'], 1)).toStrictEqual([null, '2026-03-02']);
  });
});
