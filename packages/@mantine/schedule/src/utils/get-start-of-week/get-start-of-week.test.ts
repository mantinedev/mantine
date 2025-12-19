import { getStartOfWeek } from './get-start-of-week';

describe('@mantine/schedule/get-start-of-week', () => {
  it('returns start of week without first day of week param', () => {
    expect(getStartOfWeek({ date: '2021-02-05' })).toStrictEqual('2021-02-01');
  });

  it('returns start of week with first day param', () => {
    expect(getStartOfWeek({ date: '2021-02-05', firstDayOfWeek: 6 })).toStrictEqual('2021-01-30');
    expect(getStartOfWeek({ date: '2021-02-05', firstDayOfWeek: 5 })).toStrictEqual('2021-02-05');
    expect(getStartOfWeek({ date: '2021-02-05', firstDayOfWeek: 4 })).toStrictEqual('2021-02-04');
    expect(getStartOfWeek({ date: '2021-02-05', firstDayOfWeek: 3 })).toStrictEqual('2021-02-03');
    expect(getStartOfWeek({ date: '2021-02-05', firstDayOfWeek: 2 })).toStrictEqual('2021-02-02');
    expect(getStartOfWeek({ date: '2021-02-05', firstDayOfWeek: 1 })).toStrictEqual('2021-02-01');
    expect(getStartOfWeek({ date: '2021-02-05', firstDayOfWeek: 0 })).toStrictEqual('2021-01-31');

    expect(getStartOfWeek({ date: '2022-02-15', firstDayOfWeek: 6 })).toStrictEqual('2022-02-12');
    expect(getStartOfWeek({ date: '2022-02-15', firstDayOfWeek: 5 })).toStrictEqual('2022-02-11');
    expect(getStartOfWeek({ date: '2022-02-15', firstDayOfWeek: 4 })).toStrictEqual('2022-02-10');
    expect(getStartOfWeek({ date: '2022-02-15', firstDayOfWeek: 3 })).toStrictEqual('2022-02-09');
    expect(getStartOfWeek({ date: '2022-02-15', firstDayOfWeek: 2 })).toStrictEqual('2022-02-15');
    expect(getStartOfWeek({ date: '2022-02-15', firstDayOfWeek: 1 })).toStrictEqual('2022-02-14');
    expect(getStartOfWeek({ date: '2022-02-15', firstDayOfWeek: 0 })).toStrictEqual('2022-02-13');
  });
});
