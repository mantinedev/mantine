import { toDateString } from '../to-date-string/to-date-string';
import { previousWeek } from './previous-week';

describe('@mantine/schedule/previous-week', () => {
  it('returns the start of previous week', () => {
    expect(previousWeek('2021-02-05', 1)).toBe(toDateString(new Date('2021-01-25')));
  });

  it('returns the start of previous week with first day of week 0', () => {
    expect(previousWeek('2021-02-05', 0)).toBe(toDateString(new Date('2021-01-24')));
  });
});
