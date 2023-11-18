import dayjs from 'dayjs';
import { getYearsData } from '../get-years-data/get-years-data';
import { getYearInTabOrder } from './get-year-in-tab-order';

const defaultYears = getYearsData(new Date(2010, 0));
const defaultMinYear = new Date(2000, 0);
const defaultMaxYear = new Date(2100, 0);
const defaultSelectedYear = new Date(2012, 0);
const defaultControlProps = () => ({});

describe('@mantine/dates/get-year-in-tab-order', () => {
  it('returns selected year', () => {
    expect(
      getYearInTabOrder(defaultYears, defaultMinYear, defaultMaxYear, (date: Date) => ({
        selected: dayjs(date).isSame(defaultSelectedYear, 'year'),
      }))
    ).toStrictEqual(defaultSelectedYear);
  });

  it('returns current year', () => {
    expect(
      getYearInTabOrder(
        getYearsData(new Date()),
        defaultMinYear,
        defaultMaxYear,
        defaultControlProps
      )
    ).toStrictEqual(new Date(new Date().getFullYear(), 0));
  });

  it('returns first non-disabled year in decade', () => {
    expect(
      getYearInTabOrder(
        getYearsData(new Date(2010, 0)),
        defaultMinYear,
        defaultMaxYear,
        defaultControlProps
      )
    ).toStrictEqual(new Date(2010, 0));
    expect(
      getYearInTabOrder(defaultYears, new Date(2015, 0), defaultMaxYear, defaultControlProps)
    ).toStrictEqual(new Date(2015, 0));
  });
});
