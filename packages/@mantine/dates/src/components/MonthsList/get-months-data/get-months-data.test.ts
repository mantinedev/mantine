import { getMonthsData } from './get-months-data';

describe('@mantine/dates/get-months-data', () => {
  it('returns correct months data based on year input', () => {
    expect(getMonthsData('2022-06-11')).toStrictEqual([
      ['2022-01-01', '2022-02-01', '2022-03-01'],
      ['2022-04-01', '2022-05-01', '2022-06-01'],
      ['2022-07-01', '2022-08-01', '2022-09-01'],
      ['2022-10-01', '2022-11-01', '2022-12-01'],
    ]);
  });
});
