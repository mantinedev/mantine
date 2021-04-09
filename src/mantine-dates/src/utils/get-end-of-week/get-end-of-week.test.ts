import { getEndOfWeek } from './get-end-of-week';

describe('@mantine/dates/get-end-of-week', () => {
  it('returns end of the week', () => {
    const endOfWeek = getEndOfWeek(new Date(2021, 1, 1));
    expect(endOfWeek.getDay()).toBe(0);
  });
});
