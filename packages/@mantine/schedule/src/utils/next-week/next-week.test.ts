import { toDateString } from '../to-date-string/to-date-string';
import { nextWeek } from './next-week';

describe('@mantine/schedule/next-week', () => {
  it('returns the start of next week', () => {
    expect(nextWeek('2021-02-05', 1)).toStrictEqual(toDateString('2021-02-08'));
  });

  it('returns the start of next week with first day of week 0', () => {
    expect(nextWeek('2021-02-05', 0)).toStrictEqual(toDateString('2021-02-07'));
  });
});
