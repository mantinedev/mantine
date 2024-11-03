import { padTime } from './pad-time';

describe('@mantine/dates/pad-time', () => {
  it('pads time with 0 if value is less than 10', () => {
    expect(padTime(0)).toBe('00');
    expect(padTime(1)).toBe('01');
    expect(padTime(9)).toBe('09');
    expect(padTime(10)).toBe('10');
    expect(padTime(23)).toBe('23');
  });
});
