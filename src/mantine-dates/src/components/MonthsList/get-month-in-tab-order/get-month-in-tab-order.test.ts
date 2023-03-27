import dayjs from 'dayjs';
import { getMonthsData } from '../get-months-data/get-months-data';
import { getMonthInTabOrder } from './get-month-in-tab-order';

const defaultMonths = getMonthsData(new Date(2010, 0));
const defaultMinMonth = new Date(2000, 0);
const defaultMaxMonth = new Date(2100, 0);
const defaultSelectedMonth = new Date(2010, 5);
const defaultControlProps = () => ({});

describe('@mantine/dates/get-month-in-tab-order', () => {
  it('returns selected month', () => {
    expect(
      getMonthInTabOrder(defaultMonths, defaultMinMonth, defaultMaxMonth, (date: Date) => ({
        selected: dayjs(date).isSame(defaultSelectedMonth, 'month'),
      }))
    ).toStrictEqual(defaultSelectedMonth);
  });

  it('returns current month', () => {
    expect(
      getMonthInTabOrder(
        getMonthsData(new Date()),
        defaultMinMonth,
        defaultMaxMonth,
        defaultControlProps
      )
    ).toStrictEqual(new Date(new Date().getFullYear(), new Date().getMonth()));
  });

  it('returns first non-disabled month in year', () => {
    expect(
      getMonthInTabOrder(
        getMonthsData(new Date(2010, 0)),
        defaultMinMonth,
        defaultMaxMonth,
        defaultControlProps
      )
    ).toStrictEqual(new Date(2010, 0));
    expect(
      getMonthInTabOrder(defaultMonths, new Date(2010, 5), defaultMaxMonth, defaultControlProps)
    ).toStrictEqual(new Date(2010, 5));
  });
});
