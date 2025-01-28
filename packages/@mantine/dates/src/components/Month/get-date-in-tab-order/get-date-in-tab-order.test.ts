import dayjs from 'dayjs';
import { getMonthDays } from '../get-month-days/get-month-days';
import { getDateInTabOrder } from './get-date-in-tab-order';

const defaultDates = getMonthDays({
  month: '2010-06-01',
  firstDayOfWeek: 1,
  consistentWeeks: false,
});
const defaultMinDate = '2000-01-01';
const defaultMaxDate = '2100-01-01';
const defaultSelectedDate = '2010-06-05';
const defaultControlProps = () => ({});
const defaultExcludeDate = () => false;
const defaultHideOutsideDates = false;
const defaultMonth = '2010-06-01';

describe('@mantine/dates/get-date-in-tab-order', () => {
  it('returns selected date', () => {
    expect(
      getDateInTabOrder({
        dates: defaultDates,
        minDate: defaultMinDate,
        maxDate: defaultMaxDate,
        getDayProps: (date) => ({
          selected: dayjs(date).isSame(defaultSelectedDate, 'date'),
        }),
        excludeDate: defaultExcludeDate,
        hideOutsideDates: defaultHideOutsideDates,
        month: defaultMonth,
      })
    ).toStrictEqual(defaultSelectedDate);
  });

  it('returns current day', () => {
    expect(
      getDateInTabOrder({
        dates: getMonthDays({
          month: new Date().toISOString().split('T')[0],
          firstDayOfWeek: 1,
          consistentWeeks: false,
        }),
        minDate: defaultMinDate,
        maxDate: defaultMaxDate,
        getDayProps: defaultControlProps,
        excludeDate: defaultExcludeDate,
        hideOutsideDates: defaultHideOutsideDates,
        month: defaultMonth,
      })
    ).toStrictEqual(new Date().toISOString().split('T')[0]);
  });

  it('returns first non-disabled day in month', () => {
    expect(
      getDateInTabOrder({
        dates: getMonthDays({
          month: '2010-02-01',
          firstDayOfWeek: 1,
          consistentWeeks: false,
        }),
        minDate: defaultMinDate,
        maxDate: defaultMaxDate,
        getDayProps: defaultControlProps,
        excludeDate: defaultExcludeDate,
        hideOutsideDates: defaultHideOutsideDates,
        month: defaultMonth,
      })
    ).toStrictEqual('2010-02-01');
    expect(
      getDateInTabOrder({
        dates: defaultDates,
        minDate: '2010-06-05',
        maxDate: defaultMaxDate,
        getDayProps: defaultControlProps,
        excludeDate: defaultExcludeDate,
        hideOutsideDates: defaultHideOutsideDates,
        month: defaultMonth,
      })
    ).toStrictEqual('2010-06-05');
  });

  it('handles excluded date', () => {
    expect(
      getDateInTabOrder({
        dates: getMonthDays({
          month: '2010-02-01',
          firstDayOfWeek: 1,
          consistentWeeks: false,
        }),
        minDate: defaultMinDate,
        maxDate: defaultMaxDate,
        getDayProps: defaultControlProps,
        excludeDate: (date) => dayjs('2010-02-01').isSame(date, 'date'),
        hideOutsideDates: defaultHideOutsideDates,
        month: defaultMonth,
      })
    ).toStrictEqual('2010-02-02');
  });

  it('handles hidden outside dates', () => {
    expect(
      getDateInTabOrder({
        dates: defaultDates,
        minDate: defaultMinDate,
        maxDate: defaultMaxDate,
        getDayProps: defaultControlProps,
        excludeDate: defaultExcludeDate,
        hideOutsideDates: defaultHideOutsideDates,
        month: defaultMonth,
      })
    ).toStrictEqual('2010-05-31');

    expect(
      getDateInTabOrder({
        dates: defaultDates,
        minDate: defaultMinDate,
        maxDate: defaultMaxDate,
        getDayProps: defaultControlProps,
        excludeDate: defaultExcludeDate,
        hideOutsideDates: true,
        month: defaultMonth,
      })
    ).toStrictEqual('2010-06-01');
  });
});
