import { getMonthDays } from './get-month-days';

describe('@mantine/dates/get-month-days', () => {
  it('returns all month days for given date', () => {
    // February 2021 is ideal month (4 weeks, month starts on monday and ends on sunday)
    const monthDays = getMonthDays({
      month: '2021-02-02',
      firstDayOfWeek: 1,
      consistentWeeks: false,
    });
    expect(monthDays).toHaveLength(4);

    expect(monthDays[0][1]).toStrictEqual('2021-02-02');
    expect(monthDays[0][2]).toStrictEqual('2021-02-03');
    expect(monthDays[1][0]).toStrictEqual('2021-02-08');
    expect(monthDays[2][0]).toStrictEqual('2021-02-15');
    expect(monthDays[monthDays.length - 1][monthDays[0].length - 1]).toStrictEqual('2021-02-28');
  });

  it('returns all month days for given date, first day of week - sunday', () => {
    const monthDays = getMonthDays({
      month: '2021-02-02',
      firstDayOfWeek: 0,
      consistentWeeks: false,
    });
    expect(monthDays).toHaveLength(5);

    expect(monthDays[0][2]).toStrictEqual('2021-02-02');
    expect(monthDays[0][3]).toStrictEqual('2021-02-03');
    expect(monthDays[1][1]).toStrictEqual('2021-02-08');
    expect(monthDays[2][1]).toStrictEqual('2021-02-15');
    expect(monthDays[monthDays.length - 1][0]).toStrictEqual('2021-02-28');
  });

  it('returns outside days for given month', () => {
    // April 2021 has outside days in the beginning and end of month
    const monthDays = getMonthDays({
      month: '2021-04-02',
      firstDayOfWeek: 1,
      consistentWeeks: false,
    });

    expect(monthDays).toHaveLength(5);
    expect(monthDays[0][0]).toStrictEqual('2021-03-29');
    expect(monthDays[0][1]).toStrictEqual('2021-03-30');
    expect(monthDays[monthDays.length - 1][monthDays[0].length - 1]).toStrictEqual('2021-05-02');
  });

  it('returns outside days for given month, first day of the week - sunday', () => {
    const monthDays = getMonthDays({
      month: '2021-04-02',
      firstDayOfWeek: 0,
      consistentWeeks: false,
    });

    expect(monthDays).toHaveLength(5);
    expect(monthDays[0][0]).toStrictEqual('2021-03-28');
    expect(monthDays[0][1]).toStrictEqual('2021-03-29');
    expect(monthDays[monthDays.length - 1][monthDays[0].length - 1]).toStrictEqual('2021-05-01');
  });

  it('supports consistent 6 weeks when consistentWeeks is set', () => {
    const monthDays = getMonthDays({
      month: '2021-02-02',
      firstDayOfWeek: 1,
      consistentWeeks: true,
    });

    expect(monthDays).toHaveLength(6);
    expect(monthDays[0][0]).toStrictEqual('2021-02-01');
    expect(monthDays[monthDays.length - 1][monthDays[0].length - 1]).toStrictEqual('2021-03-14');
  });
});
