import dayjs from 'dayjs';
import { getMonthDays } from '../get-month-days/get-month-days';
import { getDateInTabOrder } from './get-date-in-tab-order';

const defaultDates = getMonthDays({
  month: new Date(2010, 5, 1),
  firstDayOfWeek: 1,
  consistentWeeks: false,
});
const defaultMinDate = new Date(2000, 0);
const defaultMaxDate = new Date(2100, 0);
const defaultSelectedDate = new Date(2010, 5, 5);
const defaultControlProps = () => ({});
const defaultExcludeDate = () => false;
const defaultHideOutsideDates = false;
const defaultMonth = new Date(2010, 5);

describe('@mantine/dates/get-date-in-tab-order', () => {
  it('returns selected date', () => {
    expect(
      getDateInTabOrder(
        defaultDates,
        defaultMinDate,
        defaultMaxDate,
        (date) => ({
          selected: dayjs(date).isSame(defaultSelectedDate, 'date'),
        }),
        defaultExcludeDate,
        defaultHideOutsideDates,
        defaultMonth
      )
    ).toStrictEqual(defaultSelectedDate);
  });

  it('returns current day', () => {
    expect(
      getDateInTabOrder(
        getMonthDays({
          month: new Date(),
          firstDayOfWeek: 1,
          consistentWeeks: false,
        }),
        defaultMinDate,
        defaultMaxDate,
        defaultControlProps,
        defaultExcludeDate,
        defaultHideOutsideDates,
        defaultMonth
      )
    ).toStrictEqual(
      new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    );
  });

  it('returns first non-disabled day in month', () => {
    expect(
      getDateInTabOrder(
        getMonthDays({
          month: new Date(2010, 1, 1),
          firstDayOfWeek: 1,
          consistentWeeks: false,
        }),
        defaultMinDate,
        defaultMaxDate,
        defaultControlProps,
        defaultExcludeDate,
        defaultHideOutsideDates,
        defaultMonth
      )
    ).toStrictEqual(new Date(2010, 1, 1));
    expect(
      getDateInTabOrder(
        defaultDates,
        new Date(2010, 5, 5),
        defaultMaxDate,
        defaultControlProps,
        defaultExcludeDate,
        defaultHideOutsideDates,
        defaultMonth
      )
    ).toStrictEqual(new Date(2010, 5, 5));
  });

  it('handles excluded date', () => {
    expect(
      getDateInTabOrder(
        getMonthDays({
          month: new Date(2010, 1, 1),
          firstDayOfWeek: 1,
          consistentWeeks: false,
        }),
        defaultMinDate,
        defaultMaxDate,
        defaultControlProps,
        (date) => dayjs(new Date(2010, 1, 1)).isSame(date, 'date'),
        defaultHideOutsideDates,
        defaultMonth
      )
    ).toStrictEqual(new Date(2010, 1, 2));
  });

  it('handles hidden outside dates', () => {
    expect(
      getDateInTabOrder(
        defaultDates,
        defaultMinDate,
        defaultMaxDate,
        defaultControlProps,
        defaultExcludeDate,
        defaultHideOutsideDates,
        defaultMonth
      )
    ).toStrictEqual(new Date(2010, 4, 31));

    expect(
      getDateInTabOrder(
        defaultDates,
        defaultMinDate,
        defaultMaxDate,
        defaultControlProps,
        defaultExcludeDate,
        true,
        defaultMonth
      )
    ).toStrictEqual(new Date(2010, 5, 1));
  });
});
