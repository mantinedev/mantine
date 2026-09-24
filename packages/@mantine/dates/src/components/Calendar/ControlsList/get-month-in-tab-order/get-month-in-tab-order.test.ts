import dayjs from 'dayjs';
import { getMonthsData } from '../get-months-data/get-months-data';
import { getMonthInTabOrder } from './get-month-in-tab-order';

const defaultMonths = getMonthsData('2010-01-01');
const defaultMinMonth = '2000-01-01';
const defaultMaxMonth = '2100-01-01';
const defaultSelectedMonth = '2010-06-01';
const defaultControlProps = () => ({});

describe('@mantine/dates/get-month-in-tab-order', () => {
  it('returns selected month', () => {
    expect(
      getMonthInTabOrder({
        months: defaultMonths,
        minDate: defaultMinMonth,
        maxDate: defaultMaxMonth,
        getMonthControlProps: (date: string) => ({
          selected: dayjs(date).isSame(defaultSelectedMonth, 'month'),
        }),
      })
    ).toStrictEqual(defaultSelectedMonth);
  });

  it('returns current month', () => {
    const currentMonth = dayjs().startOf('month').format('YYYY-MM-DD');
    expect(
      getMonthInTabOrder({
        months: getMonthsData(currentMonth),
        minDate: defaultMinMonth,
        maxDate: defaultMaxMonth,
        getMonthControlProps: defaultControlProps,
      })
    ).toStrictEqual(currentMonth);
  });

  it('returns first non-disabled month in year', () => {
    expect(
      getMonthInTabOrder({
        months: getMonthsData('2010-01-01'),
        minDate: defaultMinMonth,
        maxDate: defaultMaxMonth,
        getMonthControlProps: defaultControlProps,
      })
    ).toStrictEqual('2010-01-01');
    expect(
      getMonthInTabOrder({
        months: defaultMonths,
        minDate: '2010-06-01',
        maxDate: defaultMaxMonth,
        getMonthControlProps: defaultControlProps,
      })
    ).toStrictEqual('2010-06-01');
  });
});
