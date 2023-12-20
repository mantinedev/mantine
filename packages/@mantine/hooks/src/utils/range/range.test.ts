import { range } from './range';

describe('@mantine/hooks/range', () => {
  it('returns range between given numbers', () => {
    expect(range(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('allows generating reversed range', () => {
    expect(range(5, 1)).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
