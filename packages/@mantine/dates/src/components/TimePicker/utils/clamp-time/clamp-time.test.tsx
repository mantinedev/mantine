import { clampTime } from './clamp-time';

describe('@mantine/dates/clamp-time', () => {
  it('clamps time between min and max', () => {
    expect(clampTime('12:30:45', '10:00:00', '15:00:00')).toEqual({
      timeString: '12:30:45',
      hours: 12,
      minutes: 30,
      seconds: 45,
    });

    expect(clampTime('09:30:45', '10:00:00', '15:00:00')).toEqual({
      timeString: '10:00:00',
      hours: 10,
      minutes: 0,
      seconds: 0,
    });

    expect(clampTime('16:30:45', '10:00:00', '15:00:00')).toEqual({
      timeString: '15:00:00',
      hours: 15,
      minutes: 0,
      seconds: 0,
    });
  });

  it('handles undefined min value', () => {
    expect(clampTime('12:30:45', undefined, '15:00:00')).toEqual({
      timeString: '12:30:45',
      hours: 12,
      minutes: 30,
      seconds: 45,
    });

    expect(clampTime('16:30:45', undefined, '15:00:00')).toEqual({
      timeString: '15:00:00',
      hours: 15,
      minutes: 0,
      seconds: 0,
    });

    expect(clampTime('00:00:00', undefined, '15:00:00')).toEqual({
      timeString: '00:00:00',
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('handles undefined max value', () => {
    expect(clampTime('12:30:45', '10:00:00', undefined)).toEqual({
      timeString: '12:30:45',
      hours: 12,
      minutes: 30,
      seconds: 45,
    });

    expect(clampTime('09:30:45', '10:00:00', undefined)).toEqual({
      timeString: '10:00:00',
      hours: 10,
      minutes: 0,
      seconds: 0,
    });

    expect(clampTime('23:59:59', '10:00:00', undefined)).toEqual({
      timeString: '23:59:59',
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
  });

  it('handles both min and max as undefined', () => {
    expect(clampTime('12:30:45', undefined, undefined)).toEqual({
      timeString: '12:30:45',
      hours: 12,
      minutes: 30,
      seconds: 45,
    });

    expect(clampTime('00:00:00', undefined, undefined)).toEqual({
      timeString: '00:00:00',
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(clampTime('23:59:59', undefined, undefined)).toEqual({
      timeString: '23:59:59',
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
  });
});
