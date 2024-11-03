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
});
