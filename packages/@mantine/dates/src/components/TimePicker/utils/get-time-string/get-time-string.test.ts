import { getTimeString } from './get-time-string';

describe('@mantine/dates/get-time-string', () => {
  it('returns valid: false if hours or minutes are null', () => {
    expect(
      getTimeString({
        hours: null,
        minutes: 10,
        seconds: 10,
        format: '24h',
        withSeconds: true,
        amPm: 'am',
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: false, value: '' });
    expect(
      getTimeString({
        hours: 10,
        minutes: null,
        seconds: 10,
        format: '24h',
        withSeconds: true,
        amPm: 'am',
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: false, value: '' });
  });

  it('returns valid: false if hours, minutes or seconds are not whole non-negative numbers', () => {
    const base = {
      hours: 10,
      minutes: 10,
      seconds: 10,
      withSeconds: true,
      amPm: 'am',
      amPmLabels: { am: 'am', pm: 'pm' },
    };
    for (const format of ['24h', '12h'] as const) {
      for (const invalid of [NaN, -1, Infinity, 9.5]) {
        expect(getTimeString({ ...base, format, hours: invalid })).toEqual({
          valid: false,
          value: '',
        });
        expect(getTimeString({ ...base, format, minutes: invalid })).toEqual({
          valid: false,
          value: '',
        });
        expect(getTimeString({ ...base, format, seconds: invalid })).toEqual({
          valid: false,
          value: '',
        });
      }
    }
  });

  it('returns valid: false if seconds are null and withSeconds is true', () => {
    expect(
      getTimeString({
        hours: 10,
        minutes: 10,
        seconds: null,
        format: '24h',
        withSeconds: true,
        amPm: 'am',
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: false, value: '' });
  });

  it('returns valid: true and time string if hours and minutes are not null', () => {
    expect(
      getTimeString({
        hours: 10,
        minutes: 10,
        seconds: null,
        format: '24h',
        withSeconds: true,
        amPm: 'am',
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: false, value: '' });
    expect(
      getTimeString({
        hours: 10,
        minutes: 10,
        seconds: 10,
        format: '24h',
        withSeconds: true,
        amPm: 'am',
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: true, value: '10:10:10' });
  });

  it('returns valid: false if amPm is null and format is 12h', () => {
    expect(
      getTimeString({
        hours: 10,
        minutes: 10,
        seconds: 10,
        format: '12h',
        withSeconds: true,
        amPm: null,
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: false, value: '' });
  });

  it('returns valid: true and time string if amPm is not null and format is 12h', () => {
    expect(
      getTimeString({
        hours: 10,
        minutes: 10,
        seconds: 10,
        format: '12h',
        withSeconds: true,
        amPm: 'am',
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: true, value: '10:10:10' });
    expect(
      getTimeString({
        hours: 10,
        minutes: 10,
        seconds: 10,
        format: '12h',
        withSeconds: false,
        amPm: 'am',
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: true, value: '10:10' });
    expect(
      getTimeString({
        hours: 10,
        minutes: 10,
        seconds: 10,
        format: '12h',
        withSeconds: true,
        amPm: 'pm',
        amPmLabels: { am: 'am', pm: 'pm' },
      })
    ).toEqual({ valid: true, value: '22:10:10' });
  });
});
