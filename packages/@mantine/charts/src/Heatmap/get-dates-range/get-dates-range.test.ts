import { getDatesRange } from './get-dates-range';

describe('@mantine/charts/get-dates-range', () => {
  it('returns correct values with default options', () => {
    const result = getDatesRange({
      startDate: '2025-01-01',
      endDate: '2025-01-14',
      withOutsideDates: false,
    });

    expect(result).toEqual([
      [
        '2025-01-01',
        '2025-01-02',
        '2025-01-03',
        '2025-01-04',
        '2025-01-05',
        '2025-01-06',
        '2025-01-07',
      ],
      [
        '2025-01-08',
        '2025-01-09',
        '2025-01-10',
        '2025-01-11',
        '2025-01-12',
        '2025-01-13',
        '2025-01-14',
      ],
      [
        '2025-01-15',
        '2025-01-16',
        '2025-01-17',
        '2025-01-18',
        '2025-01-19',
        '2025-01-20',
        '2025-01-21',
      ],
    ]);
  });

  it('returns correct values for custom first day of week (Sunday)', () => {
    const result = getDatesRange({
      startDate: '2025-01-01',
      endDate: '2025-01-14',
      withOutsideDates: true,
      firstDayOfWeek: 0,
    });

    expect(result).toEqual([
      [
        '2024-12-31',
        '2025-01-01',
        '2025-01-02',
        '2025-01-03',
        '2025-01-04',
        '2025-01-05',
        '2025-01-06',
      ],
      [
        '2025-01-07',
        '2025-01-08',
        '2025-01-09',
        '2025-01-10',
        '2025-01-11',
        '2025-01-12',
        '2025-01-13',
      ],
      [
        '2025-01-14',
        '2025-01-15',
        '2025-01-16',
        '2025-01-17',
        '2025-01-18',
        '2025-01-19',
        '2025-01-20',
      ],
    ]);
  });
});
