import dayjs from 'dayjs';
import { getYearsData } from '../get-years-data/get-years-data';
import { getYearInTabOrder } from './get-year-in-tab-order';

const defaultYears = getYearsData('2010-01-01');
const defaultMinYear = '2000-01-01';
const defaultMaxYear = '2100-01-01';
const defaultSelectedYear = '2012-01-01';
const defaultControlProps = () => ({});

describe('@mantine/dates/get-year-in-tab-order', () => {
  it('returns selected year', () => {
    expect(
      getYearInTabOrder(defaultYears, defaultMinYear, defaultMaxYear, (date: string) => ({
        selected: dayjs(date).isSame(defaultSelectedYear, 'year'),
      }))
    ).toStrictEqual(defaultSelectedYear);
  });

  it('returns current year', () => {
    const currentYear = dayjs().startOf('year').format('YYYY-MM-DD');
    expect(
      getYearInTabOrder(
        getYearsData(currentYear),
        defaultMinYear,
        defaultMaxYear,
        defaultControlProps
      )
    ).toStrictEqual(currentYear);
  });

  it('returns first non-disabled year in decade', () => {
    expect(
      getYearInTabOrder(
        getYearsData('2010-01-01'),
        defaultMinYear,
        defaultMaxYear,
        defaultControlProps
      )
    ).toStrictEqual('2010-01-01');
    expect(
      getYearInTabOrder(defaultYears, '2015-01-01', defaultMaxYear, defaultControlProps)
    ).toStrictEqual('2015-01-01');
  });
});
