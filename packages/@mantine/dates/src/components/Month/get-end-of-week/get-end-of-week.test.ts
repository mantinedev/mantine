import { getEndOfWeek } from './get-end-of-week';

describe('@mantine/dates/get-end-of-week', () => {
  it('returns end of week without first day of week param', () => {
    expect(getEndOfWeek('2021-02-05')).toBe('2021-02-07');
  });

  it('returns end of week with first day param', () => {
    expect(getEndOfWeek('2021-02-05', 6)).toBe('2021-02-05');
    expect(getEndOfWeek('2021-02-05', 5)).toBe('2021-02-11');
    expect(getEndOfWeek('2021-02-05', 4)).toBe('2021-02-10');
    expect(getEndOfWeek('2021-02-05', 3)).toBe('2021-02-09');
    expect(getEndOfWeek('2021-02-05', 2)).toBe('2021-02-08');
    expect(getEndOfWeek('2021-02-05', 1)).toBe('2021-02-07');
    expect(getEndOfWeek('2021-02-05', 0)).toBe('2021-02-06');

    expect(getEndOfWeek('2022-02-15', 6)).toBe('2022-02-18');
    expect(getEndOfWeek('2022-02-15', 5)).toBe('2022-02-17');
    expect(getEndOfWeek('2022-02-15', 4)).toBe('2022-02-16');
    expect(getEndOfWeek('2022-02-15', 3)).toBe('2022-02-15');
    expect(getEndOfWeek('2022-02-15', 2)).toBe('2022-02-21');
    expect(getEndOfWeek('2022-02-15', 1)).toBe('2022-02-20');
    expect(getEndOfWeek('2022-02-15', 0)).toBe('2022-02-19');
  });
});
