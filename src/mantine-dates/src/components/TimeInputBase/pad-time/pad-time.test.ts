import { padTime } from './pad-time';

describe('@mantine/dates/pad-time', () => {
  it('correctly pads time', () => {
    expect(padTime('20')).toBe('20');
    expect(padTime('59')).toBe('59');
    expect(padTime('1')).toBe('01');
    expect(padTime('0')).toBe('00');
    expect(padTime('10')).toBe('10');
  });
});
