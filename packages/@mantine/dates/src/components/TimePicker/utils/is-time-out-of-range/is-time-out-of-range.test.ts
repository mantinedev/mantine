import { isTimeOutOfRange } from './is-time-out-of-range';

const base = { minutes: null, seconds: null, withSeconds: false };

describe('@mantine/dates/is-time-out-of-range', () => {
  it('returns false when neither min nor max is set', () => {
    expect(isTimeOutOfRange({ ...base, hours: 3, min: undefined, max: undefined })).toBe(false);
  });

  it('checks the whole hour when minutes are not set', () => {
    const range = { min: '12:30', max: '18:00' };
    expect(isTimeOutOfRange({ ...base, ...range, hours: 11 })).toBe(true);
    expect(isTimeOutOfRange({ ...base, ...range, hours: 12 })).toBe(false);
    expect(isTimeOutOfRange({ ...base, ...range, hours: 18 })).toBe(false);
    expect(isTimeOutOfRange({ ...base, ...range, hours: 19 })).toBe(true);
  });

  it('checks the given minute', () => {
    const range = { min: '12:30', max: '18:00' };
    expect(isTimeOutOfRange({ ...base, ...range, hours: 12, minutes: 29 })).toBe(true);
    expect(isTimeOutOfRange({ ...base, ...range, hours: 12, minutes: 30 })).toBe(false);
    expect(isTimeOutOfRange({ ...base, ...range, hours: 18, minutes: 1 })).toBe(true);
  });

  it('rounds min and max to whole minutes without seconds', () => {
    const range = { min: '12:00:30', max: undefined };
    expect(isTimeOutOfRange({ ...base, ...range, hours: 12, minutes: 0 })).toBe(true);
    expect(isTimeOutOfRange({ ...base, ...range, hours: 12, minutes: 0, withSeconds: true })).toBe(
      false
    );
    expect(
      isTimeOutOfRange({ ...range, hours: 12, minutes: 0, seconds: 29, withSeconds: true })
    ).toBe(true);
  });
});
