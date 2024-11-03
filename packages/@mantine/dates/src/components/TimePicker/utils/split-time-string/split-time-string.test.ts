import { splitTimeString } from './split-time-string';

describe('@mantine/dates/split-time-string', () => {
  it('splits time string into hours, minutes and seconds', () => {
    expect(splitTimeString('12:30:45')).toEqual({ hours: 12, minutes: 30, seconds: 45 });
    expect(splitTimeString('12:30')).toEqual({ hours: 12, minutes: 30, seconds: null });
    expect(splitTimeString('12')).toEqual({ hours: 12, minutes: null, seconds: null });
  });
});
