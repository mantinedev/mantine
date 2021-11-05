import { getStartOfWeek } from './get-start-of-week';

describe('@mantine/dates/get-start-of-week', () => {
  it('returns start of week', () => {
    const startOfWeek = getStartOfWeek(new Date(2021, 1, 5));
    expect(startOfWeek.getDay()).toBe(1);
  });
  it('returns start of week, first day of the week - sunday', () => {
    const startOfWeek = getStartOfWeek(new Date(2021, 1, 5), 'sunday');
    expect(startOfWeek.getDay()).toBe(0);
  });
});
