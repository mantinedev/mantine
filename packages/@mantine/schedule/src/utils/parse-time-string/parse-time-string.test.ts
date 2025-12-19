import { parseTimeString } from './parse-time-string';

describe('@mantine/schedule/parse-time-string', () => {
  it('parses time strings in HH:mm:ss format correctly', () => {
    expect(parseTimeString('00:00:00')).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    expect(parseTimeString('12:30:45')).toEqual({ hours: 12, minutes: 30, seconds: 45 });
    expect(parseTimeString('23:59:59')).toEqual({ hours: 23, minutes: 59, seconds: 59 });
    expect(parseTimeString('07:05:09')).toEqual({ hours: 7, minutes: 5, seconds: 9 });
  });

  it('parses time strings in HH:mm format correctly', () => {
    expect(parseTimeString('00:00')).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    expect(parseTimeString('12:30')).toEqual({ hours: 12, minutes: 30, seconds: 0 });
    expect(parseTimeString('23:59')).toEqual({ hours: 23, minutes: 59, seconds: 0 });
    expect(parseTimeString('07:05')).toEqual({ hours: 7, minutes: 5, seconds: 0 });
  });
});
