import { getMonthDays } from './get-month-days';

describe('@mantine/dates/get-month-days', () => {
  it('returns all month days for given date', () => {
    // February 2021 is ideal month (4 weeks, month starts on monday and ends on sunday)
    const monthDays = getMonthDays({
      month: new Date(2021, 1, 2),
      firstDayOfWeek: 1,
      consistentWeeks: false,
    });
    expect(monthDays).toHaveLength(4);

    expect(monthDays[0][1]).toStrictEqual(new Date(2021, 1, 2));
    expect(monthDays[0][2]).toStrictEqual(new Date(2021, 1, 3));
    expect(monthDays[1][0]).toStrictEqual(new Date(2021, 1, 8));
    expect(monthDays[2][0]).toStrictEqual(new Date(2021, 1, 15));
    expect(monthDays[monthDays.length - 1][monthDays[0].length - 1]).toStrictEqual(
      new Date(2021, 2, 0)
    );
  });

  it('returns all month days for given date, first day of week - sunday', () => {
    const monthDays = getMonthDays({
      month: new Date(2021, 1, 2),
      firstDayOfWeek: 0,
      consistentWeeks: false,
    });
    expect(monthDays).toHaveLength(5);

    expect(monthDays[0][2]).toStrictEqual(new Date(2021, 1, 2));
    expect(monthDays[0][3]).toStrictEqual(new Date(2021, 1, 3));
    expect(monthDays[1][1]).toStrictEqual(new Date(2021, 1, 8));
    expect(monthDays[2][1]).toStrictEqual(new Date(2021, 1, 15));
    expect(monthDays[monthDays.length - 1][0]).toStrictEqual(new Date(2021, 1, 28));
  });

  it('returns outside days for given month', () => {
    // April 2021 has outside days in the beginning and end of month
    const monthDays = getMonthDays({
      month: new Date(2021, 3, 2),
      firstDayOfWeek: 1,
      consistentWeeks: false,
    });

    expect(monthDays).toHaveLength(5);
    expect(monthDays[0][0]).toStrictEqual(new Date(2021, 2, 29));
    expect(monthDays[0][1]).toStrictEqual(new Date(2021, 2, 30));
    expect(monthDays[monthDays.length - 1][monthDays[0].length - 1]).toStrictEqual(
      new Date(2021, 4, 2)
    );
  });

  it('returns outside days for given month, first day of the week - sunday', () => {
    const monthDays = getMonthDays({
      month: new Date(2021, 3, 2),
      firstDayOfWeek: 0,
      consistentWeeks: false,
    });

    expect(monthDays).toHaveLength(5);
    expect(monthDays[0][0]).toStrictEqual(new Date(2021, 2, 28));
    expect(monthDays[0][1]).toStrictEqual(new Date(2021, 2, 29));
    expect(monthDays[monthDays.length - 1][monthDays[0].length - 1]).toStrictEqual(
      new Date(2021, 4, 1)
    );
  });

  it('supports consistent 6 weeks when consistentWeeks is set', () => {
    const monthDays = getMonthDays({
      month: new Date(2021, 1, 2),
      firstDayOfWeek: 1,
      consistentWeeks: true,
    });

    expect(monthDays).toHaveLength(6);
    expect(monthDays[0][0]).toStrictEqual(new Date(2021, 1, 1));
    expect(monthDays[monthDays.length - 1][monthDays[0].length - 1]).toStrictEqual(
      new Date(2021, 2, 14)
    );
  });
});
