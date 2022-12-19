import { getMonthsData } from './get-months-data';

describe('@mantine/dates/get-months-data', () => {
  it('returns correct months data based on year input', () => {
    expect(getMonthsData(new Date(2022, 5, 11))).toStrictEqual([
      [new Date(2022, 0, 1), new Date(2022, 1, 1), new Date(2022, 2, 1)],
      [new Date(2022, 3, 1), new Date(2022, 4, 1), new Date(2022, 5, 1)],
      [new Date(2022, 6, 1), new Date(2022, 7, 1), new Date(2022, 8, 1)],
      [new Date(2022, 9, 1), new Date(2022, 10, 1), new Date(2022, 11, 1)],
    ]);
  });
});
