import { getDecadeRange } from './get-decade-range';

describe('@mantine/dates/get-decades-range', () => {
  it('returns correct range based on given date', () => {
    expect(getDecadeRange('2022-01-01')).toStrictEqual(['2020-01-01', '2029-01-01']);
    expect(getDecadeRange('2011-01-01')).toStrictEqual(['2010-01-01', '2019-01-01']);
  });
});
