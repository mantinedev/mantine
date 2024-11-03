import { getMaxTime, getMinTime } from './get-min-max-time';

describe('@mantine/dates/get-min-max-time', () => {
  it('returns correct min time', () => {
    const minDate = new Date();
    minDate.setHours(0, 30, 0, 0);

    const value = new Date();
    value.setHours(0, 0, 0, 0);

    expect(getMinTime({ minDate, value })).toBe('00:30:00');
    expect(getMinTime({ minDate: undefined, value })).toBe(undefined);
  });

  it('returns correct max time', () => {
    const maxDate = new Date();
    maxDate.setHours(22, 30, 0, 0);

    const value = new Date();
    value.setHours(22, 0, 0, 0);

    expect(getMaxTime({ maxDate, value })).toBe('22:30:00');
    expect(getMaxTime({ maxDate: undefined, value })).toBe(undefined);
  });
});
