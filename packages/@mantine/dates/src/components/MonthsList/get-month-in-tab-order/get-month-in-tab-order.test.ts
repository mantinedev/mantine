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
      getMonthInTabOrder(defaultMonths, defaultMinMonth, defaultMaxMonth, (date: string) => ({
        selected: dayjs(date).isSame(defaultSelectedMonth, 'month'),
      }))
    ).toStrictEqual(defaultSelectedMonth);
  });

  it('returns current month', () => {
    const currentMonth = dayjs().startOf('month').format('YYYY-MM-DD');
    expect(
      getMonthInTabOrder(
        getMonthsData(currentMonth),
        defaultMinMonth,
        defaultMaxMonth,
        defaultControlProps
      )
    ).toStrictEqual(currentMonth);
  });

  it('returns first non-disabled month in year', () => {
    expect(
      getMonthInTabOrder(
        getMonthsData('2010-01-01'),
        defaultMinMonth,
        defaultMaxMonth,
        defaultControlProps
      )
    ).toStrictEqual('2010-01-01');
    expect(
      getMonthInTabOrder(defaultMonths, '2010-06-01', defaultMaxMonth, defaultControlProps)
    ).toStrictEqual('2010-06-01');
  });
});
