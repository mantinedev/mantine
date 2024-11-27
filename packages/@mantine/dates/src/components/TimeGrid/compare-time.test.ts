import { isTimeAfter, isTimeBefore } from './compare-time';

describe('@mantine/dates/is-time-after', () => {
  it('correctly checks if time is after another time', () => {
    expect(isTimeAfter('00:00:00', '00:00:00')).toBe(false);
    expect(isTimeAfter('00:00:00', '00:00:01')).toBe(false);
    expect(isTimeAfter('00:00:01', '00:00:00')).toBe(true);
    expect(isTimeAfter('00:01:00', '00:00:00')).toBe(true);
    expect(isTimeAfter('01:00:00', '00:00:00')).toBe(true);
    expect(isTimeAfter('01:00:00', '00:00:01')).toBe(true);
  });
});

describe('@mantine/dates/is-time-before', () => {
  it('correctly checks if time is before another time', () => {
    expect(isTimeBefore('00:00:00', '00:00:00')).toBe(false);
    expect(isTimeBefore('00:00:00', '00:00:01')).toBe(true);
    expect(isTimeBefore('00:00:01', '00:00:00')).toBe(false);
    expect(isTimeBefore('00:01:00', '00:00:00')).toBe(false);
    expect(isTimeBefore('01:00:00', '00:00:00')).toBe(false);
    expect(isTimeBefore('01:00:00', '00:00:01')).toBe(false);
  });
});
