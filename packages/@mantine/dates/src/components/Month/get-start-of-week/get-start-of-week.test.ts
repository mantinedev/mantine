import { getStartOfWeek } from './get-start-of-week';

describe('@mantine/dates/get-start-of-week', () => {
  it('returns start of week without first day of week param', () => {
    expect(getStartOfWeek('2021-02-05')).toStrictEqual('2021-02-01');
  });

  it('returns start of week with first day param', () => {
    expect(getStartOfWeek('2021-02-05', 6)).toStrictEqual('2021-01-30');
    expect(getStartOfWeek('2021-02-05', 5)).toStrictEqual('2021-02-05');
    expect(getStartOfWeek('2021-02-05', 4)).toStrictEqual('2021-02-04');
    expect(getStartOfWeek('2021-02-05', 3)).toStrictEqual('2021-02-03');
    expect(getStartOfWeek('2021-02-05', 2)).toStrictEqual('2021-02-02');
    expect(getStartOfWeek('2021-02-05', 1)).toStrictEqual('2021-02-01');
    expect(getStartOfWeek('2021-02-05', 0)).toStrictEqual('2021-01-31');

    expect(getStartOfWeek('2022-02-15', 6)).toStrictEqual('2022-02-12');
    expect(getStartOfWeek('2022-02-15', 5)).toStrictEqual('2022-02-11');
    expect(getStartOfWeek('2022-02-15', 4)).toStrictEqual('2022-02-10');
    expect(getStartOfWeek('2022-02-15', 3)).toStrictEqual('2022-02-09');
    expect(getStartOfWeek('2022-02-15', 2)).toStrictEqual('2022-02-15');
    expect(getStartOfWeek('2022-02-15', 1)).toStrictEqual('2022-02-14');
    expect(getStartOfWeek('2022-02-15', 0)).toStrictEqual('2022-02-13');
  });
});
