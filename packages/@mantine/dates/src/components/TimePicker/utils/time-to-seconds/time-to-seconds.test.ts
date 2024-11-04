import { secondsToTime, timeToSeconds } from './time-to-seconds';

describe('@mantine/dates/time-to-seconds', () => {
  it('correctly converts time string to seconds', () => {
    expect(timeToSeconds('00:00:00')).toBe(0);
    expect(timeToSeconds('00:00:01')).toBe(1);
    expect(timeToSeconds('00:01:00')).toBe(60);
    expect(timeToSeconds('01:00:00')).toBe(3600);
    expect(timeToSeconds('01:01:01')).toBe(3661);
    expect(timeToSeconds('12:34:56')).toBe(45296);
  });

  it('correctly converts seconds to time string', () => {
    expect(secondsToTime(0)).toEqual({ timeString: '00:00:00', hours: 0, minutes: 0, seconds: 0 });
    expect(secondsToTime(1)).toEqual({ timeString: '00:00:01', hours: 0, minutes: 0, seconds: 1 });
    expect(secondsToTime(60)).toEqual({ timeString: '00:01:00', hours: 0, minutes: 1, seconds: 0 });
    expect(secondsToTime(3600)).toEqual({
      timeString: '01:00:00',
      hours: 1,
      minutes: 0,
      seconds: 0,
    });
    expect(secondsToTime(3661)).toEqual({
      timeString: '01:01:01',
      hours: 1,
      minutes: 1,
      seconds: 1,
    });
    expect(secondsToTime(45296)).toEqual({
      timeString: '12:34:56',
      hours: 12,
      minutes: 34,
      seconds: 56,
    });
  });
});
