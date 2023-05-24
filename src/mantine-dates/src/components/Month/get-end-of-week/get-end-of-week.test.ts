import { getEndOfWeek } from './get-end-of-week';

describe('@mantine/dates/get-end-of-week', () => {
  it('returns end of week without first day of week param', () => {
    expect(getEndOfWeek(new Date(2021, 1, 5))).toStrictEqual(new Date(2021, 1, 7));
  });

  it('returns end of week with first day param', () => {
    expect(getEndOfWeek(new Date(2021, 1, 5), 6)).toStrictEqual(new Date(2021, 1, 5));
    expect(getEndOfWeek(new Date(2021, 1, 5), 5)).toStrictEqual(new Date(2021, 1, 11));
    expect(getEndOfWeek(new Date(2021, 1, 5), 4)).toStrictEqual(new Date(2021, 1, 10));
    expect(getEndOfWeek(new Date(2021, 1, 5), 3)).toStrictEqual(new Date(2021, 1, 9));
    expect(getEndOfWeek(new Date(2021, 1, 5), 2)).toStrictEqual(new Date(2021, 1, 8));
    expect(getEndOfWeek(new Date(2021, 1, 5), 1)).toStrictEqual(new Date(2021, 1, 7));
    expect(getEndOfWeek(new Date(2021, 1, 5), 0)).toStrictEqual(new Date(2021, 1, 6));

    expect(getEndOfWeek(new Date(2022, 1, 15), 6)).toStrictEqual(new Date(2022, 1, 18));
    expect(getEndOfWeek(new Date(2022, 1, 15), 5)).toStrictEqual(new Date(2022, 1, 17));
    expect(getEndOfWeek(new Date(2022, 1, 15), 4)).toStrictEqual(new Date(2022, 1, 16));
    expect(getEndOfWeek(new Date(2022, 1, 15), 3)).toStrictEqual(new Date(2022, 1, 15));
    expect(getEndOfWeek(new Date(2022, 1, 15), 2)).toStrictEqual(new Date(2022, 1, 21));
    expect(getEndOfWeek(new Date(2022, 1, 15), 1)).toStrictEqual(new Date(2022, 1, 20));
    expect(getEndOfWeek(new Date(2022, 1, 15), 0)).toStrictEqual(new Date(2022, 1, 19));
  });
});
