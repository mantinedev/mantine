import { getYearsRange } from './get-years-range';

describe('@mantine/dates/get-years-range', () => {
  it('returns correct years range', () => {
    expect(getYearsRange({ from: 2000, to: 2010 })).toStrictEqual([
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
    ]);
  });
});
