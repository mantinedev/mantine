import { isSameTime } from './is-same-time';

describe('@mantine/dates/is-same-time', () => {
  it('returns true if times are equal', () => {
    expect(isSameTime({ time: '12:34:55', compare: '12:34:55', withSeconds: true })).toBe(true);
    expect(isSameTime({ time: '12:34:55', compare: '12:34:55', withSeconds: false })).toBe(true);
  });

  it('returns false if times are not equal', () => {
    expect(isSameTime({ time: '12:34:55', compare: '12:34:56', withSeconds: true })).toBe(false);
    expect(isSameTime({ time: '12:34:55', compare: '12:35:55', withSeconds: true })).toBe(false);
    expect(isSameTime({ time: '12:34:55', compare: '13:34:55', withSeconds: true })).toBe(false);
    expect(isSameTime({ time: '12:34:55', compare: '12:34:56', withSeconds: false })).toBe(true);
    expect(isSameTime({ time: '12:34:55', compare: '12:35:55', withSeconds: false })).toBe(false);
    expect(isSameTime({ time: '12:34:55', compare: '13:34:55', withSeconds: false })).toBe(false);
  });
});
