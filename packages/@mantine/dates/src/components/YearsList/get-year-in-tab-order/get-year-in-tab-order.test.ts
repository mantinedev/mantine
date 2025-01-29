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
      getYearInTabOrder({
        years: defaultYears,
        minDate: defaultMinYear,
        maxDate: defaultMaxYear,
        getYearControlProps: (date: string) => ({
          selected: dayjs(date).isSame(defaultSelectedYear, 'year'),
        }),
      })
    ).toStrictEqual(defaultSelectedYear);
  });

  it('returns current year', () => {
    const currentYear = dayjs().startOf('year').format('YYYY-MM-DD');
    expect(
      getYearInTabOrder({
        years: getYearsData(currentYear),
        minDate: defaultMinYear,
        maxDate: defaultMaxYear,
        getYearControlProps: defaultControlProps,
      })
    ).toStrictEqual(currentYear);
  });

  it('returns first non-disabled year in decade', () => {
    expect(
      getYearInTabOrder({
        years: getYearsData('2010-01-01'),
        minDate: defaultMinYear,
        maxDate: defaultMaxYear,
        getYearControlProps: defaultControlProps,
      })
    ).toStrictEqual('2010-01-01');
    expect(
      getYearInTabOrder({
        years: defaultYears,
        minDate: '2015-01-01',
        maxDate: defaultMaxYear,
        getYearControlProps: defaultControlProps,
      })
    ).toStrictEqual('2015-01-01');
  });
});
